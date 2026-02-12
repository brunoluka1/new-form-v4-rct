import React from 'react';
import { ClipboardList, Search, Scale, FileSignature, TrendingUp, ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  const steps = [
    {
      step: "01",
      title: "Diagnóstico estruturado",
      desc: "Análise documental, regime e matriz tributária.",
      icon: <ClipboardList className="w-8 h-8 text-white" />
    },
    {
      step: "02",
      title: "Mapeamento técnico",
      desc: "Identificação de tributos pagos a maior com base legal.",
      icon: <Search className="w-8 h-8 text-white" />
    },
    {
      step: "03",
      title: "Estruturação jurídica",
      desc: "Fundamentação da tese e avaliação de risco.",
      icon: <Scale className="w-8 h-8 text-white" />
    },
    {
      step: "04",
      title: "Execução administrativa",
      desc: "Protocolos formais conduzidos com segurança.",
      icon: <FileSignature className="w-8 h-8 text-white" />
    },
    {
      step: "05",
      title: "Acompanhamento",
      desc: "Controle até a efetiva geração de caixa e recuperação.",
      icon: <TrendingUp className="w-8 h-8 text-white" />
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-8 md:px-24 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-[#1e3a8a] mb-6">
            Como a AMSF atua
          </h2>
          <p className="text-gray-600 text-2xl md:text-3xl max-w-4xl mx-auto">
            Alta performance jurídica exige método. <br/>
            <span className="text-[#FB8015] font-bold">Sem improviso. Sem promessa sem base técnica.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((item, i) => (
            <div key={i} className="p-10 rounded-2xl border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:border-blue-300 bg-slate-50 group hover:-translate-y-2">
              <div className="flex justify-between items-start mb-6">
                 <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a8a] to-[#0f172a] rounded-xl flex items-center justify-center shadow-lg">
                    {item.icon}
                 </div>
                 <span className="text-4xl font-black text-gray-200 group-hover:text-blue-100 transition-colors">{item.step}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 text-xl leading-relaxed">{item.desc}</p>
            </div>
          ))}
          
          {/* CTA Card */}
          <div className="p-10 rounded-2xl bg-[#0f172a] text-white flex flex-col justify-center items-center text-center shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#172554] to-[#0f172a]"></div>
            <div className="relative z-10 w-full">
              <h3 className="text-2xl font-bold mb-8">Descubra suas oportunidades</h3>
              <button 
                onClick={scrollToContact}
                className="bg-[#FB8015] hover:bg-[#d96d12] text-white font-bold py-5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all w-full text-lg shadow-lg shadow-orange-900/20 uppercase"
              >
                Solicitar Diagnóstico
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;