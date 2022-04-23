function Win({ restartGame }) {
    return (
        <div className='wincard'>
            <h1>
                You Won 🏆, Congratulations ✨🥳
                <button onClick={restartGame}>
                    Play Again 😎
                </button>
            </h1>
        </div>
    )
}

export default Win;