# 🤖 AI-Code-Review-Assistant

An AI-powered full-stack web application that helps developers analyze and improve their source code. The application uses **Google Gemini AI** to review submitted code, identify potential issues, suggest improvements, and recommend coding best practices.

Developers can write or paste their source code into an interactive editor and submit it for analysis. The AI-generated review is then displayed in a clean and readable format on the frontend.

---

## 🚀 Features

* 🤖 **AI-Powered Code Review**
  Automatically analyzes source code using Google Gemini AI.

* 🔍 **Error Detection**
  Identifies potential bugs, syntax issues, logical problems, and other code-related concerns.

* 💡 **Code Improvement Suggestions**
  Provides recommendations to make code cleaner, more readable, efficient, and maintainable.

* ✅ **Best Practice Recommendations**
  Suggests better coding approaches and programming practices.

* 📝 **Interactive Code Editor**
  Allows users to enter or paste source code directly into the application.

* 🎨 **Syntax Highlighting**
  Uses Prism.js to provide readable and visually structured code highlighting.

* 📄 **Markdown AI Responses**
  AI-generated reviews are rendered using Markdown for better readability.

* 🔄 **Frontend–Backend Communication**
  React communicates with the Node.js/Express backend through REST APIs.

* 🔐 **Environment Variable Protection**
  API credentials are stored using environment variables instead of exposing them directly in the source code.

* 🌐 **CORS Support**
  Enables communication between the frontend and backend applications.

* ⚠️ **Error Handling**
  Includes basic backend error handling for failed API requests and unexpected errors.

---

## 🛠️ Tech Stack

### Frontend

| Technology     | Purpose                         |
| -------------- | ------------------------------- |
| React.js       | Building the user interface     |
| JavaScript     | Application logic               |
| Axios          | API communication               |
| Prism.js       | Syntax highlighting             |
| React Markdown | Rendering AI-generated Markdown |

### Backend

| Technology | Purpose                        |
| ---------- | ------------------------------ |
| Node.js    | Server-side runtime            |
| Express.js | Backend framework              |
| REST API   | Frontend-backend communication |

### AI

| Technology           | Purpose                                |
| -------------------- | -------------------------------------- |
| Google Gemini AI API | Code analysis and AI-generated reviews |

---

## 🏗️ Project Architecture

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
```

---

## 🔄 How It Works

```text
┌──────────────────────┐
│        User          │
│  Enters Source Code  │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│   React Frontend     │
│   Code Editor        │
└──────────┬───────────┘
           │
           │ Axios Request
           ▼
┌──────────────────────┐
│ Node.js + Express    │
│      Backend         │
└──────────┬───────────┘
           │
           │ API Request
           ▼
┌──────────────────────┐
│   Google Gemini AI   │
│   Code Analysis      │
└──────────┬───────────┘
           │
           │ AI Review
           ▼
┌──────────────────────┐
│ Node.js + Express    │
│      Backend         │
└──────────┬───────────┘
           │
           │ Response
           ▼
┌──────────────────────┐
│   React Frontend     │
│  Formatted AI Review │
└──────────────────────┘
```

---

## 📌 Application Flow

1. The user enters or pastes source code into the interactive editor.
2. The React frontend captures the submitted code.
3. Axios sends the code to the backend through a REST API.
4. The Node.js and Express server receives the request.
5. The backend sends the source code to the Google Gemini AI API.
6. Gemini analyzes the code and generates a detailed review.
7. The backend receives the AI response.
8. The response is sent back to the React frontend.
9. React Markdown formats the response for better readability.
10. The user receives suggestions, detected issues, and coding recommendations.

---

## 💡 What the AI Review Provides

The application can generate feedback related to:

* 🔎 Potential code errors
* 🐛 Possible bugs
* 📖 Code readability
* ⚡ Code improvement opportunities
* 🧹 Code quality
* ♻️ Maintainability
* ✅ Programming best practices
* 💡 Suggested improvements

---

## 🔐 Environment Variables

The Gemini API key is stored in an environment variable rather than being hard-coded into the application.

Create a `.env` file inside the backend directory:

```env
GEMINI_API_KEY=your_api_key_here
```

> **Important:** Never commit your `.env` file or expose your API key publicly.

Add `.env` to your `.gitignore` file:

```gitignore
.env
node_modules/
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/AI-Code-Review-Assistant.git
```

Move into the project directory:

```bash
cd AI-Code-Review-Assistant
```

---

### 2. Setup Backend

Navigate to the backend:

```bash
cd Backend
```

Install dependencies:

```bash
npm install
```

Configure your environment variables:

```env
GEMINI_API_KEY=your_api_key_here
```

Start the backend server:

```bash
npm start
```

---

### 3. Setup Frontend

Open another terminal and navigate to the frontend:

```bash
cd Frontend
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

---

## 🖥️ User Experience

The application provides a simple workflow:

```text
Write Code
    ↓
Submit Code
    ↓
AI Processes Code
    ↓
Review Generated
    ↓
Read Suggestions
    ↓
Improve Code
```

The goal is to make code review accessible without requiring developers to manually inspect every part of their source code.

---

## 🔮 Future Enhancements

Possible improvements for future versions include:

* 🌐 Support for multiple programming languages
* 📊 Code quality scoring
* 🔐 User authentication
* 💾 Saving previous code reviews
* 📚 Review history
* 📈 Code quality analytics
* 🧪 Automated test-case generation
* 🔧 AI-powered code refactoring
* 🌓 Dark/light theme support
* 📤 Export code reviews as PDF
* 🔗 GitHub repository integration

---

## 🎯 Project Objective

The primary objective of this project is to demonstrate how **Generative AI can be integrated with a modern full-stack web application** to automate software-development tasks.

It combines **React.js, Node.js, Express.js, REST APIs, and Google Gemini AI** to create a practical AI-powered developer tool.

---

## 👨‍💻 Author

**Chaitanya Dhawade**

Artificial Intelligence & Data Science Graduate

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.
