function Header({ togglehowto }) {
    return (
        <div className='header'>
            <div className='divOne'>
                <h1 className='title'>
                    Football Clubs Memorizar
                </h1>
            </div>

            <div className='divTwo'>
                <button className='button' onClick={togglehowto}>
                    How to play ?
                </button>
            </div>
        </div>
    );
};

export default Header;