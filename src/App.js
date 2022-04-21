import { useState } from 'react';
import Header from "./components/header";
import Howtoplay from './components/howtoplay';

function App() {
  const [howto, sethowto] = useState(false);

  function togglehowto() {
    if (howto === false) {
      sethowto(true)
    } else {
      sethowto(false)
    };
  };

  return (
    <div className="App">
      <Header togglehowto={togglehowto} />
      { howto && <Howtoplay />}
    </div>
  );
}

export default App;
