// import Comment from './Comment';

function AdditionalComments({ inputData, handleInput, handleSubmit }) {
    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <label>Your UserId: </label>
                <input type='text'
                       name='user' 
                       value={inputData.user} 
                       onChange={e =>handleInput(e)}/>
                <label>Your Comment: </label>
                <input type='text' 
                       name='comment'
                       value={inputData.comment} 
                       onChange={e =>handleInput(e)}/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default AdditionalComments;