import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { name: "Ricardo Silva", role: "CEO TechFlow", content: "Automação n8n de outro nível." },
  { name: "Ana Oliveira", role: "Ops Manager", content: "Sistema rápido e intuitivo." },
  { name: "Marcos Vinte", role: "Founder X", content: "Visão técnica impecável." },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 px-6 bg-slate-950 scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Quote className="text-blue-500 mx-auto mb-4 opacity-30" size={40} />
          <h2 className="text-4xl font-bold text-white">Nossos <span className="text-blue-500 text-glow">Parceiros</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.15, // Efeito cascata suave
                ease: "easeOut" 
              }}
              // OTIMIZAÇÃO: Isolando o card para renderização acelerada
              className="p-8 rounded-3xl bg-slate-900/30 border border-white/5 hover:border-blue-500/20 transition-colors duration-500 will-change-transform"
            >
              <p className="text-slate-400 italic mb-8 leading-relaxed">"{t.content}"</p>
              <div>
                <h4 className="text-white font-bold">{t.name}</h4>
                <p className="text-blue-500 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}