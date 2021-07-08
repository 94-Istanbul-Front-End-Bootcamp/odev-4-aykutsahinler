import "./App.css";
import { useState } from "react";
import Comment from "./components/Comment/index.js";
import AddComment from "./components/AddComment/index.js";

function App() {
  let [comment, setComment] = useState([
    {comments: []},
    {commentValue: ""},
    {vote: 0}
  ]);

  return (
    <div className="app">
      <Comment comment={comment}></Comment>
      <AddComment comment = {comment} setComment = {setComment}></AddComment>
    </div>
  );
}

export default App;
