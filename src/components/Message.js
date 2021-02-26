import React from "react";
import moment from "moment";

function Messages(data) {
  const dateTimeFormat = moment(data.data.timestamp).format(
    "DD MMM YYYY hh:mm"
  );
  return (
    <div
      className={
        data.data.author !== "cdscd"
          ? "message-line left"
          : "message-line right"
      }
    >
      <div
        className={data.data.author !== "cdscd" ? "card" : "card mess-color"}
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

export default Messages;
