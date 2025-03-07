'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Mensagem enviada!',
        description: 'Entraremos em contacto em breve.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id='contact' className='py-20 bg-accent'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-bold text-foreground mb-4'>
            Entre em Contacto
          </h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            Estamos prontos para ajudar a transformar sua organização com nossas
            soluções tecnológicas.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2'>
            <Card>
              <CardContent className='p-6'>
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                      <label htmlFor='name' className='text-sm font-medium'>
                        Nome
                      </label>
                      <Input
                        id='name'
                        name='name'
                        placeholder='Seu nome'
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='space-y-2'>
                      <label htmlFor='email' className='text-sm font-medium'>
                        Email
                      </label>
                      <Input
                        id='email'
                        name='email'
                        type='email'
                        placeholder='seu@email.com'
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='phone' className='text-sm font-medium'>
                      Telefone
                    </label>
                    <Input
                      id='phone'
                      name='phone'
                      placeholder='Seu telefone'
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='message' className='text-sm font-medium'>
                      Mensagem
                    </label>
                    <Textarea
                      id='message'
                      name='message'
                      placeholder='Como podemos ajudar?'
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button
                    type='submit'
                    className='w-full'
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className='space-y-6'>
            <ContactInfoCard
              icon={<Mail className='h-6 w-6' />}
              title='Email'
              content='info@techcura.org'
            />
            <ContactInfoCard
              icon={<Phone className='h-6 w-6' />}
              title='Telefone'
              content='+258 84 5395900 / +258 82 5395900'
            />
            <ContactInfoCard
              icon={<MapPin className='h-6 w-6' />}
              title='Endereço'
              content='Avenida Mao-Tse-Tung, Maputo, Moçambique'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoCard({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) {
  return (
    <Card>
      <CardContent className='p-6 flex items-start space-x-4'>
        <div className='text-primary'>{icon}</div>
        <div>
          <h3 className='font-medium text-foreground'>{title}</h3>
          <p className='text-muted-foreground'>{content}</p>
        </div>
      </CardContent>
    </Card>
  );
}
