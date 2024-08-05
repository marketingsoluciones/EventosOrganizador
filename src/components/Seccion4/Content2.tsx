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



const Content2: React.FC<propsContent1> = ({componentState, setComponentState}) => {
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
          title: 'Seguridad',
          description:
            'Protección antipiratería de su contenido',
        },
        {
          title: 'RRPP',
          description: 'Plataforma con niveles de control y acceso para empleados del equipo.',
        },
        {
          title: 'Bancaria',
          description:
            'Única plataforma regulada por el Banco Central.',
        },
  ];
  const contentData2: Content[] = [
    {
        title: 'Soporte 24/7',
        description:
          'Seguimiento y soporte de su lanzamiento, de principio a fin.',
      },
      {
        title: 'Seguimiento',
        description: 'Reuniones estratégicas trimestrales centradas en las mayores oportunidades de crecimiento.',
      },
      {
        title: 'Mercadeo',
        description:
          'Informes con datos secretos del mercado y insights para tu negocio.',
      },
];

  return (
    <div className='flex flex-col w-full items-center justify-center gap-2'>
      <Accordion contentData={contentData} title="Mejores herramientas de gestión" />
      <Accordion contentData={contentData1} title="Obtén protección sobre tu cuenta" />
      <Accordion contentData={contentData2} title="Mas resultados con admins" />
      {/* Your other components or content */}
    </div>
  );
};

export default Content2;