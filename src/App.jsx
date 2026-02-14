import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import AllServices from "./pages/AllServices";
import ServiceDetail from "./pages/ServiceDetail";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [serviceId, setServiceId] = useState('');

  const navigate = (page, id = '') => {
    setCurrentPage(page);
    setServiceId(id);
    if (page === 'about' && id === 'managingdirector') {
      setTimeout(() => {
        document.getElementById('managingdirector')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'projects':
        return <AllProjects navigate={navigate} />;
      case 'services':
        return <AllServices navigate={navigate} />;
      case 'service-detail':
        return <ServiceDetail navigate={navigate} serviceId={serviceId} />;
      case 'about':
        return <AboutPage navigate={navigate} />;
      case 'contact':
        return <ContactPage navigate={navigate} />;
      case 'leadership':
        window.location.href = '#leadership';
        return <Home navigate={navigate} />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <>
      <Navbar navigate={navigate} />
      {renderPage()}
      {currentPage === 'home' && <Footer />}
    </>
  );
}

export default App;

