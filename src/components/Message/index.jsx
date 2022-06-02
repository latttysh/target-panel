import React from 'react';
import './Message.scss';

const Message = ({ isMine, text }) => {
  return (
    <div
      className="message"
      style={isMine ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' }}>
      {isMine ? <div className="message_avatar">AVATAR</div> : ''}
      <div className="message_text">{text}</div>
      {isMine ? '' : <div className="message_avatar">AVATAR</div>}
    </div>
  );
};

export default Message;
