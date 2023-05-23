import { FaCss3Alt, FaGithub, FaHtml5, FaJsSquare, FaReact, FaVuejs } from "react-icons/fa";
import { SiHeroku, SiJest, SiMongodb, SiPostgresql, SiRedux, SiRender, SiTestinglibrary, SiVercel } from "react-icons/si";

export const tabs = {
  READ_ME: 'README.md',
  EXPERIENCE: 'experience.js',
  PROJECTS: 'projects.js'
}

export const mainItems = [
  { 
    logo: <FaJsSquare style={{color: 'yellow'}}/>,
    name: 'Javascript'
  },
  {
    logo: <FaCss3Alt style={{color: 'cornflowerblue'}}/>,
    name: 'CSS'
  },
  {
    logo: <FaHtml5 style={{color: 'brown'}}/>,
    name: 'HTML'
  }
]

export const libraries = [
  { 
    logo: <FaReact style={{color: 'cornflowerblue'}}/>,
    name: 'React js'
  },
  {
    logo: <FaVuejs style={{color: 'aquamarine'}}/>,
    name: 'Vue js'
  },
  {
    logo: <SiRedux style={{color: 'blueviolet'}}/>,
    name: 'Redux'
  },
  {
    logo: <FaVuejs style={{color: 'aquamarine'}}/>,
    name: 'Vuex'
  },
  {
    logo: <SiJest style={{color: 'brown'}}/>,
    name: 'Jest'
  },
  {
    logo: <SiTestinglibrary style={{color: 'brown'}}/>,
    name: 'Testing library'
  }
]

export const dataBases = [
  { 
    logo: <SiMongodb style={{color: 'darkgreen'}}/>,
    name: 'Mongo DB'
  },
  {
    logo: <SiPostgresql style={{color: 'cornflowerblue'}}/>,
    name: 'Postgresql'
  }
]

export const deployments = [
  { 
    logo: <SiVercel style={{color: 'black'}}/>,
    name: 'Vercel'
  },
  {
    logo: <SiHeroku style={{color: 'blueviolet'}}/>,
    name: 'Heroku'
  },
  {
    logo: <SiRender style={{color: 'darkblue'}}/>,
    name: 'Render'
  },
  {
    logo: <FaGithub style={{color: 'black'}}/>,
    name: 'Github pages'
  }
]