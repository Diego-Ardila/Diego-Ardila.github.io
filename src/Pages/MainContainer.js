import { useEffect, useRef, useState } from 'react';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Readme from '../components/Readme';
import './MainContainer.css';
import { FaInfoCircle, FaJsSquare } from 'react-icons/fa';
import { tabs } from '../utils/constants';

const component = (active, ref) => {
  switch(active) {
    case tabs.READ_ME:
      return <Readme ref={ref} />
    case tabs.EXPERIENCE:
      return <Experience ref={ref} />
    case tabs.PROJECTS:
      return <Projects ref={ref} />
  }
}

function MainContainer({active, setActive}) {
  const [rows, setRows] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const ref = useRef();

  useEffect(() => {
    if (!ref?.current) return;

    const observer = new ResizeObserver(() => {
      setTotalRows(Math.ceil(ref?.current?.offsetHeight/17));
    });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    setRows([]);
    for(let i = 1; i <= totalRows; i++) {
      setRows(prev => [...prev, i]);
    }
  }, [totalRows]);  

  return (
    <div className="main-container">
      <header>
        {Object.values(tabs).map(tab => (
          <div key={tab} className={`tab ${tab === active ? 'active' : ''}`} onClick={() => setActive(tab)}>
            {tab === tabs.READ_ME ? <FaInfoCircle style={{color: 'cornflowerblue'}} /> : <FaJsSquare />}
            {tab}
          </div>
        ))}
      </header>
      <div className='main-left-column'>
        {rows.map(row => (
          <span key={row}>{row}</span>
        ))}
      </div>
      {component(active, ref)}
    </div>
  );
  }
  
  export default MainContainer;