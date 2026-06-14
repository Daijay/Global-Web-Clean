export interface Program {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  gradeLevels: string;
  topics: string[];
  mentorshipFocus: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  category: string;
  bio: string;
  location: string;
  initials: string;
}

export const PROGRAMS: Program[] = [
  {
    id: 1,
    slug: "english",
    name: "English",
    tagline: "Read, write, and speak with confidence.",
    description:
      "One-on-one and small group tutoring in reading comprehension, grammar, essay writing, literary analysis, and conversational English. We meet every student where they are, whether they're polishing an essay, studying for an exam, or building everyday English fluency.",
    gradeLevels: "Grades 3 through post-secondary, plus adult learners.",
    topics: [
      "Reading comprehension",
      "Essay writing",
      "Grammar and vocabulary",
      "Literary analysis",
      "Conversational English",
      "Academic English skills",
    ],
    mentorshipFocus:
      "Mentors help students find their voice and build the confidence to participate in class, write a personal statement, or take on a presentation.",
  },
  {
    id: 2,
    slug: "mathematics",
    name: "Mathematics",
    tagline: "From fractions to calculus, taught with patience.",
    description:
      "Structured math support across the full school curriculum: arithmetic foundations, algebra, geometry, trigonometry, pre-calculus, calculus, and statistics. Sessions focus on conceptual understanding, not just answers.",
    gradeLevels: "Grades 4 through grade 12 and first-year university.",
    topics: [
      "Arithmetic and number sense",
      "Algebra I and II",
      "Geometry and trigonometry",
      "Pre-calculus and calculus",
      "Statistics and probability",
    ],
    mentorshipFocus:
      "Tutors are current STEM undergraduates who remember the struggle. They share study habits, exam strategies, and the perspective of someone who recently navigated the same path.",
  },
  {
    id: 3,
    slug: "science",
    name: "Science",
    tagline: "Curiosity, structured.",
    description:
      "Tutoring across biology, chemistry, physics, and integrated science. We help students build intuition for scientific reasoning, lab reports, and exam preparation.",
    gradeLevels: "Grades 6 through grade 12 and intro university courses.",
    topics: [
      "Biology",
      "Chemistry",
      "Physics",
      "Earth and environmental science",
      "Lab report writing",
    ],
    mentorshipFocus:
      "Mentors share what it is actually like to study science at university, including research, internships, and pathways into healthcare, engineering, and environmental work.",
  },
  {
    id: 4,
    slug: "public-speaking",
    name: "Public Speaking",
    tagline: "Find your voice. Be heard.",
    description:
      "Workshops and one-on-one coaching in public speaking, debate, presentations, and interview skills. We help every student step up to the moments that matter, from class presentations to scholarship interviews.",
    gradeLevels: "Grades 5 through post-secondary.",
    topics: [
      "Speech writing and delivery",
      "Classroom presentations",
      "Debate fundamentals",
      "Interview preparation",
      "Storytelling and narrative",
      "Overcoming presentation anxiety",
    ],
    mentorshipFocus:
      "Coaches help students practice for the moments that matter: class debates, scholarship interviews, university applications, and the first big presentation.",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Yiyi Yang",
    role: "President/Founder",
    category: "executive",
    bio: "Founder of Global Bridge Learning Initiative. Oversees organizational strategy, leadership, and final decisions across all programs and partnerships.",
    location: "Canada",
    initials: "YY",
  },
  {
    id: 2,
    name: "Fung Alvina Wing Hei (Alvina)",
    role: "Director of Human Resources",
    category: "executive",
    bio: "Leads recruitment, onboarding, and ongoing coordination of volunteer tutors and staff across the organization.",
    location: "Canada",
    initials: "AW",
  },
  {
    id: 3,
    name: "Ethan Chow",
    role: "Head of Graphic Design",
    category: "executive",
    bio: "Leads visual identity, branding, and design consistency across all communications, social media, and program materials.",
    location: "Canada",
    initials: "EC",
  },
  {
    id: 4,
    name: "Saoirse McDowell",
    role: "Director of Outreach & Growth",
    category: "executive",
    bio: "Guides outreach, community partnerships, and growth initiatives that help more students find the program.",
    location: "Canada",
    initials: "SM",
  },
  {
    id: 5,
    name: "Anushka Mukherjee",
    role: "Director of Academic Program",
    category: "executive",
    bio: "Oversees the design and delivery of academic programs, ensuring quality and consistency across all tutoring subjects.",
    location: "Canada",
    initials: "AM",
  },
  {
    id: 6,
    name: "Chioma Eve",
    role: "Director of Marketing & Outreach",
    category: "executive",
    bio: "Drives marketing strategy and outreach campaigns to grow the organization's reach and impact.",
    location: "Canada",
    initials: "CE",
  },
  {
    id: 7,
    name: "Jayden Dai",
    role: "Director of Website and Digital Systems",
    category: "executive",
    bio: "Manages the organization's website, internal digital infrastructure, and technical systems supporting tutors and students.",
    location: "Canada",
    initials: "JD",
  },
  {
    id: 8,
    name: "Amanda",
    role: "Director of Scheduling",
    category: "executive",
    bio: "Leads scheduling across the organization, overseeing how tutoring sessions are planned and coordinated between students and tutors.",
    location: "Canada",
    initials: "AM",
  },
  {
    id: 9,
    name: "Harriet",
    role: "Assistant Director of Scheduling",
    category: "executive",
    bio: "Coordinates tutoring schedules and session timing, helping match students and tutors and keeping sessions running smoothly.",
    location: "Canada",
    initials: "HA",
  },
];