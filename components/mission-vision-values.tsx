import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award } from "lucide-react"

export function MissionVisionValues() {
  return (
    <section id="mvv" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Nossa Essência</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça os princípios que guiam nossa empresa e definem nosso compromisso com a excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MVVCard 
            icon={<Target className="h-10 w-10" />}
            title="Missão"
            description="Fornecer soluções tecnológicas inovadoras e acessíveis que transformem organizações, melhorem a eficiência operacional e impactem positivamente a sociedade, com foco especial em saúde, meio ambiente e educação."
          />
          
          <MVVCard 
            icon={<Eye className="h-10 w-10" />}
            title="Visão"
            description="Ser reconhecida como líder em transformação digital na África, criando tecnologias que capacitam organizações a enfrentar desafios complexos e contribuir para o desenvolvimento sustentável das comunidades."
          />
          
          <MVVCard 
            icon={<Award className="h-10 w-10" />}
            title="Valores"
            description="Inovação constante, excelência técnica, integridade em todas as relações, compromisso com resultados, responsabilidade social e ambiental, e valorização das pessoas e da diversidade."
          />
        </div>
      </div>
    </section>
  )
}

function MVVCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="transition-all duration-300 hover:border-primary h-full">
      <CardContent className="p-6 flex flex-col items-center text-center h-full">
        <div className="text-primary mb-4 bg-primary/10 p-4 rounded-full">{icon}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}