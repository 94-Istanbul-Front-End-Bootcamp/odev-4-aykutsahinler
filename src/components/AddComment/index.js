import { useState } from "react";
import ReactStars from "react-rating-stars-component";

function AddComment({ commentList, setCommentList }) {

  const [newCommentValue, setNewCommentValue] = useState("");

  // const ratingChanged = (newRating) => {
  //   setComment([(comment.vote = newRating), comment]);
  //   console.log(comment.vote);
  // };

  function handleNewComment(event) {
    setNewCommentValue(event.target.value);
  }

  function handleCommentList() {
    setCommentList([{commentValue: newCommentValue}, ...commentList]);
  }

  // function add() {
  //   if (comment.vote === 0) {
  //     alert("yıldız bas");
  //   } else if (comment.commentValue === "") {
  //     alert("yorum boş olamaz");
  //   }
  //   console.log(comment);
  // }

  return (
    <div>
      <h1>Yorum Ekle</h1>
      <input
        value={newCommentValue}
        onChange={handleNewComment}
        placeholder="Please enter comment"
        minLength="3"
      />

      {/* <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      /> */}

      <button onClick={handleCommentList}>Comment!</button>
    </div>
  );
}

export default AddComment;
