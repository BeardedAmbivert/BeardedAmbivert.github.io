import data from "../app/portfolio.json";
import Header from "../components/Header";
import Home from "../components/home";
import Projects from "../components/projects";
import Experience from "../components/experience";
import Education from "../components/education";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <Home name={data.name} about={data.about} />
      <Experience jobs={data.experience} />
      <Projects projects={data.projects} />
      <Education schools={data.education} />
      <Footer
        email={data.email}
        github={data.github}
        linkedin={data.linkedin}
      />
    </div>
  );
}
