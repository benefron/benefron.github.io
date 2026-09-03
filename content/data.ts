export const hero = {
  name: "Ben Efron, PhD",
  eyebrow: "Systems Neuroscientist · R&D Engineer",
  title:
    "Systems Neuroscientist & R&D Engineer | Neural Computation, Electrophysiology & Statistical Modelling | Real-Time Systems, Hardware-Software Co-Design & Applied AI",
  tagline: "Neural Computation · Data & Statistical Modelling · Real-Time Systems · Applied AI",
  location: "Leuven, Belgium",
  summary:
    "I study how neural circuits encode and adapt, and I build the systems that test it: sensing hardware, real-time control, the models that run on top, and the statistical analysis that says what the data actually supports.",
  ctaPrimary: { label: "See the Work", href: "#research" },
  ctaSecondary: { label: "Get in Touch", href: "#contact" }
};

export const about = {
  heading: ["Research rigor,", "built end to end"],
  paragraphs: [
    "Nine years in systems neuroscience, from an MSc and PhD at the Weizmann Institute to a postdoc at the University of Liège: designing experiments, recording from neural populations, and working out what the data will and will not support. My first-author work on whisker-generated sounds appeared in Current Biology in 2025 and was picked up internationally.",
    "I also build what the research needs, end to end. Custom acquisition hardware synchronised to sub-millisecond precision, real-time closed-loop control on high-density electrode arrays, and the encoding and estimation algorithms that run on the data. I reuse what already exists and build only what has to be built.",
    "That combination travels. I move into new domains and stacks on purpose, most recently applied AI: LLM pipelines and agentic systems, held to the same standards of evidence as anything else I do."
  ],
  tags: [
    "Systems Neuroscience",
    "Neural Data Analysis",
    "Statistical Modelling",
    "Electrophysiology & HD-MEA",
    "Real-Time & Closed-Loop Systems",
    "Applied AI & LLM Pipelines"
  ],
  metrics: [
    { value: "9+", label: "Years in systems neuroscience, MSc through postdoc" },
    { value: "PhD", label: "Systems Neuroscience, Weizmann Institute of Science" },
    { value: "2025", label: "First-author publication in Current Biology" }
  ]
};

export const principles = [
  {
    title: "Evidence before claims",
    body:
      "Controls, error bars and alternative hypotheses are not a final step. I would rather report a smaller result I can defend than a larger one I cannot, and I say plainly where a method stops working."
  },
  {
    title: "Data and modelling",
    body:
      "Fitting the model the question calls for rather than the fashionable one: GLMs and mixed models, neural decoding, state-space and spiking models, classifiers with honest cross-validation, and Bayesian estimation where the uncertainty matters."
  },
  {
    title: "Domain knowledge is part of the engineering",
    body:
      "Knowing how sensory circuits actually encode information is what makes the algorithms and the recording systems good. The biology is not decoration on top of the engineering, it is an input to it."
  },
  {
    title: "End-to-end ownership",
    body:
      "Hardware through analysis. The acquisition platform behind my PhD was mine from the custom PCB and the Arduino timing master to the statistics in the published paper."
  },
  {
    title: "Practical over maximal",
    body:
      "I reuse what exists and build only what has to be built. My job-search agent runs on a local scheduled agent rather than hosted CI, because that keeps private data off a public repository and costs nothing to operate."
  },
  {
    title: "Deliberate range",
    body:
      "New domains and stacks on purpose, and back again: electrophysiology to PyTorch, control theory to LLM pipelines, wet lab to production deployment. The last year added agentic systems and a React PWA front end."
  }
];

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  kind: "live" | "source";
}

export interface Project {
  name: string;
  period: string;
  org: string;
  desc: string;
  metrics: ProjectMetric[];
  stack: string[];
  links: ProjectLink[];
  status: "private" | "open-source" | "live";
}

