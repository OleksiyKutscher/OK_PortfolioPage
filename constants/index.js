
// Header
import EmailIcon from '../src/assets/icons/email.png';
import LinkedInIcon from '../src/assets/icons/logos/linkedin.png';
import GitHubIcon from '../src/assets/icons/logos/github.png';

// Abilities
import AiIcon from '../src/assets/icons/abilities/ai.png';
import WebIcon from '../src/assets/icons/abilities/web.png';
import ArchIcon from '../src/assets/icons/abilities/arch.png';
import CreativeIcon from '../src/assets/icons/abilities/creative.png';
import DataIcon from '../src/assets/icons/abilities/data.png';
import FutureIcon from '../src/assets/icons/abilities/future.png';

// Tech Icons
import PythonIcon from '../src/assets/icons/logos/python.png';
import PyTorchIcon from '../src/assets/icons/logos/pytorch.png';
import TensorFlowIcon from '../src/assets/icons/logos/tensorflow.png';
import PandasIcon from '../src/assets/icons/logos/pandas.png';
import NumPyIcon from '../src/assets/icons/logos/numpy.png';
import DjangoIcon from '../src/assets/icons/logos/django.png';
import CeleryIcon from '../src/assets/icons/logos/celery.png';
import DashPlotlyIcon from '../src/assets/icons/logos/dash_plotly.png';
import JsIcon from '../src/assets/icons/logos/javascript.png';
import AnimeJsIcon from '../src/assets/icons/logos/animejs.png';
import SQLiteIcon from '../src/assets/icons/logos/sqlite.png';
import RedisIcon from '../src/assets/icons/logos/redis.png';
import DockerIcon from '../src/assets/icons/logos/docker.png';
import FigmaIcon from '../src/assets/icons/logos/figma.png';
import PhpIcon from '../src/assets/icons/logos/php.svg?react';
import HtmlIcon from '../src/assets/icons/logos/html.png';
import CssIcon from '../src/assets/icons/logos/css.png';
import SlurmIcon from '../src/assets/icons/logos/slurm.png';
import ReactIcon from '../src/assets/icons/logos/react.svg?react';
import GsapIcon from '../src/assets/icons/logos/gsap.svg?react';
import LenisIcon from '../src/assets/icons/logos/lenis.png';
import MotionIcon from '../src/assets/icons/logos/motion.png';

// Prof Exp
import TokyoTowerImg from '../src/assets/images/prof_exp/kicoetech/tokyo_tower.jpg';
import DroneImg from '../src/assets/images/prof_exp/kicoetech/drone.jpg';
import SpecImg from '../src/assets/images/prof_exp/kicoetech/spec.png';

import BatteryImg from '../src/assets/images/prof_exp/iwf/batteries.jpg';
import BatteryProcessImg from '../src/assets/images/prof_exp/iwf/battery_process.png';

import DanceImg from  '../src/assets/images/prof_exp/dali/dance.png';
import BoatImg from '../src/assets/images/prof_exp/dali/boat.png';
import DaliPageImg from '../src/assets/images/prof_exp/dali/dali_screen2.png';

const isMobile = window.screen.width <= 520;

const navLinks = [
  {
    id: 'abilities',
    title: {
      de: 'Kernkompetenzen',
      en: 'Core Abilities'
    },
  },
  /*{
    id: 'tech',
    title: 'Tech Stack',
  },
  {
    id: 'showcase',
    title: 'Showcase',
  },*/
  {
    id: 'prof-exp',
    title: {
      de: 'Berufliche Erfahrungen',
      en: 'Professional Experience'
    },
  },
  {
    id: 'education',
    title: {
      de: 'Ausbildung',
      en: 'Education'
    },
  },
]


const headerButtonData = [
  {
    /*href: 'mailto:olekisy.kutscher@gmail.com',*/
    userName: 'olekisy.kutscher',
    domainName: 'gmail.com',
    iconUrl: EmailIcon
  },
  {
    href: 'https://linkedin.com/in/oleksiy-kutscher-4303913a4',
    iconUrl: LinkedInIcon
  },
  {
    href: 'https://github.com/OleksiyKutscher',
    iconUrl: GitHubIcon
  },
]

const homeSubTitles = {
  left: {
    de: "AI & ML Experte",
    en: "AI & ML Expert",
  },
  right: {
    de: "Software Entwickler",
    en: "Software Developer"
  }
}

const homeHighlightWords = {
  de: ["kreativer", "proaktiver", "kollaborativer", "agiler", "strategischer"],
  en: ["creative", "proactive", "collaborative", "agile", "strategic"],
}

