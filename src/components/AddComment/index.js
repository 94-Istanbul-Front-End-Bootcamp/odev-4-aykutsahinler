import React from "react";
import { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";

const AddComment = ({ comment, setComment }) => {

  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    setNewComment("");
  }, [comment]);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  function handleNewComment(event) {
    setNewComment(event.target.value);
  }

  function handleComment(event) {
    event.preventDefault();
    setComment([{ commentValue: newComment }, ...comment]);
  }

  function add() {
    console.log("ayktu");
  }

  return (
    <div>
      <h1>Yorum Ekle</h1>
      <input
        onChange={handleNewComment}
        value={newComment}
        onKeyPress={handleComment}
      />
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />

      <button onClick={add}>Yorum Yap</button>
    </div>
  );
};

export default AddComment;
