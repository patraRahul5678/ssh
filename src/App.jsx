import { useState, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const AllProjects = lazy(() => import("./pages/AllProjects"));
const AllServices = lazy(() => import("./pages/AllServices"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

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
    const LoadingSpinner = () => (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-gray-900 to-black">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    );

    switch(currentPage) {
      case 'projects':
        return <Suspense fallback={<LoadingSpinner />}><AllProjects navigate={navigate} /></Suspense>;
      case 'services':
        return <Suspense fallback={<LoadingSpinner />}><AllServices navigate={navigate} /></Suspense>;
      case 'service-detail':
        return <Suspense fallback={<LoadingSpinner />}><ServiceDetail navigate={navigate} serviceId={serviceId} /></Suspense>;
      case 'about':
        return <Suspense fallback={<LoadingSpinner />}><AboutPage navigate={navigate} /></Suspense>;
      case 'contact':
        return <Suspense fallback={<LoadingSpinner />}><ContactPage navigate={navigate} /></Suspense>;
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