const abilities = [
  {
    id: 'ai',
    iconUrl: AiIcon,
    title: {
      de: 'AI & Machine Learning',
      en: 'AI & Machine Learning',
    },
    description: {
      de: 'End-to-End-Entwicklung für jede Architektur und Modalität.',
      en: 'End-to-end development of any architecture and modality.'
    },
  },
  {
    id: 'web',
    iconUrl: WebIcon,
    title: {
      de: 'Web- entwicklung',
      en: 'Web Development'
    },
    description: {
      de: 'Entwicklung skalierbarer, performanter Webanwendungen mit modernen Frameworks und Responsive Design.',
      en: 'Building scalable, high-performance web applications with modern frameworks and responsive design.'
    },
  },
  {
    id: 'software',
    iconUrl: ArchIcon,
    title: {
      de: 'Software- architektur',
      en: 'Software Architecture'
    },
    description: {
      de: 'Konzeption nachhaltiger und skalierbarer Systemarchitekturen für komplexe Softwareprojekte.',
      en: 'Designing robust, modular, and maintainable systems tailored for long-term growth and stability.'
    },
  },
  {
    id: 'creative',
    iconUrl: CreativeIcon,
    title: {
      de: 'Kreatives Design',
      en: 'Creative Design'
    },
    description: {
      de: 'Die perfekte Balance zwischen technischer Logik und nutzerzentrierter Ästhetik',
      en: 'Bridging the gap between technical logic and user-centric aesthetics.'
    },
  },
  {
    id: 'data',
    iconUrl: DataIcon,
    title: {
      de: 'Data Solutions',
      en: 'Data Solutions'
    },
    description: {
      de: 'Die Umwandlung von Rohdaten in wertvolle Erkenntnisse mittels effizienter Datenpipelines und moderner Visualisierungen.',
      en: 'Transforming raw data into actionable insights through efficient pipelines and advanced visualization.'
    },
  },
  {
    id: 'future',
    iconUrl: FutureIcon,
    title: {
      de: 'Zukunfts- technologien',
      en: 'Future Technology'
    },
    description: {
      de: 'Wissenschaftliche Erkenntnisse übersetzt in hochperformante Software für reale Anwendungen.',
      en: 'Bridging the gap between experimental research and practical, high-impact business applications.'
    },
  },
]

