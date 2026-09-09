export const companyInfo = {
  name: 'ADB Soluciones Vertical',
  legalName: 'ADB Soluciones Vertical S.A.C.',
  slogan: '',
  subSlogan: 'Ascensores y soluciones de elevación diseñadas a la medida de tu proyecto en el Perú.',
  description: 'Empresa peruana especializada en la fabricación, importación, comercialización, instalación y mantenimiento de ascensores y sistemas de elevación vertical.',
  
  // Contact details
  phone: '+51 922 248 755',
  phoneDisplay: '+51 922 248 755',
  landline: '(01) 700-0000',
  landlineDisplay: '(01) 700-0000',
  whatsappNumber: '51922248755', // Formatted for wa.me (+51 922 248 755)
  whatsappDisplay: '+51 922 248 755',
  
  emailSales: 'verticaladbascensores@gmail.com',
  emailGeneral: 'verticaladbascensores@gmail.com',
  emailSupport: 'verticaladbascensores@gmail.com',
  
  location: {
    city: 'Lima',
    district: 'Carabayllo - Comas',
    country: 'Perú',
    address: 'Calle Trapiche Mz. H Lt. 19, Carabayllo - Comas, Lima',
    addressPlaceholder: 'Calle Trapiche Mz. H Lt. 19, Carabayllo - Comas, Lima',
    serviceArea: 'Lima Metropolitana, Callao y principales departamentos del Perú (Arequipa, Trujillo, Cusco, Piura, Chiclayo, Huancayo, entre otros).'
  },

  schedule: {
    weekdays: 'Lunes a Viernes: 8:00 AM – 6:00 PM',
    saturdays: 'Sábados: 8:30 AM – 1:00 PM',
    emergencies: 'Soporte técnico y atención de emergencias para contratos vigentes'
  },

  pillars: [
    {
      title: 'Seguridad y Confiabilidad',
      description: 'Cada componente y protocolo de montaje está enfocado en proteger la integridad de los usuarios en cada trayecto vertical.',
      icon: 'Shield'
    },
    {
      title: 'Soluciones a Medida',
      description: 'Adaptamos el diseño técnico y arquitectónico al espacio real, tráfico de personas y presupuesto de tu inmueble.',
      icon: 'Sliders'
    },
    {
      title: 'Calidad e Ingeniería',
      description: 'Componentes electromecánicos homologados, tecnología gearless de bajo consumo y acabados de primera línea.',
      icon: 'Cpu'
    },
    {
      title: 'Respaldo Postventa',
      description: 'Acompañamiento integral con mantenimiento preventivo riguroso y soporte técnico constante en Lima y provincias.',
      icon: 'Clock'
    }
  ]
};

// Generador de enlaces de WhatsApp contextuales
export function getWhatsAppLink(messageType: 'general' | 'cotizacion' | 'residencial' | 'pasajeros' | 'carga' | 'mantenimiento' | 'accesibilidad' | 'personalizado', customContext?: string): string {
  let message = 'Hola ADB Soluciones Vertical, deseo solicitar información sobre soluciones de elevación para mi proyecto.';
  
  switch (messageType) {
    case 'cotizacion':
      message = 'Hola ADB Soluciones Vertical, deseo solicitar una cotización formal para un proyecto de elevación.';
      break;
    case 'residencial':
      message = 'Hola ADB Soluciones Vertical, estoy interesado en un ascensor residencial para mi vivienda unifamiliar / dúplex. ¿Podrían orientarme?';
      break;
    case 'pasajeros':
      message = 'Hola ADB Soluciones Vertical, requiero información y cotización de ascensores de pasajeros para un edificio / proyecto inmobiliario.';
      break;
    case 'carga':
      message = 'Hola ADB Soluciones Vertical, necesito asesoría técnica para un ascensor de carga / montacargas industrial.';
      break;
    case 'mantenimiento':
      message = 'Hola ADB Soluciones Vertical, deseo consultar sobre sus planes de mantenimiento preventivo y servicio técnico para ascensores.';
      break;
    case 'accesibilidad':
      message = 'Hola ADB Soluciones Vertical, busco una solución de plataforma elevadora o accesibilidad para personas con movilidad reducida.';
      break;
    case 'personalizado':
      if (customContext) {
        message = `Hola ADB Soluciones Vertical, ${customContext}`;
      }
      break;
  }
  
  return `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
