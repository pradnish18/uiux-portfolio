// Flexible Case Study Data Contract Schema for Product Design Case Studies

export const caseStudiesData = {
  "qiskit-fall-fest": {
    id: "qiskit-fall-fest",
    title: "Qiskit Fall Fest 2026",
    tagline: "Event Website Experience · UI/UX Design & Frontend Contribution",
    badge: "Event Experience / Web Design / UX Engineering",
    role: "UI/UX Designer & Frontend Contributor",
    timeline: "2026",
    organization: "Qiskit Fall Fest 2026 — SRM University-AP × IBM Quantum",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion", "Figma", "Lucide React"],
    overview:
      "Qiskit Fall Fest 2026 is a flagship digital experience supporting a global quantum-computing celebration hosted at SRM University-AP in collaboration with IBM Quantum, organized around the theme 'A Decade of Quantum on Cloud'. The platform communicates event identity, hands-on learning opportunities, and technical experiences to a diverse audience ranging from curious beginners to academic researchers.",
    designIntent:
      "How might we make the learning opportunities and experiences of a quantum-computing event easier to understand and navigate, while maintaining a distinctive and technically credible event identity?",
    problem:
      "A technical event website serves visitors with wildly different goals and levels of quantum familiarity. Prospective beginners need approachable entry points into quantum fundamentals, while developers, researchers, and competitive coders look for hackathons, advanced hardware sessions, and schedule logistics. The core challenge was transforming rich, multi-track technical content into an intuitive, scannable digital experience without overwhelming users or losing the scientific prestige of the IBM Quantum collaboration.",
    designDirection:
      "An editorial, scientific, and cinematic visual language combining deep obsidian and burgundy surfaces with high-impact quantum cryostat visual motifs. The interface balances high-contrast typography, generous negative space, and modular card systems to provide clarity across both desktop and mobile viewports, while honoring the theme 'A Decade of Quantum on Cloud'.",
    scope: [
      {
        title: "Experience Design",
        description:
          "Organized page structures around visitor goals, defining intuitive navigation pathways for discovering workshops, competitions, and technical sessions.",
      },
      {
        title: "Information Architecture",
        description:
          "Structured content hierarchies for the Learnings and Experiences pages, separating foundational concepts from advanced technical tracks.",
      },
      {
        title: "Interface Design",
        description:
          "Crafted visual layouts, typography systems, and responsive card compositions in Figma, ensuring visual coherence with global event branding.",
      },
      {
        title: "UX Engineering",
        description:
          "Implemented the Learnings and Experiences pages using Next.js, React, TypeScript, and Tailwind CSS, translating Figma specs into production components.",
      },
      {
        title: "Responsive Implementation",
        description:
          "Adapted multi-column desktop grids into touch-friendly mobile layouts with accessible tap targets and fluid typography.",
      },
    ],
    audience: [
      {
        persona: "The Curious Beginner",
        goal: "Understand what the event offers and where to start learning.",
        need: "Approachable explanations and clear introductory learning categories.",
        consideration: "Clear foundational pathways and non-intimidating technical terminology.",
      },
      {
        persona: "The Student / Developer",
        goal: "Explore hands-on learning, hackathons, and workshops.",
        need: "Scannable experience descriptions and direct registration touchpoints.",
        consideration: "Actionable CTA cards with event schedules and prerequisite badges.",
      },
      {
        persona: "The Experienced Researcher",
        goal: "Locate advanced technical sessions and cloud quantum hardware talks.",
        need: "Immediate distinction between workshop levels and research tracks.",
        consideration: "Category tags and speaker credentials clearly visible in card headers.",
      },
      {
        persona: "The Community Member",
        goal: "Discover keynote addresses, networking mixers, and venue details.",
        need: "Coherent global navigation and contextual cross-page links.",
        consideration: "Persistent event metadata, venue schedules, and clear next-step actions.",
      },
    ],
    journey: {
      description:
        "Structured a seamless visitor flow that guides participants from high-level awareness to deep exploration and event registration without cognitive friction.",
      steps: [
        "Discover Event Context",
        "Explore Learning Tracks",
        "Browse Hands-On Experiences",
        "Inspect Event Logistics",
        "Review Prerequisites",
        "Claim On-Campus Pass",
      ],
      principles: [
        "Establish event context and credibility before introducing deep technical curriculum.",
        "Group related learning tracks and hands-on experiences into visually distinct modules.",
        "Maintain user orientation across page transitions with persistent navigation anchors.",
        "Provide unambiguous calls to action ('Get Your On-Campus Pass') at natural decision points.",
      ],
    },
    constraints: [
      "Broad Audience Spectrum: Interface must cater to complete beginners and PhD researchers on the same platform.",
      "Multi-Track Information Density: Workshops, speaker panels, hackathons, and lab tours require scannable categorization.",
      "Brand Fidelity: Must harmoniously align IBM Quantum's technical precision with SRM University-AP's campus identity.",
    ],
    decisions: [
      {
        title: "Learnings Page: Progressive Technical Chunking",
        description:
          "Deconstructed complex quantum topics (Qiskit SDK fundamentals, quantum circuit modeling, quantum cloud runtime) into digestible visual modules with estimated completion times and difficulty badges, preventing cognitive overload.",
      },
      {
        title: "Experiences Page: Activity Categorization & Discovery",
        description:
          "Organized hackathons, hardware labs, and speaker panels into dedicated card groups with clear interaction cues, allowing developers to filter by interest and venue in under 5 seconds.",
      },
      {
        title: "Scientific Chandelier Focal Hierarchy",
        description:
          "Anchored the experience with authentic golden quantum cryostat chandelier imagery, balancing scientific wonder with generous whitespace and high-contrast text containers.",
      },
      {
        title: "Multi-Theme Contrast & WCAG Compliance",
        description:
          "Engineered high-contrast typography and border tokens validated for both dark and light modes, guaranteeing readability across varied device screens and lighting conditions.",
      },
      {
        title: "Modular Frontend Integration & Handoff",
        description:
          "Implemented components with strict TypeScript interfaces, ensuring the Learnings and Experiences pages integrated smoothly into the team's shared Next.js routing tree without regression.",
      },
    ],
    artifacts: [
      {
        title: "Qiskit Fall Fest 2026 Event Website Experience",
        type: "image",
        url: "/img/qiskit-fall-fest-dashboard.png",
        caption:
          "Official Qiskit Fall Fest 2026 website interface: Hero showcase featuring the golden quantum dilution refrigerator, event timeline (26-30 Oct 2026), and global navigation including Learning and Experience portals.",
      },
      {
        title: "Figma Design System & Multi-Theme Screen Architecture",
        type: "image",
        url: "/img/qiskit-fall-fest-design-system.png",
        caption:
          "Comprehensive design exploration boards in Figma: Light and dark theme specifications, component architecture, and responsive page compositions for the Learnings and Experiences sections.",
      },
    ],
    outcomes: [
      "Delivered responsive, production-ready Learnings and Experiences pages integrated into the official Qiskit Fall Fest 2026 website.",
      "Established a clear information architecture bridging complex quantum concepts with accessible exploration pathways.",
      "Successfully collaborated within a multi-disciplinary frontend engineering team using Next.js, TypeScript, and Tailwind CSS.",
      "Designed and deployed responsive layouts maintaining fluid typography and accessible touch targets across all breakpoints.",
    ],
    reflections: [
      "Designing for technical audiences demonstrated that true accessibility isn't about dumbing down content—it's about progressive disclosure, clear visual hierarchy, and creating interfaces that respect the user's expertise level.",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },

  "mini-finance": {
    id: "mini-finance",
    title: "Mini Finance",
    tagline: "Premium UI/UX Refresh & Design System for Mobile Personal Finance",
    badge: "Mobile Fintech UX & Design System",
    role: "Product Designer & UI/UX Specialist",
    timeline: "2025",
    tools: ["Figma", "UI/UX Design", "Product Design", "Design System", "Mobile App"],
    overview:
      "Mini Finance is an exploration of a refined personal finance experience, bringing balances, transactions, budgets, savings goals, and spending insights into a cohesive and intuitive mobile interface. The project explores how an everyday finance app can communicate financial information with greater clarity while maintaining a friendly, polished, and trustworthy experience.",
    designIntent:
      "Bring the most important parts of personal finance into one cohesive experience, so users can understand their overall financial picture, review recent activity, manage goals, and identify useful next actions.",
    problem:
      "Everyday finance applications frequently overwhelm users with dense transaction tables, fragmented views for investments versus savings, and disconnected budgeting feedback. Users often have to jump between multiple disjointed screens just to determine their total net position, understand how much budget they have left, or evaluate whether their spending aligns with their long-term goals.",
    designDirection:
      "A premium yet approachable fintech aesthetic blending deep forest-green primary surfaces (#173C35), warm cream and off-white backgrounds (#FAFAF7, #FFF7E9), and warm orange/peach accents (#F59E0B, #FDEBD0) for emphasis. Rounded cards and subtle elevation levels establish a clean, touch-friendly structure, paired with clear typography, intuitive progress indicators, and consistent icons across all mobile flows.",
    constraints: [
      "Organize multiple financial facets (balances, budgets, investments, goals) into a 4-column mobile viewport without visual clutter.",
      "Dual-contrast readability: Financial numbers and category badges must remain legible across both light and dark dashboard treatments.",
      "High-clarity data communication: Distinguish positive and negative cash flows, budget allocations, and risk profiles at a glance.",
    ],
    decisions: [
      {
        title: "Unified Financial Overview & Hierarchy",
        description:
          "Combined total portfolio valuation ($113,466.08), monthly financial overview, and immediate actionable insights into the top viewport. This enables users to absorb their high-level financial health in seconds before drilling into specific accounts.",
      },
      {
        title: "Readable Progress Indicators for Budgets & Goals",
        description:
          "Replaced complex percentage tables with clear horizontal progress bars displaying exact remaining amounts (e.g. '$2,215.90 Left' of '$3,500 budget' and '$5,500 saved of $64,000' for New Home), making money tracking intuitive and tangible.",
      },
      {
        title: "Contextual Spending Insights & Non-Intrusive Alerts",
        description:
          "Integrated spending comparison cards directly below budget summaries (e.g. 'You have exceeded your average spend this month compared to last 6 months') that suggest relevant next actions—such as setting category limits or reviewing expenses—without disrupting the primary flow.",
      },
      {
        title: "Structured Risk Appetite & Asset Allocation",
        description:
          "Designed an approachable risk profiling screen ('Aggressive' profile with a warm coral header and flame icon) that translates abstract risk concepts into transparent percentage breakdowns (Stocks 82%, Mutual Funds 12%, Cash 6%).",
      },
      {
        title: "Cohesive Component Architecture Across Treatments",
        description:
          "Standardized cards, quick action buttons ('Invest', 'Withdraw'), and transaction rows using a modular token system, ensuring seamless visual continuity across both deep forest-green and light dashboard surfaces.",
      },
    ],
    designSystem: {
      description:
        "The Mini Finance interface is built on a structured design system with consistent tokens for color, typography, spacing, and elevation, ensuring harmony across every touchpoint.",
      colors: [
        { name: "Primary (Deep Forest)", hex: "#173C35" },
        { name: "Primary 600", hex: "#2C5B4F" },
        { name: "Primary 400", hex: "#4E7F6F" },
        { name: "Primary 200", hex: "#D8E8DE" },
        { name: "Accent (Warm Amber)", hex: "#F59E0B" },
        { name: "Accent 600", hex: "#D97706" },
        { name: "Accent 200", hex: "#FDEBD0" },
        { name: "Accent 50", hex: "#FFF7E9" },
        { name: "Neutral 900", hex: "#111827" },
        { name: "Neutral 700", hex: "#374151" },
        { name: "Neutral 400", hex: "#9CA3AF" },
        { name: "Neutral 50", hex: "#FAFAF7" },
      ],
      specs: [
        {
          label: "Typography",
          value: "Geist Sans",
          detail: "Clean geometric grotesque with balanced tabular figures for financial numbers.",
        },
        {
          label: "Grid System",
          value: "4-Column Mobile Grid",
          detail: "16px outer margins, 16px gutters, designed for modern iOS / Android safe areas.",
        },
        {
          label: "Elevation & Radii",
          value: "Cards & Elevated Sheets",
          detail: "4/8/12/16/20/24/32/40 spacing scale with rounded-2xl container geometry.",
        },
      ],
    },
    artifacts: [
      {
        title: "Mini Finance Home Dashboard & Multi-Screen Suite",
        type: "image",
        url: "/img/mini-finance-presentation.png",
        caption: "Presentation showcase highlighting the home dashboard, monthly budget progress ($2,215.90 Left), New Home savings goal ($64,000), and Easy Growth asset view.",
      },
      {
        title: "Core User Flows: Portfolio, Easy Growth & Risk Appetite",
        type: "image",
        url: "/img/mini-finance-design-system.png",
        caption: "High-fidelity flow screens: Main portfolio value ($113,466.08), Easy Growth stock holdings (Alphabet, Apple), and Aggressive Risk Appetite allocation assessment.",
      },
    ],
    outcomes: [
      "Delivered a comprehensive high-fidelity mobile design system unifying balances, budgets, savings goals, and investment assets.",
      "Established a high-clarity visual hierarchy prioritizing net worth and actionable budget statuses at first glance.",
      "Created reusable interface components and color tokens facilitating consistent light and dark theme treatments.",
    ],
    reflections: [
      "Designing for personal finance highlighted that numbers alone don't provide clarity—contextual visual cues like progress bars, trend lines, and structured color coding turn raw financial data into empowering, actionable insights.",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },

  kytchenpulse: {
    id: "kytchenpulse",
    title: "KytchenPulse",
    tagline: "Restaurant & Kitchen Display System (KDS) Dashboard Interface",
    badge: "Dashboard & Workflow UI",
    role: "Freelance UI/UX Designer",
    timeline: "2025",
    tools: ["Figma", "UI/UX Research", "Design System", "Workflow Mapping", "React"],
    overview:
      "KytchenPulse is a restaurant management and kitchen display system interface built for high-stress culinary environments. It organizes live order flows, ingredient inventory tracking, and kitchen preparation stages into a high-visibility, touch-friendly dashboard.",
    problem:
      "Busy restaurant kitchens experience frequent order bottlenecks, missed item modifications, and communication delays between front-of-house staff and line cooks. Traditional POS software is often cluttered, lacks high-contrast visual hierarchy, and requires small mouse clicks unsuited for kitchen tablets.",
    constraints: [
      "Must be easily readable from 3 to 6 feet away under varied kitchen lighting.",
      "Touch targets must be oversized (minimum 48px) for quick finger-taps by kitchen staff.",
      "Real-time ticket updates require color-coded visual priority states.",
    ],
    decisions: [
      {
        title: "Color-Coded Prep Ticket Hierarchy",
        description:
          "Designed a high-contrast prep card interface with automatic color progression (Green: New, Yellow: In Preparation, Red: Delayed >12 mins) to instantly direct chef attention to critical tickets.",
      },
      {
        title: "Station-Based Item Splitting",
        description:
          "Structured order views so items automatically route to designated station displays (Grill, Prep, Assembly, Pass), eliminating manual ticket shouting and verbal confusion.",
      },
    ],
    artifacts: [
      {
        title: "Kitchen Display System Dashboard UI",
        type: "image",
        url: "/img/gallery-4.png",
        caption: "High-fidelity Figma UI showcase: Live kitchen display tickets, order modifications, and inventory indicators.",
      },
    ],
    outcomes: [
      "Streamlined preparation ticket workflows with station-based item routing.",
      "Lowered visual fatigue and cognitive load during peak rush hours using a dark high-contrast design system.",
    ],
    reflections: [
      "Designing for high-stress physical environments reinforced that ergonomics, glanceability, and contrast are just as critical as visual aesthetics.",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },

  groomiq: {
    id: "groomiq",
    title: "GroomIQ",
    tagline: "AI-Powered Hairstyle Analysis & Personal Styling Experience",
    badge: "AI Interaction UX",
    role: "Product Designer & Full Stack Developer",
    timeline: "2024 — 2025",
    tools: ["Figma", "OpenCV", "EfficientNetB0", "Flask", "React", "PostgreSQL"],
    overview:
      "GroomIQ translates computer vision model outputs into an intuitive, high-trust personal styling tool. The project addresses user hesitation during photo uploads, presents multi-attribute hairstyle recommendations clearly, and establishes user confidence through clear AI feedback state design.",
    problem:
      "AI recommendation engines frequently suffer from trust and transparency issues. Users hesitate to upload personal photos without privacy feedback, and raw classification model scores often present as confusing percentage grids rather than actionable styling advice.",
    constraints: [
      "Image processing models require 1.5–3 seconds latency; state feedback must maintain engagement.",
      "Mobile screen real estate requires progressive disclosure of facial landmark analysis.",
      "Privacy assurance must be explicit at the point of upload.",
    ],
    decisions: [
      {
        title: "Progressive Analysis Feedback",
        description:
          "Instead of a static spinner during image inference, implemented a 3-step visual radar animation showing face shape detection, hair density evaluation, and style mapping. This reduced perceived wait time and built model credibility.",
      },
      {
        title: "Confidence & Suitability Ratings",
        description:
          "Replaced raw model confidence scores (e.g. 0.8921) with contextual suitability tags (High Match, Balanced, Bold Choice) and expandable explanations explaining why a style matches the user's face shape.",
      },
    ],
    artifacts: [
      {
        title: "AI Analysis & Recommendation Flow",
        type: "image",
        url: "/img/gallery-1.jpg",
        caption: "High-fidelity mobile UI: Face shape detection result and curated hairstyle recommendation cards.",
      },
    ],
    outcomes: [
      "Achieved 90% hairstyle classification accuracy paired with an intuitive 3-step styling flow.",
      "Reduced user drop-off during photo upload by introducing explicit privacy badges and instant preview feedback.",
    ],
    reflections: [
      "Designing for AI requires designing for uncertainty. Providing fallback style options and user adjustment controls was vital when model confidence was borderline.",
    ],
    liveUrl: "https://groom-iq-xi.vercel.app/",
    githubUrl: "https://github.com/pradnish18/GroomIQ",
  },

  uniride: {
    id: "uniride",
    title: "UniRide",
    tagline: "Real-Time Campus Ride-Pooling & Safety-First Mobile Experience",
    badge: "Mobile UX & Real-Time Sync",
    role: "UX Engineer & Mobile Developer",
    timeline: "2024",
    tools: ["Figma", "React Native", "TypeScript", "WebSockets", "Mapbox", "Node.js"],
    overview:
      "UniRide is a campus-focused ride-sharing mobile experience designed to help university students coordinate daily commutes efficiently. The UX focuses on clear ride discovery, quick request-to-acceptance flows, and safety-first verification between student drivers and passengers.",
    problem:
      "Campus commuting faced fragmented coordination across chat groups, lack of price transparency, and safety concerns regarding unverified drivers. Existing commercial ride-sharing apps were overly complex and costly for short campus distances.",
    constraints: [
      "Sub-200ms real-time position updates required light map rendering.",
      "Driver and rider UI needed distinct modes within a single React Native application.",
    ],
    decisions: [
      {
        title: "One-Tap Ride Request & Live Status Tracker",
        description:
          "Designed a bottom-sheet interface that allows riders to view route path, seat availability, and driver university badge before sending a ride request.",
      },
      {
        title: "Role-Based Interface Switching",
        description:
          "Engineered a seamless toggle between 'Find a Ride' and 'Offer a Seat' with contextual action bars tailor-made for quick driver route setup.",
      },
    ],
    artifacts: [
      {
        title: "Ride Discovery & Live Map View",
        type: "video",
        url: "/img/gallery-2.mp4",
        caption: "React Native UI demo showing real-time location sync and driver profile inspection.",
      },
    ],
    outcomes: [
      "Built real-time sync with sub-200ms WebSockets delay, supporting smooth multi-rider tracking.",
      "Created a streamlined student verification flow that increased trust ratings during user testing.",
    ],
    reflections: [
      "Designing real-time mobile maps taught me the importance of smooth transition states when driver coordinates update rapidly.",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },

  "sports-council": {
    id: "sports-council",
    title: "SRM Sports Council",
    tagline: "University Sports Management, Event Approval & Facility Booking Workflows",
    badge: "Workflow & Dashboard Design",
    role: "UI/UX Designer & Full Stack Developer",
    timeline: "2024",
    tools: ["Figma", "React.js", "Node.js", "Express", "MongoDB", "Framer Motion"],
    overview:
      "A comprehensive sports portal streamlining event registration, ground/court slot booking, and administrative approval workflows for university student athletes and sports council officials.",
    problem:
      "Paper-based ground bookings and manual email event approvals led to scheduling conflicts, double bookings, and low student participation in university tournaments.",
    constraints: [
      "Dual user personas (Students booking courts vs Admin officials approving tournament requests).",
      "Must clearly reflect real-time facility availability to prevent double bookings.",
    ],
    decisions: [
      {
        title: "Visual Slot Availability Calendar",
        description:
          "Designed an interactive grid calendar showing color-coded booking states (Available, Reserved, Pending Approval) allowing students to reserve slots in under 3 clicks.",
      },
      {
        title: "Role-Based Dashboard Hierarchy",
        description:
          "Constructed distinct dashboard views: Students see active bookings & upcoming matches; Admins receive a streamlined approval queue with instant approve/reject actions.",
      },
    ],
    artifacts: [
      {
        title: "Dashboard & Booking Interface",
        type: "image",
        url: "/img/gallery-3.gif",
        caption: "Interactive sports portal dashboard showcasing tournament management and slot selection.",
      },
    ],
    outcomes: [
      "Eliminated booking conflicts with instant visual slot validation.",
      "Reduced administrative approval processing time through consolidated queue dashboards.",
    ],
    reflections: [
      "Designing complex multi-role workflows demonstrated how thoughtful hierarchy and status badges dramatically lower cognitive load for administrative users.",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
};
