import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, BarChart, LineChart, BookOpen, Laptop, Zap, FileText, Activity } from "lucide-react"
import Link from "next/link"

export function ServicesSection () {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Nossos Serviços</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções tecnológicas completas para transformar sua organização e impulsionar resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Database className="h-10 w-10" />}
            title="Coleta e Processamento de Dados"
            description="Sistemas avançados para coleta, processamento e análise de dados com relatórios personalizados."
            href="/services/data-collection"
          />
          
          <ServiceCard 
            icon={<BarChart className="h-10 w-10" />}
            title="Monitoria e Avaliação"
            description="Ferramentas para acompanhamento de indicadores, avaliação de desempenho e tomada de decisões."
            href="/services/monitoring"
          />
          
          <ServiceCard 
            icon={<Activity className="h-10 w-10" />}
            title="Sistemas para Saúde"
            description="Soluções digitais para gestão hospitalar, prontuários eletrônicos e monitoramento de pacientes."
            href="/services/healthcare"
          />
          
          <ServiceCard 
            icon={<FileText className="h-10 w-10" />}
            title="Meio Ambiente"
            description="Tecnologias para monitoramento ambiental, gestão de recursos naturais e sustentabilidade."
            href="/services/environment"
          />
          
          <ServiceCard 
            icon={<BookOpen className="h-10 w-10" />}
            title="Educação"
            description="Plataformas de ensino à distância, gestão escolar e ferramentas de aprendizagem interativa."
            href="/services/education"
          />
          
          <ServiceCard 
            icon={<Zap className="h-10 w-10" />}
            title="Transformação Digital"
            description="Consultoria e implementação de estratégias para digitalização de processos e operações."
            href="/services/digital-transformation"
          />
          
          <ServiceCard 
            icon={<Laptop className="h-10 w-10" />}
            title="Formação em TIC"
            description="Cursos e treinamentos em tecnologias de informação e comunicação para equipes e profissionais."
            href="/services/training"
          />
          
          <ServiceCard 
            icon={<LineChart className="h-10 w-10" />}
            title="Análise de Dados"
            description="Extração de insights valiosos através de análise avançada de dados e business intelligence."
            href="/services/data-analysis"
          />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description, href }: { icon: React.ReactNode, title: string, description: string, href: string }) {
  return (
    <Link href={href}>
      <Card className="service-card transition-all duration-300 hover:border-primary h-full cursor-pointer">
        <CardHeader>
          <div className="text-primary mb-4">{icon}</div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}