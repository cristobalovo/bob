import React, { Fragment } from 'react'
import NewTopic from './components/newTopic';
import Feed from './components/feed';

const Post = () => {
  return (
    <Fragment>
      <NewTopic />
      <Feed />  
    </Fragment>
  )
}

export default Post;