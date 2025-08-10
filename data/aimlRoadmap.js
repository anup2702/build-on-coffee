export const aiMlSteps = [
  {
    title: "1. AI & ML Fundamentals",
    description: "Start by understanding the core principles of Artificial Intelligence and Machine Learning, including learning paradigms and basic mathematical intuition.",
    topics: [
      "What is AI, ML, DL?",
      "Types of Learning: Supervised, Unsupervised, Reinforcement",
      "Basic Probability & Statistics",
      "Bayes’ Theorem & Conditional Probability"
    ],
    resources: [
      { name: "Google ML Crash Course", link: "https://developers.google.com/machine-learning/crash-course" },
      { name: "StatQuest ML Playlist", link: "https://www.youtube.com/playlist?list=PLblh5JKOoLUIxGDQs4L_ffmJ4Zs3dEQmX" }
    ],
    videos: [
      { name: "AI vs ML vs DL Explained", link: "https://www.youtube.com/watch?v=WXHM_i-fgGo" },
      { name: "ML Roadmap 2025", link: "https://www.youtube.com/watch?v=KTeVOb8gaD4" }
    ]
  },
  {
    title: "2. Math for Machine Learning",
    description: "Master the mathematical foundations that drive ML algorithms—linear algebra, calculus, and probability theory.",
    topics: [
      "Linear Algebra: Vectors, Matrices, Dot Product",
      "Calculus: Derivatives, Gradients, Chain Rule",
      "Probability Distributions: Normal, Bernoulli",
      "Statistics: Mean, Variance, Entropy"
    ],
    resources: [
      { name: "Mathematics for ML (Imperial College)", link: "https://www.coursera.org/learn/mathematics-machine-learning" },
      { name: "3Blue1Brown Linear Algebra", link: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" }
    ],
    videos: [
      { name: "Gradient Descent Explained", link: "https://www.youtube.com/watch?v=sDv4f4s2SB8" },
      { name: "Math for ML – StatQuest", link: "https://www.youtube.com/watch?v=xxpc-HPKN28" }
    ]
  },
  {
    title: "3. Programming & Tools",
    description: "Learn Python and essential libraries for data manipulation, visualization, and modeling.",
    topics: [
      "Python Basics for ML",
      "NumPy & Pandas",
      "Matplotlib & Seaborn",
      "Jupyter Notebooks"
    ],
    resources: [
      { name: "Python Data Science Handbook", link: "https://jakevdp.github.io/PythonDataScienceHandbook/" },
      { name: "Kaggle Learn Python", link: "https://www.kaggle.com/learn/python" }
    ],
    videos: [
      { name: "Python for ML", link: "https://www.youtube.com/watch?v=LHBE6Q9XlzI" },
      { name: "Top Python Libraries", link: "https://www.youtube.com/watch?v=0Lt9w-BxKFQ" }
    ]
  },
  {
    title: "4. Data Preprocessing & EDA",
    description: "Understand how to clean, transform, and explore data before feeding it into models.",
    topics: [
      "Handling Missing Values",
      "Feature Scaling & Encoding",
      "Exploratory Data Analysis (EDA)",
      "Correlation & Covariance"
    ],
    resources: [
      { name: "Scikit-learn Preprocessing", link: "https://scikit-learn.org/stable/modules/preprocessing.html" },
      { name: "EDA Guide – TDS", link: "https://towardsdatascience.com/exploratory-data-analysis-8fc1cb20fd15" }
    ],
    videos: [
      { name: "EDA with Python", link: "https://www.youtube.com/watch?v=-o3AxdVcUtQ&t=58s" },
      { name: "Data Preprocessing", link: "https://www.youtube.com/watch?v=vmEHCJofslg" }
    ]
  },
  {
    title: "5. Core ML Algorithms",
    description: "Dive into key ML algorithms and understand their mathematical intuition and implementation.",
    topics: [
      "Linear & Logistic Regression",
      "Decision Trees & Random Forests",
      "KNN, SVM, Naive Bayes",
      "Clustering: K-Means, DBSCAN"
    ],
    resources: [
      { name: "ML Cheatsheet", link: "https://ml-cheatsheet.readthedocs.io/en/latest/" },
      { name: "Scikit-learn Algorithm Guide", link: "https://scikit-learn.org/stable/supervised_learning.html" }
    ],
    videos: [
      { name: "ML Algorithms Explained", link: "https://www.youtube.com/watch?v=aircAruvnKk" },
      { name: "Intuition Behind ML Models", link: "https://www.youtube.com/watch?v=Kp4Mvapo5kc" }
    ]
  },
  {
    title: "6. Deep Learning & Neural Networks",
    description: "Explore neural networks and deep learning architectures with a focus on matrix operations and gradient descent.",
    topics: [
      "Perceptron & Activation Functions",
      "Forward & Backward Propagation",
      "Loss Functions: MSE, Cross-Entropy",
      "CNNs, RNNs, LSTMs"
    ],
    resources: [
      { name: "DeepLearning.ai Specialization", link: "https://www.coursera.org/specializations/deep-learning" },
      { name: "PyTorch Tutorials", link: "https://pytorch.org/tutorials/" }
    ],
    videos: [
      { name: "Neural Networks Explained", link: "https://www.youtube.com/watch?v=aircAruvnKk" },
      { name: "Deep Learning Roadmap 2025", link: "https://www.youtube.com/watch?v=Ilg3gGewQ5U" }
    ]
  },
  {
    title: "7. Model Evaluation & Deployment",
    description: "Learn how to evaluate model performance and deploy ML models into production environments.",
    topics: [
      "Confusion Matrix, Precision, Recall, F1 Score",
      "ROC Curve & AUC",
      "Model Deployment with Flask/FastAPI",
      "Monitoring & Retraining"
    ],
    resources: [
      { name: "ML Deployment Guide", link: "https://mlops.community/" },
      { name: "FastAPI Docs", link: "https://fastapi.tiangolo.com/" }
    ],
    videos: [
      { name: "Deploy ML Models with FastAPI", link: "https://www.youtube.com/watch?v=0sOvCWFmrtA" },
      { name: "ML Model Evaluation Metrics", link: "https://www.youtube.com/watch?v=85dtiMz9tSo" }
    ]
  },
  {
    title: "8. Projects & Portfolio",
    description: "Build real-world AI/ML projects to showcase your skills and gain hands-on experience.",
    topics: [
      "Image Classification with CNNs",
      "Sentiment Analysis with NLP",
      "Recommendation Systems",
      "Time Series Forecasting"
    ],
    resources: [
      { name: "Kaggle Competitions", link: "https://www.kaggle.com/competitions" },
      { name: "Jovian ML Projects", link: "https://jovian.ai/learn/machine-learning-projects" }
    ],
    videos: [
      { name: "Top ML Projects for Beginners", link: "https://www.youtube.com/watch?v=VtItBX1l1VY" },
      { name: "Build ML Portfolio Projects", link: "https://www.youtube.com/watch?v=KTeVOb8gaD4" }
    ]
  }
]