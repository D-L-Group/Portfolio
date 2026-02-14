import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    id: "atendente-whatsapp",
    tag: "Inteligencia Artificial",
    tagColor: "green",
    title: "Atendente de Whatsapp",
    description:
      "IA para WhatsApp, 24/7 e totalmente personalizável, que automatiza atendimento, vendas e suporte ao cliente.",
    image:
      "https://images.unsplash.com/photo-1600859343194-a5fae9ef9f66?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt:
      "Whatsapp agent",
    borderHover: "hover:border-green-500/30",
    tagStyles:
      "bg-green-600/20 text-green-400 border-green-500/20",
  },
  {
    id: "atendente-ligacao",
    tag: "Inteligencia Artificial",
    tagColor: "purple",
    title: "Atendente de ligação",
    description:
      "IA para atendimento telefônico 24/7, personalizável, que filtra e direciona chamadas automaticamente.",
    image:
      "https://images.unsplash.com/photo-1766066014237-00645c74e9c6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt:
      "Atendente de ligacoes",
    borderHover: "hover:border-purple-500/30",
    tagStyles:
      "bg-purple-600/20 text-purple-400 border-purple-500/20",
  },
  {
    id: "site",
    tag: "Sistema Web",
    tagColor: "blue",
    title: "Site Personalizado",
    description:
      "Site profissional e personalizado para cada empresa, desenvolvido sob medida para refletir sua marca e gerar mais credibilidade",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt:
      "Sites personalizados",
    borderHover: "hover:border-blue-500/30",
    tagStyles:
      "bg-blue-600/20 text-blue-400 border-blue-500/20",
  },
  {
    id: "sistema",
    tag: "Sistema de Software",
    tagColor: "yellow",
    title: "Sistema Personalizado",
    description:
      "Sistema sob medida com integrações inteligentes para automatizar e escalar sua operação.",
    image:
      "https://images.unsplash.com/photo-1608303588026-884930af2559?q=80&w=703&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt:
      "Sistema personalizado",
    borderHover: "hover:border-yellow-500/30",
    tagStyles:
      "bg-yellow-600/20 text-yellow-400 border-yellow-500/20",
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
        Sistemas projetados para integração total com inteligência artificial.
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
