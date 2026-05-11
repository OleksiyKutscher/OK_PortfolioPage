const navLinks = [
  {
    id: 'about-me',
    title: 'About Me',
  },
  {
    id: 'tech',
    title: 'Tech Stack',
  },
  {
    id: 'showcase',
    title: 'Showcase',
  },
  {
    id: 'prof-exp',
    title: 'Professional Experience',
  },
  {
    id: 'education',
    title: 'Education',
  },
]

const headerButtonData = [
  {
    /*href: 'mailto:olekisy.kutscher@gmail.com',*/
    userName: 'olekisy.kutscher',
    domainName: 'gmail.com',
    iconUrl: 'src/assets/icons/email.png'
  },
  {
    href: 'https://linkedin.com/in/oleksiy-kutscher-4303913a4',
    iconUrl: 'src/assets/icons/logos/linkedin.png'
  },
  {
    href: 'https://github.com/OleksiyKutscher',
    iconUrl: 'src/assets/icons/logos/github.png'
  },
]

const abilities = [
  {
    id: 'ai',
    iconUrl: '/src/assets/icons/abilities/ai.png',
    title: 'AI & Machine Learning',
    description: 'End-to-end development of any architecture and modality.',
  },
  {
    id: 'web',
    iconUrl: '/src/assets/icons/abilities/web.png',
    title: 'Web Development',
    description: 'Building scalable, high-performance web applications with modern frameworks and responsive design.',
  },
  {
    id: 'software',
    iconUrl: '/src/assets/icons/abilities/arch.png',
    title: 'Software Architecture',
    description: 'Designing robust, modular, and maintainable systems tailored for long-term growth and stability.',
  },
  {
    id: 'creative',
    iconUrl: '/src/assets/icons/abilities/creative.png',
    title: 'Creative Design',
    description: 'Bridging the gap between technical logic and user-centric aesthetics',
  },
  {
    id: 'data',
    iconUrl: '/src/assets/icons/abilities/data.png',
    title: 'Data Solutions',
    description: 'Transforming raw data into actionable insights through efficient pipelines and advanced visualization.',
  },
  {
    id: 'future',
    iconUrl: '/src/assets/icons/abilities/future.png',
    title: 'Future Technology',
    description: 'Bridging the gap between experimental research and practical, high-impact business applications.',
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
    iconUrl: "/src/assets/icons/logos/python.png",
  },
  pytorch: {
    label: "PyTorch",
    iconUrl: "/src/assets/icons/logos/pytorch.png",
  },
  tensorflow: {
    label: "Tensorflow",
    iconUrl: "/src/assets/icons/logos/tensorflow.png",
  },
  pandas: {
    label: "Pandas",
    iconUrl: "/src/assets/icons/logos/pandas.png",
  },
  numpy: {
    label: "NumPy",
    iconUrl: "/src/assets/icons/logos/numpy.png",
  },
  django: {
    label: "Django",
    iconUrl: "/src/assets/icons/logos/django.png",
  },
  celery: {
    label: "Celery",
    iconUrl: "/src/assets/icons/logos/celery.png",
  },
  dash: {
    label: "Dash",
    iconUrl: "/src/assets/icons/logos/dash_plotly.png",
  },
  js: {
    label: "JavaScript",
    iconUrl: "/src/assets/icons/logos/javascript.png",
  },
  plotlyjs: {
    label: "Plotly.js",
    iconUrl: "/src/assets/icons/logos/dash_plotly.png",
  },
  animejs: {
    label: "anime.js",
    iconUrl: "/src/assets/icons/logos/animejs.png",
  },
  sqlite: {
    label: "SQLite",
    iconUrl: "/src/assets/icons/logos/sqlite.png",
  },
  redis: {
    label: "Redis",
    iconUrl: "/src/assets/icons/logos/redis.png",
  },
  docker: {
    label: "Docker",
    iconUrl: "/src/assets/icons/logos/docker.png",
  },
  figma: {
    label: "Figma",
    iconUrl: "/src/assets/icons/logos/figma.png",
  },
  php: {
    label: "PHP",
    iconUrl: "/src/assets/icons/logos/php.svg?react",
  },
  html: {
    label: "HTML",
    iconUrl: "/src/assets/icons/logos/html.png",
  },
  css: {
    label: "CSS",
    iconUrl: "/src/assets/icons/logos/css.png",
  },
  slurm: {
    label: "Slurm",
    iconUrl: "/src/assets/icons/logos/slurm.png",
  },
  react: {
    label: "React",
    iconUrl: "/src/assets/icons/logos/react.svg",
  }
}