const wordCloudData = [
  { fontSize: "200", x:"170", y:"203.8", text: "AI"},
  { fontSize: "130", x:"415", y:"246.345", text: "ML"},
  { fontSize: "100", x:"470", y:"402.65", text: "Web"},
  { fontSize: "100", x:"93", y:"479.65", text: "App"},
  { fontSize: "50", x:"238", y:"245.825", text: "Python"},
  { fontSize: "50", x:"50", y:"93.825", text: "GenAI"},
  { fontSize: "50", x:"477", y:"443.825", text: "JavaScript"},
  { fontSize: "40", x:"376", y:"470.827", text: "React"},
  { fontSize: "40", x:"233", y:"418.76", text: "Java"},
  { fontSize: "40", x:"735" /*720*/, y:"532.76", text: "C++"},
  { fontSize: "40", x:"90" /*100*/, y:"543.76", text: "React Native"},
  { fontSize: "30", x:"695", y:"398.247", text: "Frontend"},
  { fontSize: "30", x:"342", y:"432.695", text: "Backend"},
  { fontSize: "30", x:"735", y:"470.695", text: "UI/UX"},
  { fontSize: "30", x:"292", y:"387.695", text: "API"},
  { fontSize: "30", x:"10", y:"327.695", text: "Docker"},
  { fontSize: "30", x:"0", y:"432.695", text: "Robust"},
  { fontSize: "30", x:"185", y:"382.695", text: "Secure"},
  { fontSize: "30", x:"363", y:"356.695", text: "Cloud"},
  { fontSize: "30", x:"39", y:"286.695", text: "Agile"},
  { fontSize: "30", x:"40", y:"511.695", text: "Mobile"},
  { fontSize: "30", x:"352", y:"538.695", text: "Scalable"},
  { fontSize: "30", x:"553", y:"509.695", text: "Full-Stack"},
  { fontSize: "30", x:"755" /*746*/, y:"434.194", text: "Design"},
  { fontSize: "30", x:"63", y:"233.362", text: "Multimodal"},
  { fontSize: "30", x:"495", y:"478.695", text: "JQuery"},
  { fontSize: "30", x:"617", y:"478.695", text: "GSAP"},
  { fontSize: "50", x:"661", y:"327.825", text: "HTML"},
  { fontSize: "50", x:"715", y:"371.825", text: "CSS"},
  { fontSize: "50", x:"363", y:"403.825", text: "SQL"},
  { fontSize: "50", x:"425", y:"513.825", text: "Git"},
  { fontSize: "40", x:"40" /*50*/, y:"390.76", text: "SQLite"},
  { fontSize: "30", x:"287", y:"495.695", text: "Postgres"},
  { fontSize: "30", x:"488", y:"545.695", text: "Object-oriented"},
  { fontSize: "100", x:"112", y:"349.65", text: "Data"},
  { fontSize: "40", x:"376", y:"144.76", text: "PyTorch"},
  { fontSize: "40", x:"683", y:"105.76", text: "Agents"},
  { fontSize: "40", x:"618", y:"208.26", text: "Deep"},
  { fontSize: "40", x:"618", y:"248.26", text: "Learning"},
  { fontSize: "40", x:"736", y:"286.76", text: "W&B"},
  { fontSize: "30", x:"581", y:"175.695", text: "Training"},
  { fontSize: "30", x:"720", y:"185.695", text: "Inference"},
  { fontSize: "30", x:"723", y:"215.695", text: "Clustering"},
  { fontSize: "30", x:"546", y:"141.695", text: "Fine-tuning"},
  { fontSize: "30", x:"508", y:"99.695", text: "PydanticAI"},
  { fontSize: "40", x:"106", y:"129.76", text: "LLM"},
  { fontSize: "40", x:"730", y:"154.76", text: "NLP"},
  { fontSize: "40", x:"370", y:"99.76", text: "Audio"},
  { fontSize: "40", x:"55", y:"165.76", text: "Video"},
  { fontSize: "40", x:"40", y:"201.76", text: "Image"},
  { fontSize: "40", x:"448", y:"281.76", text: "TensorFlow"},
  { fontSize: "40", x:"292", y:"281.76", text: "Pandas"},
  { fontSize: "40", x:"370", y:"320.009", text: "Plotly"},
  { fontSize: "40", x:"515", y:"320.009", text: "Dash"},
  { fontSize: "40", x:"128", y:"274.76", text: "Numpy"},
]

const techMap = {
  python: {
    label: "Python",
    iconUrl: PythonIcon,
  },
  pytorch: {
    label: "PyTorch",
    iconUrl: PyTorchIcon,
  },
  tensorflow: {
    label: "Tensorflow",
    iconUrl: TensorFlowIcon,
  },
  pandas: {
    label: "Pandas",
    iconUrl: PandasIcon,
  },
  numpy: {
    label: "NumPy",
    iconUrl: NumPyIcon,
  },
  django: {
    label: "Django",
    iconUrl: DjangoIcon,
  },
  celery: {
    label: "Celery",
    iconUrl: CeleryIcon,
  },
  dash: {
    label: "Dash",
    iconUrl: DashPlotlyIcon,
  },
  js: {
    label: "JavaScript",
    iconUrl: JsIcon,
  },
  plotlyjs: {
    label: "Plotly.js",
    iconUrl: DashPlotlyIcon,
  },
  animejs: {
    label: "anime.js",
    iconUrl: AnimeJsIcon,
  },
  sqlite: {
    label: "SQLite",
    iconUrl: SQLiteIcon,
  },
  redis: {
    label: "Redis",
    iconUrl: RedisIcon,
  },
  docker: {
    label: "Docker",
    iconUrl: DockerIcon,
  },
  figma: {
    label: "Figma",
    iconUrl: FigmaIcon,
  },
  php: {
    label: "PHP",
    iconUrl: PhpIcon,
  },
  html: {
    label: "HTML",
    iconUrl: HtmlIcon,
  },
  css: {
    label: "CSS",
    iconUrl: CssIcon,
  },
  slurm: {
    label: "Slurm",
    iconUrl: SlurmIcon,
  },
  react: {
    label: "React",
    iconUrl: ReactIcon,
  },
  gsap: {
    label: "GSAP",
    iconUrl: GsapIcon,
  },
  lenis: {
    label: "Lenis Scroll",
    iconUrl: LenisIcon,
  },
  motion: {
    label: "Motion",
    iconUrl: MotionIcon,
  }
}

