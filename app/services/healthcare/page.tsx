import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Activity, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HealthcarePage() {
  return (
    <main>
      <Navbar />
      
      <div className="bg-primary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Button variant="ghost" size="sm" asChild className="mr-4">
              <Link href="/#services">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-lg mb-6">
                <Activity className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight mb-6">
                Sistemas para Saúde
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Soluções digitais para gestão hospitalar, prontuários eletrônicos e monitoramento de pacientes
                que melhoram a eficiência operacional e a qualidade do atendimento.
              </p>
            </div>
            <div className="relative h-64 lg:h-96 rounded-xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Sistemas para Saúde"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Nossas Soluções para Saúde</h2>
              <p className="text-lg text-muted-foreground mb-6">
                A Techcura desenvolve sistemas completos para o setor de saúde, desde prontuários eletrônicos 
                até plataformas de telemedicina. Nossas soluções são projetadas para melhorar a eficiência 
                operacional, a qualidade do atendimento e a experiência do paciente.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Prontuário Eletrônico do Paciente (PEP)</h3>
                  <p className="text-muted-foreground mb-4">
                    Sistema completo para registro e gestão de informações clínicas dos pacientes, com acesso 
                    seguro e integrado a outros sistemas hospitalares. Melhore a continuidade do cuidado e 
                    reduza erros médicos.
                  </p>
                  <ul className="space-y-2">
                    <FeatureItem text="Histórico médico completo e acessível" />
                    <FeatureItem text="Prescrição eletrônica e gestão de medicamentos" />
                    <FeatureItem text="Integração com sistemas de laboratório e imagem" />
                    <FeatureItem text="Conformidade com normas de segurança e privacidade" />
                  </ul>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Plataforma de Telemedicina</h3>
                  <p className="text-muted-foreground mb-4">
                    Solução completa para consultas médicas remotas, com agendamento, videochamadas seguras, 
                    prescrição digital e integração com prontuário eletrônico. Amplie o acesso à saúde e 
                    reduza custos operacionais.
                  </p>
                  <ul className="space-y-2">
                    <FeatureItem text="Videoconsultas de alta qualidade e baixa latência" />
                    <FeatureItem text="Sistema de agendamento e lembretes automáticos" />
                    <FeatureItem text="Prescrição digital com assinatura eletrônica" />
                    <FeatureItem text="Integração com sistemas de pagamento" />
                  </ul>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Gestão Hospitalar</h3>
                  <p className="text-muted-foreground mb-4">
                    Sistema integrado para gestão de hospitais e clínicas, incluindo controle de leitos, 
                    agendamento, faturamento, estoque e recursos humanos. Otimize processos e reduza custos.
                  </p>
                  <ul className="space-y-2">
                    <FeatureItem text="Gestão de leitos e ocupação hospitalar" />
                    <FeatureItem text="Controle de estoque e farmácia" />
                    <FeatureItem text="Agendamento de consultas e procedimentos" />
                    <FeatureItem text="Relatórios gerenciais e indicadores de desempenho" />
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-accent rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Benefícios</h3>
                <ul className="space-y-4">
                  <BenefitItem 
                    title="Melhoria na Qualidade do Atendimento" 
                    description="Acesso rápido a informações clínicas completas para decisões mais precisas."
                  />
                  <BenefitItem 
                    title="Redução de Custos Operacionais" 
                    description="Automatize processos administrativos e reduza desperdícios."
                  />
                  <BenefitItem 
                    title="Ampliação do Acesso à Saúde" 
                    description="Leve atendimento especializado a áreas remotas com telemedicina."
                  />
                  <BenefitItem 
                    title="Segurança e Conformidade" 
                    description="Sistemas em conformidade com normas de segurança e privacidade de dados."
                  />
                </ul>
                
                <div className="mt-8">
                  <Button className="w-full" size="lg" asChild>
                    <Link href="#contact">Solicitar Demonstração</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Casos de Sucesso</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Hospital Regional</h3>
              <p className="text-muted-foreground mb-4">
                Implementação de sistema integrado de gestão hospitalar em rede com 5 unidades, resultando em 
                redução de 30% no tempo de atendimento e aumento de 25% na satisfação dos pacientes.
              </p>
            </div>
            
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Clínica Especializada</h3>
              <p className="text-muted-foreground mb-4">
                Desenvolvimento de plataforma de telemedicina que permitiu ampliar o atendimento para 
                pacientes em áreas rurais, com mais de 5.000 consultas realizadas no primeiro ano.
              </p>
            </div>
            
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Secretaria de Saúde</h3>
              <p className="text-muted-foreground mb-4">
                Criação de sistema de prontuário eletrônico para rede de atenção primária, integrando 
                30 unidades básicas de saúde e melhorando a continuidade do cuidado para 200.000 pacientes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-start">
      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
      <span>{text}</span>
    </li>
  )
}

function BenefitItem({ title, description }: { title: string, description: string }) {
  return (
    <li>
      <h4 className="font-medium">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </li>
  )
}