const expEntryList = [
  {
    location: "Tokyo, Japan",
    date: "07/2023 - 09/2023",
    title: "AI Developer & Researcher at Kicoetech (キコエテック) LLC.",
    description: [
      "End‑to‑end development of a neural network for real‑time ##*~drone‑audio denoising##, from prototyping to optimized inference",
      "Large‑scale ##*~training and refinement of CNN models## on several hundred hours of audio recordings",
      "Implementation of a training and evaluation dashboard, including ##*~live experiment tracking## and integration with a local GPU cluster"
    ],
    techStack: ["python", "tensorflow", "pandas", "numpy", "django", "celery", "js", "plotlyjs", "redis", "docker", "sqlite", "html", "css"],
    imageData: [
      {
        alt: "Tokyo Tower",
        imgUrl: "/src/assets/images/prof_exp/kicoetech/tokyo_tower.jpg",
        extraClass: "big-vertical-img",
        /*tribute: "Foto von <a href=\"https://unsplash.com/de/@mattmutluu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Matt Mutlu</a> auf <a href=\"https://unsplash.com/de/fotos/die-spitze-des-eiffelturms-leuchtet-nachts-xn8ZPG6viiw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>\n" +
          "      "*/
      },
      {
        alt: "Drone",
        imgUrl: "/src/assets/images/prof_exp/kicoetech/drone.jpg",
        extraClass: "",
        /*tribute: "Foto von <a href=\"https://unsplash.com/de/@kevinchow?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Kevin Chow</a> auf <a href=\"https://unsplash.com/de/fotos/weisser-dji-quadcopter-der-phantom-serie-der-tagsuber-fliegt-9y0U_DEg0XI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>\n" +
          "      "*/
      },
      {
        alt: "spectrogram",
        imgUrl: "/src/assets/images/prof_exp/kicoetech/spec.png",
        extraClass: "",
      }
    ],
    rightAlign: false,
    extraClass: "",
  },
  {
    location: "Braunschweig, Germany",
    date: "05/2021 - 03/2023",
    title: "Web Developer at Institute of Machine Tools and Production Technology, TU Braunschweig",
    description: [
      "In the scope of the Sim4Pro project",
      "##*~Front‑ and backend development## of a web‑based platform for running and analyzing simulations of sustainable battery cell systems",
      "Optimization of existing simulation workflows to ##*~improve user experience## and significantly reduce execution time",
      "##*~Integration of complex numerical and particle‑based simulations## with support for hundreds of input parameters and rich visual outputs (histograms, pie charts, large data tables, 3D plots)"
    ],
    techStack: ["python", "django", "celery", "dash", "pandas", "numpy", "js", "html", "css", "redis", "docker", "sqlite"],
    imageData: [
      {
        alt: "Batteries",
        imgUrl: "/src/assets/images/prof_exp/iwf/batteries.jpg",
        extraClass: "big-horizontal-img",
        /*Foto von <a href="https://unsplash.com/de/@roberto_sorin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Roberto Sorin</a> auf <a href="https://unsplash.com/de/fotos/braune-grune-und-blaue-runde-knopfe-ZZ3qxWFZNRg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>*/
      },
      {
        alt: "battery process",
        imgUrl: "/src/assets/images/prof_exp/iwf/battery_process.png",
        extraClass: "big-horizontal-img",
        /*tribute: "Foto von <a href=\"https://unsplash.com/de/@kevinchow?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Kevin Chow</a> auf <a href=\"https://unsplash.com/de/fotos/weisser-dji-quadcopter-der-phantom-serie-der-tagsuber-fliegt-9y0U_DEg0XI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>\n" +
          "      "*/
      }
    ],
    rightAlign: true,
    extraClass: "",
  },
  {
    location: "Braunschweig, Germany",
    date: "05/2022 - 08/2022",
    title: "Voluntary Web Developer for Art Club DALI e.V.",
    description: [
      "End‑to‑end development of the website, from ##*~design to deployment##",
      "Custom admin panel with secure login and full ##*~content management## capabilities",
      "Ensured a ##*~clean, scalable codebase## to support future features and long‑term maintainability"
    ],
    techStack: ["python", "django", "js", "animejs", "html", "css", "sqlite", "php", "figma"],
    imageData: [
      {
        alt: "Dance",
        imgUrl: "/src/assets/images/prof_exp/dali/dance.png",
        extraClass: "",
      },
      {
        alt: "Boat",
        imgUrl: "/src/assets/images/prof_exp/dali/boat.png",
        extraClass: "",
      },
      {
        alt: "DALI e.V. Web page",
        imgUrl: "/src/assets/images/prof_exp/dali/dali_screen2.png",
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
    studyField: "Master of Science in Computer Science",
    location: "TU Braunschweig, Germany",
    extra: "Master's Thesis: Embedding Space Optimization for  Language-based Audio Retrieval"
  },
  {
    date: "10/2023 - 10/2024",
    studyField: "Study Abroad – Master of Science in Computer Science",
    location: "Shizuoka University, Hamamatsu, Japan",
    extra: ""
  },
  {
    date: "10/2018 - 11/2022",
    studyField: "Bachelor of Science in Computer Science",
    location: "TU Braunschweig, Germany",
    extra: "Bachelor's Thesis: Exploration and analysis of in-home  sensor data using machine learning by example of the  BASIS project"
  },
   {
    date: "2010 - 2018",
    studyField: "General Qualification for University Entrance (Abitur)",
    location: "Gymnasium Hoffman-von-Fallersleben-Schule, Braunschweig, Germany",
    extra: ""
  },
]
export {
  navLinks,
  headerButtonData,
  abilities,
  wordCloudData,
  techMap,
  expEntryList,
  educationEntryList
};
