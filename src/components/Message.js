import React from "react";
import moment from "moment";

function Message(data) {
  let dateTSFormat = "";
  if (typeof data.data.timestamp === "string") {
    dateTSFormat = Number.parseInt(data.data.timestamp);
  } else {
    dateTSFormat = data.data.timestamp;
  }
  const dateTimeFormat = moment(dateTSFormat).format("DD MMM YYYY hh:mm");
  return (
    <div
      className={
        data.data.author !== "Marko.J."
          ? "message-line left"
          : "message-line right"
      }
    >
      <div
        className={data.data.author !== "Marko.J." ? "card" : "card mess-color"}
      >
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">{data.data.author}</h6>
          <h5 className="card-title">{data.data.message}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{dateTimeFormat}</h6>
        </div>
      </div>
    </div>
  );
}

export default Message;
