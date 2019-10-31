import React, { Component } from 'react';
import MessageList from './MessageList';
import MessageBar from './MessageBar';
import Emoji from 'react-emoji-render';

const titleStyle = {
  width: 400,
  backgroundColor: '#A2A2A2',
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  position : 'center',
};

const Chat = () => {
  return (
    <div style={titleStyle}>
      <div style={{ paddingLeft: 10, paddingTop: 10, fontSize: 30 }}>
        Chat dépressif
      </div>
      <Emoji text="Ce message est dépressif ☠️" />
      <MessageList />
      <MessageBar />
    </div>
  );
};

export default Chat;
