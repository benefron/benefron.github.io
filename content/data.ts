export const hero = {
  name: "Ben Efron, PhD",
  title: "Systems Neuroscientist | Neural Computation & Adaptive Dynamics | Bio-Inspired System Design",
  summary:
    "I study how neural circuits compute and adapt, and translate these principles into strategies for sensing, representation, and closed-loop control. My work bridges population dynamics, biological computation, and the design of adaptive algorithms and systems.",
  ctaPrimary: {
    label: "See Research",
    href: "#research"
  },
  ctaSecondary: {
    label: "Publications",
    href: "#publications"
  }
};

export const focusAreas = [
  {
    title: "Neural Computation & Adaptive Dynamics",
    description: "Leading experimental work studying how neuronal populations process information and adapt in real-time.",
    bullets: [
      "High-density microelectrode array (HD-MEA) recordings from cell cultures",
      "Population-level activity patterns and information encoding",
      "Real-time closed-loop control and feedback systems",
      "Bridging biological insights with computational frameworks"
    ]
  },
  {
    title: "Neuroengineering & Hardware Integration",
    description: "Developing and adapting software for experiment management, data acquisition, and synchronized multi-sensor systems.",
    bullets: [
      "imec HD-MEA system integration and workflow optimization",
      "Open Ephys integration for closed-loop experiments",
      "Collaboration with imec engineering team on neuroscience-focused improvements",
      "Hardware-software co-design for real-time neural interfaces"
    ]
  },
  {
    title: "Neuromorphic Computing & Bio-Inspired AI",
    description: "Translating biological principles into neuromorphic hardware and robotic systems through collaborative projects.",
    bullets: [
      "NEMODAI project: connecting neural recordings to neuromorphic and robotic systems",
      "Primary communication link between imec and University of Liège",
      "Biologically inspired framework for sensory processing and abstraction",
      "Designing algorithms with future neuromorphic implementation in mind"
    ]
  }
];

export const timeline = [
  {
    year: "2024–Present",
    title: "Postdoctoral Researcher",
    org: "Brain-Inspired Computing Lab, University of Liège",
    description:
      "Experimental systems neuroscience and neural data analysis focusing on neural computation and adaptive dynamics. Coordinate with imec engineers to refine recording and closed-loop control systems, mentor students and interns, and translate biological principles into algorithm and system design."
  },
  {
    year: "2017–2024",
    title: "MSc + PhD, Systems Neuroscience",
    org: "Weizmann Institute of Science",
    description:
      "Researched detection and neural encoding of whisker-generated sounds in behaving mice. Built multimodal behavioral-electrophysiology setups and applied statistical models, machine learning classifiers, and neural-behavioral decoding; published in Current Biology and delivered selected international talks."
  },
  {
    year: "2013–2016",
    title: "BSc Psychobiology (Magna cum Laude)",
    org: "Hebrew University + University of Melbourne Exchange",
    description:
      "Excellence program integrating biology, neuroscience, and psychology. Melbourne exchange at the Palmer Lab focused on designing autonomous behavioral experiments and conducting neural and behavioral studies."
  }
];

export const publications = [
  {
    title: "Neural Encoding and Behavioral Detection of Whisker-Generated Sounds in Mice",
    venue: "Current Biology, 2025",
    summary:
      "Efron, B., Ntelezos, A., Katz, Y., & Lampl, I. Neural encoding and behavioral detection of whisker-generated sounds in mice.",
    links: [
      { label: "Paper", href: "https://www.sciencedirect.com/science/article/pii/S0960982225001241" }
    ]
  },
  {
    title: "Object-Specific Neuronal Response during Active Whisking",
    venue: "Batsheva de Rothschild Conference, 2023 — Selected Talk",
    summary: "Efron, B., Katz, Y., & Lampl, I. Object-specific neuronal response during active whisking.",
    links: []
  },
  {
    title: "Auditory Responses to Whisker-Generated Tactile Sounds",
    venue: "BARRELS XXXIII, 2020 — Selected Talk",
    summary: "Efron, B., Katz, Y., & Lampl, I. Auditory responses to whisker-generated tactile sounds.",
    links: []
  },
  {
    title: "miRNA-132 Induces Hepatic Steatosis and Hyperlipidaemia",
    venue: "Gut 67(6):1124–1134 (2018)",
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
  resume: "/documents/CV.pdf"
};

export const mediaFeatures = [
  {
    source: "The Conversation",
    title: "How mice \"listen\" with their whiskers",
    href: "https://theconversation.com/how-mice-listen-with-their-whiskers-257650"
  },
  {
    source: "Times of Israel",
    title: "In breakthrough that may aid blind, Israeli scientists find mice use whiskers to hear",
    href: "https://www.timesofisrael.com/in-breakthrough-that-may-aid-blind-israeli-scientists-find-mice-use-whiskers-to-hear/"
  },
  {
    source: "Ynet",
    title: "Coverage of the whisker-hearing research (Hebrew)",
    href: "https://www.ynet.co.il/environment-science/article/hykdy00zglx"
  }
];

export const projects = [
  {
    name: "Neural Closed-Loop Controller",
    desc: "Real-time closed-loop feedback system for HD-MEA experiments using Open Ephys.",
    tags: ["Python", "Open Ephys", "HD-MEA", "Real-time"],
    href: "https://github.com/benefron"
  },
  {
    name: "Population Dynamics Decoder",
    desc: "Neural-behavioral decoding pipeline for whisker-generated sound experiments.",
    tags: ["Python", "NumPy", "scikit-learn", "Neuroscience"],
    href: "https://github.com/benefron"
  },
  {
    name: "MEA Analysis Toolkit",
    desc: "Modular analysis suite for high-density microelectrode array data.",
    tags: ["Python", "imec", "SpikeInterface", "Bonsai RX"],
    href: "https://github.com/benefron"
  }
];
