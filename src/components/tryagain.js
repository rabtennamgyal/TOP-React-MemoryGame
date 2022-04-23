function Modal({ restartGame }) {
    return (
        <div className='modal'>
            <h1>
                Game Over 👾
                <button onClick={restartGame}>
                    Try Again 😤
                </button>
            </h1>
        </div>
    )
}

export default Modal;