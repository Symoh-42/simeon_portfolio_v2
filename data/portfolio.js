// All content for the portfolio lives here so it's easy to edit.
// Project thumbnails are live screenshots generated from each URL via
// WordPress mShots (free, no API key). First load may show a placeholder
// while the screenshot is captured, then it caches.

export const profile = {
  name: "Simeon Mwangi",
  roles: [
    "Full-Stack Developer",
    "Software Engineer",
    "Backend Developer",
    "Frontend Engineer",
    "System Architecture",
  ],
  tagline:
    "Innovative software engineer with 5+ years building scalable, user-friendly web and mobile applications with React.js, Next.js, Django and React Native.",
  location: "Nairobi, Kenya",
  email: "msimeon937@gmail.com",
  phone: "+254 704 662 432",
  phoneHref: "+254704662432",
  portfolio: "https://simeon-portfolio-nine.vercel.app/",
  cv: "/Simeon_Mwangi_CV.pdf",
  available: true,
  stats: [
    { k: "5+", label: "Years experience" },
    { k: "25+", label: "Projects shipped" },
    { k: "10+", label: "Industries served" },
    { k: "2", label: "Companies / brands" },
  ],
};

// helper to build screenshot URL
export const shot = (url, w = 1200, h = 820) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${w}&h=${h}`;

// Projects now live in the Ohmspace Technologies marketing backend
// (proposed_projects/ohmspace-site/backend, `portfolio` app) so new sites
// can be added from Django Admin instead of editing this file. The array
// below is kept only as an offline/dev fallback if that API is unreachable.
const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8020/api/v1";

function fromApi(row) {
  return {
    id: row.slug,
    title: row.title,
    url: row.url,
    category: row.category,
    company: row.company,
    blurb: row.blurb,
    tags: row.tags ?? [],
    featured: row.is_featured,
  };
}

export async function getProjects() {
  try {
    const res = await fetch(`${API_BASE}/portfolio-projects/`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) throw new Error(`portfolio-projects fetch failed: ${res.status}`);
    const json = await res.json();
    const rows = Array.isArray(json.data) ? json.data : [];
    if (rows.length === 0) throw new Error("portfolio-projects returned no rows");
    return rows.map(fromApi);
  } catch (err) {
    console.error("[portfolio] falling back to static project list —", err.message);
    return fallbackProjects;
  }
}

export function getCategories(list) {
  return ["All", ...Array.from(new Set(list.map((p) => p.category))).sort()];
}

const fallbackProjects = [
  // ───────── Greenbear Technologies ─────────
  {
    id: "rentalpay",
    title: "RentalPay",
    url: "https://rentalpay.africa/",
    category: "FinTech",
    company: "Greenbear Technologies",
    blurb:
      "Rental management platform handling rent collection, tenant management, maintenance tracking and listings — with M-PESA to bank integration.",
    tags: ["Django", "M-PESA", "PostgreSQL"],
    featured: true,
  },
  {
    id: "primetext",
    title: "PrimeText",
    url: "https://primetext.africa/",
    category: "Platform",
    company: "Greenbear Technologies",
    blurb:
      "Kenya's reliable bulk-SMS platform with direct carrier connections to Safaricom, Airtel and Telkom — built for the East African market.",
    tags: ["Django", "REST API", "SMS"],
    featured: true,
  },
  {
    id: "villaleone",
    title: "Villa Leone Nairobi",
    url: "https://www.villaleonenairobi.com/",
    category: "Hospitality",
    company: "Greenbear Technologies",
    blurb:
      "Luxury boutique hotel site in Nairobi's diplomatic district — bookings, rooms and an elegant guest experience.",
    tags: ["Django", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "carstore",
    title: "CarStore Kenya",
    url: "https://carstore.co.ke/",
    category: "Automotive",
    company: "Greenbear Technologies",
    blurb:
      "Kenya's No. 1 premium luxury SUV dealership — inventory, financing and auto-care, with a refined showroom experience.",
    tags: ["Next.js", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "gbt",
    title: "GBT Kenya",
    url: "https://gbt.co.ke/",
    category: "Corporate",
    company: "Greenbear Technologies",
    blurb:
      "Company site for a software studio building mobile apps, web platforms and custom software across East Africa.",
    tags: ["Django", "React.js"],
    featured: true,
  },
  {
    id: "credit-scoring",
    title: "Credit Scoring Model",
    url: "https://credit-scoring-model-eight.vercel.app/",
    category: "FinTech",
    company: "Greenbear Technologies",
    blurb:
      "Loan creditworthiness assessment tool that scores applicants and visualises risk for faster lending decisions.",
    tags: ["React.js", "Tailwind CSS"],
    featured: true,
  },

  // ───────── Ohmspace / freelance ─────────
  {
    id: "etco",
    title: "ETCO Advocates",
    url: "https://etcoadvocates.com/",
    category: "Legal",
    company: "Ohmspace",
    blurb: "Law firm booking system and secure client portal.",
    tags: ["Django", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "portserve",
    title: "PortServe Enterprises",
    url: "https://portserve-enterprises-ltd.vercel.app/#about",
    category: "Logistics",
    company: "Ohmspace",
    blurb: "Trusted port & logistics partner — services and corporate site.",
    tags: ["Next.js", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "bubbly",
    title: "Bubbly Investment",
    url: "https://bubbly-investment.vercel.app/about",
    category: "Logistics",
    company: "Ohmspace",
    blurb:
      "Industrial containers, chemicals, pallets and logistics solutions provider.",
    tags: ["Next.js", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "denoo",
    title: "Denoo Containers",
    url: "https://denoo-containers.vercel.app/",
    category: "E-commerce",
    company: "Ohmspace",
    blurb: "Shipping-container sales with enquiry and catalogue.",
    tags: ["Next.js", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "kpipes",
    title: "K-Pipes",
    url: "https://k-pipes.vercel.app/",
    category: "E-commerce",
    company: "Ohmspace",
    blurb: "Hardware e-commerce store for pipes and fittings.",
    tags: ["Next.js", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "cars-by-stacy",
    title: "Cars by Stacy",
    url: "https://cars-by-stacy.vercel.app/",
    category: "Automotive",
    company: "Ohmspace",
    blurb: "Vehicle sales listing site with enquiries.",
    tags: ["React.js", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "chris-hd",
    title: "Chris HD",
    url: "https://chris-hd.vercel.app/",
    category: "E-commerce",
    company: "Ohmspace",
    blurb: "Camera gear and equipment retail storefront.",
    tags: ["React.js", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "thamar-nails",
    title: "Thamar Nails",
    url: "https://thamar-nails.vercel.app/",
    category: "Beauty",
    company: "Ohmspace",
    blurb: "Cosmetics and nail studio site with services and booking.",
    tags: ["Next.js", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "yusra",
    title: "Yusra Butchery",
    url: "https://yusra-butchery.vercel.app/",
    category: "E-commerce",
    company: "Ohmspace",
    blurb: "Online butchery with product catalogue and ordering.",
    tags: ["Next.js", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "kuku",
    title: "Kuku Feeds",
    url: "https://kuku-spur-liard.vercel.app/",
    category: "E-commerce",
    company: "Ohmspace",
    blurb: "Poultry feed supplier storefront.",
    tags: ["Next.js", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "axion",
    title: "Axion Biz Solution",
    url: "https://axionbizsolution.com/",
    category: "Corporate",
    company: "Ohmspace",
    blurb: "Business solutions company website — services, expertise and client enquiries.",
    tags: ["Next.js", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "ohmspace",
    title: "Ohmspace Technologies",
    url: "https://ohmspace.co.ke/",
    category: "Corporate",
    company: "Ohmspace",
    blurb: "Company site for Ohmspace Technologies — web, mobile and digital marketing services.",
    tags: ["Next.js", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "pamoja",
    title: "Pamoja Flowers",
    url: "https://pamojaflowers.com/",
    category: "E-commerce",
    company: "Ohmspace",
    blurb: "Florist e-commerce — bouquets and gifting.",
    tags: ["Next.js", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "fervent",
    title: "Fervent Properties",
    url: "https://fervent-properties.vercel.app/",
    category: "Real Estate",
    company: "Ohmspace",
    blurb: "Property and land listings for sale.",
    tags: ["Next.js", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "survey-link",
    title: "Survey Link EA",
    url: "https://survey-link-ea.vercel.app/",
    category: "Corporate",
    company: "Ohmspace",
    blurb:
      "Professional surveying and planning consultancy across Kenya and East Africa.",
    tags: ["Next.js", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "firmcop",
    title: "Firmcop",
    url: "https://firmcop.vercel.app/",
    category: "Corporate",
    company: "Ohmspace",
    blurb: "Industrial and commercial solutions provider.",
    tags: ["React.js", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "emiltech",
    title: "Emil Tech Show",
    url: "https://emiltechshow.com/",
    category: "Corporate",
    company: "Ohmspace",
    blurb: "Platform for innovators and tech showcases.",
    tags: ["Next.js", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "bibvisualz",
    title: "BIB Visualz",
    url: "https://bibvisualz.com/",
    category: "Corporate",
    company: "Ohmspace",
    blurb: "Branding and print services company site.",
    tags: ["Next.js", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "tirus",
    title: "Tirus & Esther Foundation",
    url: "https://tirusandestherfoundation.org/",
    category: "NGO",
    company: "Ohmspace",
    blurb: "NGO platform — programs, donations and impact.",
    tags: ["Next.js", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "jayb",
    title: "Jay B Events",
    url: "https://jay-b-events.vercel.app/",
    category: "Events",
    company: "Ohmspace",
    blurb: "Event management and planning company website.",
    tags: ["React.js", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "zippy",
    title: "Zippy Okoth",
    url: "https://zippy-okoth.vercel.app/",
    category: "Creative",
    company: "Ohmspace",
    blurb:
      "Personal site for an award-winning filmmaker, artivist, educator and festival director.",
    tags: ["Next.js", "Tailwind CSS"],
    featured: false,
  },
];

export const services = [
  {
    n: "01",
    title: "Full-Stack Development",
    body: "End-to-end delivery — UI, backend architecture, database modeling and API integrations — with React.js, Next.js and Django.",
    skills: ["React.js", "Next.js", "Django", "DRF"],
  },
  {
    n: "02",
    title: "Backend & System Architecture",
    body: "Scalable services, relational data modeling, RESTful APIs, authentication, RBAC and third-party integrations like M-PESA.",
    skills: ["PostgreSQL", "MySQL", "REST", "RBAC"],
  },
  {
    n: "03",
    title: "Frontend Engineering",
    body: "Responsive, high-performing interfaces with clean component architecture and pixel-careful Tailwind styling.",
    skills: ["JavaScript", "React", "Tailwind", "Figma"],
  },
  {
    n: "04",
    title: "Mobile Development",
    body: "Cross-platform mobile apps built with React Native and Expo, sharing logic with the web stack.",
    skills: ["React Native", "Expo"],
  },
  {
    n: "05",
    title: "Digital Marketing",
    body: "Bulk SMS & email campaigns, hosting and deployment, and growth support to get products in front of users.",
    skills: ["Bulk SMS", "Email", "Hosting"],
  },
  {
    n: "06",
    title: "Creative & Brand",
    body: "Photography, videography, editing and graphic design to round out a complete, polished brand presence.",
    skills: ["Photo/Video", "Editing", "Graphic Design"],
  },
];

export const skillGroups = [
  {
    label: "Backend / Server",
    items: ["Python", "Django", "Django REST Framework", "PostgreSQL", "MySQL"],
  },
  {
    label: "Frontend",
    items: ["JavaScript / ES6+", "React.js", "React Native", "Tailwind CSS", "Bootstrap"],
  },
  {
    label: "APIs & Integration",
    items: ["RESTful API design", "Authentication", "M-PESA", "Third-party APIs"],
  },
  {
    label: "DevOps / Deployment",
    items: ["Git / GitHub", "CI/CD", "Vercel", "Hosting pipelines"],
  },
  {
    label: "Practices",
    items: ["Clean code", "Unit testing", "Security", "Agile / Scrum"],
  },
  {
    label: "Tools",
    items: ["Figma", "Docker", "Problem solving"],
  },
];

export const experience = [
  {
    role: "Full-Stack Developer",
    org: "Greenbear Technologies",
    period: "May 2023 — Present",
    points: [
      "Designed and deployed responsive websites and web applications tailored to client needs.",
      "Delivered projects end-to-end: UI design, backend architecture, database modeling and API integrations.",
      "Implemented role-based access control (RBAC) to strengthen security and operational efficiency.",
      "Streamlined user onboarding and offboarding, improving IT administrative workflows.",
    ],
  },
  {
    role: "Founder & Lead Developer",
    org: "Ohmspace Technologies",
    period: "Freelance · Ongoing",
    points: [
      "Built and deployed custom websites and applications for SMEs, NGOs and event companies.",
      "Provided digital marketing, bulk SMS & email, and hosting as added services.",
      "Owned client relationships from brief to launch across 15+ projects.",
    ],
  },
  {
    role: "IT Intern",
    org: "Superior Hotels",
    period: "Jan 2021 — Jun 2021",
    points: [
      "Supported IT infrastructure management and hospitality systems.",
      "Assisted with troubleshooting hardware/software issues and system deployments.",
    ],
  },
];

export const education = {
  degree: "B.Sc. Mathematics & Computer Science",
  school: "Murang'a University of Technology",
  period: "2017 — 2021",
};

export const techMarquee = [
  "React.js",
  "Next.js",
  "Django",
  "Python",
  "JavaScript",
  "React Native",
  "Tailwind CSS",
  "PostgreSQL",
  "MySQL",
  "Django REST",
  "M-PESA API",
  "Docker",
  "Git",
  "Figma",
];
