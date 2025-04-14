import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [department, setDepartment] = useState('Marketing');
  const [inputText, setInputText] = useState('');
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [msg, setMsg] = useState([" Marketing refers to the process of promoting and selling products or services to customers.It involves researching customer needs and wants..."]);

  const handleLogin = () => {
    if (email === 'user123' && password === 'pass123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };
  const HandleMsg = () => {
   setMsg([...msg,inputText]);
    setInputText('');
  };

  const getPlaceholder = () => {
    return department === 'Sales'
      ? 'Enter your sales query here...'
      : 'Enter your marketing query here...';
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="app">
      {!isLoggedIn ? (
        <div className='login-background'>
        <div className="login-container">
          <h2>Welcome Back</h2>
          <p>Sign in to continue to Aiworksquad.</p>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="remember-section">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <span className="forgot">Forgot password?</span>
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
        </div>
      ) : (
        <div className="chat-container">
          <div className={`sidebar ${sidebarVisible ? 'show' : 'hide'}`}>
            <button className="new-chat">+ New Chat</button>
            <div>
            <div className="history">History</div>
            <ul className="nav-links">
              <li>New Chat</li>
              <li>What is marketing</li>
              <li>Give me a list of...</li>
              <li>Give me a list of marketing agencies near me in 5 km</li>
            </ul>
            </div>
            <div className="sidebar-footer">
              <p>Upgrade to Plus</p>
              <p>Updates & FAQ</p>
              <p>Terms and Conditions</p>
              <p>Privacy Policy Page</p>
            </div>
          </div>

          <div className="chat-panel">
            <div className="navbar">
              <div className="hamburger" onClick={toggleSidebar}>
                  &#9776;
              </div>
                  <div className="logo">Aiworksquad</div>
              
              <div className="controls">
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                </select>
                <div className="user">Nithin</div>
              </div>
            </div>

            <div className="chat-header">
              <h3>Introduce yourself to AIWorkSquad</h3>
              <p>I'm Nithin, CEO of an IT startup company in India</p>
            </div>
            <div className="chat-box">
              <div className="chat-message">
              {msg.map((message, index) => (  
                <div key={index} className="message">
                  <p>{message}</p>
              </div>
                  ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                placeholder={getPlaceholder()}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <button className="send-button" onClick={HandleMsg}>➤</button>
            </div>
          </div>
        </div>
    </div>
      )}
    </div>
  )
}

export default App;
