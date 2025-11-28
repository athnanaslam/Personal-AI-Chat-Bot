"use client";

import React, { useEffect, useRef, useCallback } from "react";
import "./../styles/message.css";
import { useMessageStore } from "../state/message_state";

type Message = {
    role: "user" | "ai";
    content: string;
};

const MessageLayout: React.FC = () => {
    const messages = useMessageStore((state) => state.messages);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Scroll to bottom safely
    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    return (
        <div className="chat_messages_container">
            {messages.map((msg: Message, index: number) => (
                <div key={index} className={`chat_message ${msg.role}`}>
                    <span className="message_role">
                        {msg.role === "user" ? "You" : "AI"}:
                    </span>{" "}
                    <span className="message_content">{msg.content}</span>
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default React.memo(MessageLayout);
