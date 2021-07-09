import CommentListItem from "./CommentListItem";

const CommentList = ({ commentList }) => {
  return (
    <div>
      <h1>Comments</h1>

      {commentList.length === 0 ? (
        <p>Henüz yok</p>
      ) : (
        commentList.map((comment, index) => (
          <CommentListItem key={index} comment={comment} />
        ))
      )}
    </div>
  );
};

export default CommentList;
