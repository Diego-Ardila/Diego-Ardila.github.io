import { FaCloudUploadAlt, FaAlignJustify, FaCode, FaCss3Alt, FaGithub, FaHtml5, FaInfoCircle, FaJsSquare, FaParking, FaReact, FaVuejs } from "react-icons/fa";
import { SiSellfy, SiHackthebox, SiHeroku, SiJest, SiLivechat, SiMongodb, SiPostgresql, SiRedux, SiRender, SiTestinglibrary, SiThemighty, SiVercel } from "react-icons/si";

export const tabs = {
  READ_ME: {name: 'README.md', logo: <FaInfoCircle style={{color: 'cornflowerblue'}} />},
  EXPERIENCE: {name: 'experience.html', logo: <FaCode style={{color: 'brown'}} />},
  PROJECTS: {name: 'projects.mine', logo: <FaAlignJustify style={{color: 'gray'}} />}
}

export const mainItems = [
  {
    logo: <FaJsSquare style={{ color: 'yellow' }} />,
    name: 'Javascript'
  },
  {
    logo: <FaCss3Alt style={{ color: 'cornflowerblue' }} />,
    name: 'CSS'
  },
  {
    logo: <FaHtml5 style={{ color: 'brown' }} />,
    name: 'HTML'
  }
]

export const libraries = [
  {
    logo: <FaReact style={{ color: 'cornflowerblue' }} />,
    name: 'React js'
  },
  {
    logo: <FaVuejs style={{ color: 'aquamarine' }} />,
    name: 'Vue js'
  },
  {
    logo: <SiRedux style={{ color: 'blueviolet' }} />,
    name: 'Redux'
  },
  {
    logo: <FaVuejs style={{ color: 'aquamarine' }} />,
    name: 'Vuex'
  },
  {
    logo: <SiJest style={{ color: 'brown' }} />,
    name: 'Jest'
  },
  {
    logo: <SiTestinglibrary style={{ color: 'brown' }} />,
    name: 'Testing library'
  }
]

export const dataBases = [
  {
    logo: <SiMongodb style={{ color: 'darkgreen' }} />,
    name: 'Mongo DB'
  },
  {
    logo: <SiPostgresql style={{ color: 'cornflowerblue' }} />,
    name: 'Postgresql'
  }
]

export const deployments = [
  {
    logo: <SiVercel style={{ color: 'black' }} />,
    name: 'Vercel'
  },
  {
    logo: <SiHeroku style={{ color: 'blueviolet' }} />,
    name: 'Heroku'
  },
  {
    logo: <SiRender style={{ color: 'darkblue' }} />,
    name: 'Render'
  },
  {
    logo: <FaGithub style={{ color: 'black' }} />,
    name: 'Github pages'
  }
]

export const jobs = [
  {
    title: 'Globant - Ernst & Young',
    date: '   <!-- Feb 2022 to May 2023 -->',
    description: `Worked on the Onboarding platform used by the whole employees in the company
    where they could find all the documentation and onboarding path for all the different roles.
    Using React js, Redux with Sagas, HTML, CSS with Sass.`,
    tasks: [
      `Collaborating on the implementation of new
      project features, applying best practices for clean
      code development and emphasizing unit
      testing`,
      `Identifying and resolving minor and critical bugs in the
      production environment.`,
      `Proactively suggesting and addressing technical
      debt to enhance code base maintainability.`,
      `Implementing significant layout revamps based
      on updated UX designs`
    ]
  },
  {
    title: 'Masiv - Route mobile',
    date: '   <!-- Jan 2021 to Feb 2022 -->',
    description: `Worked on a platform that offers massive communication services(sms, email, voice), with different services as 
    massive files uploader, communications automation, etc. Initially using a monolith arquitecture but then migrated to a microfronts arquitecture,
    in which I had the opportunity to start working with AWS
    S3 buckets and cloudfronts configurations. Used Vue js, Vuex, HTML, CSS with Sass.`,
    tasks: [
      `Developing new microfrontends from the
      ground up based on existing legacy views
      from a .Net monolith.`,
      `Taking a leadership role within the Frontend
      team of my cell, conducting code reviews,
      providing technical guidance, and contributing
      to the planning of new features for our products.
      `,
      `Leading the research and implementation
      of unit testing for the newly built
      microfrontends`,
      `Providing maintenance and support for
      features built within the legacy monolith as
      required.
      `
    ]
  }
]

