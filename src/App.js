import { useState } from 'react';
import Header from "./components/header";
import Howtoplay from './components/howtoplay';
import Scoreboard from './components/scoreboard';
import Cards from './components/cards';
import Win from './components/win';
import Modal from './components/tryagain';

function App() {
  const [howto, sethowto] = useState(false); // state for howtoplay components
  const [bestscore, setbestscore] = useState(0) // state for bestscore 
  const [currentscore, setcurrnetscore] = useState(0) // state for bestscore 
  const [check, setcheck] = useState([]);
  const [modal, setModal] = useState(false);
  const [win, setwin] = useState(false);

  function togglehowto() {
    if (howto === false) {
      sethowto(true)
    } else {
      sethowto(false)
    };
  };

  const setHighScore = (score, high) => {
    if (score > high) {
      setbestscore(score)
    } else {
      setbestscore(high)
    }
  };

  function addScore(e, prevState) {
    if (check.includes(e.target.id)) {
      setHighScore(currentscore, bestscore);
      setcurrnetscore(0);
      setcheck([]);
      setModal(true);
    } else {
      if (check.length === 11) {
        const score = 0;
        const high = 12;
        setbestscore(score, high);
        setcurrnetscore(0);
        setcheck([]);
        setwin(true);
      } else {
        setcurrnetscore((prevState) => prevState + 1)
        setcheck([...check, e.target.id])
      }
    }
  };

  const restartGame = () => {
    setModal(false);
    setwin(false);
  };

  return (
    <div className="App">
      <Header togglehowto={togglehowto} />
      { howto && <Howtoplay />}
      <Scoreboard bestscore={bestscore} currentscore={currentscore} />
      <Cards addScore={addScore} />
      {modal && <Modal restartGame={restartGame}/>}
      {win && <Win restartGame={restartGame} />}
    </div>
  );
}

export default App;
