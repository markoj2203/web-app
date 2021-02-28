import React, { useRef } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { token } from "../API_data";

export default function PostMessage() {
  const inputEl = useRef(null);
  const dispatch = useDispatch();

  const postMessage = async () => {
    const data = {
      message: inputEl.current.value,
      author: "Marko.J.",
    };
    const headers = {
      "Content-Type": "application/json",
      token: token,
    };

    await axios
      .post("https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0", data, {
        headers: headers,
      })
      .then(function (response) {
        //I got a success status code 200
        //but for some reason i can't post message to server
        //always shows me 100 entries, maybe is limited...
        //so because of that i will adding new posts to object locally

        dispatch({ type: "POST_NEW_MESSAGE", newMessage: response.data });
      });
  };

  return (
    <div className="send-message-container">
      <input type="text" placeholder="Message" ref={inputEl} />
      <button type="button" className="btn btn-danger" onClick={postMessage}>
        Send
      </button>
    </div>
  );
}
