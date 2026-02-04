import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import ScheduleDemo from "./pages/ScheduleDemo";
import Careers from "./pages/Careers";
import Events from "./pages/Events";
import Register from "./pages/Register";

// PRODUCT PAGES
import SandMaster from "./pages/sandmaster.jsx";
import RockMaster from "./pages/RockMaster.jsx";
import AutoWellz from "./pages/AutoWellz.jsx";
import AutoPro from "./pages/AutoPro.jsx";
import Green from "./pages/Green.jsx";

// SERVICE PAGES
import OilGasConsultancy from "./pages/OilGasConsultancy";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import TrainingPage from "./pages/TrainingPage";
import DataAnalysisPage from "./pages/DataAnalysisPage";

// UTILITIES
import ScrollToTop from "./components/ScrollToTop";
import BlogPage from "./pages/BlogPage";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            {/* CORE PAGES */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/schedule-demo" element={<ScheduleDemo />} />
            <Route path="/career" element={<Careers />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blog" element={<BlogPage />} />

            {/* ✅ EVENTS (FIXED & COMPLETE) */}
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<Events />} />

            {/* PRODUCT ROUTES */}
            <Route path="/products/sandmaster" element={<SandMaster />} />
            <Route path="/products/rockmaster" element={<RockMaster />} />
            <Route path="/products/autowellz" element={<AutoWellz />} />
            <Route path="/products/autopro" element={<AutoPro />} />
            <Route path="/products/green" element={<Green />} />

            {/* SERVICE ROUTES */}
            <Route path="/services/oil-gas" element={<OilGasConsultancy />} />
            <Route path="/services/software" element={<SoftwareDevelopment />} />
            <Route path="/services/training" element={<TrainingPage />} />
            <Route path="/services/data-analysis" element={<DataAnalysisPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
