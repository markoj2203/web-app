import React from "react";
import Messages from "./Messages";
import PostMessage from "./PostMessage";

function App() {
  return (
    <>
      <div className="message-container">
        <Messages />
      </div>
      <PostMessage />
    </>
  );
}

export default App;
