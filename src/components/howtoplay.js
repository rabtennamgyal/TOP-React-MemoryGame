function Howtoplay() {
    return (
        <div className='howtoplay'>
            <h1>
                Instructions:
            </h1>

            <p>
                There are 12 cards containing 12 different brands. The goal is to
                click on a different brands on every turn. If you choose all the 
                different brands in 12 turns, you win. If you clicked a brand that 
                has been already clicked, you lose. The cards will be shuffled after
                every click.
            </p>
        </div>
    );
};

export default Howtoplay;