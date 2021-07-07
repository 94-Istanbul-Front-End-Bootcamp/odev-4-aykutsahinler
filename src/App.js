import './App.css';
import React from 'react';
import Comment from "./components/comment/comment.js";
import AddComment from "./components/addComment/addComment.js";

class App extends React.Component {
  staete = {
    comments: [],
    commentValue: "",
    vote: 0
  }

  render() {
    return (
      <div className="app">
        <Comment></Comment>
        <AddComment></AddComment>
      </div>
      )
    }
  }
export default App;