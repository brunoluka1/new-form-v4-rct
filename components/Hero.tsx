import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-[#0f172a] text-white pt-0 pb-20 md:pb-40 overflow-hidden">
      
      {/* Background Image - Full Cover with Blending */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://pfcmbwsfncpttmtylxcq.supabase.co/storage/v1/object/public/imgs/cover-lp.png" 
          alt="Análise de documentos tributários" 
          className="w-full h-full object-cover object-top opacity-40" 
        />
      </div>
      
      {/* Grid Texture - Positioned above image (z-10) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-10"></div>

      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -ml-20 -mt-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-overlay filter blur-[120px] opacity-20 animate-blob z-10"></div>
      
      {/* Container - Centered Alignment */}
      <div className="container mx-auto px-8 md:px-24 max-w-7xl flex flex-col items-center text-center z-20 relative">
        
        {/* Spacer to position content - Significantly reduced to move content up */}
        <div className="h-10 md:h-20 w-full"></div>

        {/* Logo Image */}
        <div className="mb-6 md:mb-8 relative drop-shadow-lg">
           <img 
             src="https://pfcmbwsfncpttmtylxcq.supabase.co/storage/v1/object/public/imgs/white-amsf-logo.png" 
             alt="AMSF Logo" 
             className="h-11 md:h-16 w-auto" 
           />
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-6 md:mb-8 drop-shadow-xl max-w-6xl mx-auto tracking-tight">
          Empresários que operam com inteligência <span className="text-[#FB8015]">não pagam imposto a maior.</span>
        </h1>

        {/* Subheadline */}
        <div className="max-w-4xl mx-auto mb-8 md:mb-10 space-y-4">
            <p className="text-blue-100 font-medium text-2xl md:text-3xl leading-snug drop-shadow-md">
            Recuperação tributária não é oportunidade. <strong>É gestão.</strong>
            </p>
            <p className="text-gray-300 text-xl md:text-2xl leading-relaxed">
            A AMSF realiza revisões jurídicas estruturadas para identificar tributos pagos a maior e conduzir a recuperação com segurança.
            </p>
        </div>

        {/* CTA */}
        <div className="w-full max-w-md mb-8">
          <button 
            onClick={scrollToContact}
            className="w-full bg-[#FB8015] hover:bg-[#d96d12] text-white font-bold py-5 px-6 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-orange-500/20 group text-xl md:text-2xl uppercase"
          >
            <span>Converse com um especialista</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Hero;