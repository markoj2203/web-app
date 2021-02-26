import React, { useState, useEffect } from "react";
import axios from "axios";
import Message from "./Message";

function Messages() {
  const TOKEN = "XWJU9HQeFeqf";
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios
      .get(
        `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=${TOKEN}`
      )
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map((item) => (
        <Message key={item._id} data={item} />
      ))}
    </>
  );
}

export default Messages;
