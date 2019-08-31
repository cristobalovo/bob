import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import { Button } from 'antd'

// NOTE: upvote/downvote not implemented
// Slow to load IPFS data... need a centralized cache/db to enhance user experience
const Feed = () => {
  const feed = useSelector(state => state.navigation.feed);

  return (
    <Fragment>
      {
        feed && feed.map((item, i) => {
          const { posts } = item;
          return posts && posts.map((postItem, index) => {
            let hasError = null;
            let itemJson;
            try {
              itemJson = JSON.parse(postItem.message);
            } catch (e) {
              hasError = true;
            }

            return (
              <div className="post_box flex" key={i*index*2}>
                <div className="post_voters flex">
                  <Button>
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 15.4 9.4">
                    <path className="st0" d="M1.2,7.3l5.4-5.4l0,0l1.1-1.1l1.1,1.1l0,0l5.4,5.4c0.3,0.3,0.3,0.8,0,1.1c-0.2,0.2-0.4,0.2-0.6,0.2
                    c-0.2,0-0.4-0.1-0.6-0.2L7.7,3L2.3,8.4C2.1,8.6,1.9,8.7,1.7,8.7S1.3,8.6,1.2,8.4C0.9,8.1,0.9,7.6,1.2,7.3z"/>
                  </svg>
                  </Button>
                  <p>3</p>
                  <Button>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 15.4 9.4">
                      <path className="st0" d="M1.2,2.1l5.4,5.4l0,0l1.1,1.1l1.1-1.1l0,0l5.4-5.4c0.3-0.3,0.3-0.8,0-1.1c-0.2-0.2-0.4-0.2-0.6-0.2
                      c-0.2,0-0.4,0.1-0.6,0.2L7.7,6.4L2.3,1C2.1,0.8,1.9,0.8,1.7,0.8S1.3,0.8,1.2,1C0.9,1.3,0.9,1.8,1.2,2.1z"/>
                    </svg>
                  </Button>
                </div>
                <div className="post_title_subtitle flex">
                  {
                    hasError === null ? <h2> { itemJson.title } </h2>  : null  
                  }
                  {
                     hasError === null ? <p> { itemJson.description } </p>  : <p> {postItem.message} </p>  
                  }
                </div>
              </div>
            )
          });
        })
      }
    </Fragment>
  )
}

export default Feed;