import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BookOpen, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EducationPage() {
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
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight mb-6">
                Educação
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Plataformas de ensino à distância, gestão escolar e ferramentas de aprendizagem interativa
                que transformam a experiência educacional e ampliam o acesso ao conhecimento.
              </p>
            </div>
            <div className="relative h-64 lg:h-96 rounded-xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Educação"
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
              <h2 className="text-3xl font-bold mb-6">Nossas Soluções para Educação</h2>
              <p className="text-lg text-muted-foreground mb-6">
                A Techcura desenvolve plataformas educacionais completas que transformam a experiência de 
                aprendizagem e facilitam a gestão escolar. Nossas soluções são projetadas para instituições 
                de ensino de todos os níveis, desde escolas primárias até universidades.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Plataforma de Ensino à Distância (EAD)</h3>
                  <p className="text-muted-foreground mb-4">
                    Sistema completo para criação, gestão e distribuição de cursos online, com recursos de 
                    videoaulas, avaliações, fóruns de discussão e certificação digital. Amplie o alcance 
                    de seus programas educacionais.
                  </p>
                  <ul className="space-y-2">
                    <FeatureItem text="Ambiente virtual de aprendizagem intuitivo" />
                    <FeatureItem text="Suporte a diversos formatos de conteúdo (vídeo, áudio, texto)" />
                    <FeatureItem text="Avaliações automatizadas e feedback personalizado" />
                    <FeatureItem text="Certificação digital com validação online" />
                  </ul>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Sistema de Gestão Escolar</h3>
                  <p className="text-muted-foreground mb-4">
                    Solução integrada para gestão acadêmica e administrativa de instituições de ensino, 
                    incluindo matrícula, frequência, notas, comunicação com pais e relatórios gerenciais.
                  </p>
                  <ul className="space-y-2">
                    <FeatureItem text="Gestão de matrículas e turmas" />
                    <FeatureItem text="Controle de frequência e notas" />
                    <FeatureItem text="Portal para pais e responsáveis" />
                    <FeatureItem text="Relatórios de desempenho e indicadores educacionais" />
                  </ul>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Ferramentas de Aprendizagem Interativa</h3>
                  <p className="text-muted-foreground mb-4">
                    Aplicativos e plataformas que tornam o aprendizado mais engajador e eficaz, com recursos 
                    de gamificação, realidade aumentada e aprendizagem adaptativa baseada em inteligência artificial.
                  </p>
                  <ul className="space-y-2">
                    <FeatureItem text="Jogos educativos e simulações" />
                    <FeatureItem text="Conteúdo adaptativo baseado no desempenho do aluno" />
                    <FeatureItem text="Experiências de realidade aumentada e virtual" />
                    <FeatureItem text="Análise de dados de aprendizagem para personalização" />
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-accent rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Benefícios</h3>
                <ul className="space-y-4">
                  <BenefitItem 
                    title="Ampliação do Acesso à Educação" 
                    description="Leve conhecimento de qualidade a qualquer lugar, superando barreiras geográficas."
                  />
                  <BenefitItem 
                    title="Personalização do Aprendizado" 
                    description="Adapte o conteúdo às necessidades individuais de cada aluno."
                  />
                  <BenefitItem 
                    title="Eficiência Administrativa" 
                    description="Automatize processos administrativos e reduza a carga de trabalho dos educadores."
                  />
                  <BenefitItem 
                    title="Análise de Desempenho" 
                    description="Obtenha insights valiosos sobre o progresso dos alunos e a eficácia do ensino."
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
              <h3 className="text-xl font-semibold mb-3">Universidade Nacional</h3>
              <p className="text-muted-foreground mb-4">
                Implementação de plataforma EAD que permitiu a oferta de 50 cursos online para mais de 
                10.000 alunos, com taxa de conclusão 40% superior à média do mercado.
              </p>
            </div>
            
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Rede de Escolas</h3>
              <p className="text-muted-foreground mb-4">
                Desenvolvimento de sistema de gestão escolar para rede com 15 unidades, integrando 
                processos acadêmicos e administrativos e melhorando a comunicação com mais de 8.000 famílias.
              </p>
            </div>
            
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Ministério da Educação</h3>
              <p className="text-muted-foreground mb-4">
                Criação de aplicativo de alfabetização com recursos de gamificação, utilizado em 
                200 escolas públicas e contribuindo para aumento de 30% nos índices de alfabetização.
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