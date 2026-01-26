import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    id: "dl-automate-pro",
    tag: "SaaS Platform",
    tagColor: "blue",
    title: "DL Automate Pro",
    description:
      "Gestão de leads inteligente com fluxos autônomos integrados ao n8n.",
    image:
      "https://images.unsplash.com/photo-1551288049-bbda38a594a0?auto=format&fit=crop&q=80&w=1000",
    alt:
      "Interface do DL Automate Pro mostrando gestão de leads e automação de CRM",
    borderHover: "hover:border-blue-500/30",
    tagStyles:
      "bg-blue-600/20 text-blue-400 border-blue-500/20",
  },
  {
    id: "workflow-builder",
    tag: "Enterprise AI",
    tagColor: "purple",
    title: "Workflow Builder",
    description:
      "Arquitetura de alta performance para automação de tarefas corporativas complexas.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
    alt:
      "Visualização de fluxos lógicos e arquitetura de software",
    borderHover: "hover:border-purple-500/30",
    tagStyles:
      "bg-purple-600/20 text-purple-400 border-purple-500/20",
  },
];

export default function Products() {
  return (
<section id="produtos" className="py-32">
  <div className="max-w-7xl mx-auto px-6 space-y-20">

    {/* Header da seção */}
    <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-10">
      <h3 className="text-white text-4xl font-bold tracking-tight">
        Ecossistema de <span className="text-slate-500">Soluções</span>
      </h3>

      <p className="text-slate-400 max-w-sm text-sm">
        Sistemas projetados para integração total com workflows de inteligência artificial.
      </p>
    </header>

    {/* Grid de produtos */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {products.map((product) => (
        <motion.article
          key={product.id}
          whileHover={{ y: -10 }}
          className={`group relative h-[520px] rounded-[3rem] overflow-hidden bg-slate-900/30 border border-white/5 transition-all duration-700 ${product.borderHover} shadow-2xl`}
        >
          <img
            src={product.image}
            alt={product.alt}
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />

          <div className="absolute bottom-0 left-0 p-12 z-20 w-full">
            <span
              className={`backdrop-blur-md text-[10px] px-4 py-1.5 rounded-full uppercase font-bold mb-6 inline-block border ${product.tagStyles}`}
            >
              {product.tag}
            </span>

            <h4 className="text-4xl font-bold text-white mb-4">
              {product.title}
            </h4>

            <p className="text-slate-400 text-base leading-relaxed max-w-xs mb-8">
              {product.description}
            </p>

            <button className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group/btn border-b border-white/20 pb-2 hover:border-white transition-all">
              Explorar Tecnologia
              <ArrowUpRight
                size={16}
                className="group-hover/btn:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</section>
  );
 }
