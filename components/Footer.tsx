import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-16 border-t border-white/5 relative overflow-hidden">
      
      {/* Footer Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Adjusted Spotlight: Smaller, rounded, centered at bottom edge */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-blue-500/40 blur-[60px] rounded-full pointer-events-none mix-blend-screen"></div>

      <div className="container mx-auto px-8 md:px-24 relative z-10">
        
        {/* Main Content Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-12">
          
          {/* Logo Column - Explicitly aligned left (items-start) */}
          <div className="flex flex-col gap-6 items-start">
             <img 
               src="https://pfcmbwsfncpttmtylxcq.supabase.co/storage/v1/object/public/imgs/white-amsf-logo.png" 
               alt="AMSF Logo" 
               className="h-9 w-auto object-contain" 
             />
             <p className="text-white text-lg max-w-sm text-left leading-relaxed">
                Firma jurídica de alta performance especializada em estratégia tributária aplicada a resultado financeiro real.
             </p>
          </div>
          
          {/* Contact Column with Icons */}
          <div className="flex flex-col gap-4 w-full md:w-auto items-start md:items-end">
              <div className="flex items-center gap-3 text-white group">
                 <span className="text-lg order-2 md:order-1">R. dos Pinheiros, 603 – Sala 81 – São Paulo/SP</span>
                 <MapPin className="w-5 h-5 text-[#FB8015] order-1 md:order-2 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex items-center gap-3 text-white group">
                 <span className="text-lg order-2 md:order-1">+55 (11) 95213-2120</span>
                 <Phone className="w-5 h-5 text-[#FB8015] order-1 md:order-2 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex items-center gap-3 text-white group">
                 <a href="mailto:contato@amsf.com.br" className="text-lg order-2 md:order-1 hover:text-[#FB8015] transition-colors">contato@amsf.com.br</a>
                 <Mail className="w-5 h-5 text-[#FB8015] order-1 md:order-2 group-hover:scale-110 transition-transform" />
              </div>
          </div>
        </div>

        {/* Divider & Legal Disclaimer */}
        <div className="border-t border-white/10 pt-8 text-center space-y-6">
            <p className="text-gray-500 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
              <strong>Aviso Legal:</strong> Cada empresa possui realidade tributária própria. A análise depende da documentação apresentada e da legislação vigente. Não prometemos resultados específicos.
            </p>

            <p className="text-gray-600 text-base">
              © 2025 AMSF Advocacia. Todos os direitos reservados.
            </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;