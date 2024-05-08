"use client";
import { useEffect, useRef } from "react";
import { useChat } from "ai/react";
import Link from "next/link";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null); // Specify the type explicitly

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <header className="fixed left-20 right-20 bg-[#393e41]">
        <div className="flex p-4 text-xl justify-center ">
          <Link href="/" className="font-bold cursor-pointer">
            Religion Ai
          </Link>
        </div>
      </header>
      <div className="flex flex-col gap-4 w-full max-w-md py-24 mx-auto stretch">
        {messages.map((m) => (
          <div key={m.id} className="whitespace-pre-wrap border-b-[1px] pb-4">
            {m.role === "user" ? "You: " : "Religion Ai: "}
            {m.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
        <form className="" onSubmit={handleSubmit}>
          <input
            className="fixed bottom-0 w-full max-w-md p-2 mb-10 mt-10  rounded shadow-xl bg-[#f6f7eb] text-[#0b0808] placeholder:text-[#0b0808] focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-[#e94f37] focus:border-[#e94f37]"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </>
  );
}
