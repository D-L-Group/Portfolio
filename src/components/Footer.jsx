import { Mail, Instagram, ArrowUpRight } from "lucide-react";

import dlMonogram from "../assets/logo-nobg.png";


export default function Footer({ onOpenModal }) {
  return (
    <footer id="contato" className="relative pt-24 pb-12 px-6 border-t border-white/5 overflow-hidden">

      <div className="absolute left-[-250px] top-[40%] -translate-y-1/2 w-[400px] h-[400px] bg-[#5325DE]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-[-250px] top-[40%] -translate-y-1/2 w-[400px] h-[400px] bg-[#5325DE]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center gap-12 mb-20">
          
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Vamos escalar <br /> <span className="text-[#5325DE] text-glow">seu negócio?</span>
            </h2>
   
            <button 
              onClick={onOpenModal}
              className="group flex items-center gap-2 bg-[#5325DE] hover:bg-[#7A57E2] text-white px-8 py-4 rounded-full font-bold transition-all mx-auto shadow-lg shadow-blue-500/20 active:scale-95"
            >
              Iniciar Projeto <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          <div className="flex flex-col items-center gap-6">

             <img src={dlMonogram} alt="DL Monogram" className="h-8 opacity-60 hover:opacity-100 transition-opacity duration-500" />
             
             <div className="flex gap-4">
                <a href="https://www.instagram.com/docalli.br/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#5325DE]/10 border border-white/10 hover:border-[#5325DE] text-slate-400 hover:text-white transition-all group">
                  <Instagram size={20} className="group-hover:text-[#5325DE] transition-colors" />
                </a>

                <a href="mailto:dlgroup.contato@gmail.com?subject=Contato&body=Olá, gostaria de agendar uma reunião" className="p-3 rounded-full bg-[#5325DE]/10 border border-white/10 hover:border-[#5325DE] text-slate-400 hover:text-white transition-all group">
                  <Mail size={20} className="group-hover:text-[#5325DE] transition-colors" />
                </a>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 DL GROUP. Todos os direitos reservados.</p>
          <p>Desenvolvido com foco em performance e automação.</p>
        </div>
      </div>
    </footer>
  );
}
