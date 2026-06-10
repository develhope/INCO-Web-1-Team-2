import React, { useState, useEffect } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const BOT_ENDPOINT = "https://mocki.io/v1/your-mock-id";

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [shouldFetch, setShouldFetch] = useState(null);

  const { data, error, isLoading } = useSWR(shouldFetch, fetcher);

  useEffect(() => {
    if (data && data.reply) {
      setMessages((prev) => [...prev, { from: "bot", text: data.reply }]);
      setShouldFetch(null);
    }
  }, [data]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text: input }]);
    setInput("");
    setShouldFetch(BOT_ENDPOINT);
  };

  return (
    <div className="chat-app">
      <ul className="messages">
        {messages.map((m, i) => (
          <li key={i} className={m.from}>
            <strong>{m.from}:</strong> {m.text}
          </li>
        ))}
        {isLoading && <li className="bot">Bot is typing...</li>}
        {error && <li className="error">Failed to reach the bot.</li>}
      </ul>
      <form onSubmit={handleSend}>
        <input
          type="text"
          value={input}
          placeholder="Type a message..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatApp;