const expEntryList = [
  {
    location: {
      de: "Tokyo, Japan",
      en: "Tokyo, Japan"
    },
    date: "07/2023 - 09/2023",
    title: {
      de: "KI-Entwickler & Forscher bei Kicoetech (キコエテック) LLC.",
      en: "AI Developer & Researcher at Kicoetech (キコエテック) LLC."
    },
    description: {
      de: [
        "End-to-End-Entwicklung eines neuronalen Netzes für Echtzeit-##*~Drohnen-Audio-Denoising## vom Prototyp bis zur optimierten Inference",
        "Umfassendes ##*~Training und Finetuning von CNN-Modellen## auf Basis von mehreren hundert Stunden Audiomaterial",
        "Implementierung eines Dashboards für Training und Evaluation, inklusive ##*~Live-Experiment-Tracking## und Anbindung an einen lokalen GPU-Cluster"
      ],
      en: [
        "End‑to‑end development of a neural network for real‑time ##*~drone‑audio denoising##, from prototyping to optimized inference",
        "Large‑scale ##*~training and refinement of CNN models## on several hundred hours of audio recordings",
        "Implementation of a training and evaluation dashboard, including ##*~live experiment tracking## and integration with a local GPU cluster"
      ]
    },
    techStack: ["python", "tensorflow", "pandas", "numpy", "django", "celery", "js", "plotlyjs", "redis", "docker", "sqlite", "html", "css"],
    imageData: [
      {
        alt: "Tokyo Tower",
        imgUrl: TokyoTowerImg,
        extraClass: "big-vertical-img",
        /*tribute: "Foto von <a href=\"https://unsplash.com/de/@mattmutluu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Matt Mutlu</a> auf <a href=\"https://unsplash.com/de/fotos/die-spitze-des-eiffelturms-leuchtet-nachts-xn8ZPG6viiw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>\n" +
          "      "*/
      },
      {
        alt: "Drone",
        imgUrl: DroneImg,
        extraClass: "",
        /*tribute: "Foto von <a href=\"https://unsplash.com/de/@kevinchow?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Kevin Chow</a> auf <a href=\"https://unsplash.com/de/fotos/weisser-dji-quadcopter-der-phantom-serie-der-tagsuber-fliegt-9y0U_DEg0XI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>\n" +
          "      "*/
      },
      {
        alt: "spectrogram",
        imgUrl: SpecImg,
        extraClass: "",
      }
    ],
    rightAlign: false,
    extraClass: "",
  },
  {
    location: {
      de: "Braunschweig, Deutschland",
      en: "Braunschweig, Germany"
    },
    date: "05/2021 - 03/2023",
    title: {
      de: "Web-Entwickler am Institut für Werkzeugmaschinen und Fertigungstechnik, TU Braunschweig",
      en: "Web Developer at Institute of Machine Tools and Production Technology, TU Braunschweig"
    },
    description: {
      de: [
        "Im Rahmen des Sim4Pro-Projekts",
        "##*~Full-Stack-Entwicklung## einer Web-Plattform zur Simulation und Analyse nachhaltiger Batteriezellsysteme",
        "Workflow-Optimierung bestehender Simulationen für eine ##*~bessere User Experience## und spürbar kürzere Laufzeiten",
        "##*~Anbindung komplexer numerischer und partikelbasierter Simulationen## mit hunderten Eingabeparametern sowie visuellen Ausgaben wie Histogrammen, Tabellen und 3D-Plots"
      ],
      en: [
        "In the scope of the Sim4Pro project",
        "##*~Front‑ and backend development## of a web‑based platform for running and analyzing simulations of sustainable battery cell systems",
        "Optimization of existing simulation workflows to ##*~improve user experience## and significantly reduce execution time",
        "##*~Integration of complex numerical and particle‑based simulations## with support for hundreds of input parameters and rich visual outputs (histograms, pie charts, large data tables, 3D plots)"
      ]
    },
    techStack: ["python", "django", "celery", "dash", "pandas", "numpy", "js", "html", "css", "redis", "docker", "sqlite"],
    imageData: [
      {
        alt: "Batteries",
        imgUrl: BatteryImg,
        extraClass: "big-horizontal-img",
        /*Foto von <a href="https://unsplash.com/de/@roberto_sorin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Roberto Sorin</a> auf <a href="https://unsplash.com/de/fotos/braune-grune-und-blaue-runde-knopfe-ZZ3qxWFZNRg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>*/
      },
      {
        alt: "battery process",
        imgUrl: BatteryProcessImg,
        extraClass: "big-horizontal-img",
        /*tribute: "Foto von <a href=\"https://unsplash.com/de/@kevinchow?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Kevin Chow</a> auf <a href=\"https://unsplash.com/de/fotos/weisser-dji-quadcopter-der-phantom-serie-der-tagsuber-fliegt-9y0U_DEg0XI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>\n" +
          "      "*/
      }
    ],
    rightAlign: true,
    extraClass: "",
  },
  {
    location: {
      de: "Braunschweig, Deutschland",
      en: "Braunschweig, Germany"
    },
    date: "05/2022 - 08/2022",
    title: {
      de: "Ehrenamtlicher Web-Entwickler für den Kunstverein DALI e.V.",
      en: "Voluntary Web Developer for Art Club DALI e.V."
    },
    description: {
      de: [
        "End-to-End-Entwicklung der Website, vom ##*~Design bis zum Deployment##",
        "Maßgeschneidertes Admin-Panel mit sicherem Login und vollständigen Funktionen für das ##*~Content-Management##",
        "Gewährleistung einer ##*~sauberen, skalierbaren Codebasis## für zukünftige Features und langfristige Wartbarkeit"
      ],
      en: [
        "End‑to‑end development of the website, from ##*~design to deployment##",
        "Custom admin panel with secure login and full ##*~content management## capabilities",
        "Ensured a ##*~clean, scalable codebase## to support future features and long‑term maintainability"
      ]
    },
    techStack: ["python", "django", "js", "animejs", "html", "css", "sqlite", "php", "figma"],
    imageData: [
      {
        alt: "Dance",
        imgUrl: DanceImg,
        extraClass: "",
      },
      {
        alt: "Boat",
        imgUrl: BoatImg,
        extraClass: "",
      },
      {
        alt: "DALI e.V. Web page",
        imgUrl: DaliPageImg,
        extraClass: "big-horizontal-img",
      }
    ],
    rightAlign: false,
    extraClass: "adjust-height",
  }
]