export const projects: Project[] = [
  {
    name: "Agentic Job-Search Pipeline",
    period: "Aug 2026 – Present",
    org: "Personal project",
    desc:
      "A multi-stage LLM agent that runs unattended. It scrapes postings from LinkedIn, Indeed and target career pages, then pushes each one through a cost-tiered funnel: free regex filters and a local model settle the easy cases, and larger models are spent only where the decision is genuinely expensive. It publishes a ranked dashboard with email alerts, and calibrates itself from recorded feedback within bounds enforced in code rather than requested in a prompt. Runs on a local scheduled agent instead of hosted CI, which keeps the private profile and outcome data off the repository.",
    metrics: [
      { label: "Scoring stages", value: "6, cost-tiered" },
      { label: "Self-calibration", value: "Clamped in code" }
    ],
    stack: ["LLM Agents", "Python", "SQLite", "Pipeline Design"],
    links: [{ label: "Live dashboard", href: "https://benefron.github.io/job-search-agent/", kind: "live" }],
    status: "private"
  },
  {
    name: "Spike-Gated Event-Driven State Estimation",
    period: "Jan 2025 – Present",
    org: "Neuroengineering Lab, ULiège",
    desc:
      "An event-driven Kalman filter in which sparse, asynchronous spike events gate where and when computation happens. Restructuring the covariance into independent blocks makes the per-cell update O(K) in receptive-field size and removes matrix inversion, Cholesky and square roots from the hot path, so the state for an 80x80 grid fits in roughly 200 KB and fixed-point arithmetic is sufficient. That is what makes it tractable for embedded and accelerator implementation.",
    metrics: [
      { label: "Temporal correlation", value: "0.79 to 0.81" },
      { label: "State memory, 80x80", value: "~200 KB" }
    ],
    stack: ["State Estimation", "Event-Driven", "PyTorch", "Real-Time"],
    links: [],
    status: "private"
  },
  {
    name: "Multimodal Acquisition Platform",
    period: "2017 – 2024",
    org: "Weizmann Institute of Science",
    desc:
      "Built from scratch for my doctoral work: an Arduino timing master and a custom PCB synchronising NI DAQ hardware, 400 fps cameras, 125 kHz audio, rotary encoders, motors and capacitive touch sensors to sub-millisecond precision. I wrote the real-time processing that ran on top of it, diagnosed the analog noise that high-sensitivity recording exposes, and carried the resulting data through to a first-author paper.",
    metrics: [
      { label: "Cross-sensor sync", value: "Sub-millisecond" },
      { label: "Recorded units", value: "200+" }
    ],
    stack: ["Custom PCB", "Arduino", "Bonsai RX", "NI DAQ", "Signal Integrity"],
    links: [
      { label: "Control system", href: "https://github.com/benefron/Neuropixel-experiment", kind: "source" },
      { label: "Behavioural task", href: "https://github.com/benefron/Detection_task", kind: "source" }
    ],
    status: "open-source"
  },
  {
    name: "NEMODAI Closed-Loop Control",
    period: "Aug 2024 – Present",
    org: "Neuroengineering Lab, ULiège",
    desc:
      "Driving cultured neuronal networks toward defined functional states on a high-density electrode array, which gives network-wide readout alongside fine-grained stimulation. I am the technical interface to the imec engineering team, translating experimental requirements into API workflows and streaming specifications for low-latency acquisition and online computation.",
    metrics: [
      { label: "Acquisition", value: "1024 ch at 30 kHz" },
      { label: "Closed-loop latency", value: "Sub-millisecond" }
    ],
    stack: ["Closed-Loop Control", "HD-MEA", "PyQt5", "imec Co-design"],
    links: [],
    status: "private"
  },
  {
    name: "SensoryForge",
    period: "Jun 2024 – Present",
    org: "Neuroengineering Lab, ULiège",
    desc:
      "An open-source environment for designing sensory encoding pipelines, from stimulus generation through response on a sensory space to translation into spiking populations. Built on PyTorch and extensible by design: users define sensory spaces, custom filters and receptive fields, stack neuronal layers, and describe new neuron models through an equation DSL without writing code. Batch runs generate datasets for training and hypothesis testing.",
    metrics: [
      { label: "Channel compression", value: "6,400 to 400" },
      { label: "Interfaces", value: "GUI, CLI, YAML" }
    ],
    stack: ["PyTorch", "Open Source", "Spiking Models", "Signal Processing"],
    links: [{ label: "Source", href: "https://github.com/benefron/sensoryforge", kind: "source" }],
    status: "open-source"
  },
  {
    name: "Retrieval and LLM Enrichment Pipeline",
    period: "Aug 2026 – Present",
    org: "Personal project",
    desc:
      "A weekly pipeline that aggregates events from a public open-data API and a set of venue scrapers, geocodes them, and has an LLM classify each record against a strict JSON schema. A second pass verifies the enriched output before anything is published, an enrichment cache means only new or changed records cost tokens, and the run aborts without overwriting live data if the sources return nothing. Python pipeline with a React and TypeScript PWA front end.",
    metrics: [
      { label: "LLM passes", value: "Enrich, then verify" },
      { label: "Failure mode", value: "Abort, never overwrite" }
    ],
    stack: ["Structured Output", "Retrieval", "React / PWA", "GitHub Actions"],
    links: [
      { label: "Live app", href: "https://benefron.github.io/what2do_weekwnd/", kind: "live" },
      { label: "Source", href: "https://github.com/benefron/what2do_weekwnd", kind: "source" }
    ],
    status: "live"
  }
];

