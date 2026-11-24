// Site-wide content. Sources: your CV (Downloads/Ifeoluwa-Adegbulugbe.pdf), your About text,
// and your answers on 24 Nov 2026. Items marked STARTER PICK were chosen by Claude at your
// request ("just put anything"): swap them for your real favourites before publishing.

export const site = {
  name: "Ifeoluwa Adegbulugbe",
  url: "https://ifeoluwa-portfolio.vercel.app", // placeholder until you deploy
  description:
    "Ifeoluwa Adegbulugbe designs apps and websites that just make sense, from Web3 payments to shopping, learning and fashion products. Based in Lagos.",
  email: "ifeoluwaadegbulugbe@gmail.com",
  linkedin: "https://www.linkedin.com/in/ifeoluwa-adegbulugbe/",
  github: "https://github.com/ifeoluwaadegbulugbe",
  // Empty until a CV without the phone number is added to /public/cv. Download links hide while empty.
  cv: "" as string,
  location: "Lagos, Nigeria · WAT (UTC+1)",
};

export const capabilities = [
  { title: "Figuring out the problem", body: "I like to understand what's actually going wrong before I open Figma, and who should get the final say in a product.", link: { href: "/work/pricedrop", label: "See PriceDrop" } },
  { title: "Research", body: "Interviews, usability tests and looking hard at what's already out there. At Vetor Labs I ran studies with more than 20 people.", link: { href: "/resume", label: "See experience" } },
  { title: "Interface design", body: "Shops, checkouts, brand sites and app screens, with a lot of care for type and layout.", link: { href: "/work/mira-moda", label: "See Mira Moda" } },
  { title: "Design systems", body: "Colours, type and components that hold together across a whole product, like Margin's notebook look.", link: { href: "/work/margin", label: "See Margin" } },
  { title: "Prototyping and building", body: "I studied Computer Science, so my prototypes are often the real thing.", link: { href: "/work/looklab", label: "See LookLab" } },
];

export const principles = [
  { title: "Let people make the big calls.", body: "If something costs money or marks your work, a person should get the final say, not the software." },
  { title: "Be upfront about what's not real yet.", body: "If something is a demo, a guess or a backup plan, the screen should say so." },
  { title: "Care about the small screens too.", body: "Error messages, empty pages and the fourth onboarding screen deserve as much attention as the home page." },
];

