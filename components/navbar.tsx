'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun, Cpu, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  return (
    <nav className='bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex'>
            <div className='flex-shrink-0 flex items-center'>
              <Link href='/' className='flex items-center space-x-2'>
                <div className='relative flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white'>
                  <Cpu className='h-4 w-4 absolute' />
                  <Activity className='h-5 w-5' />
                </div>
                <span className='font-bold text-xl text-foreground'>
                  Techcura
                </span>
              </Link>
            </div>
            <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
              {/*  <Link href="#mvv" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-foreground hover:text-primary">
                Missão e Visão
              </Link> */}
              <Link
                href='#services'
                className='inline-flex items-center px-1 pt-1 text-sm font-medium text-foreground hover:text-primary'
              >
                Serviços
              </Link>
              <Link
                href='#about'
                className='inline-flex items-center px-1 pt-1 text-sm font-medium text-foreground hover:text-primary'
              >
                Sobre Nós
              </Link>
              <Link
                href='#projects'
                className='inline-flex items-center px-1 pt-1 text-sm font-medium text-foreground hover:text-primary'
              >
                Projectos
              </Link>
              <Link
                href='#contact'
                className='inline-flex items-center px-1 pt-1 text-sm font-medium text-foreground hover:text-primary'
              >
                Contacto
              </Link>
            </div>
          </div>
          <div className='hidden sm:ml-6 sm:flex sm:items-center'>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label='Toggle theme'
            >
              <Sun className='h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
              <Moon className='absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
            </Button>
            <Button className='ml-4' asChild>
              <Link href='#contact'>Fale Conosco</Link>
            </Button>
          </div>
          <div className='-mr-2 flex items-center sm:hidden'>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label='Toggle theme'
              className='mr-2'
            >
              <Sun className='h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
              <Moon className='absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
            </Button>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setIsOpen(!isOpen)}
              aria-label='Main menu'
            >
              {isOpen ? (
                <X className='block h-6 w-6' aria-hidden='true' />
              ) : (
                <Menu className='block h-6 w-6' aria-hidden='true' />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='sm:hidden'>
          <div className='pt-2 pb-3 space-y-1'>
            <Link
              href='#mvv'
              className='block pl-3 pr-4 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-primary'
              onClick={() => setIsOpen(false)}
            >
              Missão e Visão
            </Link>
            <Link
              href='#services'
              className='block pl-3 pr-4 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-primary'
              onClick={() => setIsOpen(false)}
            >
              Serviços
            </Link>
            <Link
              href='#about'
              className='block pl-3 pr-4 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-primary'
              onClick={() => setIsOpen(false)}
            >
              Sobre Nós
            </Link>
            <Link
              href='#projects'
              className='block pl-3 pr-4 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-primary'
              onClick={() => setIsOpen(false)}
            >
              Projectos
            </Link>
            <Link
              href='#contact'
              className='block pl-3 pr-4 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-primary'
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
            <div className='pl-3 pr-4 py-2'>
              <Button className='w-full' asChild>
                <Link href='#contact' onClick={() => setIsOpen(false)}>
                  Fale Conosco
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
