import type { JourneyStep } from '../types';

export const journeySteps: JourneyStep[] = [
  {
    step: 1,
    stage: "STAGE 01",
    topic: "Python & Algorithmic Foundations",
    focus: "Core Python, syntax, OOP paradigms, and foundational Data Structures & Algorithms.",
    status: "completed",
    details: "Built solid problem-solving foundation in Python and C, mastering memory pointers, arrays, linked lists, and basic algorithmic complexity."
  },
  {
    step: 2,
    stage: "STAGE 02",
    topic: "NumPy & Pandas Data Wrangling",
    focus: "Array operations, dataframe indexing, data cleaning, and handling missing data.",
    status: "completed",
    details: "Practiced extracting, filtering, aggregating, and manipulating real-world tabular data without data leakage."
  },
  {
    step: 3,
    stage: "STAGE 03",
    topic: "Data Visualization & Storytelling",
    focus: "Matplotlib & Seaborn multi-plot dashboards, statistical distributions, and correlation matrices.",
    status: "completed",
    details: "Performed extensive Exploratory Data Analysis (EDA) on retail datasets (such as Diwali sales) to uncover high-impact trends."
  },
  {
    step: 4,
    stage: "STAGE 04",
    topic: "Classical Machine Learning",
    focus: "Mathematical intuition behind linear, probabilistic, and tree-based learning algorithms.",
    status: "completed",
    details: "Studied cost functions, gradient descent, hyperparameter tuning, and cross-validation across diverse problem domains."
  },
  {
    step: 5,
    stage: "STAGE 05",
    topic: "Supervised Learning Architectures",
    focus: "Linear Regression, Logistic Regression, Decision Trees, KNN, and Random Forests.",
    status: "completed",
    details: "Built working predictive models for continuous targets (Student Scores) and binary outcomes (Student Success classification)."
  },
  {
    step: 6,
    stage: "STAGE 06",
    topic: "Unsupervised Clustering & Patterns",
    focus: "K-Means clustering, centroid optimization, and segmentation techniques.",
    status: "completed",
    details: "Explored unlabeled data clustering, elbow methods for optimal K selection, and geometric clustering mechanics."
  },
  {
    step: 7,
    stage: "STAGE 07",
    topic: "Model Evaluation & Optimization",
    focus: "R², RMSE, MAE, Confusion Matrix, Precision, Recall, and F1-Score calibration.",
    status: "completed",
    details: "Analyzed classification trade-offs and regression residuals to validate models against unseen test partitions."
  },
  {
    step: 8,
    stage: "STAGE 08",
    topic: "Streamlit UI & Model Deployment",
    focus: "Translating ML pipelines into interactive web apps with live parameter inference.",
    status: "completed",
    details: "Created intuitive web dashboards allowing non-technical users to query machine learning models in real time."
  },
  {
    step: 9,
    stage: "STAGE 09",
    topic: "Deep Learning & Computer Vision",
    focus: "Neural network architectures with PyTorch, CNNs, image classification, and computer vision with OpenCV.",
    status: "completed",
    details: "Completed the Computer Vision with OpenCV learning phase, including CNN-based image classification workflows."
  },
  {
    step: 10,
    stage: "STAGE 10",
    topic: "Natural Language Processing (NLP)",
    focus: "Text preprocessing pipelines, tokenization, stopword/punctuation/emoji cleaning, Bag of Words, TF-IDF vectorization, and NLP classification.",
    status: "completed",
    details: "Completed NLP foundations, mastering text preprocessing pipelines, CountVectorizer, TfidfVectorizer, and hands-on Emotion Detection classification."
  },
  {
    step: 11,
    stage: "STAGE 11",
    topic: "Relational Databases & MySQL",
    focus: "Relational database querying, schema structuring, table relationships, and SQL data retrieval.",
    status: "completed",
    details: "Completed database management foundations with MySQL, managing structured data and connecting database operations to application pipelines."
  },
  {
    step: 12,
    stage: "STAGE 12",
    topic: "FastAPI & Backend Integration",
    focus: "Building asynchronous REST APIs, request validation with Pydantic, routing, and backend model integration.",
    status: "exploring",
    details: "Currently exploring FastAPI to build robust APIs and integrate trained AI/ML models into real-world applications."
  }
];
