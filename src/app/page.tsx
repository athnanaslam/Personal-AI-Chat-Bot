"use client"; 

import Toolbar from "./components/toolbar_layout";
import ChatInput from "./components/chat_text_field_layout";
import MessageLayout from "./components/messages_layout";

export default function Home() {

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Toolbar title="Johnson - AI" />

      <div style={{ flexGrow: 1, overflowY: "auto", padding: "10px" }}>
        <MessageLayout />
      </div>

      <ChatInput />
    </div>
  );
}

