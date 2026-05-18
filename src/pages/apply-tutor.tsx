import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Helmet } from "react-helmet-async";
import { SITE_NAME, SITE_URL, OG_IMAGE } from "@/lib/site-config";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_svxvaug";
const EMAILJS_TEMPLATE_ID = "template_6w99epr";
const EMAILJS_PUBLIC_KEY = "yJhYmZW7IbcPE4MQ8";
const RECIPIENT_EMAIL = "globalbridge.learning.ca@gmail.com";

const CreateTutorApplicationBody = z.object({
  fullName: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional().default(""),
  country: z.string().min(1),
  city: z.string().optional().default(""),
  institution: z.string().optional().default(""),
  educationLevel: z.enum(["high_school", "undergraduate", "graduate", "professional", "other"]),
  subjects: z.array(z.string()).min(1),
  availabilityHoursPerWeek: z.number().min(1).max(40),
  languages: z.array(z.string()).min(1),
  priorExperience: z.string().optional().default(""),
  motivation: z.string().min(1),
  agreeToCodeOfConduct: z.boolean(),
});

type TutorApplicationInput = z.infer<typeof CreateTutorApplicationBody>;

const EDUCATION_LEVEL_LABELS: Record<string, string> = {
  high_school: "High School",
  undergraduate: "Undergraduate",
  graduate: "Graduate",
  professional: "Professional",
  other: "Other",
};

const SUBJECT_LABELS: Record<string, string> = {
  english: "English",
  mathematics: "Mathematics",
  science: "Science",
  public_speaking: "Public Speaking",
};

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, GraduationCap, Clock, Globe2, BookOpen } from "lucide-react";

