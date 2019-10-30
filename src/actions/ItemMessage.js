import React from 'react';
import { ADD_MESSAGE_ACTION, REMOVE_MESSAGE_ACTION } from '../constants/action';

export const addMessageItem = (message, username) => {
  return {
    type: ADD_MESSAGE_ACTION,
    message,
    username,
  };
};

export const removeMessageItem = index => {
  return {
    type: REMOVE_MESSAGE_ACTION,
    index,
  };
};
