import data from "@/app/portfolio.json";
import Header from "@/components/header";
import About from "@/components/About";

export default function HomePage() {
  return (
    <div>
      <Header name={data.name}/>
      <About desc={data.about}/>
    </div>
  );
}
