import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X, ShieldCheck } from "lucide-react";

export default function CostReductionDetail({ onClose }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const colorHex = "#4bc742";
  const pathData = "M 10 10 C 40 20 70 50 130 80";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8"
    >
      <motion.div
        ref={ref}
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-2xl max-h-[75vh] bg-gradient-to-b from-slate-950 to-[#0A0A0A] rounded-3xl border border-white/10 p-8 md:p-10 overflow-hidden flex flex-col"
      >
        {/* Bot\u00e3o Fechar */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-slate-400 hover:text-white z-10 cursor-pointer"
        >
          <X size={24} />
        </button>

    <div className="overflow-y-auto flex-1">
        {/* Header */}
        <div className="mb-8 pr-12">
          <div className="flex items-center gap-2 mb-3 text-green-400">
            <ShieldCheck size={18} />
            <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Business Intelligence</span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Redução de <span className="text-[#5325DE] text-glow">Custos</span>
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            Otimize suas operações e elimine desperdícios. Nossas soluções de IA automatizam processos, reduzindo gastos operacionais sem comprometer a qualidade.
          </p>
        </div>

        {/* Gráfico Central */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full h-56 md:h-64 bg-gradient-to-br from-slate-900/50 to-slate-950/50 rounded-2xl border border-white/5 overflow-hidden mb-8"
        >
          {/* Grid de Precisão */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-[0.05] pointer-events-none">
            {[...Array(72)].map((_, i) => <div key={i} className="border-[0.5px] border-white" />)}
          </div>

          <svg viewBox="0 0 140 90" className="w-full h-full overflow-visible relative z-10 px-4">
            <defs>
              <linearGradient id="grad-cost-reduction" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={colorHex} stopOpacity="0.5" />
                <stop offset="100%" stopColor={colorHex} stopOpacity="0" />
              </linearGradient>
            </defs>

            <motion.path
              d={`${pathData} L 130 90 L 10 90 Z`}
              fill="url(#grad-cost-reduction)"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.4 }}
            />

            <motion.path
              d={pathData}
              fill="none"
              stroke={colorHex}
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, ease: [0.23, 1, 0.32, 1] }}
            />
          </svg>
        </motion.div>

        {/* Conteúdo Informativo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-2xl font-bold text-green-400 mb-1">40-60%</div>
            <p className="text-slate-400 text-xs">Redução em despesas operacionais</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-2xl font-bold text-green-400 mb-1">Automação</div>
            <p className="text-slate-400 text-xs">Elimina tarefas manuais e repetitivas</p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-2xl font-bold text-green-400 mb-1">ROI</div>
            <p className="text-slate-400 text-xs">Retorno rápido do investimento</p>
          </div>
        </motion.div>
    </div>

        {/* Botão Voltar */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          onClick={onClose}
          className="w-full mt- py-3 rounded-lg bg-gradient-to-r from-[#5325DE] to-[#7c3aed] text-white font-bold uppercase tracking-widest text-sm hover:shadow-lg hover:shadow-[#5325DE]/50 transition-all cursor-pointer"
        >
          Voltar
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
