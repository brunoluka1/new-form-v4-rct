import React from 'react';
import { ArrowRight, FileText, Users, ShoppingBag, Building2, TrendingUp } from 'lucide-react';

const DidYouKnow: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-[#f8fafc] pb-20">
      {/* Wave Separator from Hero */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-full">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="fill-[#f8fafc]">
            <path fillOpacity="1" d="M0,288L80,282.7C160,277,320,267,480,266.7C640,267,800,277,960,282.7C1120,288,1280,288,1360,288L1440,288V320H0Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-8 md:px-24 max-w-6xl pt-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#1e3a8a] mb-6 leading-tight">
            Você Sabia?
          </h2>
          <p className="text-gray-600 text-2xl md:text-3xl leading-relaxed max-w-4xl mx-auto">
            A legislação brasileira permite revisar tributos pagos a maior nos últimos 5 anos.
            <br/><span className="text-[#FB8015] font-bold">Mesmo assim, a maioria das empresas nunca passou por uma revisão jurídica estruturada.</span>
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid md:grid-cols-2">
                <div className="p-10 md:p-14 bg-[#1e3a8a] text-white flex flex-col justify-center">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">Tributos com maior incidência de pagamento a maior:</h3>
                    <p className="text-blue-200 text-xl mb-8">
                        Cada empresa possui realidade própria, mas estes são os pontos de atenção mais comuns:
                    </p>
                    <div className="bg-[#FB8015] w-20 h-2 mb-8 rounded-full"></div>
                    <p className="text-2xl font-bold leading-tight">
                        "Revisar tributos não é risco. <br/>É decisão de gestão."
                    </p>
                </div>
                
                <div className="p-10 md:p-14 space-y-6 bg-white">
                    <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 text-[#1e3a8a]">
                            <FileText className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-xl text-gray-900">PIS e COFINS</h4>
                            <p className="text-gray-600 text-lg">Créditos não aproveitados ou bases de cálculo incorretas.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                         <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 text-[#1e3a8a]">
                            <Users className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-xl text-gray-900">INSS</h4>
                            <p className="text-gray-600 text-lg">Incidências indevidas sobre folha e terceirizações.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                         <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 text-[#1e3a8a]">
                            <ShoppingBag className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-xl text-gray-900">ICMS</h4>
                            <p className="text-gray-600 text-lg">Substituição tributária e alíquotas aplicadas incorretamente.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                         <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 text-[#1e3a8a]">
                            <Building2 className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-xl text-gray-900">ISS</h4>
                            <p className="text-gray-600 text-lg">Enquadramento municipal inadequado.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                         <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 text-[#1e3a8a]">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-xl text-gray-900">IRPJ e CSLL</h4>
                            <p className="text-gray-600 text-lg">Despesas dedutíveis não aproveitadas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="text-center mt-12 flex justify-center">
            <button 
                onClick={scrollToContact}
                className="bg-[#FB8015] hover:bg-[#d96d12] text-white font-bold py-5 px-10 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-orange-500/20 group text-xl md:text-2xl uppercase"
            >
                <span>Converse com um especialista</span>
                <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default DidYouKnow;