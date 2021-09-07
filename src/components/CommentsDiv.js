import Comment from './Comment';

function CommentsDiv({ comments }) {
    const commentElements = comments.map(comment => 
    <Comment user={comment.user} comment={comment.comment} key={comment.id} />);

    return (
        <div>
            <h2>{comments.length} Comments</h2>
            {commentElements}
        </div>
    );
};

export default CommentsDiv;