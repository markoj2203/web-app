import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Message from "./Message";

function Messages() {
  const TOKEN = "XWJU9HQeFeqf";
  const newMessage = useSelector((state) => state.postNewMessage.newMessage);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      //let arrData = [];
      await axios
        .get(
          `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=${TOKEN}`
        )
        .then(function (response) {
          //arrData.push(response.data);
          if (newMessage !== undefined) {
            response.data.push(newMessage);
          }
          setData(response.data);
        });
    };
    getData();
  }, [newMessage]);

  return (
    <>
      {data.map((item) => (
        <Message key={item._id} data={item} />
      ))}
    </>
  );
}

export default Messages;
