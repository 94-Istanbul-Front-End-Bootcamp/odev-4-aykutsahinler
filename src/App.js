import { useState } from "react";

import Comment from "./components/Comment/index.js";
import AddComment from "./components/AddComment/index.js";

import "./App.css";

function App() {
  const [commentList, setCommentList] = useState([
    {
      commentValue: "good",
      vote: 5,
    },
    {
      commentValue: "bad",
      vote: 3,
    },
  ]);


  return (
    <div className="app">
      {/* <Comment comment={comment}/>  */}
      <AddComment commentList={commentList} setCommentList={setCommentList}/>
    </div>
  );
}

export default App;
