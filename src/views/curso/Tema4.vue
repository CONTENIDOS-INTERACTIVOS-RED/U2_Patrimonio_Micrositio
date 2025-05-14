<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'4. Patrimonio natural'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4  El patrimonio natural es toda la riqueza en biodiversidad que tienen los territorios y que además de ser un legado con cientos de especies animales, vegetales, microorganismos y otros seres vivos, vincula los hábitats que se generan en la interacción biológica, los grandes territorios donde conviven armónicamente cientos de seres vivos y generan productos, bienes y servicios que incluyen alimentos, fibras, mitigación ante cambios climáticos, reservas de agua y aire, minerales, entre otros.

      
          p(data-aos="fade-left").mb-4 La humanidad y toda la vida del planeta dependen de la existencia de estos ecosistemas, su riqueza y fragilidad demuestran el gran compromiso que se requiere para su conocimiento, preservación y conservación de toda especie, individuo, hábitat y redes de relaciones. 
      
          .bg-color-6.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema4/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Según la lista de patrimonio natural de World Heritage Convention, se clasifican como bienes naturales y bienes mixtos (natural y cultural), teniendo también como criterio aquellos que se encuentran en peligro debido al deterioro natural o causado por acciones humanas, los cambios ambientales y las inevitables transformaciones ecosistémicas. Actualmente, la lista de la UNESCO incluye 231 sitios naturales y 40 mixtos. 
      
          p(data-aos="fade-left").mb-4 Realicemos un recorrido por algunos patrimonios naturales mundiales:

      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")
      
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slide-1.png")
              .col-lg-7 
                h4 Parque Nacional del Gran Cañón - Estados Unidos
                p Sistema ecológico que incluye formaciones montañosas con cavernas, cuevas y grutas que conforman su atractivo más interesante y visitado por los turistas.
                a.anexo.mb-4.bg-white.w-fit(href="https://www.visittheusa.co/destination/parque-nacional-grand-canyon" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> visittheusa
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slide-2.png")
              .col-lg-7
                h4 Parque Nacional de Yellowstone - Estados Unidos
                p Abarca los estados de Idaho, Wyoming y Montana, está dentro del volcán más grande del continente americano. Incluye sistema montañoso con cañones, cordilleras, lagos, ríos y una variedad de especies diversas.
                a.anexo.mb-4.bg-white.w-fit(href="https://www.360virtualtour.co/portfolio/the-grand-canyon-virtual-tour/" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> 360virtualtour 
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slide-3.png")
              .col-lg-7
                h4 Parque Nacional de Canaima - Venezuela
                p Es uno de los 15 parques nacionales más grandes del mundo y posee la caída de agua más elevada del mundo: El Salto Ángel.
                a.anexo.mb-4.bg-white.w-fit(href="https://www.inparques.gob.ve/cms/main/verGaleria/84" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> inparques 
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slide-4.png")
              .col-lg-7
                h4 Parque Nacional Los Glaciares - Argentina
                p Es una reserva Nacional ubicada en la Provincia de Misiones en Argentina. Dentro del parque se encuentran las Cataratas del Iguazú, escogidas en el año 2011, como una de las 7 maravillas del mundo.
                a.anexo.mb-4.bg-white.w-fit(href="https://www.elcalafate.tur.ar/parque-nacional-los-glaciares-1.htm" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> elcalafate
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slide-5.png")
              .col-lg-7
                h4 Parque Nacional Iguazú - Argentina
                p El parque de mayor extensión en el país contiene diversos perfiles glaciológicos y una fauna que se encuentra en peligro de extinción.
                a.anexo.mb-4.bg-white.w-fit(href="https://aiiaoc.com/visita-virtual-por-las-cataratas-de-iguazu/" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> Wikimedia commons
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slide-6.png")
              .col-lg-7
                h4 Parque Santuario Histórico de Machu Picchu - Perú
                p Hace parte de la región Cusco en los Andes peruanos. Es un patrimonio mixto porque cuenta con reservas naturales y culturales. Es considerada patrimonio de la humanidad por su extensión de flora y fauna local y por la existencia de la ciudad Inca que integra.
                a.anexo.mb-4.bg-white.w-fit(href="https://www.machupicchu360.com/es/" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> Wikimedia commons
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slide-7.png")
              .col-lg-7
                h4 La Gran Barrera de Australia - Australia
                p Ubicado en la costa noroccidental de Australia cuenta con la barrera más extensa de arrecifes coralíferos del mundo. Con un gran nivel de biodiversidad marina, albergando 400 tipos de coral, 1.500 especies de peces y 4.000 variedades de moluscos. 
                p Es el hábitat de algunas especies en peligro de extinción, como el dugongo y la gran tortuga verde.
                a.anexo.mb-4.bg-white.w-fit(href="https://musee.oceano.org/es/actividades/inmersion-en-la-gran-barrera-de-coral/" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> musee.oceano
              

      p Colombia cuenta con diversos escenarios que podrían considerarse patrimonio de la humanidad y ecológico; en la lista declarada por la UNESCO, se encuentran los siguientes:

      TabsC.color-acento-contenido.mb-5
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Parque Nacional Katios" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Parque Nacional Katios
              p Ubicación: Riosucio (Chocó) y Turbo (antioquia). Límites de Panamá.

              a.anexo.mb-4.bg-white.w-fit(href="http://www.colparques.net/KATIOS" target="_blank")
                .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <strong>Sitio web. </strong> colparques

            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/tab-1.png', alt='')
      
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Santuario de Fauna y Flora de Malpelo" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Santuario de Fauna y Flora de Malpelo
              p Ubicación: Valle del Cauca

              a.anexo.mb-4.bg-white.w-fit(href="https://www.behance.net/search/projects/malpelo?locale=es" target="_blank")
                .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <strong>Sitio web. </strong> behance
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/tab-2.png', alt='')
      
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Qhapaq Ñan - Sistema vial andino" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Qhapaq Ñan - Sistema vial andino
              p Ubicación: Nariño
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/tab-3.png', alt='')
      
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Parque Nacional de Chiribiquete." :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Parque Nacional de Chiribiquete.
              p Ubicación: Meta
              a.anexo.mb-4.bg-white.w-fit(href="https://www.qhapaqnan-iila.com/es/i-paesi-del-qhapaq-nan/colombia/" target="_blank")
                .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <strong>Sitio web. </strong> colparques
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoomtab-2-in")
                img(src='@/assets/curso/tema4/tab-4.png', alt='')
      

      

      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.360virtualtour.co/portfolio/the-grand-canyon-virtual-tour/" target="_blank" rel="noopener noreferrer") 360VIRTUAL TOUR.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://aiiaoc.com/visita-virtual-por-las-cataratas-de-iguazu/" target="_blank" rel="noopener noreferrer") ASOCIACIÓN TERRITORIAL DE INGENIEROS INDUSTRIALES. Andalucía occidental. Visita virtual por las cataratas de Iguazú.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.behance.net/search/projects/malpelo?locale=es" target="_blank" rel="noopener noreferrer") BEHANCE. (S/A). Proyecto Malpelo.

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=kWjCyX1Lkmw" target="_blank" rel="noopener noreferrer") CANAL 15. (2018, 23 de enero). Patrimonio Biocultural - ¿Qué es el Patrimonio Biocultural? [Video] YouTube.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://inparques.gob.ve/cms/main/verGaleria/84" target="_blank" rel="noopener noreferrer") INPARQUES. Galería de fotografías Venezuela.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://machupicchu360.com/es/" target="_blank" rel="noopener noreferrer") MACHUPICCHU360. Visita virtual 360 Machu Picchu.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.museonacional.gov.co/Recorrido_virtual_Chiribiquete" target="_blank" rel="noopener noreferrer") MUSEO NACIONAL DE COLOMBIA. (S/A). Descubra la magia del Parque Nacional Natural Serranía de Chiribiquete en este recorrido virtual por la exposición: El Jaguar y la mariposa.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://musee.oceano.org/es/actividades/inmersion-en-la-gran-barrera-de-coral/" target="_blank" rel="noopener noreferrer") OCÉANO MÓNACO, OCÉANO PARÍS. (S/A). Inmersión en la gran barrera de coral de Australia.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="http://www.colparques.net/KATIOS" target="_blank" rel="noopener noreferrer") ORGANIZACIÓN COLPARQUES. (S/A). Parque Nacional Katios.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.elcalafate.tur.ar/parque-nacional-los-glaciares-1.htm" target="_blank" rel="noopener noreferrer") PARQUE NACIONAL LOS GLACIARES. (S/A). Tour y galería Parque Nacional los Glaciares.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.qhapaqnan-iila.com/es/i-paesi-del-qhapaq-nan/colombia/" target="_blank" rel="noopener noreferrer") QHAPAQNAN. (S/A). Recursos digitales qhapaqnan-iila.

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=eRdnmNtufGI" target="_blank" rel="noopener noreferrer") SFPIE UV. (2024, 17 de mayo). La convención para la protección del patrimonio mundial, cultural y natural. [Video] YouTube.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.visittheusa.co/destination/parque-nacional-grand-canyon" target="_blank" rel="noopener noreferrer") VISIT THE USA.COM. Visita Parque Nacional Grand Cañón.

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'El Patrimonio Natural es la riqueza de biodiversidad en los territorios. ¿Cuál enunciado describe mejor este concepto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Sitios históricos creados por el ser humano',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Conjunto de bienes, recursos y espacios naturales con valor excepcional',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Objetos culturales del pasado',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Costumbres y tradiciones de una comunidad',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de los siguientes NO es un patrimonio natural declarado por la UNESCO en Colombia?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Parque Nacional Katios',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Santuario de Fauna y Flora de Malpelo',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Parque Nacional de Chiribiquete',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Parque Nacional Tayrona',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué categoría de patrimonio representa el Parque Nacional Los Glaciares en Argentina?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Patrimonio Cultural',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Patrimonio Mixto',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Patrimonio Natural',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Patrimonio Inmaterial',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'El Santuario Histórico de Machu Picchu se considera un Patrimonio:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Cultural exclusivamente',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Natural exclusivamente',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Mixto (natural y cultural)',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Inmaterial',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'Según la UNESCO, ¿cuántos sitios naturales están incluidos actualmente en la lista de patrimonio mundial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: '100 sitios naturales',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: '231 sitios naturales',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: '500 sitios naturales',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: '1000 sitios naturales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
