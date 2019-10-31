import React from 'react';
import { Emojione } from 'react-emoji-render';
import { removeMessageItem } from './../actions/ItemMessage';
import { connect } from 'react-redux';

const MessageItem = ({ message, onRemoveMessageItem, index }) => {
  return (
    <li
      style={{
        position: 'relative',
        marginBottom: 10,
        backgroundColor: 'white',
        padding: 10,
      }}
    >
      <small style={{ color : 'red' }}>@{message.username}</small>
      <div><Emojione text={message.message} /></div>
      <small
        onClick={() => onRemoveMessageItem(index)}
        style={{ position: 'absolute', right: 10, top: 5, cursor: 'pointer' }}
      >
        🗑
      </small>
    </li>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveMessageItem: index => {
      dispatch(removeMessageItem(index));
    },
  };
};

export default connect(null, mapDispatchToProps)(MessageItem);
