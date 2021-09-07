import Button from './Button';

function Comment({ user, comment }) {
    return (
        <div>
            <h3>{user}</h3>
            <p>{comment}</p>
            {/* Insert like buttons for comments? */}
        </div>
    );
};

export default Comment