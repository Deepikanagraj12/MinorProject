import React from 'react';
import "./Connection.scss"
import student from "../../assets/student.png"
import alumni from "../../assets/alumni.png"

const Connection = () => {
  const connections = [
    { id: 1, name: 'John Doe', image: student },
    { id: 2, name: 'Jane Doe', image: student },
    { id: 3, name: 'Bob Smith', image: student },
  ];

  const followers = [
    { id: 1, name: 'Alice Johnson', image: alumni },
    { id: 2, name: 'Mike Brown', image: alumni },
    { id: 3, name: 'Emily Davis', image: alumni },
  ];

  return (
    <div className="connection-container">
      <div className="connection-list">
        <h2>Connections</h2>
        <ul>
          {connections.map((connection) => (
            <li key={connection.id}>
              <div className="connection-item">
                <img src={connection.image} alt={connection.name} />
                <div className="connection-info">
                  <h3>{connection.name}</h3>
                  <p>GRADUATE ENGINEER TRAINEE ! PYTHONI HTML | CSS | JAVASCRIPT| SQL</p>
                </div>
              </div>
              <button className="message-button">Message</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="follower-list">
        <h2>Followers</h2>
        <ul>
          {followers.map((follower) => (
            <li key={follower.id}>
              <div className="follower-item">
                <img src={follower.image} alt={follower.name} />
                <div className="follower-info">
                  <h3>{follower.name}</h3>
                  <p>3 CODER at CodeChef | College Ambassador @Techfest IITB | MERN Stack Devel</p>
                </div>
              </div>
              <button className="message-button">Message</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Connection;