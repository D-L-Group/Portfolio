import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Results from "./sections/Results";
import Testimonials from "./sections/Testimonials";
import LeadModal from "./components/LeadModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); // 1. O estado tem que estar aqui

  return (
    <main className="bg-slate-950 min-h-screen">
      {/* 2. Passar a função com o nome exato 'onOpenModal' */}
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <Services />
      <Results />
      <Testimonials />
      <Footer onOpenModal={() => setIsModalOpen(true)} />

      {/* 3. O Modal precisa receber o estado 'isOpen' e a função 'onClose' */}
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}

export default App;