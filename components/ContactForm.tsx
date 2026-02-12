import React, { useState, useEffect } from 'react';
import { Mail, MapPin, CheckCircle, Send, ShieldCheck, Briefcase, DollarSign, Loader2, Target } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    cnpj: '',
    segmento: '',
    faturamento: ''
  });

  const [urlParams, setUrlParams] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  // Captura os parâmetros da URL (UTMs) ao carregar o componente
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paramsObj: Record<string, string> = {};
    
    // Itera sobre todos os parâmetros da URL e os armazena
    for (const [key, value] of params.entries()) {
      paramsObj[key] = value;
    }
    
    setUrlParams(paramsObj);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    let { name, value } = e.target;

    // Apply masks
    if (name === 'telefone') {
      // Remove non-numeric characters
      value = value.replace(/\D/g, '');
      // Limit to 11 digits (DDD + 9 digits)
      value = value.substring(0, 11);
      
      // Apply mask (XX) XXXXX-XXXX
      value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
      value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    } 
    else if (name === 'cnpj') {
      // Remove non-numeric characters
      value = value.replace(/\D/g, '');
      // Limit to 14 digits
      value = value.substring(0, 14);
      
      // Apply mask XX.XXX.XXX/XXXX-XX
      value = value.replace(/^(\d{2})(\d)/, "$1.$2");
      value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
      value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
      value = value.replace(/(\d{4})(\d)/, "$1-$2");
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Combina os dados do formulário com os parâmetros da URL (UTMs)
    const payload = {
      ...formData,
      ...urlParams
    };

    try {
      const response = await fetch('https://primary-production-93fab.up.railway.app/webhook/rct-leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Redirecionamento em caso de sucesso
        window.location.href = 'https://amsf.com.br/obrigado';
      } else {
        alert('Houve um erro ao enviar sua solicitação. Por favor, tente novamente.');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Erro no envio:', error);
      alert('Erro de conexão. Verifique sua internet e tente novamente.');
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* SECTION 1: FORM - Dark Gradient Background */}
      <div className="bg-[#0f172a] py-24 relative overflow-hidden" id="contato">
        
        {/* Modern Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#172554] to-[#0f172a]"></div>
        
        {/* Corporate Grid Texture Overlay (Subtle) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-overlay filter blur-[100px] opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-600 rounded-full mix-blend-overlay filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-8 md:px-24 max-w-6xl relative z-10">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Converse com um <span className="text-blue-200">especialista</span>
            </h2>
            <p className="text-blue-100 text-2xl md:text-3xl max-w-4xl mx-auto">
              Se sua empresa nunca passou por revisão jurídica estruturada, é possível que esteja pagando tributos a maior. <br/>
              <span className="text-base md:text-xl text-blue-300 mt-2 block">Preencha as informações abaixo para iniciar a análise técnica.</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 space-y-8 shadow-2xl border-4 border-white/10">

              {/* Row 1: Nome & Telefone */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-gray-700 font-semibold mb-3 text-xl">Nome Completo *</label>
                  <input 
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-5 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-800 text-xl"
                  />
                </div>

                <div>
                    <label className="block text-gray-700 font-semibold mb-3 text-xl">Telefone/WhatsApp *</label>
                    <input 
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                        placeholder="(00) 00000-0000"
                        maxLength={15}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-5 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-800 text-xl"
                    />
                </div>
              </div>

              {/* Row 2: Email & CNPJ */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <label className="block text-gray-700 font-semibold mb-3 text-xl">E-mail Corporativo *</label>
                    <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="seu@email.com.br"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-5 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-800 text-xl"
                    />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-3 text-xl">CNPJ *</label>
                  <input 
                    type="text"
                    name="cnpj"
                    value={formData.cnpj}
                    onChange={handleChange}
                    required
                    placeholder="00.000.000/0000-00"
                    maxLength={18}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-5 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-800 text-xl"
                  />
                </div>
              </div>
              
              {/* Row 3: Segmento & Faturamento */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <label className="block text-gray-700 font-semibold mb-3 text-xl">Segmento de atuação</label>
                    <div className="relative">
                      <Briefcase className="absolute left-6 top-6 w-7 h-7 text-gray-400 pointer-events-none" />
                      <select 
                        name="segmento"
                        value={formData.segmento}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-16 pr-6 py-5 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-800 appearance-none text-xl cursor-pointer"
                      >
                          <option value="">Selecione...</option>
                          <option value="Industria">Indústria</option>
                          <option value="Comercio">Comércio</option>
                          <option value="Servicos">Serviços</option>
                          <option value="Construcao">Construção Civil</option>
                          <option value="Outros">Outros</option>
                      </select>
                    </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-3 text-xl">Faturamento Médio Anual</label>
                  <div className="relative">
                    <DollarSign className="absolute left-6 top-6 w-7 h-7 text-gray-400 pointer-events-none" />
                    <select 
                      name="faturamento"
                      value={formData.faturamento}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-16 pr-6 py-5 outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-800 appearance-none text-xl cursor-pointer"
                    >
                        <option value="">Selecione...</option>
                        <option value="ate-500k">Até R$ 500.000</option>
                        <option value="500k-2m">De R$ 500.000 a R$ 2.000.000</option>
                        <option value="2m-10m">De R$ 2.000.000 a R$ 10.000.000</option>
                        <option value="10m-50m">De R$ 10.000.000 a R$ 50.000.000</option>
                        <option value="acima-50m">Acima de R$ 50.000.000</option>
                    </select>
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#FB8015] hover:bg-[#d96d12] text-white font-bold py-7 rounded-xl shadow-lg shadow-orange-500/30 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 mt-8 text-2xl disabled:opacity-70 disabled:cursor-not-allowed uppercase"
              >
                {isLoading ? (
                  <>
                    <span>ENVIANDO...</span>
                    <Loader2 className="w-7 h-7 animate-spin" />
                  </>
                ) : (
                  <>
                    <span>Converse com um especialista</span>
                    <Send className="w-7 h-7" />
                  </>
                )}
              </button>
              
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-lg md:text-xl text-gray-500 text-center mt-8">
                  <div className="flex items-center gap-2">
                      <CheckCircle className="w-6 h-6 text-emerald-500" /> Confidencialidade garantida
                  </div>
                  <div className="flex items-center gap-2">
                      <CheckCircle className="w-6 h-6 text-emerald-500" /> Análise preliminar sem compromisso
                  </div>
              </div>
          </form>

        </div>
      </div>

      {/* SECTION 2: ABOUT AMSF - White Background */}
      <div className="bg-white relative">
        
        {/* Mobile Background Image - Top Only */}
        <div className="block md:hidden absolute top-0 left-0 right-0 z-0">
             <img 
               src="https://pfcmbwsfncpttmtylxcq.supabase.co/storage/v1/object/public/imgs/banner-new-amsf-1.png" 
               alt="AMSF Advocacia Team" 
               className="w-full h-auto object-cover object-top"
             />
        </div>

        {/* Content Container - Adjusted padding to bring text closer to image on mobile */}
        <div className="container mx-auto px-8 md:px-24 max-w-7xl relative z-10 pt-[210px] pb-24 md:py-24">
           <div className="grid md:grid-cols-2 gap-16 items-start">
              
              {/* Left Column: Text Info */}
              <div className="md:sticky md:top-24">
                  <div className="inline-flex items-center gap-2 bg-blue-50 px-5 py-3 rounded-full border border-blue-100 mb-8">
                    <ShieldCheck className="w-6 h-6 text-[#1e3a8a]" />
                    <span className="text-lg font-medium text-[#1e3a8a]">Sobre a AMSF</span>
                  </div>
                  <h3 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                    Parceiro estratégico em <span className="text-[#1e3a8a]">tributação empresarial</span>
                  </h3>
                  <div className="space-y-6 text-2xl md:text-3xl text-gray-600 leading-relaxed">
                    <p>
                        A AMSF Advocacia atua há mais de 15 anos ao lado de empresários que enfrentam desafios tributários complexos no Brasil.
                    </p>
                    <p>
                        Somos especializados em estratégia tributária, recuperação de créditos e gestão de passivos fiscais.
                        Nosso compromisso é com análise técnica rigorosa, segurança jurídica e resultado financeiro real para o seu caixa.
                    </p>
                  </div>
                  
                  {/* Contact Info */}
                  <div className="mt-12 grid gap-8">
                    <div className="flex items-center gap-6">
                       <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                         <MapPin className="w-8 h-8 text-[#1e3a8a]" />
                       </div>
                       <div>
                          <p className="font-bold text-gray-900 text-2xl">R. dos Pinheiros, 603, Sala 81</p>
                          <p className="text-gray-500 text-xl">Pinheiros, São Paulo/SP</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-6">
                       <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                         <Mail className="w-8 h-8 text-[#1e3a8a]" />
                       </div>
                       <div>
                          <p className="font-bold text-gray-900 text-2xl">contato@amsf.com.br</p>
                          <p className="text-gray-500 text-xl">Fale com nossos especialistas</p>
                       </div>
                    </div>
                  </div>
              </div>

              {/* Right Column: Visual/Stats Box */}
              <div className="relative">
                 <div className="bg-[#0f172a] rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl">
                    {/* Decorative Blob inside box (Top Right) */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-600 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
                    
                    {/* Bottom Gradient Light/Neon Effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-blue-500/20 to-transparent pointer-events-none"></div>

                    <div className="relative z-10">
                        <h4 className="text-4xl font-bold mb-10 border-b border-gray-700 pb-8">Por que escolher a AMSF?</h4>
                        
                        <ul className="space-y-10">
                            <li className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-[#FB8015] rounded-xl flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <strong className="block text-3xl mb-2 text-white">Expertise Técnica</strong>
                                    <span className="text-gray-400 text-2xl">Equipe multidisciplinar unindo advogados tributaristas e contadores experientes.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-6">
                                 <div className="w-14 h-14 bg-[#FB8015] rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Briefcase className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <strong className="block text-3xl mb-2 text-white">Estratégia</strong>
                                    <span className="text-gray-400 text-2xl">Gestão tributária focada em resultado financeiro real.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-6">
                                 <div className="w-14 h-14 bg-[#FB8015] rounded-xl flex items-center justify-center flex-shrink-0">
                                    <ShieldCheck className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <strong className="block text-3xl mb-2 text-white">Segurança Jurídica</strong>
                                    <span className="text-gray-400 text-2xl">Compliance total com a legislação vigente e jurisprudência atual.</span>
                                </div>
                            </li>
                        </ul>

                        {/* Moved from Hero: Institutional Goal Badge */}
                        <div className="mt-12 pt-10 border-t border-gray-800/60">
                            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                <div className="bg-[#FB8015] p-4 rounded-full flex-shrink-0 shadow-lg shadow-orange-900/30">
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-2 opacity-80">Meta Institucional 2030</h3>
                                    <p className="text-3xl font-bold text-white leading-none">
                                        R$ 1.000.000.000 <span className="block text-lg font-normal text-gray-400 mt-1">em tributos recuperados.</span>
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm md:text-base text-gray-400 font-medium">
                                <span className="flex items-center gap-1.5">• Meta operacional</span>
                                <span className="flex items-center gap-1.5">• Execução estruturada</span>
                            </div>
                        </div>

                    </div>
                 </div>
              </div>

           </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;