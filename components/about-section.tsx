import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export function AboutSection() {
  return (
    <section id='about' className='py-20 bg-accent'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div>
            <h2 className='text-3xl font-bold text-foreground mb-6'>
              Sobre a Techcura
            </h2>
            <p className='text-lg text-muted-foreground mb-6'>
              A Techcura é uma empresa especializada em desenvolvimento de
              sistemas e soluções tecnológicas que impulsionam a transformação
              digital em diversos setores.
            </p>
            <p className='text-lg text-muted-foreground mb-6'>
              Nossa missão é fornecer tecnologias inovadoras e acessíveis que
              resolvam problemas reais e criem valor para nossos clientes, com
              foco especial em saúde, meio ambiente e educação.
            </p>

            <div className='space-y-4 mb-8'>
              <FeatureItem text='Equipe de especialistas em tecnologia e inovação' />
              <FeatureItem text='Mais de 50 projetos implementados com sucesso' />
              <FeatureItem text='Soluções personalizadas para cada necessidade' />
              <FeatureItem text='Compromisso com qualidade e resultados' />
            </div>

            <Button asChild>
              <Link href='#contact'>Entre em Contacto</Link>
            </Button>
          </div>

          <div className='grid grid-cols-2 gap-6'>
            <div className='space-y-6'>
              <StatCard number='7+' text='Anos de Experiência' />
              <StatCard number='50+' text='Projetos Concluídos' />
            </div>
            <div className='space-y-6 mt-12'>
              <StatCard number='30+' text='Profissionais' />
              <StatCard number='95%' text='Clientes Satisfeitos' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className='flex items-start'>
      <CheckCircle className='h-6 w-6 text-primary flex-shrink-0 mr-3' />
      <span className='text-foreground'>{text}</span>
    </div>
  );
}

function StatCard({ number, text }: { number: string; text: string }) {
  return (
    <div className='bg-background rounded-lg p-6 shadow-sm'>
      <p className='text-4xl font-bold text-primary mb-2'>{number}</p>
      <p className='text-foreground'>{text}</p>
    </div>
  );
}
