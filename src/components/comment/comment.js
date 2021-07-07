import React from "react";
import ReactStars from "react-rating-stars-component";

const Comment = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div>
      <h1>Yorumlar</h1>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />
      ,
    </div>
  );
};

export default Comment;
