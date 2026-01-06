import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import dlGroupLogo from "../assets/dl-group-logo-removebg-preview.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null); // Estado para a animação da linha

  const navLinks = [
    { name: "Início", id: "home" },
    { name: "Serviços", id: "servicos" },
    { name: "Produtos", id: "produtos" },
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] p-4 md:p-6 flex justify-center">
      <div className="flex items-center justify-between w-full max-w-7xl px-6 py-4 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl">
        
        <img 
          src={dlGroupLogo} 
          alt="DL Group" 
          className="h-8 md:h-10 w-auto cursor-pointer"
          onClick={(e) => scrollToSection(e, "home")}
        />

        {/* Links Desktop com Animação de Linha */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              onMouseEnter={() => setHoveredPath(link.id)}
              onMouseLeave={() => setHoveredPath(null)}
              className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors px-1 py-2"
            >
              {link.name}
              
              {/* A LINHA ANIMADA */}
              {hoveredPath === link.id && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          ))}
          
          <button className="ml-4 px-5 py-2 bg-blue-600 rounded-full text-white font-bold text-xs hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 active:scale-95">
            Contato
          </button>
        </div>

        {/* Botão Hambúrguer (Mobile) */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile (Mesma lógica pode ser aplicada aqui) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-24 left-4 right-4 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 flex flex-col gap-6 md:hidden z-[101] shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => scrollToSection(e, link.id)} 
                className="text-xl text-slate-300 font-semibold border-b border-white/5 pb-2"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full py-4 bg-blue-600 rounded-2xl text-white font-bold text-lg shadow-xl shadow-blue-500/20">
              Iniciar Projeto
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}