export default function ApplyTutor() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<TutorApplicationInput>({
    resolver: zodResolver(CreateTutorApplicationBody),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      institution: "",
      educationLevel: "undergraduate",
      subjects: [],
      availabilityHoursPerWeek: 2,
      languages: [""],
      priorExperience: "",
      motivation: "",
      agreeToCodeOfConduct: false,
    },
  });

  async function onSubmit(data: TutorApplicationInput) {
    let processedLanguages = data.languages;
    if (data.languages.length === 1 && data.languages[0].includes(",")) {
      processedLanguages = data.languages[0].split(",").map((l) => l.trim()).filter((l) => l.length > 0);
    }
    if (processedLanguages.length === 0 || processedLanguages[0] === "") {
      processedLanguages = ["English"];
    }

    setIsSubmitting(true);
    try {
      const subjectsList = (data.subjects ?? []).map((s) => SUBJECT_LABELS[s] ?? s).join(", ") || "(none selected)";
      const languagesList = processedLanguages.join(", ");
      const hoursPerWeek = Number(data.availabilityHoursPerWeek);

      const messageBody = [
        `New volunteer tutor application from the Global Bridge website.`,
        ``,
        `--- Personal Information ---`,
        `Full Name: ${data.fullName}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || "(not provided)"}`,
        `Country: ${data.country}`,
        `City: ${data.city || "(not provided)"}`,
        ``,
        `--- Academic Background ---`,
        `Education Level: ${EDUCATION_LEVEL_LABELS[data.educationLevel] ?? data.educationLevel}`,
        `Institution: ${data.institution || "(not provided)"}`,
        ``,
        `--- Tutoring Preferences ---`,
        `Subjects: ${subjectsList}`,
        `Hours Available per Week: ${hoursPerWeek}`,
        `Languages Spoken: ${languagesList}`,
        ``,
        `--- Experience & Motivation ---`,
        `Prior Experience: ${data.priorExperience || "(none provided)"}`,
        `Motivation: ${data.motivation}`,
        ``,
        `--- Agreement ---`,
        `Agreed to Code of Conduct: ${data.agreeToCodeOfConduct ? "Yes" : "No"}`,
      ].join("\n");

      const templateParams: Record<string, string> = {
        to_email: RECIPIENT_EMAIL,
        from_name: data.fullName,
        from_email: data.email,
        reply_to: data.email,
        subject: `New Tutor Application: ${data.fullName} (${data.country})`,
        message: messageBody,
        full_name: data.fullName,
        email: data.email,
        phone: data.phone || "",
        country: data.country,
        city: data.city || "",
        education_level: EDUCATION_LEVEL_LABELS[data.educationLevel] ?? data.educationLevel,
        institution: data.institution || "",
        subjects: subjectsList,
        hours_per_week: String(hoursPerWeek),
        languages: languagesList,
        prior_experience: data.priorExperience || "",
        motivation: data.motivation,
        agree_to_code_of_conduct: data.agreeToCodeOfConduct ? "Yes" : "No",
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, { publicKey: EMAILJS_PUBLIC_KEY });

      setSubmitted(true);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      toast({
        title: "Error submitting application",
        description: "We couldn't send your application. Please check your connection and try again, or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const subjects = [
    { id: "english", label: "English" },
    { id: "mathematics", label: "Mathematics" },
    { id: "science", label: "Science" },
    { id: "public_speaking", label: "Public Speaking" },
  ];

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-24 max-w-2xl text-center">
        <Helmet><title>Application Received | Global Bridge Learning Initiative</title></Helmet>
        <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-bold font-serif mb-4">Application Received!</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Thank you for volunteering to share your knowledge. Your application has been emailed to our team and we'll be in touch soon.
        </p>
        <div>
          <Button onClick={() => setLocation("/")}>Return to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Become a Tutor | Global Bridge Learning Initiative</title>
        <meta name="description" content="Apply to become a volunteer tutor and mentor students around the world." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content="Become a Tutor | Global Bridge Learning Initiative" />
        <meta property="og:description" content="Apply to become a volunteer tutor and mentor students around the world." />
        <meta property="og:url" content={`${SITE_URL}/apply/tutor`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Global Bridge Learning Initiative" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Become a Tutor | Global Bridge Learning Initiative" />
        <meta name="twitter:description" content="Apply to become a volunteer tutor and mentor students around the world." />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <div className="relative isolate overflow-hidden hero-gradient hero-grid pt-24 md:pt-32 pb-20 md:pb-24 border-b border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Volunteer with us</span>
          <h1 className="text-5xl md:text-6xl font-bold font-serif mt-4 mb-6 tracking-tight text-balance">Become a <span className="text-primary">Volunteer Tutor.</span></h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Share your knowledge, build international connections, and empower the next generation of learners.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h2 className="text-2xl font-bold font-serif mb-6">Why Tutor With Us?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary-foreground shrink-0"><Globe2 className="w-5 h-5" /></div>
                  <div><h3 className="font-semibold text-lg">Global Impact</h3><p className="text-muted-foreground text-sm mt-1">Connect with students from different cultures and backgrounds worldwide.</p></div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"><Clock className="w-5 h-5" /></div>
                  <div><h3 className="font-semibold text-lg">Flexible Schedule</h3><p className="text-muted-foreground text-sm mt-1">Commit as little as 2 hours a week. Set your own hours and availability.</p></div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground shrink-0"><GraduationCap className="w-5 h-5" /></div>
                  <div><h3 className="font-semibold text-lg">Build Experience</h3><p className="text-muted-foreground text-sm mt-1">Gain valuable teaching, leadership, and cross-cultural communication skills.</p></div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground shrink-0"><BookOpen className="w-5 h-5" /></div>
                  <div><h3 className="font-semibold text-lg">Full Support</h3><p className="text-muted-foreground text-sm mt-1">We provide curriculum guides, training, and a supportive community of fellow tutors.</p></div>
                </div>
              </div>
            </div>
            <Card className="bg-card">
              <CardHeader><CardTitle className="text-lg">Requirements</CardTitle></CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>• Minimum 16 years of age</p>
                <p>• Strong proficiency in subjects you wish to teach</p>
                <p>• Reliable internet connection and webcam</p>
                <p>• Commitment of at least 2 hours per week for 3 months</p>
                <p>• Completion of our safeguarding training</p>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Tutor Application</CardTitle>
                <CardDescription>Please fill out all fields below. We review applications on a rolling basis.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold border-b pb-2">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField control={form.control} name="fullName" render={({ field }) => (
                          <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="Jane Doe" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input type="email" placeholder="jane@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="phone" render={({ field }) => (
                          <FormItem><FormLabel>Phone Number (Optional)</FormLabel><FormControl><Input placeholder="+1 (555) 000-0000" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField control={form.control} name="country" render={({ field }) => (
                          <FormItem><FormLabel>Country of Residence</FormLabel><FormControl><Input placeholder="Canada" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="city" render={({ field }) => (
                          <FormItem><FormLabel>City (Optional)</FormLabel><FormControl><Input placeholder="Toronto" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold border-b pb-2">Academic Background</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField control={form.control} name="educationLevel" render={({ field }) => (
                          <FormItem><FormLabel>Current Education Level</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl><SelectTrigger><SelectValue placeholder="Select level" /></SelectTrigger></FormControl>
                              <SelectContent>
                                <SelectItem value="high_school">High School</SelectItem>
                                <SelectItem value="undergraduate">Undergraduate</SelectItem>
                                <SelectItem value="graduate">Graduate</SelectItem>
                                <SelectItem value="professional">Professional</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="institution" render={({ field }) => (
                          <FormItem><FormLabel>Institution / University (Optional)</FormLabel><FormControl><Input placeholder="University of Toronto" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold border-b pb-2">Tutoring Preferences</h3>
                      <FormField control={form.control} name="subjects" render={() => (
                        <FormItem>
                          <div className="mb-4"><FormLabel className="text-base">Subjects you can teach</FormLabel><FormDescription>Select at least one subject.</FormDescription></div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {subjects.map((subject) => (
                              <FormField key={subject.id} control={form.control} name="subjects" render={({ field }) => (
                                <FormItem key={subject.id} className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm hover:border-primary/50 transition-colors">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(subject.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, subject.id])
                                          : field.onChange(field.value?.filter((value) => value !== subject.id))
                                      }}
                                    />
                                  </FormControl>
                                  <div className="space-y-1 leading-none w-full"><FormLabel className="font-normal cursor-pointer">{subject.label}</FormLabel></div>
                                </FormItem>
                              )} />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField control={form.control} name="availabilityHoursPerWeek" render={({ field }) => (
                          <FormItem><FormLabel>Hours available per week</FormLabel>
                            <FormControl>
                              <Input type="number" inputMode="numeric" min={1} max={40} step={1}
                                name={field.name} ref={field.ref} onBlur={field.onBlur}
                                value={field.value ?? ""}
                                onChange={(e) => {
                                  const raw = e.target.value;
                                  if (raw === "") { field.onChange(undefined); return; }
                                  const parsed = Number.parseInt(raw, 10);
                                  field.onChange(Number.isNaN(parsed) ? undefined : parsed);
                                }}
                              />
                            </FormControl>
                            <FormDescription>Minimum 2 hours recommended.</FormDescription><FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="languages" render={({ field }) => (
                          <FormItem><FormLabel>Languages Spoken</FormLabel>
                            <FormControl>
                              <Input placeholder="English, French, Arabic..." value={field.value[0] || ""} onChange={(e) => field.onChange([e.target.value])} />
                            </FormControl>
                            <FormDescription>Comma separated.</FormDescription><FormMessage />
                          </FormItem>
                        )} />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold border-b pb-2">Experience & Motivation</h3>
                      <FormField control={form.control} name="priorExperience" render={({ field }) => (
                        <FormItem><FormLabel>Prior Teaching/Tutoring Experience (Optional)</FormLabel><FormControl><Textarea placeholder="Tell us about any relevant experience..." className="min-h-[100px] resize-y" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name="motivation" render={({ field }) => (
                        <FormItem><FormLabel>Why do you want to tutor with Global Bridge?</FormLabel><FormControl><Textarea placeholder="Share your motivation for joining our mission..." className="min-h-[120px] resize-y" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                    </div>

                    <div className="pt-4">
                      <FormField control={form.control} name="agreeToCodeOfConduct" render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-muted/50">
                          <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>I agree to the Global Bridge Volunteer Code of Conduct</FormLabel>
                            <FormDescription>By checking this box, I confirm all information is accurate and I agree to abide by the organization's safeguarding and professional conduct policies.</FormDescription>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <Button type="submit" size="lg" className="w-full h-14 text-base" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting Application..." : "Submit Application"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
