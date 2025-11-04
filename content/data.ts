export const hero = {
  name: "Ben Efron, PhD",
  title: "Systems Neuroscientist | Neural Computation & Adaptive Dynamics | Bio-Inspired System Design",
  summary:
    "I study how neural circuits compute and adapt, and translate these principles into strategies for sensing, representation, and closed-loop control. My work bridges population dynamics, biological computation, and the design of adaptive algorithms and systems.",  ctaPrimary: {
    label: "See Research",
    href: "#research"
  },
  ctaSecondary: {
    label: "Publications",
    href: "#publications"
  }
};

export const stats = [
  { label: "Scope", value: "Neuroscience and tech" },
  { label: "Vision", value: "Biology-informed sensing and adaptive computation" },
  { label: "Tools", value: "Open Source & Automated Workflows" },
  { label: "Experience", value: "7+ years research, experiments & data analysis" }
];

export const focusAreas = [
  {
    title: "Systems Neuroscience",
    description: "Studying how neural populations compute and adapt at the circuit level.",
    bullets: [
      "Population dynamics & coding",
      "Adaptation, context & modulation",
      "Circuit-level computation",
      "Systems-level reasoning"
    ]
  },
  {
    title: "Data & Modeling",
    description:
      "Analyzing multimodal neural, behavioral, and sensory data to uncover structure, encoding strategies, and system-level principles.",
    bullets: [
      "Neural-behavioral decoding & representation analysis",
      "Statistical inference & generative modeling (GLMs, Bayesian methods, bootstrapping)",
      "Machine learning classifiers for population-level signal interpretation",
      "Multimodal time-series alignment (neural, audio, kinematics, video)"
    ]
  },
  {
    title: "Experiment & Integration",
    description: "Building closed-loop and synchronized experimental pipelines.",
    bullets: [
      "Electrophysiology pipelines",
      "Multi-sensor synchronization",
      "Closed-loop experimentation & control",
      "Rapid prototyping (CAD, Arduino, Bonsai RX)"
    ]
  }
];

export const timeline = [
  {
    year: "2024-Present",
    label: "Postdoctoral Researcher, Brain-Inspired Computing Lab (University of Liège)",
    description:
      "Experimental systems neuroscience and neural data analysis focusing on neural computation and adaptive dynamics. Coordinate with imec engineers to refine recording and closed-loop control systems, mentor students and interns, and translate biological principles into algorithm and system design."
  },
  {
    year: "2017-2024",
    label: "MSc + PhD, Systems Neuroscience (Weizmann Institute of Science)",
    description:
      "Researched detection and neural encoding of whisker-generated sounds in behaving mice. Built multimodal behavioral-electrophysiology setups and applied statistical models, machine learning classifiers, and neural-behavioral decoding; published in Current Biology and delivered selected international talks."
  },
  {
    year: "2013-2016",
    label: "BSc Psychobiology (Cum Laude), Hebrew University + University of Melbourne Exchange",
    description:
      "Excellence program integrating biology, neuroscience, and psychology. Melbourne exchange at the Palmer Lab focused on designing autonomous behavioral experiments and conducting neural and behavioral studies."
  }
];

export const publications = [
  {
    title: "Neural Encoding and Behavioral Detection of Whisker-Generated Sounds in Mice",
    venue: "Current Biology (2025)",
    summary:
      "Efron, B., Ntelezos, A., Katz, Y., & Lampl, I. Neural encoding and behavioral detection of whisker-generated sounds in mice.",
    links: [
      { label: "Paper", href: "https://www.sciencedirect.com/science/article/pii/S0960982225001241" }
    ]
  },
  {
    title: "Object-Specific Neuronal Response during Active Whisking",
    venue: "Batsheva de Rothschild Conference - Selected Short Talk (2023)",
    summary: "Efron, B., Katz, Y., & Lampl, I. Object-specific neuronal response during active whisking.",
    links: []
  },
  {
    title: "Auditory Responses to Whisker-Generated Tactile Sounds",
    venue: "BARRELS XXXIII - Selected Short Talk (2020)",
    summary: "Efron, B., Katz, Y., & Lampl, I. Auditory responses to whisker-generated tactile sounds.",
    links: []
  },
  {
    title: "miRNA-132 Induces Hepatic Steatosis and Hyperlipidaemia",
    venue: "Gut 67(6):1124-1134 (2018)",
    summary:
      "Hanin, G., Efron, B., and colleagues. miRNA-132 induces hepatic steatosis and hyperlipidaemia by synergistic multitarget suppression.",
    links: [{ label: "Paper", href: "https://gut.bmj.com/content/67/6/1124" }]
  }
];

export const skills = [
  {
    title: "Systems Neuroscience",
    items: ["Population dynamics & coding", "Adaptation & context modulation", "Circuit-level computation", "Systems-level reasoning"]
  },
  {
    title: "Data & Modeling",
    items: ["Neural-behavioral decoding & representation analysis", "Statistical inference & GLMs", "Machine learning classifiers", "Time-series alignment & decoding"]
  },
  {
    title: "Experiment & Integration",
    items: ["Electrophysiology pipelines", "Multi-sensor synchronization", "Closed-loop experimentation & control", "Rapid prototyping (CAD, Arduino, Bonsai RX)"]
  }
];

export const contact = {
  email: "benefron@gmail.com",
  linkedin: "https://www.linkedin.com/in/ben-efron-b19256b2/",
  github: "https://github.com/benefron",
  resume: "/documents/Profile%20(5).pdf"
};

export const mediaFeatures = [
  {
    title: "The Conversation - How mice \"listen\" with their whiskers",
    href: "https://theconversation.com/how-mice-listen-with-their-whiskers-257650"
  },
  {
    title: "Times of Israel - In breakthrough that may aid blind...",
    href: "https://www.timesofisrael.com/in-breakthrough-that-may-aid-blind-israeli-scientists-find-mice-use-whiskers-to-hear/"
  },
  {
    title: "Ynet (Hebrew) - Coverage of the research",
    href: "https://www.ynet.co.il/environment-science/article/hykdy00zglx"
  }
];
