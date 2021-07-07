import React from "react";
import ReactStars from "react-rating-stars-component";

const Comment = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div>
      <h1>Yorum Ekle</h1>
      <textarea type="text"></textarea>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />

      <button>Yorum Yap</button>
      ,
    </div>
  );
};

export default Comment;
