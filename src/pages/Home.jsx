import Hero from "../components/Hero";
import Services from "../components/Services";
import CoreServices from "../components/CoreServices";
import WhyChooseUs from "../components/WhyChooseUs";
import ManagingDirector from "../components/ManagingDirector";
import Leadership from "../components/Leadership";
import Projects from "../components/Projects";
import MissionVision from "../components/MissionVision";
import About from "../components/About";
import Stats from "../components/Stats";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <CoreServices />
      <WhyChooseUs />
      <ManagingDirector />
      <Leadership />
      <Projects />
      <MissionVision />
      <About />
      <Contact />
    </>
  );
}

export default Home;
