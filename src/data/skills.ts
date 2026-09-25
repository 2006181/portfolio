import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: "Machine Learning",
    iconName: "BrainCircuit",
    accent: "pink",
    skills: [
      { name: "Linear Regression", category: "Machine Learning", description: "Continuous numerical target prediction with ordinary least squares & gradient descent optimization." },
      { name: "Logistic Regression", category: "Machine Learning", description: "Binary classification modeling using sigmoid probability estimation." },
      { name: "Decision Trees", category: "Machine Learning", description: "Tree-based recursive partitioning for classification and regression tasks." },
      { name: "Random Forest", category: "Machine Learning", description: "Ensemble learning with bootstrap aggregation and random feature subsets." },
      { name: "KNN (K-Nearest Neighbors)", category: "Machine Learning", description: "Instance-based metric learning for pattern recognition." },
      { name: "Naive Bayes", category: "Machine Learning", description: "Probabilistic classifier leveraging Bayes' theorem with feature independence." },
      { name: "K-Means Clustering", category: "Machine Learning", description: "Unsupervised centroid-based clustering for customer segmentation and grouping." },
      { name: "Deep Learning", category: "Machine Learning", description: "Neural network architectures and representation learning for complex pattern recognition." },
      { name: "Computer Vision with OpenCV", category: "Machine Learning", description: "Image processing and computer vision workflows using OpenCV." },
      { name: "Natural Language Processing", category: "Machine Learning", description: "Text preprocessing pipelines, Bag of Words, TF-IDF, NLTK, and emotion classification modeling." }
    ]
  },
  {
    title: "Natural Language Processing",
    iconName: "Sparkles",
    accent: "purple",
    skills: [
      { name: "NLP Foundations & Applications", category: "Natural Language Processing", description: "Understanding what NLP is, why it is important in modern AI, and real-world NLP applications." },
      { name: "Text Preprocessing Pipeline", category: "Natural Language Processing", description: "Full text preprocessing pipeline including lowercasing, punctuation removal, and emoji removal." },
      { name: "Stopword Removal", category: "Natural Language Processing", description: "Filtering common non-informative stopwords using NLTK to retain meaningful vocabulary." },
      { name: "Bag of Words (CountVectorizer)", category: "Natural Language Processing", description: "Converting text documents into numerical feature vectors using frequency-based Bag of Words." },
      { name: "TF-IDF Vectorization", category: "Natural Language Processing", description: "Term Frequency-Inverse Document Frequency weighting and understanding key differences from Bag of Words." },
      { name: "ML Techniques in NLP", category: "Natural Language Processing", description: "Applying common machine learning classification techniques on vectorized text representations." },
      { name: "Emotion Detection from Scratch", category: "Natural Language Processing", description: "Hands-on Emotion Detection project built from scratch covering text cleaning to classification." },
      { name: "NLP Tools & Libraries", category: "Natural Language Processing", description: "Hands-on practical implementation using Python, Pandas, NLTK, CountVectorizer, and TfidfVectorizer." }
    ]
  },
  {
    title: "Data Science & Analysis",
    iconName: "BarChart3",
    accent: "cyan",
    skills: [
      { name: "NumPy", category: "Data Science", description: "High-performance N-dimensional array processing and mathematical computations." },
      { name: "Pandas", category: "Data Science", description: "Dataframe manipulation, data cleaning, aggregation, reshaping, and feature extraction." },
      { name: "Matplotlib", category: "Data Science", description: "2D data plotting, multi-axis charting, and publication-quality visual aesthetics." },
      { name: "Seaborn", category: "Data Science", description: "Statistical data visualization, heatmaps, distribution plots, and correlation matrices." },
      { name: "EDA (Exploratory Data Analysis)", category: "Data Science", description: "Detecting patterns, identifying anomalies, testing hypotheses, and checking assumptions." },
      { name: "Data Storytelling", category: "Data Science", description: "Translating data insights into intuitive, actionable executive takeaways." }
    ]
  },
  {
    title: "ML Engineering & Deployment",
    iconName: "Cpu",
    accent: "purple",
    skills: [
      { name: "Feature Engineering", category: "ML Engineering", description: "Encoding categorical variables, handling missing values, scaling, and feature selection." },
      { name: "Train-Test Split", category: "ML Engineering", description: "Data partitioning strategies to evaluate generalization and prevent data leakage." },
      { name: "Model Evaluation", category: "ML Engineering", description: "Assessing performance via R², RMSE, Confusion Matrix, Precision, Recall, and F1-score." },
      { name: "Streamlit", category: "ML Engineering", description: "Rapid interactive web UI creation for real-time model inference and dashboards." },
      { name: "FastAPI", category: "ML Engineering", description: "Currently exploring FastAPI to build asynchronous REST APIs and integrate AI/ML models." }
    ]
  },
  {
    title: "Programming Languages",
    iconName: "Code2",
    accent: "emerald",
    skills: [
      { name: "Python", category: "Programming", description: "Core language for AI/ML development, data structures, scripting, and scientific computing." },
      { name: "C", category: "Programming", description: "Foundational systems programming, low-level memory concepts, and algorithmic thinking." }
    ]
  },
  {
    title: "Tools & Database",
    iconName: "Terminal",
    accent: "yellow",
    skills: [
      { name: "Git", category: "Tools & Database", description: "Distributed version control system for tracking source code revisions." },
      { name: "GitHub", category: "Tools & Database", description: "Collaborative code hosting, repository management, and version history." },
      { name: "Google Colab", category: "Tools & Database", description: "Cloud GPU/TPU notebook environment for training and experimenting." },
      { name: "VS Code", category: "Tools & Database", description: "Primary IDE configured with Python linters, debugging, and extensions." },
      { name: "Jupyter Notebook", category: "Tools & Database", description: "Interactive literate computing for iterative data exploration and visualization." },
      { name: "MySQL", category: "Tools & Database", description: "Relational database querying, schema structuring, joins, and data retrieval." }
    ]
  },
  {
    title: "Core Foundations & DSA",
    iconName: "Layers",
    accent: "cyan",
    skills: [
      { name: "Prompt Engineering", category: "Other", description: "Techniques for structuring clear and contextual instructions for LLM systems." },
      { name: "Arrays & Strings", category: "Other", description: "Fundamental contiguous memory manipulation and algorithmic indexing." },
      { name: "Linked Lists", category: "Other", description: "Pointer-based dynamic linear data structures and node traversal." },
      { name: "Sorting Algorithms", category: "Other", description: "Bubble, Selection, Insertion, Merge, and Quick sort complexity analysis." },
      { name: "Searching Algorithms", category: "Other", description: "Linear and Binary search algorithms on sorted datasets." }
    ]
  }
];

