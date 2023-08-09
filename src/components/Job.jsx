function Job({ job }) {
  return (
    <div>
      <h3>{job.name}</h3>
      <h3>{job.title}</h3>
      <h4>{job.location}</h4>
      <h3>{job.description}</h3>
      <h4>{job.duration}</h4>
    </div>
  );
}

export default Job;
