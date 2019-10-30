import React from 'react';
import { combineReducers } from 'redux';
import messages from './ItemMessage';

export default combineReducers({
  message: messages,
});
