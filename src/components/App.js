import React from "react";
import Messages from "./Messages";
import PostMessage from "./PostMessage";

function App() {
  return (
    <>
      <div className="container">
        <Messages />
      </div>
      <div>
        <PostMessage />
      </div>
    </>
  );
}

export default App;
