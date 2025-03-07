import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Database, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DataCollectionPage() {
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
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight mb-6">
                Coleta e Processamento de Dados
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Sistemas avançados para coleta, processamento e análise de dados com relatórios personalizados 
                que transformam informações em insights valiosos para sua organização.
              </p>
            </div>
            <div className="relative h-64 lg:h-96 rounded-xl overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Coleta de Dados"
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
              <h2 className="text-3xl font-bold mb-6">Nossas Soluções de Coleta de Dados</h2>
              <p className="text-lg text-muted-foreground mb-6">
                A Techcura desenvolve sistemas completos para coleta, processamento e análise de dados que 
                permitem às organizações tomar decisões baseadas em evidências. Nossas soluções são 
                personalizadas para atender às necessidades específicas de cada cliente.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Aplicativos Mobile para Coleta em Campo</h3>
                  <p className="text-muted-foreground mb-4">
                    Aplicativos personalizados para coleta de dados em campo, com funcionamento offline e 
                    sincronização automática quando conectado à internet. Ideal para pesquisas, censos e 
                    monitoramento de projetos em áreas remotas.
                  </p>
                  <ul className="space-y-2">
                    <FeatureItem text="Funcionamento offline com sincronização automática" />
                    <FeatureItem text="Validação de dados em tempo real" />
                    <FeatureItem text="Suporte a fotos, GPS e assinaturas digitais" />
                    <FeatureItem text="Compatível com Android e iOS" />
                  </ul>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Dashboards Analíticos</h3>
                  <p className="text-muted-foreground mb-4">
                    Painéis interativos para visualização e análise de dados, com filtros dinâmicos, 
                    gráficos personalizados e relatórios automatizados. Transforme dados brutos em 
                    informações acionáveis.
                  </p>
                  <ul className="space-y-2">
                    <FeatureItem text="Visualizações interativas e personalizáveis" />
                    <FeatureItem text="Exportação em múltiplos formatos (PDF, Excel, CSV)" />
                    <FeatureItem text="Alertas e notificações baseados em regras" />
                    <FeatureItem text="Compartilhamento seguro de relatórios" />
                  </ul>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Integração de Dados</h3>
                  <p className="text-muted-foreground mb-4">
                    Soluções para integrar dados de múltiplas fontes, criando uma visão unificada e 
                    consistente da informação. Conectamos sistemas existentes e novas plataformas.
                  </p>
                  <ul className="space-y-2">
                    <FeatureItem text="APIs para integração com sistemas existentes" />
                    <FeatureItem text="ETL (Extração, Transformação e Carga) automatizado" />
                    <FeatureItem text="Limpeza e normalização de dados" />
                    <FeatureItem text="Governança e segurança de dados" />
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-accent rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Benefícios</h3>
                <ul className="space-y-4">
                  <BenefitItem 
                    title="Decisões Baseadas em Dados" 
                    description="Transforme dados em insights acionáveis para tomar decisões mais informadas."
                  />
                  <BenefitItem 
                    title="Eficiência Operacional" 
                    description="Automatize a coleta e processamento de dados, reduzindo erros e tempo."
                  />
                  <BenefitItem 
                    title="Visibilidade em Tempo Real" 
                    description="Monitore indicadores-chave em tempo real com dashboards interativos."
                  />
                  <BenefitItem 
                    title="Escalabilidade" 
                    description="Nossas soluções crescem com sua organização, de pequenos projetos a operações nacionais."
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
              <h3 className="text-xl font-semibold mb-3">Ministério da Saúde</h3>
              <p className="text-muted-foreground mb-4">
                Implementação de sistema de coleta de dados para monitoramento de indicadores de saúde em 150 unidades de saúde, 
                resultando em melhoria de 40% na qualidade dos dados e redução de 60% no tempo de geração de relatórios.
              </p>
            </div>
            
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">ONG Ambiental</h3>
              <p className="text-muted-foreground mb-4">
                Desenvolvimento de aplicativo mobile para coleta de dados sobre biodiversidade em áreas de conservação, 
                com funcionamento offline e sincronização automática, utilizado por 50 pesquisadores em campo.
              </p>
            </div>
            
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Empresa Agrícola</h3>
              <p className="text-muted-foreground mb-4">
                Criação de dashboard para análise de produtividade agrícola com dados coletados por sensores IoT, 
                permitindo aumento de 25% na produtividade e redução de 30% no uso de recursos hídricos.
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