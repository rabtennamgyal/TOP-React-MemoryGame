function Scoreboard({bestscore, currentscore}) {
    return (
        <div className="scoreboard">
            <div className="divOne">
                <p>
                    Best Score: {bestscore}
                </p>
            </div>

            <div className="divTwo">
                <p>
                    Current Score: {currentscore}
                </p>
            </div>
        </div>
    );
};

export default Scoreboard;