import React from 'react';
import { Star, TrendingUp, ArrowRight, Truck, Sprout, Factory, HardHat, Store, Briefcase } from 'lucide-react';

interface CaseStudy {
  segment: string;
  company: string;
  revenue: string;
  details: string;
  recovered: string;
  icon: React.ReactNode;
  color: string;
}

const cases: CaseStudy[] = [
  {
    segment: "Transporte e Logística",
    company: "Rodovia Sul Transportes – Lucro Presumido",
    revenue: "Faturamento anual: R$ 42 milhões",
    details: "Revisão de PIS/COFINS sobre insumos logísticos",
    recovered: "R$ 6,4 milhões estruturados",
    icon: <Truck className="w-6 h-6 text-white" />,
    color: "from-blue-600 to-blue-800"
  },
  {
    segment: "Agronegócio",
    company: "Agrovale Grãos – Lucro Real",
    revenue: "Faturamento anual: R$ 85 milhões",
    details: "Revisão de créditos sobre insumos e FUNRURAL",
    recovered: "R$ 9,1 milhões estruturados",
    icon: <Sprout className="w-6 h-6 text-white" />,
    color: "from-green-600 to-green-800"
  },
  {
    segment: "Indústria",
    company: "Metalúrgica ForteSul – Lucro Real",
    revenue: "Faturamento anual: R$ 120 milhões",
    details: "Revisão de créditos de PIS/COFINS e ICMS",
    recovered: "R$ 12,7 milhões estruturados",
    icon: <Factory className="w-6 h-6 text-white" />,
    color: "from-slate-600 to-slate-800"
  },
  {
    segment: "Construção Civil",
    company: "Horizonte Incorporações – Lucro Presumido",
    revenue: "Faturamento anual: R$ 58 milhões",
    details: "Revisão de INSS sobre mão de obra terceirizada",
    recovered: "R$ 3,2 milhões estruturados",
    icon: <HardHat className="w-6 h-6 text-white" />,
    color: "from-orange-600 to-orange-800"
  },
  {
    segment: "Comércio Atacadista",
    company: "Distribuidora CentralMix – Lucro Presumido",
    revenue: "Faturamento anual: R$ 76 milhões",
    details: "Revisão de substituição tributária e bases de cálculo",
    recovered: "R$ 5,8 milhões estruturados",
    icon: <Store className="w-6 h-6 text-white" />,
    color: "from-cyan-600 to-cyan-800"
  },
  {
    segment: "Serviços Especializados",
    company: "TechSolutions Engenharia – Lucro Presumido",
    revenue: "Faturamento anual: R$ 34 milhões",
    details: "Revisão de ISS e INSS patronal",
    recovered: "R$ 2,6 milhões estruturados",
    icon: <Briefcase className="w-6 h-6 text-white" />,
    color: "from-indigo-600 to-indigo-800"
  }
];

const Testimonials: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50 py-24 relative overflow-hidden">
      
      {/* Subtle Blue Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,75,138,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(30,75,138,0.15)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-8 md:px-24 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-amber-50 px-6 py-3 rounded-full border border-amber-100 mb-8">
            <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
            <span className="text-lg font-medium text-amber-600">Casos Reais</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Casos estruturados <br/>
            <span className="text-[#1e3a8a]">por segmento</span>
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-2xl md:text-3xl font-medium">
            A meta de R$ 1 bi é construída empresa por empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {cases.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-xl transition-all duration-300 group">
              
              {/* Header Segment */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md`}>
                    {item.icon}
                </div>
                <h4 className="font-bold text-gray-400 text-sm uppercase tracking-wider">{item.segment}</h4>
              </div>

              {/* Company Info */}
              <div className="mb-6 flex-grow">
                <h3 className="font-bold text-gray-900 leading-tight text-xl mb-2">{item.company}</h3>
                <p className="text-base text-gray-500 mb-4">{item.revenue}</p>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <p className="text-gray-600 text-lg italic leading-snug">"{item.details}"</p>
                </div>
              </div>

              {/* Result Badge */}
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                    <p className="text-sm font-bold text-emerald-700 uppercase">Resultado</p>
                </div>
                <p className="text-2xl font-black text-emerald-600 leading-none">{item.recovered}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
             <button 
                onClick={scrollToContact}
                className="bg-transparent border-2 border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white font-bold py-5 px-10 rounded-xl inline-flex items-center justify-center gap-3 transition-all text-xl md:text-2xl uppercase"
             >
                <span>Converse com um especialista</span>
                <ArrowRight className="w-7 h-7" />
            </button>
            <p className="mt-6 text-gray-500 text-lg">Cada caso depende da estrutura, regime e documentação da empresa.</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;