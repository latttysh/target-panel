import React from "react";
import "./Message.scss";

const Message = ({ isMine, text }) => {
  return (
    <div
      className="message"
      style={
        isMine ? { flexDirection: "row-reverse" } : { flexDirection: "row" }
      }
    >
      <div className="message_avatar">AVATAR</div>
      <div className="message_text">{text}</div>
    </div>
  );
};

export default Message;
