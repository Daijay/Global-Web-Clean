import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Helmet } from "react-helmet-async";
import { SITE_NAME, SITE_URL, OG_IMAGE } from "@/lib/site-config";
import { useLocation } from "wouter";
import {
  CreateStudentApplicationBody
} from "@workspace/api-zod";
import type { StudentApplicationInput } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_svxvaug";
const EMAILJS_TEMPLATE_ID = "template_dx6xzkq";
const EMAILJS_PUBLIC_KEY = "yJhYmZW7IbcPE4MQ8";
const RECIPIENT_EMAIL = "globalbridge.learning.ca@gmail.com";

const GRADE_LEVEL_LABELS: Record<string, string> = {
  elementary: "Elementary School",
  middle_school: "Middle School",
  high_school: "High School",
  post_secondary: "Post-Secondary",
  adult_learner: "Adult Learner",
};

const BACKGROUND_LABELS: Record<string, string> = {
  newcomer: "Newcomer / Recent Immigrant",
  refugee: "Refugee / Asylum Seeker",
  low_income: "Low-Income Household",
  general: "General Applicant",
  prefer_not_to_say: "Prefer Not to Say",
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
import { CheckCircle2, Sparkles, Target, Users, BookOpen } from "lucide-react";

export default function ApplyStudent() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<StudentApplicationInput>({
    resolver: zodResolver(CreateStudentApplicationBody),
    defaultValues: {
      studentName: "",
      parentName: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      gradeLevel: "high_school",
      subjects: [],
      primaryLanguage: "",
      learningGoals: "",
      accessibilityNeeds: "",
      background: "general",
      consent: false,
    },
  });

  async function onSubmit(data: StudentApplicationInput) {
    setIsSubmitting(true);
    try {
      const subjectsList = (data.subjects ?? [])
        .map((s) => SUBJECT_LABELS[s] ?? s)
        .join(", ") || "(none selected)";

      const messageBody = [
        `New Student / Find a Tutor application from the Global Bridge website.`,
        ``,
        `--- Student Information ---`,
        `Student Name: ${data.studentName}`,
        `Parent/Guardian Name: ${data.parentName || "(not provided)"}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || "(not provided)"}`,
        `Country: ${data.country}`,
        `City: ${data.city || "(not provided)"}`,
        ``,
        `--- Academic Needs ---`,
        `Grade Level: ${GRADE_LEVEL_LABELS[data.gradeLevel] ?? data.gradeLevel}`,
        `Primary Language: ${data.primaryLanguage}`,
        `Subjects: ${subjectsList}`,
        `Learning Goals: ${data.learningGoals}`,
        `Accessibility Needs: ${data.accessibilityNeeds || "(none provided)"}`,
        ``,
        `--- Background ---`,
        `Background: ${BACKGROUND_LABELS[data.background] ?? data.background}`,
        `Consent Given: ${data.consent ? "Yes" : "No"}`,
      ].join("\n");

      const templateParams: Record<string, string> = {
        to_email: RECIPIENT_EMAIL,
        from_name: data.studentName,
        from_email: data.email,
        reply_to: data.email,
        subject: `New Tutor Request: ${data.studentName} (${data.country})`,
        message: messageBody,
        student_name: data.studentName,
        parent_name: data.parentName || "",
        email: data.email,
        phone: data.phone || "",
        country: data.country,
        city: data.city || "",
        grade_level: GRADE_LEVEL_LABELS[data.gradeLevel] ?? data.gradeLevel,
        primary_language: data.primaryLanguage,
        subjects: subjectsList,
        learning_goals: data.learningGoals,
        accessibility_needs: data.accessibilityNeeds || "",
        background: BACKGROUND_LABELS[data.background] ?? data.background,
        consent: data.consent ? "Yes" : "No",
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );

      setSubmitted(true);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      toast({
        title: "Error submitting application",
        description:
          "We couldn't send your application. Please check your connection and try again, or email us directly.",
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
          Thank you for reaching out. Your application has been emailed to our team and we'll match you with a tutor shortly. Please keep an eye on your inbox for a follow-up from us.
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
        <title>Find a Free Tutor | Global Bridge Learning Initiative</title>
        <meta name="description" content="Apply for free online tutoring and mentorship from Global Bridge Learning Initiative." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content="Find a Free Tutor | Global Bridge Learning Initiative" />
        <meta property="og:description" content="Apply for free online tutoring and mentorship from Global Bridge Learning Initiative." />
        <meta property="og:url" content={`${SITE_URL}/apply/student`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Global Bridge Learning Initiative" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Find a Free Tutor | Global Bridge Learning Initiative" />
        <meta name="twitter:description" content="Apply for free online tutoring and mentorship from Global Bridge Learning Initiative." />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Helmet>

      <div className="relative isolate overflow-hidden hero-gradient hero-grid pt-24 md:pt-32 pb-20 md:pb-24 border-b border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">For students &amp; families</span>
          <h1 className="text-5xl md:text-6xl font-bold font-serif mt-4 mb-6 tracking-tight text-balance">Find a <span className="text-primary">Free Tutor.</span></h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Get class-based academic support from dedicated volunteer mentors worldwide.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h2 className="text-2xl font-bold font-serif mb-6">Why Choose Us?</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Personalized Learning</h3>
                    <p className="text-muted-foreground text-sm mt-1">Our tutors adapt to your pace and learning style for maximum understanding.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary-foreground shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">100% Free</h3>
                    <p className="text-muted-foreground text-sm mt-1">Quality education should be accessible to all. We never charge for our services.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Caring Mentors</h3>
                    <p className="text-muted-foreground text-sm mt-1">Beyond academics, our tutors serve as positive role models and guides.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Core Subjects</h3>
                    <p className="text-muted-foreground text-sm mt-1">Focus on essential skills in English, Math, Sciences, and Public Speaking.</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-lg">Eligibility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>• Open to students of all backgrounds, anywhere in the world.</p>
                <p>• Must have access to an internet-connected device (smartphone, tablet, or computer).</p>
                <p>• Commitment to attend scheduled sessions regularly.</p>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Student Application</CardTitle>
                <CardDescription>
                  Parents or guardians can fill this out on behalf of younger students.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold border-b pb-2">Student Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="studentName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Student's Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Alex Smith" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="parentName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Parent/Guardian Name (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="Sarah Smith" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Contact Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="contact@example.com" {...field} />
                              </FormControl>
                              <FormDescription>We will send matching details here.</FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="+1 (555) 000-0000" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Country of Residence</FormLabel>
                              <FormControl>
                                <Input placeholder="Canada" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>City (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="Toronto" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold border-b pb-2">Academic Needs</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="gradeLevel"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Current Grade Level</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select level" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="elementary">Elementary School</SelectItem>
                                  <SelectItem value="middle_school">Middle School</SelectItem>
                                  <SelectItem value="high_school">High School</SelectItem>
                                  <SelectItem value="post_secondary">Post-Secondary</SelectItem>
                                  <SelectItem value="adult_learner">Adult Learner</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="primaryLanguage"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Primary Language Spoken at Home</FormLabel>
                              <FormControl>
                                <Input placeholder="English, Arabic, Spanish..." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="subjects"
                        render={() => (
                          <FormItem>
                            <div className="mb-4">
                              <FormLabel className="text-base">Subjects needed</FormLabel>
                              <FormDescription>Select the subjects where you need the most help.</FormDescription>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {subjects.map((subject) => (
                                <FormField
                                  key={subject.id}
                                  control={form.control}
                                  name="subjects"
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={subject.id}
                                        className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm hover:border-primary/50 transition-colors"
                                      >
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes(subject.id as any)}
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([...field.value, subject.id])
                                                : field.onChange(
                                                    field.value?.filter(
                                                      (value) => value !== subject.id
                                                    )
                                                  )
                                            }}
                                          />
                                        </FormControl>
                                        <div className="space-y-1 leading-none w-full">
                                          <FormLabel className="font-normal cursor-pointer">
                                            {subject.label}
                                          </FormLabel>
                                        </div>
                                      </FormItem>
                                    )
                                  }}
                                />
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="learningGoals"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>What are your main learning goals?</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="E.g., Improve reading comprehension, prepare for a math test, practice speaking English..." 
                                className="min-h-[100px] resize-y"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="accessibilityNeeds"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Any accessibility needs or accommodations? (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Let us know how we can best support your learning..." 
                                className="min-h-[80px] resize-y"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold border-b pb-2">Background Information</h3>
                      <p className="text-sm text-muted-foreground">We prioritize serving specific communities, but we do not require proof. This information helps us match you with the best resources.</p>
                      
                      <FormField
                          control={form.control}
                          name="background"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Student Background / Circumstances</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select background" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="newcomer">Newcomer / Recent Immigrant</SelectItem>
                                  <SelectItem value="refugee">Refugee / Asylum Seeker</SelectItem>
                                  <SelectItem value="low_income">Low-Income Household</SelectItem>
                                  <SelectItem value="general">General Applicant</SelectItem>
                                  <SelectItem value="prefer_not_to_say">Prefer Not to Say</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormDescription>
                                This helps us understand your context. We welcome all students.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                    </div>

                    <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-4">
                      <FormField
                        control={form.control}
                        name="consent"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-y-0 gap-3">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="font-normal">
                                I consent to Global Bridge Learning Initiative contacting me about this application.
                              </FormLabel>
                              <FormDescription>
                                We will only use your contact information to respond to this application.
                              </FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-base">
                      {isSubmitting ? "Submitting..." : "Submit Application"}
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
