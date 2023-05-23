import { forwardRef, useEffect } from "react";
import { dataBases, deployments, libraries, mainItems } from "../utils/constants";
import Card from "./Card";

const Readme = forwardRef(function ({ setTotalRows }, ref) {
  const started = () => {
    const started = new Date('5/13/2020');
    const diffTime = Math.abs(new Date() - started);
    return Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365)); 
  }

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

  return (
    <div className="readme" ref={ref}>
      <h4 className="title"># About me</h4>
      <p className="text">
        I'm a Front end developer with experience working with React js and Vue js.
        Started studying by myself {started()} years ago. Since then I haven't stopped learning and studying 
        in order to improve and becoming better at this area. I have faced many challenges but really enjoyed
        every experience I have had in the companies where I have worked. In my previous projects, 
        I have worked on a variety of web platforms and have successfully delivered projects on time and on budget.
      </p>
      <h4 className="title">## Education</h4>
      <p className="comment">{'<!--Make it real Bootcamp-->'}</p>
      <p className="text">
        Web Development Intensive Bootcamp, 12
        weeks long, learning by creating own
        proyects working in groups, with SCRUM
        methodology, and individually, using Git,
        Javascript, Node js with Express, React with
        Redux and Mongo with Mongoose.
      </p>
      <h4 className="title">## Tech skills</h4>
      <div className="card-container">
        <Card title="Main" items={mainItems} />
        <Card title="Libraries/ Frameworks" items={libraries} />
        <Card title="Data bases" items={dataBases} />
        <Card title="Deployment" items={deployments} />
      </div>
    </div>
  );
})
  
  export default Readme;