export const experience = [
  {
    role: "Product Designer",
    org: "Vetor Labs",
    context: "Web3 pre-seed startup",
    dates: "Oct 2024 – May 2025",
    bullets: [
      "Led research across 20+ participant studies to generate data-driven recommendations, improving task completion rates by 30%.",
      "Grew feature adoption by 45% and engagement by 35% across a 15k-user platform by redesigning key product experiences.",
      "Designed payments, subscriptions and user journeys with developers, including simplifying a key process from eight steps to four.",
      "Built reusable, accessibility-compliant components that reduced design-to-development handoff discrepancies.",
    ],
  },
  {
    role: "User Experience Design Intern",
    org: "Programmify",
    context: "Tech education & developer community platform",
    dates: "Jul 2024 – Dec 2025",
    bullets: [
      "Increased feature adoption by 25% through structured interviews and usability testing with 30+ developers.",
      "Facilitated design-thinking workshops that shaped priorities for new analytics features.",
      "Produced 5+ research reports and stakeholder presentations.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    org: "Fless",
    context: "Fintech platform",
    dates: "Apr 2024 – Sep 2024",
    bullets: [
      "Built React interfaces for invoicing, multi-currency payments and cross-border transactions for African businesses.",
      "Debugged and analysed financial data processing across a multi-market payments product.",
      "Delivered across agile sprints with international teams on a live financial services product.",
    ],
  },
];

export const education = {
  degree: "BSc Computer Science",
  school: "Crawford University",
  dates: "Oct 2022 – 2026 · Graduated",
  detail: "First Class Honours · CGPA 4.81/5.0 · Top 1% of class",
  coursework: "Human-Computer Interaction, Systems Analysis & Design, Financial Technology Systems, Quantitative Research Methods, Statistical Methods, Data Structures & Algorithms",
};

export const leadership = [
  { role: "Director of Communications", org: "Crawford University Media Team", dates: "2024 – 2025", note: "Leadership Excellence Award (2025)" },
  { role: "Assistant Financial Secretary", org: "NACOS, Crawford chapter", dates: "2024 – 2025", note: "Outstanding Service Award (2025)" },
  { role: "UI/UX instructor", org: "I-TECH bootcamp", dates: "2026", note: "Plus a seminar on CV tailoring and portfolio creation" },
];

export const skills = [
  { group: "Product & UX", items: "User research, usability testing, wireframing & prototyping, design systems, interaction design, accessible design, design-thinking facilitation" },
  { group: "Business", items: "Stakeholder management, cross-functional collaboration, research synthesis, report writing, agile" },
  { group: "Technical", items: "React, Next.js, data analysis, statistics, quantitative research" },
  { group: "Tools", items: "Figma, Framer, Adobe Creative Suite, Google Workspace, Microsoft Office, Git/GitHub" },
];

export const timeline = [
  { when: "Age 18", what: "Got into design, and never really got out." },
  { when: "2022", what: "Started a BSc in Computer Science at Crawford University." },
  { when: "2024", what: "Frontend intern at Fless (fintech), then UX intern at Programmify." },
  { when: "2024 – 2025", what: "Product Designer at Vetor Labs: Web3 payments, subscriptions, an eight-step flow cut to four." },
  { when: "2025", what: "Leadership Excellence Award (Media Team), and Outstanding Service Award as NACOS Assistant Financial Secretary." },
  { when: "2026", what: "Taught UI/UX at I-TECH. Designed and built PriceDrop, LookLab and Margin." },
];

export const music = {
  artists: ["Daniel Caesar", "Frank Ocean", "SZA", "Mariah the Scientist", "FOLA", "Ayra Starr"],
  // Spotify track IDs you shared (share-tracking parameters removed).
  // Titles and cover art from Spotify's public oEmbed for the links you shared (share-tracking parameters removed).
  tracks: [
    { id: "5tot8CpUTFLoGDEhGRd8WN", title: "Death Do Us Part (feat. Mariah The Scientist)", art: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0210837ac91d704a52fef57623" },
    { id: "5jTIePmUbBUVjJnpZeGiM3", title: "We Find Love", art: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e027aa8783ad8def37cc548a9cf" },
    { id: "0uQHm4CLatNbvDFHt1Ystl", title: "Open Arms (just SZA)", art: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025623d454ad0ffa8d0ebfd4ad" },
    { id: "38Mnfr1l5t2kckdzoJuXTl", title: "treat u right", art: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02900e9812c8d6ed75328cd8be" },
    { id: "6DH13QYXK7lKkYHSU88N48", title: "Who Knows", art: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e022bad6e56e77d5bef0aa3f2dc" },
    { id: "4s76r7AbquJcTccqJiqdVu", title: "Hold Me Down", art: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027aa8783ad8def37cc548a9cf" },
    { id: "1K6oXSGIexEyNnv2cS6vKr", title: "Transform (feat. Charlotte Day Wilson)", art: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027aa8783ad8def37cc548a9cf" },
    { id: "5fQBa4wkmq28xpSLOQ202K", title: "Normal Girl", art: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0206d56b057cce5797538a16d5" },
    { id: "736PP5LTtREkDgktNmX3Gu", title: "Superpowers", art: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027c68face1dc58127f3a7b1cc" },
    { id: "1jTe5liUdnRjbie1luBi6J", title: "Is It a Crime", art: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0285ff52b3a1e03d96c915531e" },
    { id: "1vR0FAmbln2Qjpyg0TvG2J", title: "Sacrifice", art: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0200f16c94b1996a6da42dede8" },
    { id: "4087SxOHll1LmG6nML5d7K", title: "Tornado", art: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024457e5b19771c406c6edad32" },
    { id: "7yxVQdvFEbjo9viqUuxxnP", title: "Misunderstood", art: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024457e5b19771c406c6edad32" },
    { id: "4iJJOsuXC9Y3Xp3wrmfl24", title: "Heaven Baby (feat. ZAYN)", art: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024457e5b19771c406c6edad32" },
  ],
};

export const hobbies = [
  { name: "Singing", line: "Mostly in the shower. Occasionally in public.", glyph: "♪", color: "var(--lilac)" },
  { name: "Sleeping", line: "A hobby I take very seriously.", glyph: "☾", color: "var(--highlighter)" },
  { name: "Reading", line: "Usually two books at once, finishing neither on time.", glyph: "❦", color: "var(--mint)" },
  { name: "Watching YouTube", line: "Design breakdowns, video essays and the occasional 3 a.m. rabbit hole.", glyph: "▶", color: "#f4b8a8" },
];

// STARTER PICKS: edit freely.
export const currently = ["tiny hover animations", "Ayra Starr's visuals", "fonts with personality", "motion in Framer", "Daniel Caesar on repeat"];

export const littleWorld = [
  { kind: "Website", name: "Godly", why: "Where I go to watch good motion.", href: "https://godly.website" },
  { kind: "Website", name: "rauno.me/craft", why: "Interaction details that feel inevitable.", href: "https://rauno.me/craft" },
  { kind: "Website", name: "Mobbin", why: "Real app patterns, not Dribbble fantasies.", href: "https://mobbin.com" },
  { kind: "Book", name: "The Design of Everyday Things", why: "Don Norman. Still the best argument for obvious design." },
  { kind: "Book", name: "Don't Make Me Think", why: "Steve Krug. Short, funny, right." },
  { kind: "App", name: "Figma", why: "Where most of my week happens." },
];

export const inspirations = [
  { name: "Dieter Rams", why: "\"Less, but better\" is still the best brief." },
  { name: "Linear", why: "Polish that makes speed feel calm." },
  { name: "Stripe Press", why: "Editorial craft on the web." },
  { name: "Francis Kéré", why: "Architecture that's warm, local and clever with constraints." },
  { name: "Ayra Starr's visuals", why: "Bold colour and total confidence." },
];

export const funFacts = [
  "I got into design at 18.",
  "I studied Computer Science, so I can talk to developers in their own language.",
  "I've taught UI/UX to bootcamp students, and I learn something every session.",
  "In November 2026 I designed and built three products in about three weeks. I slept a lot afterwards.",
];

export type Experiment = {
  slug: string;
  title: string;
  kind: "UI study" | "Template" | "Character study" | "Interaction study";
  date: string;
  testing: string;
  learned: string;
  src?: string;
  w?: number;
  h?: number;
  card?: { src: string; w: number; h: number };
  figma?: string;
};

export const experiments: Experiment[] = [
  { slug: "lumae", title: "Lumae", kind: "UI study", date: "2026", testing: "Could a skincare site feel calm and expensive with just one warm colour?", learned: "Lots of space and one gold accent did more than any decoration.", src: "/experiments/lumae.jpg", w: 352, h: 2000, card: { src: "/experiments/lumae-card.jpg", w: 352, h: 440 }, figma: "https://www.figma.com/design/Bp6fieHJceKQB9akOEBKU0/Lumae-Landing-Page?node-id=0-1" },
  { slug: "fluxo", title: "Fluxo", kind: "UI study", date: "2026", testing: "Can a workflow tool feel calm instead of busy?", learned: "A soft background lets a dense dashboard breathe.", src: "/experiments/fluxo.png", w: 2000, h: 2000, figma: "https://www.figma.com/design/PaxgTDZqlRAEw8lgXfOOUL/Fluxo-Landing-Page?node-id=0-1" },
  { slug: "portfolio-template", title: "Portfolio template: home", kind: "Template", date: "2026", testing: "A simple, photo-led portfolio other designers could reuse.", learned: "Big images and a quiet serif carry most of the personality.", src: "/experiments/template-home.jpg", w: 453, h: 2000, card: { src: "/experiments/template-home-card.jpg", w: 453, h: 566 }, figma: "https://www.figma.com/design/Rce5MbXBbyhVAxyVdG2X6p/Personal-Portfolio-Website-Template?node-id=0-1" },
  { slug: "template-gallery", title: "Portfolio template: work gallery", kind: "Template", date: "2026", testing: "How few words a project list needs.", learned: "A name and a three-word description is plenty when the photo is strong.", src: "/experiments/template-gallery.jpg", w: 901, h: 2000, card: { src: "/experiments/template-gallery-card.jpg", w: 901, h: 1126 } },
  { slug: "template-project", title: "Portfolio template: project page", kind: "Template", date: "2026", testing: "A case study page simple enough to fill in an afternoon.", learned: "Intro, challenge, what I did: three headings cover most projects.", src: "/experiments/template-project.jpg", w: 497, h: 2000, card: { src: "/experiments/template-project-card.jpg", w: 497, h: 621 } },
  { slug: "template-contact", title: "Portfolio template: contact", kind: "Template", date: "2026", testing: "Desktop and mobile versions of the same contact page.", learned: "Stacking the details above the form keeps the email first on phones.", src: "/experiments/template-contact.jpg", w: 1764, h: 2000 },
  { slug: "scribble", title: "Scribble, a study", kind: "Character study", date: "Nov 2026", testing: "A tutor character that reacts without being childish.", learned: "Small expression changes do more than big animations.", src: "/work/margin/04-ws-ask.jpg", w: 1920, h: 1280 },
  { slug: "collection-fan", title: "Collection fan", kind: "Interaction study", date: "Nov 2026", testing: "Fanned cards that make a collection feel touchable.", learned: "Tilt plus overlap reads as 'pick me up'.", src: "/work/looklab/explore.png", w: 1440, h: 900 },
  { slug: "outfit-builder", title: "Outfit builder rail", kind: "Interaction study", date: "Nov 2026", testing: "Picking two pieces without losing sight of the outfit.", learned: "A sticky summary panel beats a step-by-step wizard here.", src: "/work/looklab/outfit.png", w: 1440, h: 900 },
];
