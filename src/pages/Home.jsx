import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Stats from "../components/Stats";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <About />
      <Contact />
    </>
  );
}

export default Home;
