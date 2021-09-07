function Button({ callback, value='', content }) {
    return (
        <button onClick={callback} value={value}>
            {content}
        </button>
    );
};

export default Button;