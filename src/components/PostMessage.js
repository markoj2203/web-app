import React from "react";

export default function PostMessage() {
  return (
    <div className="send-message-container">
      <input type="text" placeholder="Message" />
      <button type="button" className="btn btn-danger">
        Send
      </button>
    </div>
  );
}
