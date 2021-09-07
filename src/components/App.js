import video from "../data/video.js";
import { useState } from 'react';

import Video from './Video';
import Button from './Button';
import AdditionalComments from "./AdditionalComments";
// import ToggleComments from './ToggleComments';
import CommentsDiv from "./CommentsDiv.js";

function App() {
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  function handleVotes(event) {
    if(parseInt(event.target.value) === upvotes) {setUpvotes(upvotes + 1)} 
    else {setDownvotes(downvotes - 1)};
  };

  const [displayComments, setCommentDisplay] = useState(true);
  function handleCommentDisplay() {
    setCommentDisplay(displayComments => !displayComments);
  };

  const [inputData, setInputData] = useState({ user: '', comment: '', id: video.comments.length + 1});
  function handleInput(e) {
    setInputData({...inputData, [e.target.name]: e.target.value});
  };

  const [comments, setComments] = useState(video.comments);
  function handleSubmit(e) {
    e.preventDefault();
    setComments([...comments, inputData])
    console.log(inputData);
    console.log(comments)
    console.log('input set');
  };

  const commentsArr = comments.filter(comment => {
    if(comment.user.includes(inputData.user)){return true}
    // else {return 'No Match Found'}
  })

  return (
    <div className="App">

      <Video video={video} />
      <Button callback={handleVotes} value={upvotes} content={`${upvotes} 👍`} />
      <Button callback={handleVotes} value={downvotes} content={`${downvotes} 👎`} />
      <br />
      <br />
      <Button callback={handleCommentDisplay} content={displayComments ? 'Hide Comments' : 'Show Comments'}/>
      <br />
      <br />
      <AdditionalComments inputData={inputData} handleInput={handleInput} handleSubmit={handleSubmit} />
      <hr />
      {displayComments ? <CommentsDiv comments={commentsArr}/> : null}

    </div>
  );
};

export default App;
