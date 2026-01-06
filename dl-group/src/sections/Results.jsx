import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Counter = ({ value, title }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      let timer = setInterval(() => {
        start += Math.ceil(end / 60);
        if (start >= end) { setCount(end); clearInterval(timer); }
        else { setCount(start); }
      }, 1000 / 60);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-white mb-2">{count}+</div>
      <div className="text-blue-400 font-medium tracking-widest text-sm uppercase">{title}</div>
    </div>
  );
};

export default function Results() {
  return (
    <section id="produtos" className="py-24 bg-slate-950/50 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32">
          <Counter value="50" title="Projetos n8n" />
          <Counter value="30" title="Sistemas Web" />
          <Counter value="15" title="SaaS Ativos" />
          <Counter value="100" title="Automação" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-[400px] rounded-3xl bg-slate-900 border border-white/10 overflow-hidden relative group">
            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="p-8 absolute bottom-0">
               <span className="bg-blue-600 text-[10px] px-3 py-1 rounded-full text-white font-bold mb-4 inline-block uppercase">SaaS</span>
               <h3 className="text-2xl font-bold text-white">DL Automate Pro</h3>
            </div>
          </div>
          <div className="h-[400px] rounded-3xl bg-slate-900 border border-white/10 overflow-hidden relative group">
            <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="p-8 absolute bottom-0">
               <span className="bg-purple-600 text-[10px] px-3 py-1 rounded-full text-white font-bold mb-4 inline-block uppercase">Automação</span>
               <h3 className="text-2xl font-bold text-white">Workflow Builder</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}