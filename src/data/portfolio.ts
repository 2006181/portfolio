/**
 * Central portfolio data — customized for Rahul Gupta: AI/ML Engineer.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Rahul Gupta',
  displayName: 'Rahul Gupta',
  firstName: 'RAHUL',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A RAHUL GUPTA ORIGINAL',
  role: 'AI/ML Engineer',
  tagline: ['AI/ML Engineer', 'Generative AI Developer', 'Agentic AI Developer', 'Data Science Enthusiast'],
  intro:
    'Third-year B.Tech CSE (AI) student and AI/ML developer who ships end-to-end systems: classical ML, deep learning, computer vision, NLP, RAG-based LLM applications and multi-agent workflows, deployed with FastAPI and Streamlit. Completed an IBM SkillBuild AI internship and participated in multiple hackathons including Smart India Hackathon, Code Veda 2.0 and Ignition Hack 2.0. Fresher seeking entry-level and internship roles in AI/ML, Data Science, Generative AI and Agentic AI.',
  location: 'Ghaziabad, Uttar Pradesh, India',
  email: 'jaiguruji292001@gmail.com',
  phone: '+91-9205006815',
  links: {
    linkedin: 'https://linkedin.com/in/rahulgupta-70196b374',
    github: 'https://github.com/2006181',
  },
  resumePdf: '/Rahul_Gupta_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Rahul Gupta',
  },
  interests: ['Agentic Workflows', 'Generative AI & LLMs', 'Multi-Agent Systems', 'Computer Vision'],
};

export const education = [
  {
    school: 'ABES Institute of Technology (ABESIT)',
    place: 'Ghaziabad, Uttar Pradesh',
    degree: 'B.Tech in Computer Science and Engineering (Artificial Intelligence)',
    period: '2024 – 2028 (Expected)',
    score: 'Undergraduate',
  },
];

export const experience = [
  {
    company: 'Edunet Foundation (IBM SkillBuild)',
    role: 'Artificial Intelligence Intern',
    place: 'Remote, India',
    period: 'May 2026 – June 2026',
    points: [
      'Built an AI/ML project from scratch through mentor-led sessions covering data preprocessing, model training, evaluation and deployment.',
      'Applied core AI/ML concepts to real-world problem solving with hands-on practical learning.',
    ],
  },
  {
    company: 'CodeX Capture The Flag (ABESIT, Ghaziabad)',
    role: 'Core Member',
    place: 'Ghaziabad, India',
    period: 'TODO: Add dates',
    points: [
      "Core member of the college's coding and presentation club, CodeX Capture The Flag.",
    ],
  },
  {
    company: "UDGAM'26, IIT Guwahati",
    role: 'Campus Ambassador',
    place: 'Ghaziabad, India',
    period: 'November 2025 – February 2026',
    points: [
      "Represented IIT Guwahati's UDGAM'26 on campus, driving outreach, student engagement and event promotion.",
    ],
  },
  {
    company: 'Prayaas – Electoral Literacy Club',
    role: 'Core Member',
    place: 'Ghaziabad, India',
    period: 'September 2025 – July 2026',
    points: [
      'Led awareness and outreach activities as a core team member for 11 months.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  demo?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'ai-video-assistant',
    title: 'AI Video Assistant with RAG',
    year: '2026',
    genre: 'AI • Whisper • RAG • LLM',
    logline: 'End-to-end video intelligence pipeline transcribing speech and enabling conversational RAG chat over transcripts.',
    stack: ['Python', 'Whisper', 'Sarvam AI', 'LangChain (LCEL)', 'Mistral AI', 'ChromaDB', 'HF Embeddings', 'yt-dlp', 'FFmpeg', 'Streamlit'],
    build: [
      'Built an end-to-end pipeline that downloads YouTube or local video (yt-dlp, FFmpeg), transcribes speech with OpenAI Whisper and Sarvam AI, and generates summaries, action items and key decisions with Mistral AI.',
      'Engineered interactive RAG chat over the transcript using LangChain (LCEL), Hugging Face embeddings and ChromaDB vector store, delivered through an interactive Streamlit app.',
    ],
    features: [
      'YouTube and local video ingestion via yt-dlp & FFmpeg',
      'Dual speech-to-text with OpenAI Whisper and Sarvam AI',
      'AI summaries, action items & decisions using Mistral AI',
      'Conversational RAG Q&A over video transcripts with ChromaDB',
      'Streamlit UI with LangChain (LCEL) chain orchestration',
    ],
    metrics: [
      { value: '2', label: 'speech engines (Whisper & Sarvam)' },
      { value: '100%', label: 'local/URL pipeline automation' },
      { value: 'RAG', label: 'conversational transcript retrieval' },
      { value: 'LCEL', label: 'declarative chain orchestration' },
    ],
    demo: 'https://jgntxpz4eb3pclpjs2d7su.streamlit.app/',
    github: 'https://github.com/2006181/-AI-Video-Assistant-With-RAG',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'multi-agent-research-system',
    title: 'Multi-Agent AI Research System',
    year: '2026',
    genre: 'Agentic AI • LangGraph • Groq',
    logline: 'Specialized autonomous multi-agent system conducting deep web research, scraping, and comprehensive report synthesis.',
    stack: ['Python', 'LangChain', 'LangGraph', 'Groq', 'Tavily', 'Streamlit', 'BeautifulSoup', 'Requests'],
    build: [
      'Architected a multi-agent system where specialized agents, powered by Groq LLMs, search the web with Tavily, scrape sources with BeautifulSoup and Requests, and compile a research report, delivered through Streamlit.',
      'Orchestrated dynamic state transitions, tool execution loops, and synthesis pipelines with LangGraph.',
    ],
    features: [
      'Autonomous multi-agent orchestration via LangGraph state graphs',
      'High-speed LLM inference powered by Groq',
      'Live web search with Tavily and content scraping with BeautifulSoup',
      'Comprehensive structured research report synthesis',
      'Streamlit UI for real-time multi-agent execution tracking',
    ],
    metrics: [
      { value: 'Multi-Agent', label: 'collaborative LangGraph architecture' },
      { value: 'Groq', label: 'ultra-low latency LLM inference' },
      { value: 'Tavily', label: 'live web research & synthesis' },
      { value: 'End-to-End', label: 'autonomous report compilation' },
    ],
    demo: 'https://multi-agent-ai-research-system-with-langchain-ql8dqsdvwjlxnvmd.streamlit.app/',
    github: 'https://github.com/2006181/Multi-Agent-AI-Research-System-with-LangChain',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'abesit-college-assistant',
    title: 'ABESIT College Assistant',
    year: '2026',
    genre: 'EdTech • RAG • FAISS • LangGraph',
    logline: 'Campus RAG assistant answering student queries from institutional documents with FAISS and Groq.',
    stack: ['LangGraph', 'Groq', 'HF Embeddings', 'FAISS', 'RAG', 'Streamlit'],
    build: [
      'Developed a RAG chatbot answering student queries from college documents using Hugging Face embeddings, FAISS similarity search and a Groq LLM.',
      'Conversational workflow orchestrated with LangGraph and delivered through an intuitive Streamlit interface.',
    ],
    features: [
      'Institutional RAG over official ABESIT college documentation',
      'Vector similarity search powered by FAISS & HF Embeddings',
      'Sub-second query responses via Groq LLM inference',
      'Stateful conversational workflow managed with LangGraph',
      'Clean student-friendly Streamlit web interface',
    ],
    metrics: [
      { value: 'FAISS', label: 'high-speed similarity search index' },
      { value: 'LangGraph', label: 'orchestrated stateful conversation' },
      { value: 'Groq', label: 'instant query response times' },
      { value: 'College Docs', label: 'grounded institutional knowledge' },
    ],
    demo: 'https://t9khn87fzvxofhyhdwvgkv.streamlit.app/',
    github: 'https://github.com/2006181/ABESIT-College-Assistant-AI-powered-chatbot-using-LangGraph-and-RAG',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'tenants',
  },
  {
    id: 'personal-ai-assistant-n8n',
    title: 'Personal AI Assistant (n8n)',
    year: '2026',
    genre: 'Agentic AI • Automation • n8n',
    logline: 'Personal AI assistant integrating workflow automation, AI agents, and webhooks with a Streamlit interface.',
    stack: ['n8n', 'Python', 'Streamlit', 'Webhooks'],
    build: [
      'Built an AI personal assistant using n8n workflow automation and AI agents, with Python logic and a Streamlit frontend communicating with the n8n backend through webhooks.',
      'Configured event triggers, action chaining, and custom agent logic for automated personal productivity.',
    ],
    features: [
      'Automated workflow pipelines powered by n8n and AI agents',
      'Webhook-driven bidirectional communication between UI and backend',
      'Custom Python backend logic for task dispatching',
      'Interactive Streamlit frontend for prompt input and results',
    ],
    metrics: [
      { value: 'n8n', label: 'automated workflow orchestration' },
      { value: 'Webhooks', label: 'seamless event-driven execution' },
      { value: 'AI Agents', label: 'autonomous task completion' },
      { value: 'Streamlit', label: 'responsive control interface' },
    ],
    demo: 'https://q3xt3ntzfgofyjwupgvads.streamlit.app/',
    github: 'https://github.com/2006181/-Your_Personal_Assistant_using_n8n',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'california-housing-api',
    title: 'California House Price Prediction API',
    year: '2026',
    genre: 'ML • FastAPI • MySQL',
    logline: 'End-to-end machine learning pipeline from raw housing data to a production-ready FastAPI prediction service.',
    stack: ['Random Forest', 'FastAPI', 'MySQL', 'Scikit-Learn', 'Python'],
    build: [
      'Trained a Random Forest regression model and served it through a FastAPI backend, from raw data to a working prediction API.',
      'Engineered features, evaluated performance metrics, and stored inference queries in a structured MySQL database.',
    ],
    features: [
      'Optimized Random Forest regressor for property valuation',
      'Comprehensive data preprocessing & feature engineering',
      'FastAPI REST backend with automated OpenAPI documentation',
      'MySQL database integration for request logging & audit history',
    ],
    metrics: [
      { value: 'Random Forest', label: 'ensemble regression architecture' },
      { value: 'FastAPI', label: 'sub-millisecond prediction API' },
      { value: 'MySQL', label: 'persistent query logging & storage' },
      { value: 'End-to-End', label: 'from raw data to served endpoint' },
    ],
    demo: 'https://californiahousepriceprediction-rxripw4nsm3bwntvg8dxgm.streamlit.app/',
    github: 'https://github.com/2006181/California_House_Price_Prediction',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'shield',
  },
];

export type AdditionalProject = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
  tag?: string;
};

export const additionalProjects: AdditionalProject[] = [
  {
    id: 'city-ai-assistant',
    title: 'City AI Assistant',
    description: 'Conversational assistant answering city queries, checking real-time weather via OpenWeatherMap, and discovering local news using Tavily Search and Google Gemini.',
    stack: ['Python', 'Streamlit', 'Google Gemini', 'LangChain', 'Tavily', 'OpenWeatherMap'],
    github: 'https://github.com/2006181/-City-AI-Assistant',
    demo: 'https://g7f9znyt4t9umphhhcgaor.streamlit.app/',
    tag: 'GenAI / Agent',
  },
  {
    id: 'book-qa-rag-app',
    title: 'Book Q&A RAG App',
    description: 'Local Retrieval-Augmented Generation system allowing users to upload PDF books, index text with Hugging Face embeddings in Chroma, and generate answers via Groq API.',
    stack: ['Python', 'Streamlit', 'Hugging Face', 'ChromaDB', 'Groq', 'RAG'],
    github: 'https://github.com/2006181/Book-Q-A-RAG-App',
    demo: 'https://book-q-a-rag-app-yfbrelypj22kgil6tytomd.streamlit.app/',
    tag: 'RAG / Vector DB',
  },
  {
    id: 'ai-information-extractor',
    title: 'AI Information Extractor',
    description: 'AI-powered structured document extraction pipeline leveraging Google Gemini, LangChain, and Pydantic schema validation within an interactive Streamlit UI.',
    stack: ['Python', 'Google Gemini', 'LangChain', 'Pydantic', 'Streamlit'],
    github: 'https://github.com/2006181/AI-Information-Extractor',
    demo: 'https://ai-information-extractor-igvwrqtxabrf5bxifsd5rm.streamlit.app/',
    tag: 'LLM Extraction',
  },
  {
    id: 'mood-based-ai-chatbot',
    title: 'Mood-Based AI Chatbot',
    description: 'Interactive emotion-adaptive conversational AI chatbot built with Streamlit, Google Gemini, and LangChain that dynamically adjusts tone to user mood.',
    stack: ['Python', 'Streamlit', 'Google Gemini', 'LangChain'],
    github: 'https://github.com/2006181/Mood-Based-AI-Chatbot',
    demo: 'https://mood-based-ai-chatbot-le5jfcmofbxpxjbunrk3re.streamlit.app/',
    tag: 'Conversational AI',
  },
  {
    id: 'smart-face-detection-opencv',
    title: 'Smart Face Detection using OpenCV',
    description: 'Real-time computer vision system using OpenCV Haar Cascade Classifiers to detect faces, eyes, and smiles simultaneously through webcam video streams.',
    stack: ['Python', 'OpenCV', 'Haar Cascades', 'Computer Vision'],
    github: 'https://github.com/2006181/-Smart-Face-Detection-using-OpenCV',
    tag: 'Computer Vision',
  },
  {
    id: 'mnist-digit-classifier',
    title: 'MNIST Handwritten Digit Classifier',
    description: 'Deep Learning neural network built with PyTorch on the MNIST dataset, covering complete training, cross-entropy evaluation, and model checkpointing.',
    stack: ['PyTorch', 'Deep Learning', 'Neural Networks', 'Python'],
    github: 'https://github.com/2006181/mnist-digit-classifier',
    tag: 'Deep Learning',
  },
  {
    id: 'pytorch-qa-system',
    title: 'PyTorch Question Answering System',
    description: 'Deep Learning-based Question Answering System constructed from scratch using PyTorch and trained on a custom Question-Answer dataset.',
    stack: ['PyTorch', 'Deep Learning', 'NLP', 'Python'],
    github: 'https://github.com/2006181/-Simple-Question-Answering-System-using-PyTorch',
    tag: 'Deep Learning / NLP',
  },
  {
    id: 'student-score-prediction',
    title: 'Student Score Prediction ML App',
    description: 'Machine Learning application predicting student academic performance using Linear Regression with Scikit-learn, with residual evaluation metrics.',
    stack: ['Python', 'Scikit-Learn', 'Linear Regression', 'Machine Learning'],
    github: 'https://github.com/2006181/student-score-prediction-app',
    demo: 'https://student-score-prediction-app-1.onrender.com/',
    tag: 'Machine Learning',
  },
  {
    id: 'fashion-image-classifier',
    title: 'Fashion Image Classifier using CNN',
    description: 'Convolutional Neural Network built with PyTorch for classifying multi-class fashion apparel imagery with feature map visualization.',
    stack: ['Python', 'PyTorch', 'CNNs', 'Computer Vision'],
    github: 'https://github.com/2006181/Fashion-Image-Classifier-using-CNN-and-PyTorch',
    tag: 'Deep Learning',
  },
  {
    id: 'emotions-detection-nlp',
    title: 'Emotions Detection using NLP',
    description: 'Natural Language Processing pipeline classifying textual statements into nuanced emotional categories using tokenization and statistical NLP models.',
    stack: ['Python', 'NLP', 'Text Classification', 'Scikit-Learn'],
    github: 'https://github.com/2006181/Emotions-detection-using-NLP-',
    tag: 'NLP',
  },
  {
    id: 'diwali-sales-analysis',
    title: 'Diwali Sales Data Analysis',
    description: 'Exploratory Data Analysis project uncovering consumer purchasing trends, demographic breakdowns, and sales drivers using Pandas, Matplotlib, and Seaborn.',
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'EDA'],
    github: 'https://github.com/2006181/Python_Diwali_Sales_Analysis',
    tag: 'Data Analysis',
  },
  {
    id: 'finance-tracker-cli',
    title: 'CLI Finance Expense Tracker',
    description: 'Command-line personal finance and expense tracking tool built in Python for categorized logging, balance tracking, and budget summaries.',
    stack: ['Python', 'CLI', 'Data Management'],
    github: 'https://github.com/2006181/Finance-Tracker-app-mini-project-',
    tag: 'CLI Utility',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'smart-india-hackathon',
    title: 'SIH Participant',
    org: 'Smart India Hackathon',
    detail: 'Competed in Smart India Hackathon, building under real constraints and high pressure in an agile multidisciplinary team.',
    laurel: 'National Hackathon',
  },
  {
    id: 'code-veda',
    title: 'Code Veda 2.0',
    org: 'Hackathon Participation',
    detail: 'Participated in Code Veda 2.0 hackathon, collaborating in a team to build innovative technical solutions under real constraints.',
    laurel: 'Hackathon',
  },
  {
    id: 'ignition-hack',
    title: 'Ignition Hack 2.0',
    org: 'Hackathon Participation',
    detail: 'Participated in Ignition Hack 2.0 hackathon, ideating and prototyping technical applications.',
    laurel: 'Hackathon',
  },
  {
    id: 'tata-genai',
    title: 'GenAI Data Analytics',
    org: 'Tata Group (Forage)',
    detail: 'Completed GenAI-Powered Data Analytics Job Simulation, solving enterprise generative AI and analytics business challenges.',
    laurel: 'Job Simulation',
  },
  {
    id: 'deloitte-simulations',
    title: 'Tech & Cyber Simulation',
    org: 'Deloitte (Forage)',
    detail: 'Completed Technology Job Simulation and Cyber Job Simulation on Forage, analyzing modern architecture and security frameworks.',
    laurel: 'Job Simulation',
  },
  {
    id: 'cisco-python',
    title: 'Python Essentials 1',
    org: 'Cisco Networking Academy',
    detail: 'Earned Cisco Networking Academy certification in Python Essentials 1, demonstrating core programming and algorithmic proficiency.',
    laurel: 'Certified',
  },
  {
    id: 'codechef-dsa',
    title: 'Data Structures',
    org: 'CodeChef',
    detail: 'Certified in Data Structures by CodeChef, demonstrating mastery in problem-solving and algorithmic complexity.',
    laurel: 'Certified',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  // TODO: Add your exact credential verification URLs
  { issuer: 'Tata Group', name: 'GenAI-Powered Data Analytics Job Simulation (Forage)', link: 'https://www.theforage.com/' },
  { issuer: 'Deloitte', name: 'Technology Job Simulation (Forage)', link: 'https://www.theforage.com/' },
  { issuer: 'Deloitte', name: 'Cyber Job Simulation (Forage)', link: 'https://www.theforage.com/' },
  { issuer: 'Cisco', name: 'Python Essentials 1', link: 'https://www.credly.com/' },
  { issuer: 'CodeChef', name: 'Data Structures', link: 'https://www.codechef.com/' },
  { issuer: 'IBM SkillBuild', name: 'Artificial Intelligence Intern Certification', link: 'https://skillsbuild.org/' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages-databases',
    title: 'Languages & DBs',
    subtitle: 'Python is the core foundation',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'MySQL', mono: 'My' },
      { name: 'DSA', mono: 'Ds' },
    ],
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    subtitle: 'Classical ML & statistical modeling',
    skills: [
      { name: 'Scikit-Learn', mono: 'Sk' },
      { name: 'Random Forest', mono: 'Rf' },
      { name: 'Decision Trees', mono: 'Dt' },
      { name: 'Linear Regression', mono: 'Lr' },
      { name: 'Logistic Regression', mono: 'Lg' },
      { name: 'KNN', mono: 'Kn' },
      { name: 'Naive Bayes', mono: 'Nb' },
      { name: 'K-Means Clustering', mono: 'Km' },
      { name: 'Feature Engineering', mono: 'Fe' },
      { name: 'Model Evaluation', mono: 'Me' },
    ],
  },
  {
    id: 'deep-learning-nlp',
    title: 'DL, CV & NLP',
    subtitle: 'Neural networks, vision & speech',
    skills: [
      { name: 'PyTorch', mono: 'Pt' },
      { name: 'CNNs', mono: 'Cn' },
      { name: 'OpenCV', mono: 'Cv' },
      { name: 'Haar Cascades', mono: 'Hc' },
      { name: 'Whisper', mono: 'Wh' },
      { name: 'Text Classification', mono: 'Tc' },
      { name: 'Emotion Detection', mono: 'Ed' },
    ],
  },
  {
    id: 'generative-ai',
    title: 'Generative AI',
    subtitle: 'RAG, embeddings & LLM orchestration',
    skills: [
      { name: 'LLMs', mono: 'Lm' },
      { name: 'Prompt Engineering', mono: 'Pe' },
      { name: 'RAG', mono: 'Rg' },
      { name: 'Embeddings', mono: 'Em' },
      { name: 'HF Embeddings', mono: 'Hf' },
      { name: 'ChromaDB', mono: 'Cb' },
      { name: 'FAISS', mono: 'Fs' },
      { name: 'Groq', mono: 'Gq' },
      { name: 'Mistral AI', mono: 'Mi' },
      { name: 'Pydantic', mono: 'Pd' },
    ],
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI',
    subtitle: 'Autonomous workflows & orchestration',
    skills: [
      { name: 'AI Agents', mono: 'Ag' },
      { name: 'Agentic Workflows', mono: 'Aw' },
      { name: 'LangChain', mono: 'Lc' },
      { name: 'LangGraph', mono: 'Lg' },
      { name: 'Tool Calling', mono: 'Tc' },
      { name: 'API Integration', mono: 'Ai' },
      { name: 'Human-in-the-Loop', mono: 'Hl' },
      { name: 'Agent Orchestration', mono: 'Ao' },
      { name: 'Agent Debugging', mono: 'Ad' },
      { name: 'n8n Automation', mono: 'N8' },
    ],
  },
  {
    id: 'data-analytics',
    title: 'Data & Analytics',
    subtitle: 'Exploration & insight visualization',
    skills: [
      { name: 'NumPy', mono: 'Np' },
      { name: 'Pandas', mono: 'Pa' },
      { name: 'Matplotlib', mono: 'Mp' },
      { name: 'Seaborn', mono: 'Sb' },
      { name: 'EDA', mono: 'Ed' },
      { name: 'Data Visualization', mono: 'Dv' },
    ],
  },
  {
    id: 'deployment-tools',
    title: 'Deployment & Tools',
    subtitle: 'Shipping AI to production',
    skills: [
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'Streamlit', mono: 'St' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Webhooks', mono: 'Wh' },
      { name: 'Git & GitHub', mono: 'Gt' },
      { name: 'Vercel', mono: 'Vc' },
      { name: 'FFmpeg', mono: 'Fm' },
      { name: 'yt-dlp', mono: 'Yt' },
      { name: 'Tavily', mono: 'Tv' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['AI Video Assistant with RAG', 'Multi-Agent AI Research System', 'Cisco Python Essentials 1'],
  MySQL: ['California House Price Prediction API'],
  DSA: ['CodeChef Data Structures', 'Algorithmic problem solving'],
  'Scikit-Learn': ['California House Price Prediction API', 'Student Score Prediction'],
  'Random Forest': ['California House Price Prediction API'],
  'Linear Regression': ['Student Score Prediction ML App'],
  'Logistic Regression': ['Classification & Modeling'],
  'Decision Trees': ['California House Price Prediction API'],
  KNN: ['Pattern classification benchmarks'],
  'Naive Bayes': ['Text classification pipelines'],
  'K-Means Clustering': ['Unsupervised customer segmentation'],
  'Feature Engineering': ['California House Price Prediction API'],
  'Model Evaluation': ['Cross-validation & performance metrics'],
  PyTorch: ['MNIST Digit Classifier', 'Fashion Image Classifier', 'PyTorch QA System'],
  CNNs: ['Fashion Image Classifier using CNN and PyTorch'],
  OpenCV: ['Smart Face Detection using OpenCV'],
  'Haar Cascades': ['Smart Face Detection using OpenCV'],
  Whisper: ['AI Video Assistant with RAG'],
  'Text Classification': ['Emotions Detection using NLP'],
  'Emotion Detection': ['Emotions Detection using NLP', 'Mood-Based AI Chatbot'],
  LLMs: ['Multi-Agent AI Research System', 'AI Video Assistant with RAG', 'City AI Assistant'],
  'Prompt Engineering': ['Structured JSON extraction & agent prompts'],
  RAG: ['AI Video Assistant with RAG', 'ABESIT College Assistant', 'Book Q&A RAG App'],
  Embeddings: ['FAISS similarity search', 'ChromaDB embeddings'],
  'HF Embeddings': ['AI Video Assistant with RAG', 'ABESIT College Assistant', 'Book Q&A RAG App'],
  ChromaDB: ['AI Video Assistant with RAG', 'Book Q&A RAG App'],
  FAISS: ['ABESIT College Assistant'],
  Groq: ['Multi-Agent AI Research System', 'ABESIT College Assistant', 'Book Q&A RAG App'],
  'Mistral AI': ['AI Video Assistant with RAG'],
  Pydantic: ['FastAPI data validation', 'AI Information Extractor'],
  'AI Agents': ['Multi-Agent AI Research System', 'Personal AI Assistant (n8n)', 'City AI Assistant'],
  'Agentic Workflows': ['Multi-Agent AI Research System', 'LangGraph'],
  LangChain: ['AI Video Assistant with RAG', 'Multi-Agent AI Research System', 'City AI Assistant'],
  LangGraph: ['Multi-Agent AI Research System', 'ABESIT College Assistant'],
  'Tool Calling': ['Multi-Agent AI Research System (Tavily, BeautifulSoup)', 'City AI Assistant'],
  'API Integration': ['FastAPI endpoints', 'Groq & Mistral APIs', 'OpenWeatherMap'],
  'Human-in-the-Loop': ['LangGraph conditional interrupts'],
  'Agent Orchestration': ['Multi-Agent AI Research System'],
  'Agent Debugging': ['LangGraph execution tracing'],
  'n8n Automation': ['Personal AI Assistant (n8n)'],
  NumPy: ['Diwali Sales Data Analysis', 'Mathematical array operations'],
  Pandas: ['Diwali Sales Data Analysis', 'Data cleaning & analysis'],
  Matplotlib: ['Diwali Sales Data Analysis', 'Exploratory visualization'],
  Seaborn: ['Diwali Sales Data Analysis', 'Distribution plots'],
  EDA: ['Diwali Sales Data Analysis across sales datasets'],
  'Data Visualization': ['Tata GenAI Data Analytics simulation', 'Diwali Sales Analysis'],
  FastAPI: ['California House Price Prediction API'],
  Streamlit: ['AI Video Assistant with RAG', 'Multi-Agent AI Research System', 'ABESIT College Assistant'],
  Docker: ['Microservice containerization & deployment'],
  'REST APIs': ['California House Price Prediction API', 'FastAPI'],
  Webhooks: ['Personal AI Assistant (n8n)'],
  'Git & GitHub': ['Version control across 30+ repositories'],
  Vercel: ['Portfolio & frontend deployment'],
  FFmpeg: ['AI Video Assistant with RAG'],
  'yt-dlp': ['AI Video Assistant with RAG'],
  Tavily: ['Multi-Agent AI Research System', 'City AI Assistant'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundations',
    period: '2024 – 2028',
    synopsis: 'Computer Science and Engineering with specialization in Artificial Intelligence at ABESIT, Ghaziabad.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The AI Scholar',
        description: 'B.Tech in Computer Science and Engineering (Artificial Intelligence) at ABESIT, Ghaziabad.',
        tags: ['B.Tech', 'CSE (AI)', 'ABESIT'],
        runtime: '2024 – 2028',
        palette: violet,
      },
      {
        code: 'S01 E02',
        title: 'Core Foundations',
        description: 'Mastered Python Essentials 1 via Cisco Networking Academy and Data Structures with CodeChef.',
        tags: ['Python', 'DSA', 'CodeChef', 'Cisco'],
        runtime: 'Foundations',
        palette: jade,
      },
      {
        code: 'S01 E03',
        title: 'The Hackathon Arena',
        description: 'Participated in multiple hackathons including Smart India Hackathon, Code Veda 2.0 and Ignition Hack 2.0.',
        tags: ['SIH', 'Code Veda', 'Ignition Hack'],
        runtime: '3 Hackathons',
        palette: crimson,
      },
    ],
  },
  {
    number: 2,
    title: 'The Agentic Shift',
    period: '2025 – 2026',
    synopsis: 'Venturing deep into Generative AI, RAG architectures, LangChain, LangGraph and autonomous multi-agent pipelines.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Video Intelligence Pipeline',
        description: 'AI Video Assistant with RAG — speech-to-text with Whisper & Sarvam AI, Mistral AI summaries and ChromaDB chat.',
        tags: ['Whisper', 'Mistral AI', 'ChromaDB', 'LCEL'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S02 E02',
        title: 'The Autonomous Researcher',
        description: 'Multi-Agent AI Research System — coordinating specialized Groq-powered agents with LangGraph and Tavily.',
        tags: ['LangGraph', 'Groq', 'Tavily', 'Multi-Agent'],
        runtime: '2026',
        palette: ocean,
      },
      {
        code: 'S02 E03',
        title: 'The Campus Assistant',
        description: 'ABESIT College Assistant — RAG chatbot answering student queries using FAISS and Groq orchestrated by LangGraph.',
        tags: ['FAISS', 'Groq', 'LangGraph', 'RAG'],
        runtime: '2026',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'Industry & Leadership',
    period: '2025 – 2026',
    synopsis: 'IBM SkillBuild AI Internship, CodeX Capture The Flag core membership, campus ambassadorship for IIT Guwahati, and Prayaas.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The AI Intern',
        description: 'Built end-to-end AI/ML projects during the Edunet Foundation IBM SkillBuild AI Internship.',
        tags: ['IBM SkillBuild', 'AI Intern', 'Edunet'],
        runtime: 'May – Jun 2026',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'CodeX Core Member',
        description: 'Core member of the coding and presentation club, CodeX Capture The Flag at ABESIT.',
        tags: ['CodeX', 'CTF', 'Core Member'],
        runtime: 'ABESIT',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'Outreach & Civic Impact',
        description: 'Campus Ambassador for IIT Guwahati UDGAM’26 and 11-month Core Member of Prayaas Electoral Literacy Club.',
        tags: ['UDGAM’26', 'Prayaas', 'Leadership'],
        runtime: 'Leadership',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Full-Stack ML & Automation',
    period: '2026',
    synopsis: 'Deploying machine learning models to production with FastAPI and building workflow automations with n8n.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Automation Engineer',
        description: 'Personal AI Assistant combining n8n workflow automation with Python business logic and Streamlit UI.',
        tags: ['n8n', 'Webhooks', 'Streamlit', 'Automation'],
        runtime: '2026',
        palette: amber,
      },
      {
        code: 'S04 E02',
        title: 'Production ML API',
        description: 'California Housing Price API — serving a Random Forest regression model through a high-throughput FastAPI backend.',
        tags: ['Random Forest', 'FastAPI', 'MySQL'],
        runtime: '2026',
        palette: jade,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Fresher seeking entry-level and internship roles in AI/ML, Data Science, Generative AI and Agentic AI.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Ready to Deploy',
        description: 'Ready to bring hands-on experience in classical ML, deep learning, RAG, and agentic workflows to high-impact engineering teams.',
        tags: ['AI/ML', 'GenAI', 'Agentic AI', 'FastAPI'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Core focus', title: 'Agentic AI', detail: 'LangGraph • Multi-Agent Systems • Tool Calling', palette: crimson },
  { label: 'Featured Demo', title: 'Video Assistant', detail: 'Whisper • Mistral AI • ChromaDB • Live Streamlit App', palette: ocean },
  { label: 'Multi-Agent', title: 'AI Researcher', detail: 'Autonomous web research with LangGraph & Groq', palette: violet },
  { label: 'Campus AI', title: 'ABESIT Bot', detail: 'FAISS • Groq • Document RAG Chatbot', palette: jade },
  { label: 'Industry training', title: 'IBM SkillBuild', detail: 'Artificial Intelligence Intern • Edunet', palette: amber },
  { label: 'Hackathons', title: '3 Hackathons', detail: 'Smart India Hackathon • Code Veda 2.0 • Ignition Hack 2.0', palette: crimson },
  { label: 'Campus leadership', title: 'UDGAM’26', detail: 'Campus Ambassador • IIT Guwahati', palette: ocean },
  { label: 'Production ML', title: 'FastAPI + RF', detail: 'California House Price Prediction API', palette: jade },
  { label: 'Automation', title: 'n8n Assistant', detail: 'Autonomous webhooks & AI agents', palette: amber },
  { label: 'Club Role', title: 'CodeX CTF', detail: 'Core Member • Coding & Presentation Club', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CSE (AI)',
    lines: ['ABES Institute of Technology, Ghaziabad', '2024 – 2028 (Expected)'],
    chips: ['ABESIT', 'AI & ML'],
  },
  {
    kicker: 'Skills',
    title: 'AI, ML & Agentic Systems',
    lines: ['Python, Scikit-Learn, PyTorch · LangChain & LangGraph', 'FAISS, ChromaDB · Groq, Mistral AI · FastAPI & Streamlit'],
    chips: ['Python', 'LangGraph', 'PyTorch', 'FastAPI', 'Docker', 'RAG'],
  },
  {
    kicker: 'Internship',
    title: 'IBM SkillBuild AI Intern',
    lines: ['Artificial Intelligence Intern · Edunet Foundation', 'End-to-end data preprocessing, model training & deployment', 'May 2026 – June 2026'],
  },
  {
    kicker: 'Projects',
    title: '5 Featured + More Projects',
    lines: ['AI Video Assistant with RAG · Multi-Agent Research System', 'ABESIT College Chatbot · n8n Personal AI · Housing ML API', 'Plus 12+ Open-Source Projects on GitHub with Live Streamlit Demos'],
  },
  {
    kicker: 'Hackathons & Clubs',
    title: 'Competitions & Roles',
    lines: ['Participant in Smart India Hackathon, Code Veda 2.0 & Ignition Hack 2.0', 'Core Member — CodeX Capture The Flag & Prayaas Club', 'Campus Ambassador — UDGAM’26, IIT Guwahati'],
  },
  {
    kicker: 'Certifications',
    title: 'Industry Credentials',
    lines: ['Tata Group · Deloitte · Cisco Networking Academy · CodeChef', 'IBM SkillBuild'],
  },
  {
    kicker: 'Objective',
    title: 'Now Seeking Roles',
    lines: ['Entry-level & internship roles in AI/ML, Data Science, Generative AI and Agentic AI'],
  },
];

export type ProfileId = 'rahul' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'rahul',
    name: 'Rahul',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & background', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Projects', card: 'Featured & More Projects', meta: `${projects.length} Featured • ${projects.length + additionalProjects.length} Total Projects`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
