import React, { useState } from 'react';
import './message.scss';
import { Avatar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'; // Import Send icon from Material UI
import AttachFileIcon from '@mui/icons-material/AttachFile'; // Import AttachFile icon from Material UI

const Message = ({ sender, content, timestamp, isImage, isAudio }) => {
  return (
    <div className={`message ${sender === 'You' ? 'sender' : 'receiver'}`}>
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
      sender: 'Chirag Hira',
      content: 'Wow, that looks amazing',
      timestamp: '10:22 AM',
      isImage: true,
    },
    {
      sender: 'You',
      content: 'Have a good day, Roman!',
      timestamp: '10:27 AM',
    },
    {
      sender: recipient.name,
      content: 'Hey there, I\'m having trouble opening...',
      timestamp: '11:24 AM',
    },
    {
      sender: recipient.name,
      content: 'Sure, but I\'m busy right now.',
      timestamp: '5:12 PM',
    },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [attachment, setAttachment] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() || attachment) {
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const newMessageObject = {
        sender: 'You',
        content: newMessage || attachment,
        timestamp,
        isImage: false, // Set default as text message
        isAudio: false,
      };
      setMessages([...messages, newMessageObject]);
      setNewMessage('');
      setAttachment('');
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
        <AttachFileIcon className="attachment-icon" />
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <input type="file" onChange={handleAttachmentChange} />
        <button onClick={handleSendMessage}><SendIcon /></button>
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
          <div className="connection-avatar"><Avatar src={connection.avatar} alt={connection.name} /></div>
          <div className="connection-info">
            <div className="connection-name">{connection.name}</div>
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
    { id: 1, name: 'Chirag Hira', avatar: '../../assets/student1.png' },
    { id: 2, name: 'Deepika Nagraj', avatar: '../../assets/student2.png' },
    { id: 3, name: 'Akshat Sharma', avatar: '../../assets/student3.png' },
    { id: 4, name: 'Prabhanshu Tiwari', avatar: '../../assets/student4.png' },
    { id: 5, name: 'Raj Sharma', avatar: '../../assets/student5.png' },
    { id: 6, name: 'Akshta Dong-re', avatar: '../../assets/student6.png' },
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
            <div className="recipient-avatar"><Avatar src={recipient.avatar} alt={recipient.name} /></div>
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
