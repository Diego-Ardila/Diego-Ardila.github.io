import { forwardRef, useEffect } from "react";
import JobDescription from "./JobDescription";
import { jobs } from "../utils/constants";

const Experience = forwardRef(function ({ setTotalRows }, ref) {
  useEffect(() => {
    if (!ref?.current) return;

    const observer = new ResizeObserver(() => {
      setTotalRows(Math.ceil(ref?.current?.offsetHeight / 17));
    });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="experience" ref={ref}>
      <br />
      <span className="title">{'<h1>'}</span>
      <span className="title bold">My work experience as a developer</span>
      <span className="title">{'</h1>'}</span>
      <br />
      {jobs.map(job => (
        <div key={job.title}>
          <br />
          <JobDescription job={job}/>
        </div>
      ))}
    </div>
  );
})

export default Experience;