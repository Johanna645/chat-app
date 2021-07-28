import logo from './logo.svg';
import './App.css';
import React from 'react';
import data from './assets/conversation.json';

import { useEffect, useState } from 'react';
import amy from './images/amy.jpg';
import jack from './images/jack.jpg';
import john from './images/john.jpg';

import facebookLogo from './images/facebookLogo.png';
import instagramLogo from './images/instagramLogo.png';
import twitterLogo from './images/twitterLogo.png';

function App() {
  data.forEach((conversation) => {
    conversation.messages = conversation.messages.sort((m1, m2) =>
      m1.time < m2.time ? -1 : m1.time > m2.time ? 1 : 0,
    );
  });

  const [conversationList, setConversationList] = useState(data);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');

  function handleIndexChange(event) {
    setSelectedIndex(event.target.value);
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleAdd() {
    let newConversationList = [...conversationList];

    const messages = conversationList[selectedIndex].messages;

    const index = messages.length - 1;
    const count = messages[index].time + 1;
    const newMessage = { time: count, content: inputValue, type: 'sent' };

    newConversationList[selectedIndex].messages.push(newMessage);

    setConversationList(newConversationList);
    setInputValue('');
  }

  return (
    <div>
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
      </header>
      <div>
        <div className="app-container">
          <div className="app-column">
            <button
              className="app-button"
              value="0"
              onClick={handleIndexChange}
            >
              <img
                src={john}
                className="john"
                alt="john"
                width="45px"
                style={{ borderRadius: '50%' }}
              />
              {conversationList[0].name}
              {conversationList[0].status}
            </button>
            <button
              className="app-button"
              value="1"
              onClick={handleIndexChange}
            >
              <img
                src={amy}
                className="amy"
                alt="amy"
                width="45px"
                style={{ borderRadius: '50%' }}
              />
              {conversationList[1].name}
              {conversationList[1].status}
            </button>
            <button
              className="app-button"
              value="2"
              onClick={handleIndexChange}
            >
              <img
                src={jack}
                className="jack"
                alt="jack"
                width="45px"
                style={{ borderRadius: '50%' }}
              />
              {conversationList[2].name}
              {conversationList[2].status}
            </button>

            {/* Here I tried to map over the contacts, but had problems with the image source path, so solved it above manually. Will still try another approach, maybe with adding some 'if name=== ' or so, which works out when there is only a few contacts, but doesn't seem too much of a long term option to me.

            <div>
              <ul>
                {conversationList.map((contact) => (
                  <li key={contact.name}>
                    <button>
                      {contact.name}
                      {contact.status}
                    </button>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>

          <div className="app-column2">
            <div className="app-column2-row">
              <div>
                <ul className="app-ul">
                  {conversationList[selectedIndex].messages.map((message) => (
                    <div key="message.time">
                      {message.type === 'sent' ? (
                        <li className="app-textbox-sent">
                          {' '}
                          {message.content} <br />
                          {message.time}
                        </li>
                      ) : (
                        <li className="app-textbox-received">
                          {' '}
                          {message.content} <br />
                          {message.time}
                        </li>
                      )}
                    </div>
                  ))}
                </ul>
              </div>
            </div>
            <div className="app-column2-2row">
              <input
                className="app-message-input"
                type="text"
                name="message"
                value={inputValue}
                onChange={handleInputChange}
              />
              <button
                className="app-message-send"
                type="submit"
                onClick={handleAdd}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="app-footer">
        <section className="app-section">
          <img src={logo} className="app-logo" alt="logo" />
          <hr />
        </section>

        <div className="app-footer-container">
          <div className="app-row">
            <div className="app-footer-column-left">
              <ul className="app-ul">
                <li>
                  <a href="#1" className="app-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#!" className="app-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#!" className="app-link">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="app-row">
            <div className="app-footer-column">
              <ul className="app-ul">
                <li>
                  <a href="#!" className="app-link">
                    Industries
                  </a>
                </li>
                <li>
                  <a href="#!" class="app-link">
                    References
                  </a>
                </li>
                <li>
                  <a href="#!" class="app-link">
                    Partnerships
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="app-row">
            <div className="app-footer-column-right">
              <ul className="app-ul">
                <li>
                  <a href="#!" className="app-link">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#!" className="app-link">
                    Locations
                  </a>
                </li>
                <li>
                  <a href="#!" className="app-link">
                    Imprint
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="app-section">
          <div>
            <span className="app-span-footer">
              © 2021 COMPANY
              <img src={facebookLogo} alt="facebook" width="24px" />
              <img
                src={twitterLogo}
                alt="twitter"
                width="24px"
                margin-right="10px"
              />
              <img src={instagramLogo} alt="instagram" width="24px" />
            </span>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
