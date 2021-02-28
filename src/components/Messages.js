import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Message from "./Message";
import { token } from "../API_data";

function Messages() {
  const newMessage = useSelector((state) => state.postNewMessage.newMessage);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(
          `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=${token}`
        )
        .then(function (response) {
          if (newMessage !== undefined) {
            response.data.push(newMessage);
          }
          setData(response.data);
        });
    };
    getData();
  }, [newMessage]);

  return (
    <div className="container">
      {data.map((item) => (
        <Message key={item._id} data={item} />
      ))}
    </div>
  );
}

export default Messages;
