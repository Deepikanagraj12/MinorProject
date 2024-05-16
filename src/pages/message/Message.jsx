import React, { useState } from 'react';
import './message.scss';
import { Avatar } from '@mui/material';
import picture from '../../assets/student.png';

const Message = ({ sender, content, timestamp, isImage, isAudio }) => {
  return (
    <div className={`message ${sender}`}>
      <div className="message-content">
        {isImage && <img src={content} alt="Shared Image" />}
        {isAudio && <audio src={content} controls />}
        {!isImage && !isAudio && content}
      </div>
      <div className="message-timestamp">{timestamp}</div>
    </div>
  );
};

const ChatWindow = ({ recipient }) => {
  const [messages, setMessages] = useState([
    {
      sender: recipient.name,
      content: 'Wow, that looks amazing',
      timestamp: '10:22 AM',
      isImage: true,
      isAudio: false,
    },
    {
      sender: 'You',
      content: 'Have a good day, Roman!',
      timestamp: '10:27 AM',
      isImage: false,
      isAudio: false,
    },
    {
      sender: recipient.name,
      content: 'Hey there, I\'m having trouble open...',
      timestamp: '11:24 AM',
      isImage: false,
      isAudio: true,
    },
    {
      sender: recipient.name,
      content: 'Sure, but I\'m busy right now.',
      timestamp: '5:12 PM',
      isImage: false,
      isAudio: true,
    },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [attachment, setAttachment] = useState(null);

  const handleSendMessage = () => {
    if (newMessage.trim() || attachment) {
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const newMessageObject = {
        sender: 'You',
        content: newMessage || attachment,
        timestamp,
        isImage: false,
        isAudio: false,
      };
      setMessages([...messages, newMessageObject]);
      setNewMessage('');
      setAttachment(null);
    }
  };

  const handleAttachmentChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAttachment(file.name); // Display file name as attachment
    }
  };

  return (
    <div className="chat-area">
      <div className="messages">
        {messages.map((message, index) => (
          <Message
            key={index}
            sender={message.sender}
            content={message.content}
            timestamp={message.timestamp}
            isImage={message.isImage}
            isAudio={message.isAudio}
          />
        ))}
      </div>
      <div className="text-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <input type="file" onChange={handleAttachmentChange} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

const ConnectionsList = ({ connections, setRecipient }) => {
  return (
    <div className="connections-list">
      <h2>Recent Messages</h2>
      {connections.map((connection) => (
        <div
          key={connection.id}
          className="connection"
          onClick={() => setRecipient(connection)}
        >
          <div className="connection-avatar">{<Avatar src ={connection.avatar} alt={connection.name}/>}</div>
          <div className="connection-info">
            <div className="connection-name">{connection.name}</div>
            {/* Add additional connection details */}
          </div>
          <div className="connection-actions">
            <button className="call-button">Call</button>
            <button className="profile-button">Profile</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const MessageApp = () => {
  const [recipient, setRecipient] = useState(null);
  const connections = [
    { id: 1, name: 'Chirag Hira' ,avatar : picture},
    { id: 2, name: 'Deepika Nagraj',avatar : picture },
    { id: 3, name: 'Akshat Sharma',avatar : picture },
    { id: 4, name: 'Prabhanshu Tiwari',avatar : picture },
    { id: 5, name: 'Raj Sharma',avatar : picture },
    { id: 6, name: 'Akshta Dong-re',avatar : picture },
  ];

  return (
    <div className="message-app">
      <ConnectionsList
        connections={connections}
        setRecipient={setRecipient}
      />
      {recipient && (
        <div className="chat-container">
          <div className="recipient-info">
            <div className="recipient-avatar"><Avatar src ={recipient.avatar} alt={recipient.name}/></div>
            <div className="recipient-name">{recipient.name}</div>
            <div className="recipient-actions">
              <button className="call-button">Call</button>
              <button className="profile-button">Profile</button>
            </div>
          </div>
          <ChatWindow recipient={recipient} />
        </div>
      )}
    </div>
    
  );
};

export default MessageApp;
