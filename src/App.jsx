import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Results from "./sections/Results";
import Products from "./sections/Products.jsx"
import Testimonials from "./sections/Testimonials";
import LeadModal from "./components/LeadModal";
import ScalabilityDetail from "./sections/ScalabilityDetail";
import CostReductionDetail from "./sections/CostReductionDetail";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScalabilityOpen, setIsScalabilityOpen] = useState(false);
  const [isCostReductionOpen, setIsCostReductionOpen] = useState(false);
  
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
    
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <Services />
      <Results 
        onOpenScalability={() => setIsScalabilityOpen(true)}
        onOpenCostReduction={() => setIsCostReductionOpen(true)}
      />
      <Products />
      <Footer onOpenModal={() => setIsModalOpen(true)} />

      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {isScalabilityOpen && <ScalabilityDetail onClose={() => setIsScalabilityOpen(false)} />}
      {isCostReductionOpen && <CostReductionDetail onClose={() => setIsCostReductionOpen(false)} />}
    </main>
  );
}

export default App;