export const toolkitBadges = [
  { name: "Python", category: "Language", icon: "FileCode2", color: "#3776ab", border: "rgba(55, 118, 171, 0.4)" },
  { name: "Scikit-Learn", category: "ML Library", icon: "Brain", color: "#f7931e", border: "rgba(247, 147, 30, 0.4)" },
  { name: "Pandas", category: "Data Wrangling", icon: "Table2", color: "#150458", border: "rgba(0, 240, 255, 0.4)" },
  { name: "NumPy", category: "Scientific Math", icon: "Binary", color: "#4d77cf", border: "rgba(77, 119, 207, 0.4)" },
  { name: "NLTK", category: "NLP Library", icon: "BookOpen", color: "#306998", border: "rgba(48, 105, 152, 0.4)" },
  { name: "Matplotlib", category: "Plotting", icon: "PieChart", color: "#11557c", border: "rgba(0, 240, 255, 0.4)" },
  { name: "Seaborn", category: "Statistical Viz", icon: "LineChart", color: "#4c72b0", border: "rgba(255, 0, 127, 0.4)" },
  { name: "Streamlit", category: "App Deployment", icon: "Layers", color: "#ff4b4b", border: "rgba(255, 75, 75, 0.4)" },
  { name: "FastAPI", category: "API Framework", icon: "Zap", color: "#05998b", border: "rgba(5, 153, 139, 0.4)" },
  { name: "Git", category: "Version Control", icon: "GitBranch", color: "#f05032", border: "rgba(240, 80, 50, 0.4)" },
  { name: "GitHub", category: "Collaboration", icon: "Github", color: "#ffffff", border: "rgba(255, 255, 255, 0.3)" },
  { name: "MySQL", category: "RDBMS", icon: "Database", color: "#00758f", border: "rgba(0, 117, 143, 0.4)" },
  { name: "Jupyter", category: "Notebooks", icon: "BookOpen", color: "#f37626", border: "rgba(243, 118, 38, 0.4)" },
  { name: "Google Colab", category: "Cloud ML", icon: "Cloud", color: "#f9ab00", border: "rgba(249, 171, 0, 0.4)" },
  { name: "PyTorch", category: "Deep Learning", icon: "BrainCircuit", color: "#ee4c2c", border: "rgba(238, 76, 44, 0.4)" },
  { name: "OpenCV", category: "Computer Vision", icon: "ScanLine", color: "#5c3ee8", border: "rgba(92, 62, 232, 0.4)" }
];
