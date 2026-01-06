import { motion } from "framer-motion";
import { Cpu, Globe, Zap } from "lucide-react";

const services = [
  { title: "Automação com Inteligência Artificial", description: "Conectamos suas ferramentas e criamos fluxos inteligentes.", icon: Zap, className: "md:col-span-2 bg-gradient-to-br from-blue-600/20 to-transparent" },
  { title: "Desenvolvimento Web", description: "Sites de alta performance com design moderno.", icon: Globe, className: "md:col-span-1 bg-slate-900/50" },
  { title: "Sistemas de Software", description: "Arquiteturas escaláveis para negócios.", icon: Cpu, className: "md:col-span-3 bg-slate-900/50" },
];

export default function Services() {
  return (
    <section id="servicos" className="-mt-24 md:mt-0 py-24 px-6 max-w-7xl mx-auto scroll-mt-24 relative z-20">
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-6xl font-bold text-white mb-16 text-center leading-tight"
      >
        Nossas <br className="md:hidden" /> 
        <span className="text-blue-500 text-glow">Especialidades</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div key={index} className={`p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-colors duration-500 will-change-transform ${service.className}`}>
            <service.icon className="text-blue-500 mb-6" size={40} />
            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
            <p className="text-slate-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}