import React, { useState, useEffect, useRef } from "react";
import { FaComments } from "react-icons/fa";
import axios from "axios";

const ChatOverlay = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null); // Reference to the bottom of the chat

  const handleSend = () => {
    if (input.trim()) {
      // Add user's message
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: "You", text: input },
      ]);

      // Clear input
      setInput("");

      // Simulate bot's response with a delay
      setTimeout(async () => {
        try {
          // Show loading message while awaiting response
          setMessages((prevMessages) => [
            ...prevMessages,
            { user: "Bot", text: "Typing..." },
          ]);
          console.log(input);
          const encodedInput = encodeURIComponent(input);
          console.log(encodedInput);
          // Call the API
          const res = await axios.post(
            `http://127.0.0.1:5000/api/ask?query=${encodedInput}`
          );

          // Replace the "Typing..." message with the actual response
          setMessages((prevMessages) =>
            prevMessages
              .slice(0, -1)
              .concat({ user: "Bot", text: res.data.response })
          );
        } catch (err) {
          console.error(err);

          // Handle error and notify the user
          setMessages((prevMessages) =>
            prevMessages.slice(0, -1).concat({
              user: "Bot",
              text: "An error occurred. Please try again.",
            })
          );
        }
      }, 1000); // Delay the bot response by 1 second
    }
  };

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#007bff",
          color: "#fff",
          borderRadius: "50%",
          padding: "15px",
          border: "none",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          fontSize: "24px",
        }}
      >
        <FaComments />
      </button>

      {/* Chat Overlay */}
      {isChatOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "400px",
            height: "500px",
            backgroundColor: "gray",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              paddingBottom: "10px",
              borderBottom: "1px solid #ccc",
            }}
          >
            <div
              style={{
                backgroundColor: "#007bff",
                position: "fixed",
                width: 380,
                zIndex: 50,
                color: "#fff",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "20px",
                padding: "10px",
                borderRadius: "8px 8px 0 0",
              }}
            >
              Know more about Muntakim
            </div>
            <hr />
            <div style={styles.messages}>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.message,
                    alignSelf: msg.user === "You" ? "flex-end" : "flex-start",
                    backgroundColor: msg.user === "You" ? "#007bff" : "#f1f1f1",
                    color: msg.user === "You" ? "#fff" : "#000",
                  }}
                >
                  <strong>{msg.user}:</strong> {msg.text}
                </div>
              ))}
              {/* This empty div will push the chat to the bottom */}
              <div ref={messagesEndRef} />
            </div>
          </div>
          <div className="flex">
            <input
              type="text"
              value={input}
              placeholder="Type a message..."
              onChange={(e) => setInput(e.target.value)}
              style={{
                padding: "10px",
                marginTop: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "80%",
              }}
            />
            <button onClick={handleSend} style={styles.sendButton}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  messages: {
    flex: 1,
    position: "relative",
    padding: "10px",
    marginTop: "50px",
    overflowY: "auto",
    borderBottom: "1px solid #ccc",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  message: {
    maxWidth: "70%",
    padding: "10px",
    borderRadius: "10px",
    wordWrap: "break-word",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  sendButton: {
    marginTop: "10px",
    marginLeft: "10px",
    padding: "10px 10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    width: "20%",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ChatOverlay;
