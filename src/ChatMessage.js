// ChatMessage.js
import React from 'react';

const ChatMessage = ({ user, content, likes, onLikeClick }) => {
  return (
    <div>
      <span>{user}:</span>
      <p>{content}</p>
      <button onClick={onLikeClick}>Like ({likes})</button>
    </div>
  );
};

export default ChatMessage;
