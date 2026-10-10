// Flexible Case Study Data Contract Schema for Product Design Case Studies

export const caseStudiesData = {
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
