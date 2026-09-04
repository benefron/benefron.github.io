export const hero = {
  name: "Ben Efron, PhD",
  eyebrow: "R&D Engineer · Systems Neuroscientist",
  title:
    "R&D Engineer & Systems Neuroscientist | Biologically Inspired Algorithms, Event-Based Sensing & Real-Time Systems | Neural Data, Statistical Modelling & Applied AI",
  tagline: "Bio-Inspired Algorithms · Event-Based Sensing · Real-Time Systems",
  location: "Leuven, Belgium",
  summary:
    "I study how neural circuits encode and adapt, and I build the systems that test it: sensing hardware, real-time control, the models that run on top, and the statistical analysis that says what the data actually supports.",
  metrics: [
    { value: "9+", label: "Years building instrumentation, algorithms and analysis end to end" },
    { value: "PhD", label: "Systems Neuroscience, Weizmann Institute of Science" },
    { value: "2025", label: "First-author publication in Current Biology" }
  ],
  ctaPrimary: { label: "See the Work", href: "#projects" },
  ctaSecondary: { label: "Get in Touch", href: "#contact" }
};

export const about = {
  heading: ["Research rigour,", "built end to end"],
  paragraphs: [
    "Nine years in systems neuroscience, from an MSc and PhD at the Weizmann Institute to a postdoc at the University of Liège. I design the experiment, build the rig it runs on, write the analysis, and work out what the data will and will not support. My first-author work on whisker-generated sounds appeared in Current Biology in 2025.",
    "The through line now is biologically inspired algorithms and the hardware they run on. Sensory circuits solve a hard engineering problem, moving high-dimensional signals under tight bandwidth, energy and delay budgets. I borrow the parts of that solution that survive contact with real constraints, and I build the systems that test whether they hold.",
    "I reuse what already exists and build only what has to be built, and I move into new domains on purpose: electrophysiology to PyTorch, control theory to LLM pipelines, and back again. Throughout, I would rather report a smaller result I can defend than a larger one I cannot."
  ],
  skillGroups: [
    {
      title: "Neuroscience & experiment",
      items: ["Systems and computational neuroscience", "Electrophysiology, in vivo and in vitro HD-MEA", "Sensory encoding and population coding", "Experimental design and controls", "Spike sorting (Kilosort, SpikeInterface)"]
    },
    {
      title: "Data & statistical modelling",
      items: ["GLMs, mixed models, statistical inference", "Neural decoding and representation analysis", "State-space, spiking and Bayesian models", "Classifiers, cross-validation, permutation tests", "Time-series alignment, dimensionality reduction"]
    },
    {
      title: "Systems & software engineering",
      items: ["Python, PyTorch, MATLAB", "Real-time closed-loop control", "Multi-sensor synchronisation", "Custom PCB design, Arduino, NI DAQ", "LLM pipelines and agentic systems"]
    }
  ]
};

export const focusQuestion = {
  eyebrow: "Open question",
  question:
    "Can an event-driven, sparse Bayesian decoder reconstruct a high-dimensional sensor field from a dual-timescale spiking code, and in what regime does that inversion hold or break?",
  framing:
    "The bet behind it is that principles taken from how sensory circuits encode and adapt produce better algorithms and better hardware, not just better metaphors. Biologically inspired computation as an engineering discipline rather than a motivational framing."
};

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
      "Hardware and software co-design for real-time interfaces"
    ]
  }
];


export interface Metric { label: string; value: string }
export type ProjectMetric = Metric;
export interface ProjectLink { label: string; href: string; kind: "live" | "source" }
export interface ProjectDetail { summary?: string; specs: Metric[] }
export interface ProjectFigure {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}
export interface ProjectMedia {
  figures?: ProjectFigure[];
  clip?: { src: string; poster: string; width: number; height: number; caption: string };
  credit?: string;
}

export interface Project {
  name: string;
  period: string;
  org: string;
  claim: string;
  desc: string;
  detail?: ProjectDetail;
  metrics: Metric[];
  stack: string[];
  links: ProjectLink[];
  status: "private" | "open-source" | "live";
  media?: ProjectMedia;
  layout?: "standard" | "featured";
}

