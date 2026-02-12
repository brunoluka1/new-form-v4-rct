import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Recuperar tributos pagos a maior é legal?",
    answer: "Sim. Quando fundamentado juridicamente e executado conforme legislação vigente. É um direito garantido pelo Código Tributário Nacional."
  },
  {
    question: "Existe risco para minha empresa?",
    answer: "Toda estratégia exige avaliação técnica prévia. A AMSF realiza análise jurídica estruturada antes de qualquer execução para mitigar riscos."
  },
  {
    question: "Quanto tempo leva o processo?",
    answer: "Depende do tipo de tributo, do regime tributário e da estrutura da empresa. A análise inicial é rápida, mas a recuperação efetiva segue ritos administrativos ou judiciais."
  },
  {
    question: "Toda empresa tem valores a recuperar?",
    answer: "Não. Por isso o diagnóstico técnico é essencial antes de qualquer promessa de resultado."
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Trabalhamos com modelo baseado em êxito (success fee). Nossos honorários são vinculados ao valor efetivamente recuperado pela sua empresa."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-8 md:px-24 max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-full border border-blue-100 mb-6">
            <HelpCircle className="w-6 h-6 text-[#1e3a8a]" />
            <span className="text-lg font-medium text-blue-800">Dúvidas</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-[#1e3a8a] mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 text-2xl md:text-3xl">
            Entenda como funciona o processo de revisão tributária.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                openIndex === index 
                  ? 'border-blue-200 bg-white shadow-lg shadow-blue-900/5' 
                  : 'border-gray-100 bg-white hover:border-gray-200'
              }`}
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start gap-6 p-8 text-left"
              >
                <div className={`mt-0.5 rounded-full p-1 flex-shrink-0 ${openIndex === index ? 'text-[#FB8015]' : 'text-[#1e3a8a]'}`}>
                  <HelpCircle className="w-9 h-9" />
                </div>
                
                <span className={`flex-1 font-bold text-2xl md:text-3xl ${openIndex === index ? 'text-gray-900' : 'text-gray-800'}`}>
                  {faq.question}
                </span>

                <div className="text-gray-400">
                  {openIndex === index ? <ChevronUp className="w-9 h-9" /> : <ChevronDown className="w-9 h-9" />}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-8 pb-8 pl-24 pr-10">
                  <p className="text-gray-600 leading-relaxed text-xl md:text-2xl">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
            <button 
              onClick={scrollToContact}
              className="bg-[#FB8015] hover:bg-[#d96d12] text-white font-bold py-6 px-12 rounded-xl shadow-lg transition-all text-xl md:text-2xl uppercase"
            >
                Solicitar minha análise gratuita
            </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;