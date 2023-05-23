import { useState } from 'react';
import './App.css';
import LeftNav from './Pages/LeftNav';
import MainContainer from './Pages/MainContainer';
import { tabs } from './utils/constants';

function App() {
  const [active, setActive] = useState(tabs.READ_ME);

  return (
    <div className="App">
      <header className='main-header'>
        <img src='/visual-studio.png'/>
        <span>Diego Ardila's website</span>
        <span>X</span>
      </header>
      <div className='main'>
        <LeftNav active={active} setActive={setActive}/>
        <MainContainer active={active} setActive={setActive} />
      </div>
      <footer>
        <a href="https://www.flaticon.com/free-icons/visual-studio" title="visual studio icons">
          Visual studio icons created by Freepik - Flaticon
        </a>
      </footer>
    </div>
  );
}

export default App;
