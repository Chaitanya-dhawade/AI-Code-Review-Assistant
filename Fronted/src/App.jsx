
import { useState } from "react";

import EditorModule from "react-simple-code-editor";
import Prism from "prismjs";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import axios from "axios";

import "prismjs/themes/prism-tomorrow.css";
import "highlight.js/styles/github-dark.css";
import "./App.css";

const Editor = EditorModule.default ?? EditorModule;

function App() {
    const [code, setCode] = useState(`
Write Code Here`);

    const [review, setReview] = useState("");

    async function reviewCode() {
        try {
            const response = await axios.post(
                "http://localhost:3000/ai/get-review",
                { code }
            );

            setReview(response.data);
        } catch (error) {
            console.error("Review error:", error);

            setReview(
                "Unable to get review. Make sure the backend is running."
            );
        }
    }

    return (
        <main>
            <div className="left">

                <div className="code">
                    <Editor
                        value={code}
                        onValueChange={(newCode) => setCode(newCode)}
                        highlight={(code) =>
                            Prism.highlight(
                                code,
                                Prism.languages.javascript,
                                "javascript"
                            )
                        }
                        padding={10}
                        style={{
                            fontFamily:
                                '"Fira Code", "Fira Mono", monospace',
                            fontSize: 16,
                            minHeight: "300px",
                            width: "100%",
                            boxSizing: "border-box"
                        }}
                    />
                </div>

                <button
                    onClick={reviewCode}
                    className="review"
                >
                    Review
                </button>

            </div>

            <div className="right">
                <ReactMarkdown
                    rehypePlugins={[rehypeHighlight]}
                >
                    {review}
                </ReactMarkdown>
            </div>
        </main>
    );
}

export default App;

