import { SiMaildotru } from 'react-icons/si';
import Tooltip from '../components/Tooltip';
import { tabs } from '../utils/constants';
import './LeftNav.css';
import {
  FaReadme,
  FaBriefcase,
  FaCodeBranch,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

const border = '2px solid blue'

function LeftNav({active , setActive}) {
  return (
    <div className="left-nav">
      <div className='left-nav--top'>
        <Tooltip direction="right" content="About me">
          <FaReadme 
            className={active === tabs.READ_ME.name ? 'active-nav' : ''}
            onClick={() => setActive(tabs.READ_ME.name)}
          />
        </Tooltip>
        <Tooltip direction="right" content="Work experience">
          <FaBriefcase
            className={active === tabs.EXPERIENCE.name ? 'active-nav' : ''}
            onClick={() => setActive(tabs.EXPERIENCE.name)}
          />
        </Tooltip>
        <Tooltip direction="right" content="Projects">
          <FaCodeBranch
            className={active === tabs.PROJECTS.name ? 'active-nav' : ''}
            onClick={() => setActive(tabs.PROJECTS.name)}
          />
        </Tooltip>
      </div>
      <div className='left-nav--bottom'>
        <a href='https://github.com/Diego-Ardila' title='Github account' target="_blank">
          <FaGithub />
        </a>
        <a href='https://www.linkedin.com/in/dardila-90/' title='LinkedIn account' target="_blank">
          <FaLinkedin />
        </a>
        <a href='mailto: dardila90@gmail.com' title='Email' target="_blank">
          <SiMaildotru />
        </a>
      </div>
    </div>
  );
}

export default LeftNav;
