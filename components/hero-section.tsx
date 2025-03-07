import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Database, BarChart, BookOpen, Laptop } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <div className='relative overflow-hidden'>
      {/* Background Image with Overlay */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
          alt='Healthcare Technology Background'
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className='absolute inset-0 bg-gradient-to-r from-primary/90 to-blue-900/90'></div>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div>
            <h1 className='text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white'>
              Transformação Digital para o Seu Negócio
            </h1>
            <p className='text-lg md:text-xl mb-8 text-white/90'>
              Desenvolvemos sistemas inteligentes para monitoria, avaliação,
              coleta e processamento de dados para saúde, meio ambiente e
              educação.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button
                size='lg'
                asChild
                className='bg-white text-primary hover:bg-gray-100'
              >
                <Link href='#services'>Nossos Serviços</Link>
              </Button>
              <Button
                size='lg'
                variant='outline'
                asChild
                className='border-white text-black hover:bg-white/10'
              >
                <Link href='#contact' className='flex items-center'>
                  Fale Conosco <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </div>
          </div>
          <div className='hidden md:block'>
            <div className='relative'>
              <div className='absolute -inset-0.5 bg-white/20 rounded-lg blur-xl'></div>
              <div className='relative bg-background/90 backdrop-blur-sm p-8 rounded-lg shadow-xl'>
                <div className='grid grid-cols-2 gap-4'>
                  <Link
                    href='/services/data-collection'
                    className='bg-primary/10 p-4 rounded-lg flex flex-col items-center text-center hover:bg-primary/20 transition-colors'
                  >
                    <FeatureIcon icon='data' />
                    <h3 className='font-medium text-primary mt-2'>
                      Coleta de Dados
                    </h3>
                  </Link>
                  <Link
                    href='/services/healthcare'
                    className='bg-primary/10 p-4 rounded-lg flex flex-col items-center text-center hover:bg-primary/20 transition-colors'
                  >
                    <FeatureIcon icon='health' />
                    <h3 className='font-medium text-primary mt-2'>
                      Sistemas para Saúde
                    </h3>
                  </Link>
                  <Link
                    href='/services/education'
                    className='bg-primary/10 p-4 rounded-lg flex flex-col items-center text-center hover:bg-primary/20 transition-colors'
                  >
                    <FeatureIcon icon='education' />
                    <h3 className='font-medium text-primary mt-2'>Educação</h3>
                  </Link>
                  <Link
                    href='/services/training'
                    className='bg-primary/10 p-4 rounded-lg flex flex-col items-center text-center hover:bg-primary/20 transition-colors'
                  >
                    <FeatureIcon icon='training' />
                    <h3 className='font-medium text-primary mt-2'>
                      Formação em TIC
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureIcon({
  icon,
}: {
  icon: 'data' | 'health' | 'education' | 'training';
}) {
  return (
    <div className='w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white'>
      {icon === 'data' && <Database className='h-6 w-6' />}
      {icon === 'health' && <BarChart className='h-6 w-6' />}
      {icon === 'education' && <BookOpen className='h-6 w-6' />}
      {icon === 'training' && <Laptop className='h-6 w-6' />}
    </div>
  );
}
