function School({ school }) {
  return (
    <div>
      <h3>{school.name}</h3>
      <h4>{school.location}</h4>
      <h3>{school.course}</h3>
      <h3>{school.major}</h3>
      <h4>{school.duration}</h4>
    </div>
  );
}

export default School;
