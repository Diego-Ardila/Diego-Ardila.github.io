import Tooltip from '../components/Tooltip';
import { tabs } from '../utils/constants';
import './LeftNav.css';
import {
  FaReadme,
  FaBriefcase,
  FaCodeBranch,
  FaGithub,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";

const border = '2px solid blue'

function LeftNav({active , setActive}) {
  return (
    <div className="left-nav">
      <div className='left-nav--top'>
        <Tooltip direction="right" content="About me">
          <FaReadme 
            className={active === tabs.READ_ME ? 'active-nav' : ''}
            onClick={() => setActive(tabs.READ_ME)}
          />
        </Tooltip>
        <Tooltip direction="right" content="Work experience">
          <FaBriefcase
            className={active === tabs.EXPERIENCE ? 'active-nav' : ''}
            onClick={() => setActive(tabs.EXPERIENCE)}
          />
        </Tooltip>
        <Tooltip direction="right" content="Projects">
          <FaCodeBranch
            className={active === tabs.PROJECTS ? 'active-nav' : ''}
            onClick={() => setActive(tabs.PROJECTS)}
          />
        </Tooltip>
      </div>
      <div className='left-nav--bottom'>
        <a href='https://github.com/Diego-Ardila' title='Github account'>
          <FaGithub />
        </a>
        <a href='https://www.linkedin.com/in/dardila-90/' title='LinkedIn account'>
          <FaLinkedin />
        </a>
        <a href='https://www.instagram.com/d.ardila90/' title='Instagram account'>
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export default LeftNav;
