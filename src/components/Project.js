import { FaCloudDownloadAlt, FaStar } from "react-icons/fa";

function Project({ project }) {
  const { name, image, repo, description, youtubeId = false, gif = false, link } = project;

  return (
    <div className="project">
      <header className="project-header">
        {image}
        <div style={{ marginLeft: '20px' }}>
          <h2>{name}</h2>
          <div className="project-header--tags">
            <div>Diego Ardila</div>
            <div> <FaCloudDownloadAlt className="download-icon" /> 1.000</div>
            <div>
              <FaStar style={{ color: 'yellow' }} />
              <FaStar style={{ color: 'yellow' }} />
              <FaStar style={{ color: 'yellow' }} />
              <FaStar style={{ color: 'yellow' }} />
              <FaStar style={{ color: 'yellow' }} />
            </div>
            <a href={repo} target="_blank">{`${name}  Repo`}</a>
          </div>
          <div>
            Link: 
            <a href={link} target="_blank">{link}</a>
          </div>
        </div>
      </header>
      <div className="project-body">
        <br/>
        <p className="text">{description}</p>
        <br />
        {youtubeId ? (
          <iframe
            className='video'
            title='Youtube player'
            sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
            src={`https://youtube.com/embed/${youtubeId}?autoplay=0`}
          ></iframe>
        ) : null}
        {gif ? <img src={gif} width={'80%'}/> : null}
      </div>
    </div>
  );
}

export default Project;