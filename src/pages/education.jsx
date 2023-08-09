import School from "../components/School";

function Education({ schools }) {
  return (
    <div>
      <h2>Education</h2>
      {schools.map((school, id) => {
        return <School school={school} key={id}></School>;
      })}
    </div>
  );
}

export default Education;
