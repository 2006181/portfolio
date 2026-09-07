import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "student-score-prediction",
    number: "01",
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
    number: "02",
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
  },
  {
    id: "diwali-sales-analysis",
    number: "03",
    title: "Diwali Sales Analysis",
    category: "Data Science / Exploratory Data Analysis",
    description: "Comprehensive exploratory data analysis on festive retail transactions to uncover high-value customer demographics, top revenue-driving product categories, and geographical distribution.",
    problem: "Retail decision-makers need empirical data visualizations to optimize seasonal inventory management, regional promotions, and targeted promotional campaigns.",
    approach: "Conducted deep data wrangling with Pandas, removing redundant data, handling null values, calculating aggregate purchasing power across age/gender cohorts, and visualizing patterns via Seaborn/Matplotlib.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "NumPy"],
    mlAlgorithm: "Exploratory Data Analysis & Statistical Aggregation",
    evaluationMetrics: ["Demographic Cohort Analysis", "Regional Revenue Breakdown", "Product Category Heatmaps"],
    keyLearning: "Developed strong data storytelling capabilities: articulating complex statistical correlations through visual heatmaps, distribution plots, and actionable retail insights.",
    highlights: [
      "In-depth Exploratory Data Analysis",
      "Customer Demographic Segmentation",
      "Product Category Breakdown",
      "Regional Performance Mapping",
      "Correlation Heatmaps & Distribution Charts"
    ],
    visualType: "eda",
    githubUrl: "https://github.com/2006181"
  }
];