const educationEntryList = [
  {
    date: "10/2022 - 03/2026",
    studyField: {
      de: "Master of Science in Informatik",
      en: "Master of Science in Computer Science"
    },
    location: {
      de: "TU Braunschweig, Deutschland",
      en: "TU Braunschweig, Germany"
    },
    extra: {
      de: "Masterarbeit: Embedding Space Optimization for Language-based Audio Retrieval",
      en: "Master's Thesis: Embedding Space Optimization for Language-based Audio Retrieval"
    }
  },
  {
    date: "10/2023 - 10/2024",
    studyField: {
      de: "Auslandsstudium – Master of Science in Informatik",
      en: "Study Abroad – Master of Science in Computer Science"
    },
    location: {
      de: "Shizuoka University, Hamamatsu, Japan",
      en: "Shizuoka University, Hamamatsu, Japan"
    },
    extra: {
      de: "",
      en: ""
    }
  },
  {
    date: "10/2018 - 11/2022",
    studyField: {
      de: "Bachelor of Science in Informatik",
      en: "Bachelor of Science in Computer Science"
    },
    location: {
      de: "TU Braunschweig, Deutschland",
      en: "TU Braunschweig, Germany"
    },
    extra: {
      de: "Bachelorarbeit: Exploration und Analyse häuslicher Sensordaten durch maschinelle Lernverfahren am Beispiel des BASIS Projektes",
      en: "Bachelor's Thesis: Exploration and analysis of in-home  sensor data using machine learning by example of the  BASIS project"
    }
  },
   {
    date: "2010 - 2018",
    studyField: {
      de: "Abitur",
      en: "General Qualification for University Entrance (Abitur)"
    },
    location: {
      de: "Gymnasium Hoffman-von-Fallersleben-Schule, Braunschweig, Deutschland",
      en: "Gymnasium Hoffman-von-Fallersleben-Schule, Braunschweig, Germany"
    },
    extra: {
      de: "",
      en: ""
    }
  },
]

const footerText = {
  imprint: {
    de: "Impressum",
    en: "Imprint"
  },
  privacy: {
    de: "Datenschutz",
    en: "Privacy Policy"
  },
  tech: {
    de: "Entwickelt mit:",
    en: "Website made using:"
  }
}

const websiteTechStack = [
  "react", "figma", "gsap", "lenis", "motion", "css"
]

const showAnimationMarkers = {
  mainContent: false,
  home: false,
  abilities: false,
  exp: false,
  edu: false,
  footer: false,
};



export {
  navLinks,
  headerButtonData,
  homeSubTitles,
  homeHighlightWords,
  abilities,
  wordCloudData,
  techMap,
  expEntryList,
  educationEntryList,
  footerText,
  websiteTechStack,
  showAnimationMarkers,
  isMobile,
};
