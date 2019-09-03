import React, { Fragment } from 'react'
import ChatInput from './components/input';
import Messages from './components/messages';

// CHAT OVERLAY
// NOTE: All features need integration
const Chat = () => {
  return (
    <Fragment>
      <Messages />
      <ChatInput />
    </Fragment>
  )
}

export default Chat;