export const projects = [
  {
    name: 'Shared Box',
    image: <SiHackthebox style={{fontSize: '100px', color: 'dodgerblue'}}/>,
    repo: 'https://github.com/Diego-Ardila/SharedBox',
    description: `Created with the aim of making profitable all the empty spaces a person could have in
    general, connecting lenders with people interested in renting a space to save their
    possessions, for some time. using React, Redux, Bootstrap and CSS with SASS for the front end and Node, 
    Express and MongoDB for the Backend. With different features like photos upload and edit, calendar 
    functionalities, users notifications through the app and email.`,
    youtubeId: 'yuw81VuE6qg',
    link: 'https://shared-box.vercel.app/home'
  },
  {
    name: 'Files uploader',
    image: <FaCloudUploadAlt style={{fontSize: '100px', color: 'white'}}/>,
    repo: 'https://github.com/Diego-Ardila/trebol-app',
    description: `Project for uploading different files according to a client's configuration.
    Where a Client can configure his own required files layout using an api, and an Enterprise(client of the Client)
    can navigate to the website and according to the client's id passed by the url path, and upload the files requested.
    Developed both Front-end and Back-end services using Typescript, React js, MUI, Formik with YUP
    React Context with reducer implementation, Sass, Nest js, AWS S3 buckets for files data storage,
    Postgre SQL and Typeorm.`,
    gif: 'trebol-app.gif',
    link: 'https://trebol-app.vercel.app/2'
  },
  {
    name: 'Sales pipeline',
    image: <SiSellfy style={{fontSize: '100px', color: 'dodgerblue'}}/>,
    repo: 'https://github.com/Diego-Ardila/sales-pipeline',
    description: `Project where you can simulate a CRM interaction with a sales pipeline,
    conformed by the (Lead -> Prospect -> Negotiation -> Contract) stages, in which you can run authomatic 
    simulated validations to check if a customer in the Lead stage is eligible to become a Prospect. 
    Using Typescript, React js, React router v6, axios, axios-mock-adapter, react-testing-library and Jest.`,
    gif: 'sales-pipeline-approved.gif',
    link: 'https://sales-pipeline.vercel.app/'
  },
  {
    name: 'Movies app',
    image: <SiThemighty style={{fontSize: '100px', color: 'brown'}}/>,
    repo: 'https://github.com/Diego-Ardila/movies-app',
    description: `App for rendering and searching movies using the MoviesDB public api, 
    created with Vue js, HTML, CSS, Axios. Has a Login view with different validations, a Home view
    with a paginated list of the most popular movies, you can also search a movie with the typeahead input, placed at the top, which 
    will suggest you movies' names according to what you type; finally you can also 
    safe your favorite movies in your browser local storage`,
    gif: 'movies-gif.gif',
    link: 'https://movies-app-shared-box.vercel.app/'
  },
  {
    name: 'Parking app',
    image: <FaParking style={{fontSize: '100px', color: 'yellow'}}/>,
    repo: 'https://github.com/Diego-Ardila/Parking-frontend',
    description: `Web application for a Familly Business such a parking lot, with a customer service chat 
    built with socket io, monthly subscription for different vehicles, and car wash requests. 
    Using React, CSS, Bootstrap and React-Calendar for the Front end and Node, Socket io, MongoDB 
    for the Back end.`,
    youtubeId: '89FoRH1g7Zs&t=2s',
    link: 'https://parking-alarcon.vercel.app/home'
  },
  {
    name: 'Chat app',
    image: <SiLivechat style={{fontSize: '100px', color: 'darkorange'}}/>,
    repo: 'https://github.com/Diego-Ardila/kuepa-test',
    description: `This project is a single-room chat for students to interact about an online class.
    It was developed using React for the front-end and Express, Socket.io, and MongoDB for the back-end.
    The main goal of the project was to practice the usage of web sockets for data exchange.
    The main challenge was to implement both HTTP requests and web sockets configuration
    in the same server code and deploy it.`,
    youtubeId: 'xREcc_-X9jo',
    link: 'https://kuepa-test.vercel.app/login'
  }
]