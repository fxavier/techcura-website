import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Projetos em Destaque</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos nossos projetos mais recentes e impactantes em diferentes setores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="Sistema de Gestão Hospitalar"
            description="Plataforma completa para gestão de hospitais, incluindo prontuário eletrônico, agendamento e gestão de leitos."
            image="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            tags={["Saúde", "Gestão", "Dashboard"]}
          />
          
          <ProjectCard 
            title="Plataforma de Ensino à Distância"
            description="Sistema de e-learning com recursos de videoaulas, avaliações online e certificação digital para instituições educacionais."
            image="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            tags={["Educação", "E-learning", "Web"]}
          />
          
          <ProjectCard 
            title="Monitoramento Ambiental"
            description="Solução IoT para monitoramento de qualidade do ar, água e solo com alertas em tempo real e relatórios analíticos."
            image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            tags={["Meio Ambiente", "IoT", "Análise"]}
          />
          
          <ProjectCard 
            title="Sistema de Coleta de Dados"
            description="Aplicativo mobile para coleta de dados em campo com sincronização offline e dashboard de análise."
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            tags={["Mobile", "Dados", "Offline"]}
          />
          
          <ProjectCard 
            title="Plataforma de Telemedicina"
            description="Sistema para consultas médicas remotas, com agendamento, videochamadas seguras e prescrição digital."
            image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            tags={["Saúde", "Telemedicina", "Web"]}
          />
          
          <ProjectCard 
            title="Dashboard de Indicadores"
            description="Painel interativo para visualização e análise de KPIs com filtros dinâmicos e relatórios automatizados."
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            tags={["BI", "Dashboard", "Análise"]}
          />
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ 
  title, 
  description, 
  image, 
  tags 
}: { 
  title: string, 
  description: string, 
  image: string, 
  tags: string[] 
}) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary">
      <div className="relative h-48 w-full">
        <Image 
          src={image} 
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}