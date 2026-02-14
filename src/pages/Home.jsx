import Hero from "../components/Hero";
import Services from "../components/Services";
import CoreServices from "../components/CoreServices";
import WhyChooseUs from "../components/WhyChooseUs";
import ManagingDirector from "../components/ManagingDirector";
import Projects from "../components/Projects";
import MissionVision from "../components/MissionVision";
import About from "../components/About";
import Stats from "../components/Stats";
import Contact from "../components/Contact";

function Home({ navigate }) {
  return (
    <>
      <Hero navigate={navigate} />
      <Stats navigate={navigate} />
      <Services navigate={navigate} />
      <CoreServices navigate={navigate} />
      <WhyChooseUs />
      <ManagingDirector />
      <Projects navigate={navigate} />
      <MissionVision />
      <About navigate={navigate} />
      <Contact />
    </>
  );
}

export default Home;
