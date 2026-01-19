import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function LeadModal({ isOpen, onClose }) {
  const [status, setStatus] = useState("idle"); // idle, sending, success, error
  const [selectedBudget, setSelectedBudget] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      // Endpoint n8n no seu servidor Debian
      const response = await fetch("https://n8n.dlgroup.cloud/webhook/captura-leads-dl", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      });

      if (!response.ok) throw new Error("Erro no servidor");

      setStatus("success");
      // Reseta o estado e fecha o modal após sucesso
      setTimeout(() => {
        setStatus("idle");
        setSelectedBudget("");
        onClose();
      }, 3500);
    } catch (error) {
      console.error("Falha ao enviar lead:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000); // Volta ao formulário após exibir erro
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
        {/* Overlay com Backdrop Blur Premium */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/90 backdrop-blur-md cursor-default"
        />

        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-2xl bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl overflow-y-auto max-h-[90vh]"
        >

            
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors cursor-pointer z-10 p-2"
          >
            <X size={24} />
          </button>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Agende uma reunião</h2>
            <p className="text-slate-400">Nossa equipe entrará em contato.</p>
          </div>

          {/* ESTADO DE SUCESSO */}
          {status === "success" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10 space-y-4">
              <CheckCircle2 size={60} className="text-blue-400 mx-auto" />
              <h3 className="text-2xl font-bold text-white">Solicitação Enviada!</h3>
              <p className="text-slate-400">Verifique seu e-mail e WhatsApp em breve.</p>
            </motion.div>
          )}

          {/* ESTADO DE ERRO */}
          {status === "error" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10 space-y-4 border border-red-500/20 rounded-2xl bg-red-500/5">
              <AlertCircle size={60} className="text-red-500 mx-auto" />
              <h3 className="text-xl font-bold text-white">Ops! Algo deu errado.</h3>
              <p className="text-slate-400 px-4">Não foi possível conectar ao servidor. Tente novamente em instantes.</p>
            </motion.div>
          )}

          {/* FORMULÁRIO PRINCIPAL */}
          {(status === "idle" || status === "sending") && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="nome" type="text" placeholder="Seu nome" required className="bg-slate-800/50 border border-white/5 rounded-xl p-4 text-white placeholder-slate-500 outline-none focus:border-blue-500 transition-all focus:ring-1 focus:ring-blue-500/20" />
                <input name="empresa" type="text" placeholder="Nome da Empresa" required className="bg-slate-800/50 border border-white/5 rounded-xl p-4 text-white placeholder-slate-500 outline-none focus:border-blue-500 transition-all focus:ring-1 focus:ring-blue-500/20" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="email" type="email" placeholder="E-mail Corporativo" required className="bg-slate-800/50 border border-white/5 rounded-xl p-4 text-white placeholder-slate-500 outline-none focus:border-blue-500 transition-all focus:ring-1 focus:ring-blue-500/20" />
                <input name="telefone" type="tel" placeholder="Telefone / WhatsApp" required className="bg-slate-800/50 border border-white/5 rounded-xl p-4 text-white placeholder-slate-500 outline-none focus:border-blue-500 transition-all focus:ring-1 focus:ring-blue-500/20" />
              </div>

              <div className="relative">
                <select 
                  name="orcamento" 
                  required
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
                  className={`w-full bg-slate-800/50 border border-white/5 rounded-xl p-4 outline-none focus:border-blue-500 appearance-none cursor-pointer transition-all ${
                    selectedBudget === "" ? "text-slate-500" : "text-white"
                  }`}
                >
                  <option value="" className="bg-slate-900 text-slate-500">Investimento Pretendido</option>
                  <option value="low" className="bg-slate-900 text-white">Até R$ 5.000</option>
                  <option value="medium" className="bg-slate-900 text-white">R$ 5.000 - R$ 15.000</option>
                  <option value="high" className="bg-slate-900 text-white">Acima de R$ 15.000</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
              </div>

              <textarea name="mensagem" placeholder="Descreva brevemente sua necessidade." required className="w-full bg-slate-800/50 border border-white/5 rounded-xl p-4 text-white placeholder-slate-500 h-32 outline-none focus:border-blue-500 resize-none transition-all focus:ring-1 focus:ring-blue-500/20"></textarea>
              
              <button 
                type="submit" 
                disabled={status === "sending"} 
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 rounded-xl shadow-lg transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "sending" ? (
                  <> <Loader2 className="animate-spin" size={20} /> Processando solicitação... </>
                ) : (
                  "Enviar solicitação"
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}