export const projects: Project[] = [
  {
    name: "Spike-Gated Event-Driven State Estimation",
    period: "Jan 2025 – Present",
    org: "Brain-Inspired Computing Lab, ULiège",
    layout: "featured",
    claim:
      "A filter that only computes where a spike says something has changed, so the cost of tracking a full sensor field scales with activity instead of grid size.",
    desc:
      "Sparse, asynchronous spike events from a dual-timescale encoder steer both where the decoder spends computation and how much it trusts each input. That makes full-field state estimation cheap enough to be a realistic target for embedded and accelerator hardware, and it is the current scientific project as well as the engineering one.",
    detail: {
      summary:
        "Restructuring the covariance into independent per-cell blocks makes the update linear in receptive-field size and removes matrix inversion and square roots from the hot path. The saving is in operations, not wall clock: the reference implementation is interpreter-bound, so gating performs fewer operations while running no faster on a laptop. The headroom is what matters for hardware.",
      specs: [
        { label: "Per-cell update", value: "O(K) in receptive-field size" },
        { label: "State memory, 80×80 grid", value: "~200 KB" },
        { label: "Arithmetic per step", value: "~4.7 × 10⁵ FLOPs" },
        { label: "Gating reduces updates by", value: "2.1× to 7.6×" },
        { label: "Cost of that gating", value: "7% to 24% higher error" },
        { label: "Real time at 1 kHz needs", value: "468 MFLOP/s" }
      ]
    },
    metrics: [
      { label: "Compute scales with", value: "Activity, not grid size" },
      { label: "Update cost", value: "Linear in receptive field" }
    ],
    stack: ["State Estimation", "Event-Driven", "PyTorch", "Signal Processing"],
    links: [],
    status: "private",
    media: {
      figures: [
        {
          src: "/images/spike-gated-pipeline.png",
          alt: "Pipeline diagram: stimulus, dual-timescale encoder, spikes, spike-gated decoder, reconstruction.",
          width: 1600,
          height: 554,
          caption: "The pipeline, from stimulus through the spiking encoder to the gated decoder."
        }
      ],
      clip: {
        src: "/video/spike-gated-reconstruction.mp4",
        poster: "/images/spike-gated-poster.jpg",
        width: 960,
        height: 720,
        caption:
          "Reconstruction of a ramp-and-hold contact from spikes alone. Preliminary: rendered at a configuration since superseded, with hand-tuned rather than optimised receptive fields."
      }
    }
  },
  {
    name: "Closed-Loop Control on High-Density Arrays",
    period: "Aug 2024 – Present",
    org: "Brain-Inspired Computing Lab, ULiège, with imec",
    claim:
      "Making a research recording platform capable of closed-loop experiments it was not originally built to run.",
    desc:
      "I am the technical interface to the imec engineering team on the NEMODAI project. My work is on the platform itself: exposing synchronisation with external devices, extending the API so closed-loop control is possible at all, keeping data streaming stably enough for online computation, and making recordings repeatable without restarting the system between runs. Much of it is finding the workable solution rather than the optimal one, with imec's engineering and scientific staff.",
    detail: {
      summary:
        "The underlying platform records 1024 channels at 30 kHz. The engineering contribution is what sits around that: external device synchronisation, an API extended for closed-loop use, and control from Python deep enough to drive an experiment end to end.",
      specs: [
        { label: "Closed-loop latency", value: "Sub-millisecond" },
        { label: "Platform", value: "1024 channels at 30 kHz" },
        { label: "Control surface", value: "Python API, external device sync" }
      ]
    },
    metrics: [
      { label: "Role", value: "Primary imec technical interface" },
      { label: "Enabled", value: "Closed-loop experiments" }
    ],
    stack: ["Closed-Loop Control", "HD-MEA", "PyQt5", "API Design"],
    links: [],
    status: "private"
  },
  {
    name: "Multimodal Acquisition Platform",
    period: "2017 – 2024",
    org: "Weizmann Institute of Science",
    layout: "featured",
    claim:
      "The rig behind my Current Biology paper, built from scratch: custom electronics, six sensor streams, and everything aligned tightly enough to trust the result.",
    desc:
      "We asked whether whisking against an object makes a sound, and whether a mouse can hear it. It does, and they can. In animals whose touch sensation had been removed, auditory cortex activity still tracked whisking against objects; object identity could be decoded from that activity; and that decoding matched what the simultaneously recorded sound predicted. Trained mice then identified objects from the sound alone. I designed the hypothesis and experiments with Ilan Lampl, ran the behavioural and electrophysiological work, carried the analysis and wrote the paper.",
    detail: {
      summary:
        "An Arduino acted as timing master over a custom PCB synchronising every stream. I wrote the real-time processing on top and traced the analogue noise that high-sensitivity recording exposes.",
      specs: [
        { label: "Cross-sensor sync", value: "Sub-millisecond, six streams" },
        { label: "Video", value: "400 fps" },
        { label: "Audio", value: "125 kHz" },
        { label: "Electrophysiology", value: "30 kHz" },
        { label: "Recorded units", value: "200+" }
      ]
    },
    metrics: [
      { label: "Built", value: "Hardware through analysis" },
      { label: "Result", value: "Current Biology, 2025" }
    ],
    stack: ["Custom PCB", "Arduino", "Bonsai", "NI DAQ", "Signal Integrity"],
    links: [
      { label: "Behavioural task", href: "https://github.com/benefron/Detection_task", kind: "source" }
    ],
    status: "open-source",
    media: {
      figures: [
        {
          src: "/images/whisker-experiment.jpg",
          alt: "Experimental setup: head-fixed mouse on a treadmill, ultrasonic microphone, high-speed whisker camera, multi-electrode probe in auditory cortex, and the three presented objects.",
          width: 1400,
          height: 1278,
          caption: "The setup: six synchronised streams around a head-fixed mouse, with the infraorbital nerve severed so touch could not explain the result."
        },
        {
          src: "/images/whisker-neural-data.jpg",
          alt: "Recorded traces: two auditory cortex units, the simultaneously recorded sound, and whisking amplitude, shaded by which object was presented.",
          width: 1400,
          height: 899,
          caption: "Auditory cortex firing tracks whisking against an object, alongside the sound it produced."
        }
      ],
      credit: "Figures from Efron et al., Current Biology 35(6), 2025."
    }
  },
  {
    name: "SensoryForge",
    period: "2024 – Present",
    org: "Brain-Inspired Computing Lab, ULiège",
    claim:
      "An open-source environment for designing sensory encoding pipelines, from a stimulus through to the spikes a population would produce.",
    desc:
      "Built on PyTorch and extensible by design. Users define sensory spaces, filters and receptive fields, stack neuronal layers, and describe new neuron models through an equation DSL without writing code. Batch runs generate datasets for training and hypothesis testing. It grew out of the event-based estimation work and was extracted into its own repository once it became useful on its own.",
    metrics: [
      { label: "Channel compression", value: "6,400 to 392" },
      { label: "Interfaces", value: "GUI, CLI, YAML" }
    ],
    stack: ["PyTorch", "Open Source", "Spiking Models", "Simulation"],
    links: [{ label: "Source", href: "https://github.com/benefron/sensoryforge", kind: "source" }],
    status: "open-source"
  },
  {
    name: "Retrieval and LLM Enrichment Pipeline",
    period: "Aug 2026 – Present",
    org: "Personal project",
    claim:
      "A weekly pipeline that collects local events, has a language model classify them against a strict schema, then checks its own work before publishing anything.",
    desc:
      "Events come from a public open-data API and a set of venue scrapers, are geocoded, and are classified against a strict JSON schema. A second pass verifies the enriched output before publication, an enrichment cache means only new or changed records cost tokens, and the run aborts without overwriting live data if the sources return nothing. Python pipeline with a React and TypeScript front end.",
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

export type PublicationType = "paper" | "talk" | "upcoming" | "fellowship";
export interface PublicationLink { label: string; href: string }
export interface Publication {
  type: PublicationType;
  title: string;
  authors: string;
  venue: string;
  detail?: string;
  year: number;
  summary?: string;
  links: PublicationLink[];
}

export const publicationTypeLabel: Record<PublicationType, string> = {
  paper: "Paper",
  talk: "Talk",
  upcoming: "Upcoming",
  fellowship: "Fellowship"
};

export function formatCitation(pub: Publication): string {
  return `${pub.authors} (${pub.year}). ${pub.title}. ${pub.venue}${pub.detail ? `, ${pub.detail}` : ""}.`;
}

export const publications: Publication[] = [
  {
    type: "upcoming",
    title: "Sparse event-based communication and decoding of spatiotemporal stimuli",
    authors: "Efron, B., Drion, G., Sacré, P., & Franci, A.",
    venue: "Neuromorphic Computing Netherlands",
    detail: "accepted, Maastricht, 20 October 2026",
    year: 2026,
    links: []
  },
  {
    type: "talk",
    title: "Biologically inspired sparse event-based communication and decoding of spatiotemporal stimuli",
    authors: "Efron, B., Drion, G., Sacré, P., & Franci, A.",
    venue: "Benelux Meeting on Systems and Control",
    detail: "selected talk, March 2026",
    year: 2026,
    links: []
  },
  {
    type: "paper",
    title: "Detection and neural encoding of whisker-generated sounds in mice",
    authors: "Efron, B., Ntelezos, A., Katz, Y., & Lampl, I.",
    venue: "Current Biology",
    detail: "35(6), DOI 10.1016/j.cub.2025.01.061",
    year: 2025,
    summary:
      "Whisking against an object produces audible sound, and mice can use it. Object identity could be decoded from auditory cortex activity in animals without touch sensation, and trained mice identified objects from the sound alone.",
    links: [
      { label: "Paper", href: "https://www.sciencedirect.com/science/article/pii/S0960982225001241" },
      { label: "ResearchGate", href: "https://www.researchgate.net/publication/389151310_Detection_and_neural_encoding_of_whisker-generated_sounds_in_mice" }
    ]
  },
  {
    type: "talk",
    title: "Competition and timescale separation in calcium-based plasticity",
    authors: "Bainier, G., Efron, B., & Franci, A.",
    venue: "COSYNE",
    detail: "peer-reviewed abstract",
    year: 2025,
    links: []
  },
  {
    type: "fellowship",
    title: "Postdoctoral Excellence Scholarship",
    authors: "Efron, B.",
    venue: "Wallonia-Brussels International",
    detail: "awarded 2025, renewed 2026 to 2027",
    year: 2025,
    links: []
  }
];

export const timeline = [
  {
    year: "2024–Present",
    title: "Postdoctoral Researcher",
    org: "Brain-Inspired Computing Lab, University of Liège",
    description:
      "Biologically inspired algorithms and the systems they run on, with imec as the hardware partner. Funded by a Wallonia-Brussels International Postdoctoral Excellence Scholarship."
  },
  {
    year: "2017–2024",
    title: "MSc and PhD, Systems Neuroscience",
    org: "Weizmann Institute of Science",
    description:
      "Detection and neural encoding of whisker-generated sounds in behaving mice, from the multimodal recording platform through to the statistics. Published in Current Biology."
  },
  {
    year: "2013–2016",
    title: "BSc Psychobiology, Magna cum Laude",
    org: "Hebrew University and University of Melbourne exchange",
    description:
      "Excellence programme integrating biology, neuroscience and psychology, with an exchange year at the Palmer Lab in Melbourne."
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
  { name: "sensoryforge", desc: "Sensory encoding simulation environment: PyTorch, GUI and CLI", href: "https://github.com/benefron/sensoryforge" },
  { name: "Detection_task", desc: "The behavioural experiment behind the Current Biology paper", href: "https://github.com/benefron/Detection_task" },
  { name: "Neuropixel-experiment", desc: "Closed-loop multisensory rig: Bonsai, Teensy, NI DAQ synchronisation", href: "https://github.com/benefron/Neuropixel-experiment" },
  { name: "what2do_weekwnd", desc: "Retrieval and LLM enrichment pipeline feeding a React PWA", href: "https://github.com/benefron/what2do_weekwnd" }
];

export const contact = {
  email: "benefron@gmail.com",
  linkedin: "https://www.linkedin.com/in/ben-efron-phd-b19256b2/",
  github: "https://github.com/benefron",
  scholar: "https://scholar.google.com/citations?user=2pXZDx0AAAAJ&hl=en",
  orcid: "https://orcid.org/0009-0006-5875-6056"
};
