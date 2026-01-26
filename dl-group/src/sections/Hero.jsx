import { motion } from "framer-motion";
import dlMonogram from "../assets/White - No BG.png";

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-auto md:h-screen bg-slate-950 flex flex-col items-center justify-center overflow-visible pt-48 pb-32 md:pt-0 md:pb-0">
     
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[900px] h-[600px] md:h-[900px] bg-blue-600/15 rounded-full blur-[100px] md:blur-[160px] pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.img 
            src={dlMonogram}
            alt="DL Monogram"
            initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-48 md:w-64 mb-8 drop-shadow-[0_0_35px_rgba(59,130,246,0.3)]" 
        />
        
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-4"
        >
            Inovação que <span className="text-blue-500 text-glow">Escala</span>
        </motion.h2>

        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-slate-400 text-lg max-w-xl leading-relaxed"
        >
            Transformando operações complexas em fluxos modernos com Inteligência Artificial e tecnologia de ponta.
        </motion.p>
      </div>
    </section>
  );
}