export const focusAreas = [
  {
    title: "Neural Computation & Adaptive Dynamics",
    description:
      "Experimental work on how neuronal populations process information and adapt in real time.",
    bullets: [
      "High-density microelectrode array recordings from cell cultures",
      "Population-level activity patterns and information encoding",
      "Real-time closed-loop control and feedback",
      "Connecting biological findings to computational frameworks"
    ]
  },
  {
    title: "Neuroengineering & Hardware Integration",
    description:
      "Software and interfaces for experiment management, acquisition, and synchronised multi-sensor systems.",
    bullets: [
      "imec HD-MEA integration and workflow design",
      "Open Ephys integration for closed-loop experiments",
      "Requirements and API specification with the imec engineering team",
      "Hardware-software co-design for real-time interfaces"
    ]
  },
  {
    title: "Bio-Inspired Algorithms & Neuromorphic Systems",
    description:
      "Turning principles from sensory biology into algorithms that are cheap enough to run at the edge.",
    bullets: [
      "NEMODAI: linking neural recordings to neuromorphic and robotic systems",
      "Sparse, event-driven encoding and estimation",
      "Primary technical link between imec and the University of Liège",
      "Designing for embedded implementation from the start"
    ]
  }
];

export const skills = [
  {
    title: "Neuroscience & Experiment",
    items: [
      "Systems and computational neuroscience",
      "Electrophysiology: in vivo and in vitro HD-MEA",
      "Sensory encoding and population coding",
      "Experimental design, controls, hypothesis testing",
      "Spike sorting (Kilosort, SpikeInterface)"
    ]
  },
  {
    title: "Data & Statistical Modelling",
    items: [
      "GLMs, mixed models, statistical inference",
      "Neural decoding and representation analysis",
      "State-space, spiking and Bayesian models",
      "Classifiers, cross-validation, permutation tests",
      "Time-series alignment, dimensionality reduction"
    ]
  },
  {
    title: "Systems & Software Engineering",
    items: [
      "Python, PyTorch, MATLAB",
      "Real-time closed-loop control",
      "Multi-sensor synchronisation, sub-millisecond",
      "Custom PCB design, Arduino, NI DAQ",
      "LLM pipelines and agentic systems"
    ]
  }
];

export const timeline = [
  {
    year: "2024–Present",
    title: "Postdoctoral Researcher",
    org: "Brain-Inspired Computing Lab, University of Liège",
    description:
      "Experimental systems neuroscience and neural data analysis, focused on neural computation and adaptive dynamics. I coordinate with imec engineers on recording and closed-loop control systems, mentor students and interns, and translate biological principles into algorithm and system design."
  },
  {
    year: "2017–2024",
    title: "MSc + PhD, Systems Neuroscience",
    org: "Weizmann Institute of Science",
    description:
      "Researched detection and neural encoding of whisker-generated sounds in behaving mice. Built multimodal behavioural and electrophysiology setups from scratch, and applied statistical models, machine learning classifiers, and neural-behavioural decoding. Published in Current Biology with selected international talks."
  },
  {
    year: "2013–2016",
    title: "BSc Psychobiology (Magna cum Laude)",
    org: "Hebrew University + University of Melbourne Exchange",
    description:
      "Excellence program integrating biology, neuroscience, and psychology. The Melbourne exchange at the Palmer Lab focused on designing autonomous behavioural experiments and running neural and behavioural studies."
  }
];

export const publications = [
  {
    title: "Detection and neural encoding of whisker-generated sounds in mice",
    venue: "Current Biology 35(6), 2025",
    summary:
      "Efron, B., Ntelezos, A., Katz, Y., & Lampl, I. Detection and neural encoding of whisker-generated sounds in mice. DOI: 10.1016/j.cub.2025.01.061",
    links: [
      { label: "Paper", href: "https://www.sciencedirect.com/science/article/pii/S0960982225001241" },
      { label: "ResearchGate", href: "https://www.researchgate.net/publication/389151310_Detection_and_neural_encoding_of_whisker-generated_sounds_in_mice" }
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

export const otherRepos = [
  { name: "what2do_weekwnd", desc: "Retrieval and LLM enrichment pipeline with a verification pass, feeding a React PWA", href: "https://github.com/benefron/what2do_weekwnd" },
  { name: "scientific-publications", desc: "Agent and prompt workspace for editing scientific writing", href: "https://github.com/benefron/scientific-publications" },
  { name: "Neuropixel-experiment", desc: "Multi-modal electrophysiology and behaviour: Bonsai, Arduino, system sync, real-time movement ID, FSM", href: "https://github.com/benefron/Neuropixel-experiment" },
  { name: "Detection_task", desc: "Complete code for the behavioural detection experiment behind the Current Biology paper", href: "https://github.com/benefron/Detection_task" },
  { name: "learning_protocol", desc: "Draft and GUI demo for running learning protocols on HD-MEA", href: "https://github.com/benefron/learning_protocol" },
  { name: "Electrode-view", desc: "Maps electrodes to streamed HD-MEA data across three coordinate systems", href: "https://github.com/benefron/Electrode-view" },
  { name: "Counter", desc: "GUI for tracking the position of a precision 4-axis manipulator", href: "https://github.com/benefron/Counter" },
  { name: "Arduino_Codes", desc: "Arduino sketches for running experiments", href: "https://github.com/benefron/Arduino_Codes" }
];

export const contact = {
  email: "benefron@gmail.com",
  linkedin: "https://www.linkedin.com/in/ben-efron-phd-b19256b2/",
  github: "https://github.com/benefron"
};
