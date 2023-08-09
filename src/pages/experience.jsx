import Job from "../components/Job";

function Experience({ jobs }) {
  return (
    <div>
      <h2>Work Experience</h2>
      {jobs.map((job, id) => {
        return <Job job={job} key={id}></Job>;
      })}
    </div>
  );
}

export default Experience;
