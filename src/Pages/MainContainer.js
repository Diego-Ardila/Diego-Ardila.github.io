import { useEffect, useRef, useState } from 'react';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Readme from '../components/Readme';
import './MainContainer.css';
import { FaCode, FaInfoCircle } from 'react-icons/fa';
import { tabs } from '../utils/constants';

const component = (active, ref, setTotalRows) => {
  switch(active) {
    case tabs.READ_ME.name:
      return <Readme ref={ref} setTotalRows={setTotalRows} />
    case tabs.EXPERIENCE.name:
      return <Experience ref={ref} setTotalRows={setTotalRows} />
    case tabs.PROJECTS.name:
      return <Projects setTotalRows={setTotalRows} />
  }
}

function MainContainer({active, setActive}) {
  const [rows, setRows] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const ref = useRef();

  useEffect(() => {
    setRows([]);
    for(let i = 1; i <= totalRows; i++) {
      setRows(prev => [...prev, i]);
    }
  }, [totalRows]);  

  return (
    <div className="main-container">
      <header className='tabs-header'>
        {Object.values(tabs).map(tab => (
          <div key={tab} className={`tab ${tab.name === active ? 'active' : ''}`} onClick={() => setActive(tab.name)}>
            {tab.logo}
            {tab.name}
          </div>
        ))}
      </header>
      <div className='main-left-column'>
        {rows.map(row => (
          <span key={row}>{row}</span>
        ))}
      </div>
      {component(active, ref, setTotalRows)}
    </div>
  );
  }
  
  export default MainContainer;