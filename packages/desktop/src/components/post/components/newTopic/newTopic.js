import React, { useState, Fragment } from 'react'
import { useSelector } from 'react-redux';
import { Button, Input } from 'antd'
import { createPostThread } from '../../../../service/utils-3box';

const { TextArea } = Input;

const NewTopic = () => {
  const [newTopicSelected, setNewTopic] = useState(false);
  const [inputText, setInput] = useState("");
  const [areaText, setText] = useState("");
  const tempSearchText = useSelector(state => state.search.tempSearchString);

  const createNewTopic = () => {
    console.log('new topic created');
    setNewTopic(true);
  }

  const createNewThread = () => {
    console.log('new thread created');
  }

	// NOTE: should find a better way to handle this url concat
  const submitNewTopic = () => {
    console.log('submitTopic');
    const url = 'http://' + tempSearchText;
    createPostThread(url, inputText, areaText);
    console.log('after thread creation');
    setNewTopic(true)
  }

	const handleChange = (e) => {		
		switch(e.target.name) {
			case "topicTitle":
				setInput(e.target.value);
				break;
			case "topicText":
			 setText(e.target.value);
			 break;
			default: console.log('other action');
		}
	}

  return (
    <Fragment>
      {
        newTopicSelected 
        ? <section id="newpostopen">
            <div className="newpost">
              <Input 
								placeholder="Title of topic" 
								value={inputText} 
								onChange={(e) => handleChange(e)}
								name="topicTitle"
							/>
              <TextArea
                placeholder="Content of topic"
                autosize={{ minRows: 4, maxRows: 10 }}
                value={areaText}
                name="topicText"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="newpost_button_box">
							<Button 
								type="primary" 
								onClick={() => submitNewTopic()}>
								Submit
							</Button>
            </div>
          </section>
          : <section id="newpostclosed">
              <div className="button_box newtopic">
								<Button 
									type="primary" 
									onClick={() => createNewTopic()}>
									+ New topic
								</Button>
              </div>
            </section>
      }
    </Fragment>
  )
}

export default NewTopic;