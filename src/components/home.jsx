import About from "../components/About";
import Name from "../components/Name";

function Home({ name, about }) {
  return (
    <div>
      <Name name={name} />
      <About about={about} />
    </div>
  );
}

export default Home;
