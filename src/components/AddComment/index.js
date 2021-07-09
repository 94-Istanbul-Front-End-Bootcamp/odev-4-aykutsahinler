import { useState } from "react";
import ReactStars from "react-rating-stars-component";

function AddComment({ commentList, setCommentList }) {

  const [newCommentValue, setNewCommentValue] = useState("");
  const [newCommentVote, setNewCommentVote] = useState(0);

  const handleVote = (vote) => {
    setNewCommentVote(vote);
  };

  function handleNewComment(event) {
    setNewCommentValue(event.target.value);
  }

  function handleCommentList() {
    setCommentList([{commentValue: newCommentValue, commentVote: newCommentVote}, ...commentList]);
    setNewCommentValue('')
    setNewCommentVote(0)
  }

  return (
    <div>
      <h1>Yorum Ekle</h1>
      <input
        value={newCommentValue}
        onChange={handleNewComment}
        placeholder="Please enter comment"
        minLength="3"
      />

      <ReactStars
        count={5}
        value={newCommentVote}
        size={24}
        activeColor="#ffd700"
        onChange={handleVote}
      />

      <button onClick={handleCommentList}>Comment!</button>
    </div>
  );
}

export default AddComment;
