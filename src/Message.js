import React from 'react';
import "./Message.css";
import { Avatar } from '@mui/material';

function Message() {
  return (
    <div className='message'>
      <Avatar />
      <div className="message__info">
        <h4>User-1
            <span className="message__timestamp">This is a timestamp.</span>
        </h4>
        <p>This is a message.</p>
      </div>
    </div>
  );
}

export default Message
