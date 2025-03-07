import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Laptop, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TrainingPage() {
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
                <Laptop className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight mb-6">
                Formação em TIC
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Cursos e treinamentos em tecnologias de informação e comunicação para equipes e profissionais,
                desenvolvendo competências essenciais para a era digital.
              </p>
            </div>
            <div className="relative h-64 lg:h-96 rounded-xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Formação em TIC"
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
              <h2 className="text-3xl font-bold mb-6">Nossos Programas de Formação</h2>
              <p className="text-lg text-muted-foreground mb-6">
                A Techcura oferece programas de formação e capacitação em tecnologias de informação e 
                comunicação, desenvolvidos por especialistas e adaptados às necessidades específicas de 
                cada organização e setor.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Desenvolvimento de Software</h3>
                  <p className="text-muted-foreground mb-4">
                    Cursos práticos de programação e desenvolvimento de software, abrangendo linguagens 
                    como JavaScript, Python, Java e frameworks modernos. Forme desenvolvedores capacitados 
                    para criar soluções inovadoras.
                  </p>
                  <ul className="space-y-2">
                    <FeatureItem text="Programação web front-end e back-end" />
                    <FeatureItem text="Desenvolvimento mobile (Android e iOS)" />
                    <FeatureItem text="Arquitetura de software e boas práticas" />
                    <FeatureItem text="Projetos práticos e mentoria personalizada" />
                  </ul>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Análise de Dados e BI</h3>
                  <p className="text-muted-foreground mb-4">
                    Treinamentos em análise de dados, business intelligence e visualização de informações. 
                    Capacite sua equipe para extrair insights valiosos e tomar decisões baseadas em dados.
                  </p>
                  <ul className="space-y-2">
                    <FeatureItem text="Fundamentos de análise de dados" />
                    <FeatureItem text="Ferramentas de BI (Power BI, Tableau)" />
                    <FeatureItem text="SQL e bancos de dados" />
                    <FeatureItem text="Visualização de dados e storytelling" />
                  </ul>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Transformação Digital</h3>
                  <p className="text-muted-foreground mb-4">
                    Programas de capacitação para líderes e equipes em transformação digital, abordando 
                    aspectos tecnológicos, culturais e estratégicos da digitalização de processos e negócios.
                  </p>
                  <ul className="space-y-2">
                    <FeatureItem text="Estratégias de transformação digital" />
                    <FeatureItem text="Gestão de mudanças e cultura digital" />
                    <FeatureItem text="Tecnologias emergentes (IA, IoT, blockchain)" />
                    <FeatureItem text="Inovação e design thinking" />
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-accent rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Benefícios</h3>
                <ul className="space-y-4">
                  <BenefitItem 
                    title="Desenvolvimento de Talentos" 
                    description="Capacite sua equipe com habilidades tecnológicas relevantes e atualizadas."
                  />
                  <BenefitItem 
                    title="Aumento de Produtividade" 
                    description="Equipes bem treinadas são mais eficientes e produzem resultados melhores."
                  />
                  <BenefitItem 
                    title="Inovação Acelerada" 
                    description="Profissionais capacitados podem implementar soluções inovadoras mais rapidamente."
                  />
                  <BenefitItem 
                    title="Adaptação às Mudanças" 
                    description="Prepare sua organização para acompanhar a evolução tecnológica constante."
                  />
                </ul>
                
                <div className="mt-8">
                  <Button className="w-full" size="lg" asChild>
                    <Link href="#contact">Solicitar Informações</Link>
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
              <h3 className="text-xl font-semibold mb-3">Empresa de Telecomunicações</h3>
              <p className="text-muted-foreground mb-4">
                Programa de capacitação em desenvolvimento mobile para 50 profissionais, resultando em 
                redução de 60% no tempo de desenvolvimento de novos aplicativos e serviços.
              </p>
            </div>
            
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Instituição Financeira</h3>
              <p className="text-muted-foreground mb-4">
                Treinamento em análise de dados e BI para equipe de 30 analistas, que passaram a 
                gerar insights 40% mais rápido e com maior precisão nas previsões de mercado.
              </p>
            </div>
            
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Órgão Governamental</h3>
              <p className="text-muted-foreground mb-4">
                Programa de transformação digital para 100 servidores públicos, contribuindo para 
                digitalização de 70% dos serviços e redução de 50% no tempo de atendimento ao cidadão.
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