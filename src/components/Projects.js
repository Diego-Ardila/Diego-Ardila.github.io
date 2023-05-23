import { useEffect } from 'react';
import Project from './Project';
import { projects } from '../utils/constants';
import './Projects.css'

function Projects({setTotalRows}) {
  useEffect(() => {
    setTotalRows(0)
  }, [])

  return (
    <div className="projects">
      {projects.map((proyect) => (
        <Project project={proyect}/>
        ))}
    </div>
  );
}
  
  export default Projects;