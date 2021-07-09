const CommentListItem = ({ comment }) => {
  return (
    <div>
      <li>{comment.commentValue}</li>
    </div>
  );
};

export default CommentListItem;
