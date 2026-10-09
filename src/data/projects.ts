import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "california-house-price-prediction",
    number: "01",
    title: "California House Price Prediction",
    category: "Machine Learning / Regression",
    description: "An end-to-end Machine Learning application that predicts California house prices using a Random Forest Regression model. It includes a FastAPI backend, a Streamlit frontend, individual house price prediction, and bulk predictions through CSV file uploads.",
    problem: "Real estate valuation requires analyzing multidimensional geographic, demographic, and structural variables such as median income, housing age, and location coordinates to make accurate price predictions.",
    approach: "Engineered a complete end-to-end ML architecture using Random Forest Regression for price prediction, coupled with a robust FastAPI backend service and an interactive Streamlit frontend supporting single predictions and batch CSV uploads.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Random Forest Regression",
      "FastAPI",
      "Streamlit",
      "Joblib",
      "Render",
      "GitHub"
    ],
    mlAlgorithm: "Random Forest Regression (Ensemble Learning)",
    evaluationMetrics: ["Root Mean Squared Error (RMSE)", "R² Score (Coefficient of Determination)", "Mean Absolute Error (MAE)"],
    keyLearning: "Architected an end-to-end production ML system integrating a FastAPI backend API with a Streamlit UI, handling both individual and bulk CSV inference workflows.",
    highlights: [
      "Random Forest Regression Model",
      "FastAPI REST API & Docs",
      "Interactive Streamlit Frontend",
      "Individual & Bulk CSV Prediction",
      "Cloud Deployed on Render"
    ],
    visualType: "regression",
    githubUrl: "https://github.com/2006181/California_House_Price_Prediction",
    liveDemoUrl: "https://californiahousepriceprediction-rxripw4nsm3bwntvg8dxgm.streamlit.app/",
    apiDocsUrl: "https://california-house-price-prediction-1-uwu5.onrender.com/docs"
  },
  {
    id: "emotion-detection-nlp",
    number: "02",
    title: "Emotion Detection using NLP",
    category: "Natural Language Processing / Classification",
    description: "An end-to-end NLP web application that detects emotions from text input using text preprocessing, Bag of Words feature representation, and Machine Learning classification.",
    problem: "Textual communication lacks vocal and facial cues, making automated emotion detection essential for customer sentiment analysis, feedback classification, and empathetic conversational agents.",
    approach: "Engineered a robust NLP preprocessing pipeline featuring lowercasing, punctuation and emoji removal, and NLTK stopword filtering. Applied CountVectorizer (Bag of Words) for text feature extraction and trained a supervised Machine Learning classifier deployed on Streamlit.",
    technologies: ["Python", "NLP", "NLTK", "CountVectorizer", "Scikit-Learn", "Streamlit", "Pandas"],
    mlAlgorithm: "Machine Learning Text Classification (Bag of Words / CountVectorizer)",
    evaluationMetrics: ["Multi-class Classification Metrics", "Confusion Matrix Analysis", "Precision & Recall", "Validation Partition Evaluation"],
    keyLearning: "Mastered the complete NLP lifecycle: from raw text preprocessing and tokenization to Bag of Words vectorization and real-time interactive Streamlit emotion inference.",
    highlights: [
      "Full Text Preprocessing Pipeline",
      "Emoji & Stopword Removal (NLTK)",
      "Bag of Words / CountVectorizer",
      "ML Emotion Classification",
      "Interactive Streamlit Web App"
    ],
    visualType: "classification",
    githubUrl: "https://github.com/2006181/Emotions-detection-using-NLP-.git",
    liveDemoUrl: "https://2006181-emotions-detection-using-nlp--app-4cln8n.streamlit.app/"
  },
  {
    id: "student-score-prediction",
    number: "03",
    title: "Student Score Prediction App",
    category: "Machine Learning / Regression",
    description: "An end-to-end Machine Learning web application that predicts student exam scores based on study hours and historical academic performance metrics.",
    problem: "Academic mentors and students require early predictive feedback on study trajectories to prevent underperformance and calibrate revision schedules.",
    approach: "Designed a supervised linear regression pipeline with exploratory data cleaning, feature correlation checking, train-test splitting, and interactive Streamlit UI for immediate parameter adjustment.",
    technologies: ["Python", "Scikit-Learn", "Streamlit", "Pandas", "NumPy", "Matplotlib"],
    mlAlgorithm: "Linear Regression (Ordinary Least Squares)",
    evaluationMetrics: ["R² Score (Coefficient of Determination)", "Root Mean Squared Error (RMSE)", "Mean Absolute Error (MAE)"],
    keyLearning: "Mastered end-to-end ML deployment cycles: transforming raw mathematical regression models into interactive, user-facing Streamlit dashboards with real-time inference.",
    highlights: [
      "Supervised Regression Model",
      "Real-time Prediction Engine",
      "Interactive Streamlit Dashboard",
      "R² & RMSE Evaluation Metrics",
      "Clean UI Sliders for Study Hours"
    ],
    visualType: "regression",
    githubUrl: "https://github.com/2006181/student-score-prediction-app",
    liveDemoUrl: "https://student-score-prediction-app-1.onrender.com/"
  },
  {
    id: "student-success-predictor",
    number: "04",
    title: "Student Success Predictor",
    category: "Machine Learning / Classification",
    description: "A binary classification system built to predict student pass/fail outcomes by analyzing attendance trends, weekly study duration, and continuous internal assessment scores.",
    problem: "Educational institutions need proactive early-warning systems to identify at-risk students before final term examinations.",
    approach: "Engineered a robust preprocessing pipeline featuring missing-value imputation, categorical encoding, and feature scaling, followed by training a calibrated Logistic Regression classifier.",
    technologies: ["Python", "Scikit-Learn", "Streamlit", "Pandas", "NumPy", "Seaborn"],
    mlAlgorithm: "Logistic Regression (Sigmoid Classification)",
    evaluationMetrics: ["Classification Accuracy", "Precision", "Recall", "Confusion Matrix Analysis"],
    keyLearning: "Gained deep understanding of binary decision boundaries, trade-offs between precision and recall for early intervention, and the vital importance of proper feature normalization.",
    highlights: [
      "Binary Logistic Classification",
      "Feature Engineering Pipeline",
      "Missing-Value Imputation",
      "Categorical Feature Encoding",
      "Precision & Recall Optimization"
    ],
    visualType: "classification",
    githubUrl: "https://github.com/2006181/Student-success-predictor",
    liveDemoUrl: "https://student-success-predictor-hb99fnp7no7ksmacuxappgw.streamlit.app/"
  }
];
