// ChatApp.js
import React, { useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const ChatApp = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
    const newMessage = {
      user: randomUser,
      content: message,
      likes: 0,
    };
    setMessages([...messages, newMessage]);
  };

  const handleLikeClick = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].likes += 1;
    setMessages(updatedMessages);
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            user={message.user}
            content={message.content}
            likes={message.likes}
            onLikeClick={() => handleLikeClick(index)}
          />
        ))}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatApp;
