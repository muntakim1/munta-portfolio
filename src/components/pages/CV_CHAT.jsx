import React, { useState } from "react";
import axios from "axios";

const RAGChat = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await axios.post("http://103.141.2.165:11300/api/ask", {
        query,
      });
      setResponse(res.data.response);
    } catch (err) {
      console.error(err);
      setResponse("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>LangChain RAG Chat</h1>
      <div style={styles.chatBox}>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask a question..."
          style={styles.textarea}
        />
        <button onClick={handleAsk} style={styles.button} disabled={loading}>
          {loading ? "Loading..." : "Ask"}
        </button>
      </div>
      {response && (
        <div style={styles.responseBox}>
          <strong>Response:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
  },
  chatBox: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    resize: "none",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  responseBox: {
    marginTop: "20px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
};

export default RAGChat;
