export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Bioética y sostenibilidad en el desarrollo económico global',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Patrimonio mundial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Patrimonio cultural',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Patrimonio material',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Patrimonio material en Colombia',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Patrimonio inmaterial e identidad cultural',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Recursos para la formación y cultura',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Patrimonio biocultural',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Patrimonio Natural',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'UNESCO. (S/A). Cultura Proteger el patrimonio y fomentar la creatividad.',
      link:
        'https://www.unesco.org/es/culture#:~:text=Desde%20los%20c%C3%A9lebres%20monumentos%20hist%C3%B3ricos,conducir%20a%20una%20paz%20duradera',
    },
    {
      referencia:
        'UNESCO. (1972). Convención sobre la protección del patrimonio mundial, cultural y natural.',
      link: 'https://whc.unesco.org/archive/convention-es.pdf',
    },
    {
      referencia: 'UNESCO (S/A). Lista de patrimonios mundiales.',
      link: 'https://whc.unesco.org/es/list/',
    },
  ],
  glosario: [
    {
      termino: 'Biodiversidad',
      significado:
        'Variedad de vida que existe en el planeta, incluyendo la diversidad de especies animales, plantas, hongos y microorganismos, así como la diversidad genética dentro de cada especie, las poblaciones y los ecosistemas donde habitan. Comprende relaciones e interacciones que estos seres vivos establecen entre sí y con su entorno natural. Es resultado de millones de años de evolución, procesos naturales y la influencia de actividades humanas.',
    },
    {
      termino: 'Cultura',
      significado:
        'Conjunto de conocimientos, creencias, costumbres, artes, leyes, valores, y hábitos compartidos por un grupo de personas, que son transmitidos de generación en generación. Es la forma de vida de una sociedad o grupo, que incluye tanto lo material como lo intangible.',
    },
    {
      termino: 'Identidad cultural',
      significado:
        'Sentido de pertenencia a un grupo social, caracterizado por el compartir costumbres, valores, creencias y tradiciones, que se recrean y se enriquecen a través del tiempo. La cultura, por otro lado, es el conjunto de formas de vida, valores y creencias que definen a un grupo social y que se transmiten de generación en generación.',
    },
    {
      termino: 'Memoria cultural',
      significado:
        'Forma en que una sociedad transmite y conserva su conocimiento, historia, valores y prácticas a través de generaciones. Se manifiesta en tradiciones, ritos, textos, lugares y otros símbolos.',
    },
    {
      termino: 'Patrimonio',
      significado:
        'Conjunto de bienes, derechos y obligaciones de una persona o entidad, que pueden ser evaluados económicamente.',
    },
    {
      termino: 'Patrimonio inmaterial',
      significado:
        'Prácticas, representaciones, expresiones, conocimientos y habilidades, así como los instrumentos, objetos y artefactos, y espacios culturales asociados, que las comunidades, los grupos y en algunos casos los individuos reconocen como parte integrante de su patrimonio cultural.',
    },
    {
      termino: 'Patrimonio material',
      significado:
        'Patrimonio tangible, se refiere a los bienes culturales físicos, tanto muebles como inmuebles, que han sido creados por sociedades en el pasado y que son parte de su legado.',
    },
    {
      termino: 'Patrimonio natural',
      significado:
        'Conjunto de bienes, recursos y espacios naturales que poseen un valor excepcional desde el punto de vista estético, científico, ambiental y cultural, y que han sido creados por la naturaleza a lo largo del tiempo. Incluye formaciones físicas y biológicas, como monumentos naturales, reservas de la biosfera, parques nacionales, santuarios de la naturaleza, ecosistemas, especies animales y vegetales, y paisajes que requieren protección y conservación y para el bienestar de las generaciones futuras.',
    },
  ],
}
