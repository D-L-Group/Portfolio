import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Results from "./sections/Results";
import Products from "./sections/Products.jsx"
import Testimonials from "./sections/Testimonials";
import LeadModal from "./components/LeadModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  return (
    <main className="bg-slate-950 min-h-screen">
    
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <Services />
      <Results />
      <Products />
      <Testimonials />
      <Footer onOpenModal={() => setIsModalOpen(true)} />

      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}

export default App;
