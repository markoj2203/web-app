const postNewMessage = (newMessage) => {
  return {
    type: "POST_NEW_MESSAGE",
    payload: newMessage,
  };
};

export default postNewMessage;
