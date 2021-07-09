// import ReactStars from "react-rating-stars-component";
import CommentListItem from "./CommentListItem";

const CommentList = ({ commentList }) => {
  // const ratingChanged = (newRating) => {
  //   console.log(newRating);
  // };

  console.log("commentList: ", commentList);

  return (
    <div>
      <h1>Comments</h1>
      {commentList &&
        commentList.map((comment, index) => {
          return <CommentListItem key={index} comment={comment}/>;
        })}
      {/* <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      /> */}
      ,
    </div>
  );
};

export default CommentList;
