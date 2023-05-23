function JobDescription(props) {
  const { title, description, tasks, date } = props.job;
  
  return (
    <div style={{ marginLeft: '14px' }}>
      <span className="title">{'<h2>'}</span>
      <span className="text">{title}</span>
      <span className="title">{'</h2>'}</span>
      <div className="comment">{date}</div>
      <div style={{ marginLeft: '14px' }}>
        <span className="title">{'<p>'}</span>
        <br />
        <div style={{ marginLeft: '14px' }} className="text">
          {description}
        </div>
        <span className="title">{'</p>'}</span>
        <br />
        <span className="title">{'<ul>'}</span>
        <br />
        <div style={{ marginLeft: '14px' }} className="text">
          {tasks.map((task, i) => (
            <div key={i}>
              <span className="title">{'<li>'}</span><br />
              <div className="text" style={{ marginLeft: '14px' }}>{task}</div>
              <span className="title">{'</li>'}</span>
              <br />
            </div>
          ))}
        </div>
        <span className="title">{'</ul>'}</span>
      </div>
    </div>
  );
}

export default JobDescription;