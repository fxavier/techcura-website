import Link from 'next/link';
import { Cpu, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className='bg-background border-t border-border'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='md:col-span-1'>
            <Link href='/' className='flex items-center space-x-2'>
              <div className='relative flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white'>
                <Cpu className='h-4 w-4 absolute' />
                <Activity className='h-5 w-5' />
              </div>
              <span className='font-bold text-xl text-foreground'>
                Techcura
              </span>
            </Link>
            <p className='mt-4 text-muted-foreground'>
              Transformando organizações através da tecnologia e inovação.
            </p>
          </div>

          <div>
            <h3 className='font-semibold text-foreground mb-4'>Serviços</h3>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/services/data-collection'
                  className='text-muted-foreground hover:text-primary'
                >
                  Colecta de Dados
                </Link>
              </li>
              <li>
                <Link
                  href='/services/healthcare'
                  className='text-muted-foreground hover:text-primary'
                >
                  Sistemas para Saúde
                </Link>
              </li>
              <li>
                <Link
                  href='/services/education'
                  className='text-muted-foreground hover:text-primary'
                >
                  Educação
                </Link>
              </li>
              <li>
                <Link
                  href='/services/training'
                  className='text-muted-foreground hover:text-primary'
                >
                  Formação em TIC
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold text-foreground mb-4'>Empresa</h3>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='#about'
                  className='text-muted-foreground hover:text-primary'
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href='#projects'
                  className='text-muted-foreground hover:text-primary'
                >
                  Projectos
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-muted-foreground hover:text-primary'
                >
                  Carreiras
                </Link>
              </li>
              <li>
                <Link
                  href='#contact'
                  className='text-muted-foreground hover:text-primary'
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold text-foreground mb-4'>Inscreva-se</h3>
            <p className='text-muted-foreground mb-4'>
              Receba nossas novidades e actualizações.
            </p>
            <div className='flex space-x-2'>
              <input
                type='email'
                placeholder='Seu email'
                className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
              />
              <Button type='submit'>Enviar</Button>
            </div>
          </div>
        </div>

        <div className='mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center'>
          <p className='text-muted-foreground text-sm'>
            &copy; {new Date().getFullYear()} Techcura. Todos os direitos
            reservados.
          </p>
          <div className='flex space-x-6 mt-4 md:mt-0'>
            <Link href='#' className='text-muted-foreground hover:text-primary'>
              Termos
            </Link>
            <Link href='#' className='text-muted-foreground hover:text-primary'>
              Privacidade
            </Link>
            <Link href='#' className='text-muted-foreground hover:text-primary'>
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
