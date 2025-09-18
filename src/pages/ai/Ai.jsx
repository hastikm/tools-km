import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AiUI() {
  const [chats, setChats] = useState([
    { id: 1, title: "Demo Chat 1", messages: [] },
    { id: 2, title: "Demo Chat 2", messages: [] },
  ]);
  const [activeChatIndex, setActiveChatIndex] = useState(0);
  const [input, setInput] = useState("");
  const listRef = useRef(null);

  const activeChat = chats[activeChatIndex] || { messages: [] };

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      role: "user",
      text: input,
      time: new Date().toLocaleTimeString(),
    };

    const updatedChats = [...chats];
    updatedChats[activeChatIndex].messages.push(newMessage);
    setChats(updatedChats);
    setInput("");

    setTimeout(() => {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }, 100);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      const aiMessage = {
        id: Date.now() + 1,
        role: "ai",
        text: data.answer,
        time: new Date().toLocaleTimeString(),
      };

      const newChats = [...chats];
      newChats[activeChatIndex].messages.push(aiMessage);
      setChats(newChats);

      setTimeout(() => {
        listRef.current.scrollTop = listRef.current.scrollHeight;
      }, 100);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex">
      <div className="flex flex-col flex-1 bg-white dark:bg-gray-800">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-semibold">AI</div>
            <div>
              <div className="font-semibold">Ai Chat Demo</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">ظاهر اپ با OpenAI API</div>
            </div>
          </div>
          <button className="px-3 py-2 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white text-sm shadow">New Chat</button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <aside className="w-64 border-r dark:border-gray-700 hidden md:block bg-gray-50 dark:bg-gray-900 overflow-auto">
            <div className="p-3 space-y-2">
              {chats.map((c, idx) => (
                <div
                  key={c.id}
                  onClick={() => setActiveChatIndex(idx)}
                  className={`p-2 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${idx === activeChatIndex ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                >
                  <div className="font-medium">{c.title}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{c.messages.length} messages</div>
                </div>
              ))}
            </div>
          </aside>

          {/* Main chat */}
          <main className="flex-1 flex flex-col">
            <div className="flex-1 overflow-auto p-4" ref={listRef}>
              <AnimatePresence initial={false} mode="popLayout">
                {activeChat.messages.map((m) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className={`mb-3 max-w-[80%] ${m.role === 'user' ? 'ml-auto text-right' : 'mr-auto text-left'}`}
                  >
                    <div className={`${m.role === 'user' ? 'bg-emerald-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'} px-4 py-2 rounded-lg`}>
                      <div className="whitespace-pre-wrap">{m.text}</div>
                      <div className="text-[10px] opacity-70 mt-1">{m.time}</div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {activeChat.messages.length === 0 && (
                <div className="text-center text-gray-500 mt-10">هنوز پیامی فرستاده نشده — فقط UI 😎</div>
              )}
            </div>

            {/* Input */}
            <div className="border-t dark:border-gray-700 p-3 flex gap-2 items-center">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                rows={1}
                className="flex-1 resize-none rounded-md px-3 py-2 border dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                placeholder="پیام خود را بنویس و Enter بزن..."
              />
              <button
                onClick={handleSend}
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md"
              >
                Send
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
