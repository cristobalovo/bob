import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd'
import { Input } from 'antd';
const { TextArea } = Input;

const Post = () => {
  const feed = useSelector(state => state.navigation.feed);

  return (
    <div className="sidebar_inner expanded flex">
      <div className="sidebar_inner_title flex">
          <div className="sidebar_inner_title_icon post_icon">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 46.7 36.2">
              <path className="st3" d="M31.4,8.7l-0.4,0v0h-1v0l-11.2,0v6.1l-7.2,0V27h16.2v-6.1H35v-7.3v-1v-0.3L31.4,8.7z M26.8,26H12.7V15.8l6.2,0
              v5h8V26z M31.1,12.5V9.7l2.8,2.8H31.1z M34,13.6v6.3H19.8V9.7l10.2,0v3.9H34z"/>
          </svg>
        </div>
        <div className="spacer"></div>
        <Button size="large" shape="circle">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 38.1 36.8">
          <g>
            <path className="st0" d="M26.5,26.9c-0.3,0-0.5-0.1-0.7-0.3l-15-15c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l15,15c0.4,0.4,0.4,1,0,1.4
              C27,26.8,26.8,26.9,26.5,26.9z"/>
          </g>
          <g>
            <path className="st0" d="M11.6,26.9c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l15-15c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-15,15
              C12.1,26.8,11.8,26.9,11.6,26.9z"/>
          </g>
        </svg>

      </Button>
      </div>
      <section id="newpostclosed">
        <div className="button_box newtopic">
          <Button type="primary">+ New topic</Button>
        </div>
      </section>
      <section id="newpostopen">
        <div className="newpost">
          <Input placeholder="Title of topic" />
          <TextArea
            placeholder="Content of topic"
            autosize={{ minRows: 4, maxRows: 10 }}
          />
        </div>
        <div className="newpost_button_box">
          <Button type="primary">Submit</Button>
        </div>
      </section>

      {
        feed && feed.map((item, i) => {
          console.log({ item });
          // if(i === 0) {
          //   const itemJson = JSON.parse(item.message);
          //   console.log({ itemJson });
          // }

          let hasError = null;
          let itemJson;
          try {
            itemJson = JSON.parse(item.message);
            console.log({ itemJson });
          } catch (e) {
            console.log('====================================');
            console.log({ e });
            console.log('====================================');
            hasError = true;
          }

          console.log({ hasError });
          

          return (
            <div className="post_box flex" key={i}>
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
                   hasError === null ? <p> { itemJson.description } </p>  : <p> {item.message} </p>  
                }
                {/* <h2>Title, baby!</h2> */}
                {/* <p>Does content come here?</p> */}
              </div>
            </div>
          )
        })
      }


        {/* <div className="post_box flex">
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
            <h2>Title, baby!</h2>
            <p>Does content come here?</p>
          </div>
        </div>

        <div className="post_box flex">
          <div className="post_voters flex">
            <Button>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 15.4 9.4">
              <path className="st0" d="M1.2,7.3l5.4-5.4l0,0l1.1-1.1l1.1,1.1l0,0l5.4,5.4c0.3,0.3,0.3,0.8,0,1.1c-0.2,0.2-0.4,0.2-0.6,0.2
              c-0.2,0-0.4-0.1-0.6-0.2L7.7,3L2.3,8.4C2.1,8.6,1.9,8.7,1.7,8.7S1.3,8.6,1.2,8.4C0.9,8.1,0.9,7.6,1.2,7.3z"/>
            </svg>
            </Button>
            <p>1</p>
            <Button>
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 15.4 9.4">
                <path className="st0" d="M1.2,2.1l5.4,5.4l0,0l1.1,1.1l1.1-1.1l0,0l5.4-5.4c0.3-0.3,0.3-0.8,0-1.1c-0.2-0.2-0.4-0.2-0.6-0.2
                c-0.2,0-0.4,0.1-0.6,0.2L7.7,6.4L2.3,1C2.1,0.8,1.9,0.8,1.7,0.8S1.3,0.8,1.2,1C0.9,1.3,0.9,1.8,1.2,2.1z"/>
              </svg>
            </Button>
          </div>
          <div className="post_title_subtitle flex">
            <h2>Anyone wanna talk about this?</h2>
            <p>Whatever this is...</p>
          </div>
        </div>

        <div className="post_box flex">
          <div className="post_voters flex">
            <Button>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 15.4 9.4">
              <path className="st0" d="M1.2,7.3l5.4-5.4l0,0l1.1-1.1l1.1,1.1l0,0l5.4,5.4c0.3,0.3,0.3,0.8,0,1.1c-0.2,0.2-0.4,0.2-0.6,0.2
              c-0.2,0-0.4-0.1-0.6-0.2L7.7,3L2.3,8.4C2.1,8.6,1.9,8.7,1.7,8.7S1.3,8.6,1.2,8.4C0.9,8.1,0.9,7.6,1.2,7.3z"/>
            </svg>
            </Button>
            <p>0</p>
            <Button>
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 15.4 9.4">
                <path className="st0" d="M1.2,2.1l5.4,5.4l0,0l1.1,1.1l1.1-1.1l0,0l5.4-5.4c0.3-0.3,0.3-0.8,0-1.1c-0.2-0.2-0.4-0.2-0.6-0.2
                c-0.2,0-0.4,0.1-0.6,0.2L7.7,6.4L2.3,1C2.1,0.8,1.9,0.8,1.7,0.8S1.3,0.8,1.2,1C0.9,1.3,0.9,1.8,1.2,2.1z"/>
              </svg>
            </Button>
          </div>
          <div className="post_title_subtitle flex">
            <h2>Very interesting topic as well.</h2>
            <p>Lorem ipsum datir</p>
          </div>
        </div>


        <div className="post_box flex">
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
            <h2>Title, baby!</h2>
            <p>Does content come here?</p>
          </div>
        </div>

        <div className="post_box flex">
          <div className="post_voters flex">
            <Button>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 15.4 9.4">
              <path className="st0" d="M1.2,7.3l5.4-5.4l0,0l1.1-1.1l1.1,1.1l0,0l5.4,5.4c0.3,0.3,0.3,0.8,0,1.1c-0.2,0.2-0.4,0.2-0.6,0.2
              c-0.2,0-0.4-0.1-0.6-0.2L7.7,3L2.3,8.4C2.1,8.6,1.9,8.7,1.7,8.7S1.3,8.6,1.2,8.4C0.9,8.1,0.9,7.6,1.2,7.3z"/>
            </svg>
            </Button>
            <p>1</p>
            <Button>
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 15.4 9.4">
                <path className="st0" d="M1.2,2.1l5.4,5.4l0,0l1.1,1.1l1.1-1.1l0,0l5.4-5.4c0.3-0.3,0.3-0.8,0-1.1c-0.2-0.2-0.4-0.2-0.6-0.2
                c-0.2,0-0.4,0.1-0.6,0.2L7.7,6.4L2.3,1C2.1,0.8,1.9,0.8,1.7,0.8S1.3,0.8,1.2,1C0.9,1.3,0.9,1.8,1.2,2.1z"/>
              </svg>
            </Button>
          </div>
          <div className="post_title_subtitle flex">
            <h2>Anyone wanna talk about this?</h2>
            <p>Whatever this is...</p>
          </div>
        </div>

        <div className="post_box flex">
          <div className="post_voters flex">
            <Button>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 15.4 9.4">
              <path className="st0" d="M1.2,7.3l5.4-5.4l0,0l1.1-1.1l1.1,1.1l0,0l5.4,5.4c0.3,0.3,0.3,0.8,0,1.1c-0.2,0.2-0.4,0.2-0.6,0.2
              c-0.2,0-0.4-0.1-0.6-0.2L7.7,3L2.3,8.4C2.1,8.6,1.9,8.7,1.7,8.7S1.3,8.6,1.2,8.4C0.9,8.1,0.9,7.6,1.2,7.3z"/>
            </svg>
            </Button>
            <p>0</p>
            <Button>
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 15.4 9.4">
                <path className="st0" d="M1.2,2.1l5.4,5.4l0,0l1.1,1.1l1.1-1.1l0,0l5.4-5.4c0.3-0.3,0.3-0.8,0-1.1c-0.2-0.2-0.4-0.2-0.6-0.2
                c-0.2,0-0.4,0.1-0.6,0.2L7.7,6.4L2.3,1C2.1,0.8,1.9,0.8,1.7,0.8S1.3,0.8,1.2,1C0.9,1.3,0.9,1.8,1.2,2.1z"/>
              </svg>
            </Button>
          </div>
          <div className="post_title_subtitle flex">
            <h2>Very interesting topic as well.</h2>
            <p>Lorem ipsum datir</p>
          </div>
        </div>



        <div className="post_box flex">
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
            <h2>Title, baby!</h2>
            <p>Does content come here?</p>
          </div>
        </div>

        <div className="post_box flex">
          <div className="post_voters flex">
            <Button>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 15.4 9.4">
              <path className="st0" d="M1.2,7.3l5.4-5.4l0,0l1.1-1.1l1.1,1.1l0,0l5.4,5.4c0.3,0.3,0.3,0.8,0,1.1c-0.2,0.2-0.4,0.2-0.6,0.2
              c-0.2,0-0.4-0.1-0.6-0.2L7.7,3L2.3,8.4C2.1,8.6,1.9,8.7,1.7,8.7S1.3,8.6,1.2,8.4C0.9,8.1,0.9,7.6,1.2,7.3z"/>
            </svg>
            </Button>
            <p>1</p>
            <Button>
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 15.4 9.4">
                <path className="st0" d="M1.2,2.1l5.4,5.4l0,0l1.1,1.1l1.1-1.1l0,0l5.4-5.4c0.3-0.3,0.3-0.8,0-1.1c-0.2-0.2-0.4-0.2-0.6-0.2
                c-0.2,0-0.4,0.1-0.6,0.2L7.7,6.4L2.3,1C2.1,0.8,1.9,0.8,1.7,0.8S1.3,0.8,1.2,1C0.9,1.3,0.9,1.8,1.2,2.1z"/>
              </svg>
            </Button>
          </div>
          <div className="post_title_subtitle flex">
            <h2>Anyone wanna talk about this?</h2>
            <p>Whatever this is...</p>
          </div>
        </div>

        <div className="post_box flex">
          <div className="post_voters flex">
            <Button>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 15.4 9.4">
              <path className="st0" d="M1.2,7.3l5.4-5.4l0,0l1.1-1.1l1.1,1.1l0,0l5.4,5.4c0.3,0.3,0.3,0.8,0,1.1c-0.2,0.2-0.4,0.2-0.6,0.2
              c-0.2,0-0.4-0.1-0.6-0.2L7.7,3L2.3,8.4C2.1,8.6,1.9,8.7,1.7,8.7S1.3,8.6,1.2,8.4C0.9,8.1,0.9,7.6,1.2,7.3z"/>
            </svg>
            </Button>
            <p>0</p>
            <Button>
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 15.4 9.4">
                <path className="st0" d="M1.2,2.1l5.4,5.4l0,0l1.1,1.1l1.1-1.1l0,0l5.4-5.4c0.3-0.3,0.3-0.8,0-1.1c-0.2-0.2-0.4-0.2-0.6-0.2
                c-0.2,0-0.4,0.1-0.6,0.2L7.7,6.4L2.3,1C2.1,0.8,1.9,0.8,1.7,0.8S1.3,0.8,1.2,1C0.9,1.3,0.9,1.8,1.2,2.1z"/>
              </svg>
            </Button>
          </div>
          <div className="post_title_subtitle flex">
            <h2>Very interesting topic as well.</h2>
            <p>Lorem ipsum datir</p>
          </div>
        </div> */}





    </div>
  )
}

export default Post;