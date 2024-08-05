import React from 'react';
import Accordion from './Accordion';
interface propsContent1 {
    componentState: any;
    setComponentState: any;
  
  }
  interface Content {
    title: string;
    description: string;
  }



const Content1: React.FC<propsContent1> = ({componentState, setComponentState}) => {
    const contentData: Content[] = [
        {
            title: 'Aprobación récord de tarjetas',
            description:
              'Tasa de aprobación de tarjetas de crédito más alta para productos digitales.',
          },
          {
            title: 'Pago ultrarrápido',
            description: 'Cada segundo importa para impulsar tus ventas (el más rápido del mercado)',
          },
          {
            title: 'Pago sólido',
            description:
              'No disminuye independientemente del volumen de transacciones, lo que garantiza ingresos para su lanzamiento.',
          },
    ];
    const contentData1: Content[] = [
      {
          title: 'El recuperador de ventas',
          description:
            'Inteligente más avanzado del mercado, capaz de incrementar un 13% de tus ventas',
        },
        {
          title: 'Recuperación disponible en todos los canales de pago:',
          description: ' PIX, Boleto (incluido Parcelex) y tarjeta de crédito',
        },
  ];
  const contentData2: Content[] = [
    {
        title: 'Publicitar Productos',
        description:
          'Área de socios con espacio para publicitar otros productos vía escaparate o anuncios gratuitos (Club Sales)',
      },
      {
        title: 'Pago a plazos',
        description: 'El único Order Bump optimizado del mercado con opción de pago a plazos',
      },
      {
        title: 'Suscriptores',
        description:
          'Paneles intuitivos de gestión de recurrencia de suscripciones',
      },
];
const contentData3: Content[] = [
  {
      title: 'Ingresos',
      description:
        'incrementa tus ingresos en un 35% vendiendo fuera de tu país, en moneda local',
    },
    {
      title: 'Traduccion',
      description: 'Sus cursos están subtitulados automáticamente y su página de pago está traducida para venderse en más de 188 paísess',
    },
];
  return (
    <div className='flex flex-col w-full items-center justify-center gap-2'>
      <Accordion contentData={contentData} title="Más ventas con pago inteligente" />
      <Accordion contentData={contentData1} title="Recupera tus ventas" />
      <Accordion contentData={contentData2} title="Vende más a tus clientes" />
      <Accordion contentData={contentData3} title="Vender en todo el mundo" />
      {/* Your other components or content */}
    </div>
  );
};

export default Content1;
