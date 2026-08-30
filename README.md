# AI-Code-Review-Assistant

An AI-powered full-stack web application that automatically reviews source code and provides intelligent feedback, error detection, improvement suggestions, and coding best-practice recommendations.

The application allows developers to submit code through an interactive editor and receive an AI-generated code review through a simple and user-friendly interface.

---

## 🚀 Features

-  AI-powered automated code review
-  Detects potential coding errors and issues
-  Provides code improvement suggestions
-  Recommends coding best practices
-  Interactive code editor
-  Syntax highlighting using Prism.js
-  Markdown-formatted AI review results
-  Real-time communication between frontend and backend
-  Environment variables for API key protection
-  CORS and basic error handling

---

## 🛠️ Technologies Used

### Frontend
- React.js
- JavaScript
- Axios
- Prism.js
- React Markdown

### Backend
- Node.js
- Express.js
- REST API

### AI
- Google Gemini AI API

---

##  Project Architecture

```text
AI-Code-Review-Assistant
│
├── Backend
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── app.js
│   ├── server.js
│   └── .env
│
├── Frontend
│   ├── src
│   │   ├── components
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
