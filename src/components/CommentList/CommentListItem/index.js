import ReactStars from "react-rating-stars-component";

const CommentListItem = ({ comment }) => {
  return (
    <div>
      <li>{comment.commentValue}</li>

    <ReactStars
        value={comment.commentVote}
        edit={false}
        count={5}
        size={24}
        activeColor="#ffd700"
    />

    </div>
  );
};

export default CommentListItem;
