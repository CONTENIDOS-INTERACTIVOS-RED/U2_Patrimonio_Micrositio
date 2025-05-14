<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Patrimonio inmaterial e identidad cultural'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .bg-full-width.bg-fondo-3
        .px-4.px-md-5.py-4
          .bg-color-1.mb-5(data-aos="fade-up")
            .row.justify-content-center.align-items-center
              .col-lg
                .p-4
                  p.mb-0(data-aos="fade-up") Comprende el patrimonio cultural que mantiene las tradiciones o expresiones vivas y heredadas de antepasados y transmitidas a descendientes. Comprende las tradiciones orales, rituales, festividades, saberes técnicos, artesanías, gastronomía, saberes locales y ancestrales, entre otros. 
              .col-lg-auto
                figure
                  img(src='@/assets/curso/tema3/1.png', alt='')
          



          p.mb-4 En los siguientes enlaces podrá encontrar más información sobre el tema:

          .row.justify-content-center.align-items-center.mb-5
            .col-lg-8
              .bg-color-white.shadow-soft.py-4.px-lg-5
                .row.justify-content-around.align-items-center
                  .col-md-auto
                    img(src="@/assets/template/bg-icono-link.svg", style="width: 80px;")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h5.mb-1 El Patrimonio Inmaterial de la Humanidad (UNESCO)
                        p.text-small A continuación lo invitamos a conocer información sobre El patrimonio inmaterial de la humanidad (UNESCO). 
                      .col-sm-auto
                        a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=p5UtQImZIeA" target="_blank")
                          span Ir al sitio
                          i.fas.fa-arrow-right

      .row.justify-content-center.align-items-center(style="margin-top: -50px;").mb-5
        .col-lg-8
          .bg-color-white.shadow-soft.py-4.px-lg-5
            .row.justify-content-around.align-items-center
              .col-md-auto
                img(src="@/assets/template/bg-icono-link.svg", style="width: 80px;")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5.mb-1 Hablemos de PATRIMONIO CULTURAL INMATERIAL
                    p.text-small A continuación lo invitamos a conocer información sobre Hablemos de patrimonio cultural inmaterial. 
                  .col-sm-auto
                    a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=H1gv4puovfA" target="_blank")
                      span Ir al sitio
                      i.fas.fa-arrow-right


      .row.mb-4
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-6.p-4(data-aos="fade-left").mb-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 El patrimonio inmaterial aporta de manera significativa a la identidad de las personas y las comunidades; se desarrolla en las comunidades y depende de conocimientos de las tradiciones, técnicas y costumbres y cómo se transmiten al resto de la comunidad, de generación en generación, o a otras comunidades.  
      
          p(data-aos="fade-left").mb-4 Dentro de las características de este tipo de patrimonio se encuentran:
      



      .row.justify-content-center.align-items-stretch.mb-4
        .col-lg-3
          .bg-color-3.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-4
                img(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mx-auto
              .col-lg-8
                p.mb-0 Tradicional, contemporáneo y viviente a un mismo tiempo.
      
        .col-lg-3
          .bg-color-3.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-4
                img(src="@/assets/curso/tema3/5.svg", style="max-width: 90px").mx-auto
              .col-lg-8
                p.mb-0 Integrador.
        
        .col-lg-3
          .bg-color-3.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-4
                img(src="@/assets/curso/tema3/6.svg", style="max-width: 90px").mx-auto
              .col-lg-8
                p.mb-0 Representativo.
      
        .col-lg-3
          .bg-color-3.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-4
                img(src="@/assets/curso/tema3/7.svg", style="max-width: 90px").mx-auto
              .col-lg-8
                p.mb-0 Basado en la comunidad.


      p(data-aos="fade-left").mb-4 Algunos de los recursos propuestos por UNESCO sobre el papel de patrimonio inmaterial en la identidad de las personas y comunidades, son los siguientes:


      .bg-full-width.bg-fondo-4
        .px-4.px-md-5.py-4
          .titulo-figura.mb-2
            h5 Tabla 2. 
            span Patrimonio inmaterial de Colombia
          
          .tabla-a.color-acento-contenido.mb-4
            table#Tabla2.table.table-bordered.table-striped

              thead
                tr
                  th.bg-color-tabla Línea del patrimonio inmaterial
                  th.bg-color-tabla Enlace

              tbody
                tr
                  td Tradiciones y expresiones orales, incluido el idioma como vehículo del patrimonio cultural inmaterial
                  td
                    a.anexo.mb-4.bg-white.w-fit(href="https://ich.unesco.org/es/tradiciones-y-expresiones-orales-00053" target="_blank")
                      .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p <strong>Sitio web. </strong> https://ich.unesco.org/es/tradiciones-y-expresiones-orales-00053 

                tr
                  td Usos sociales, rituales y actos festivos
                  td
                    a.anexo.mb-4.bg-white.w-fit(href="https://ich.unesco.org/es/usos-sociales-rituales-y-00055" target="_blank")
                      .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p <strong>Sitio web. </strong> https://ich.unesco.org/es/usos-sociales-rituales-y-00055

                tr
                  td Conocimientos y usos relacionados con la naturaleza y el universo
                  td
                    a.anexo.mb-4.bg-white.w-fit(href="https://ich.unesco.org/es/conocimientos-relacionados-con-la-naturaleza-00056" target="_blank")
                      .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p <strong>Sitio web. </strong> https://ich.unesco.org/es/conocimientos-relacionados-con-la-naturaleza-00056

                tr
                  td Técnicas artesanales tradicionales
                  td
                    a.anexo.mb-4.bg-white.w-fit(href="https://ich.unesco.org/es/tecnicas-artesanales-tradicionales-00057" target="_blank")
                      .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p <strong>Sitio web. </strong> https://ich.unesco.org/es/tecnicas-artesanales-tradicionales-00057

                tr
                  td Artes del espectáculo (como la música tradicional, la danza y el teatro)
                  td
                    a.anexo.mb-4.bg-white.w-fit(href="https://ich.unesco.org/es/artes-del-espectaculo-00054" target="_blank")
                      .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p <strong>Sitio web. </strong> https://ich.unesco.org/es/artes-del-espectaculo-00054

          p.mb-5 Ahora, lo invitamos a escuchar el siguiente podcast.

      .row.justify-content-center.align-items-center(style="margin-top: -70px;").mb-5

        .col-lg-6
          
          TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
            texto="Colombia, un país lleno de sabor, ritmo y realismo mágico"
            tiempo
            :audio="require('../../assets/curso/podcast/podcast1.mp3')"
          )
        .col-lg-6
          figure
            img(src="@/assets/curso/tema3/8.svg", data-aos="zoom-in")


      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Recursos para la formación en patrimonio y cultura

      p La gestión, comprensión y apreciación del patrimonio cultural, en especial el inmaterial, ha llevado a la formación continua de muchas personas desde el campo del turismo, la gestión cultural, la administración y el mercadeo, entre otros. A continuación, se disponen algunas plataformas que pueden aportar de manera gratuita a ese ámbito de interés:


      .titulo-figura.mb-2
        h5 Tabla 3. 
        span Recursos para la formación en patrimonio y cultura
      
      .tabla-a.color-acento-contenido.mb-4
        table#Tabla3.table.table-bordered.table-striped

          thead
            tr
              th.bg-color-tabla Descripción
              th.bg-color-tabla Recurso

          tbody
            tr
              td Experiencias de formación gratuitas y virtuales en arte, patrimonio y cultura.
              td
                a.anexo.mb-4.bg-white.w-fit(href="https://formacion.scrd.gov.co/" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> Forma. (S/A). Experiencias de formación en arte, patrimonio y cultura

            tr
              td Recursos Didácticos para Festividades y Tradiciones de Perú.
              td
                a.anexo.mb-4.bg-white.w-fit(href="https://blabook.es/recursos-didacticos-sobre-festividades-y-tradiciones/" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> Blabook.es. (2024). Recursos Didácticos para Festividades y Tradiciones

            tr
              td Recursos gratuitos tipo guías, cartillas, video, entre otros, enfocadas a la diversidad cultural.
              td
                a.anexo.mb-4.bg-white.w-fit(href="https://connectingculturaldiversity.com/" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> Connecting Cultural Diversity. (S/A).

            tr
              td Recursos Didácticos para la Enseñanza del Patrimonio Cultural en España
              td
                a.anexo.mb-4.bg-white.w-fit(href="https://educapremium.es/recursos-didacticos-para-ensenar-patrimonio-cultural-en-espana/" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> EDUCAPREMIUM (2024).

            tr
              td Visita interactiva y gratuita las exhibiciones y muestras representativas de Colombia.
              td
                a.anexo.mb-4.bg-white.w-fit(href="https://www.bibliotecanacional.gov.co/es-co/servicios/tourvirtual/bnc/index.html" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> BIBLIOTECA NACIONAL DE COLOMBIA. (S/A).

            tr
              td Muestra virtual y gratuita del Banco de la República de Colombia, con fuentes de diversos medios de divulgación.
              td
                a.anexo.mb-4.bg-white.w-fit(href="https://www.banrepcultural.org/biblioteca-virtual" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> BANCO DE LA REPÚBLICA. Biblioteca Luis Ángel Arango.


      #t_3_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.2] Patrimonio biocultural

      .row.mb-5
        .col-lg-8
          p Es un término que se usa para explicar cómo las comunidades se relacionan con los ecosistemas y los recursos naturales, siendo clave el conocimiento ancestral, el uso sostenible y sobre todo el respeto por el cuidado y la preservación.
          p Dentro de las prácticas de patrimonio biocultural están:
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/9.svg", alt="")



      


      .bg-full-width.bg-fondo-5
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.mb-5
            .col-lg-4
              figure
                img(src='@/assets/curso/tema3/10.png', alt='')
            .col-lg-8
      
              SlyderF(columnas="col-12 col-lg-6")
                .custom-image-card-2.h-100
                  img.custom-image-card__image(src="@/assets/curso/tema3/tarjeta-1.png" alt="")
                  .custom-image-card__text.p-4
                    h5.mb-2.text-center Primero
                    p.mb-0.text-center Alimentos provenientes de plantas nativas.
                .custom-image-card-2.h-100
                  img.custom-image-card__image(src="@/assets/curso/tema3/tarjeta-2.png" alt="")
                  .custom-image-card__text.p-4
                    h5.mb-2.text-center Segundo
                    p.mb-0.text-center Uso de plantas para técnicas medicinales tradicionales.
                .custom-image-card-2.h-100
                  img.custom-image-card__image(src="@/assets/curso/tema3/tarjeta-3.png" alt="")
                  .custom-image-card__text.p-4
                    h5.mb-2.text-center Tercero
                    p.mb-0.text-center Recetas gastronómicas ancestrales.
                .custom-image-card-2.h-100
                  img.custom-image-card__image(src="@/assets/curso/tema3/tarjeta-2.png" alt="")
                  .custom-image-card__text.p-4
                    h5.mb-2.text-center Cuarto
                    p.mb-0.text-center Uso de fibras de plantas para artesanías.
                .custom-image-card-2.h-100
                  img.custom-image-card__image(src="@/assets/curso/tema3/tarjeta-3.png" alt="")
                  .custom-image-card__text.p-4
                    h5.mb-2.text-center Quinto
                    p.mb-0.text-center Bioturismo o turismo basado en la contemplación de la naturaleza.

          p.mb-5 Para conocer más sobre el término y sus implicaciones sobre el patrimonio y su conservación, lo invitamos a ver el siguiente vídeo: 
      

          .row.justify-content-center.align-items-center.mb-5
            .col-lg-9
              .bg-color-white.shadow-soft.py-4.px-lg-5
                .row.justify-content-around.align-items-center
                  .col-md-auto
                    img(src="@/assets/template/bg-icono-video.svg", style="width: 80px;")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h5.mb-1 Patrimonio Biocultural - ¿Qué es el Patrimonio Biocultural?
                        p A continuación lo invitamos a ver el siguiente video.
                      .col-sm-auto
                        a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=kWjCyX1Lkmw" target="_blank")
                          span Ver video
                          i.fas.fa-arrow-right
              

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.banrepcultural.org/biblioteca-virtual" target="_blank" rel="noopener noreferrer") BANCO DE LA REPÚBLICA. Biblioteca Luis Ángel Arango. Biblioteca Virtual.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.bibliotecanacional.gov.co/es-co/servicios/tourvirtual/bnc/index.html" target="_blank" rel="noopener noreferrer") BIBLIOTECA NACIONAL DE COLOMBIA. (S/A). Tour virtual.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://blabook.es/recursos-didacticos-sobre-festividades-y-tradiciones/" target="_blank" rel="noopener noreferrer") BLABOOK.ES. (2024). Recursos Didácticos para Festividades y Tradiciones.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://connectingculturaldiversity.com/" target="_blank" rel="noopener noreferrer") CONNECTING CULTURAL DIVERSITY. (S/A). Recursos digitales de diversidad cultural.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://educapremium.es/recursos-didacticos-para-ensenar-patrimonio-cultural-en-espana/" target="_blank" rel="noopener noreferrer") EDUCAPREMIUM (2024). Enseñar Patrimonio Cultural en España.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://formacion.scrd.gov.co/" target="_blank" rel="noopener noreferrer") Forma. (S/A). Experiencias de formación en arte, patrimonio y cultura.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=5UtQImZIeA" target="_blank" rel="noopener noreferrer") SERVEI DE FORMACIÓ PERMANENT I INNOVACIÓ EDUCATIVA (SFPIE). (2018, 16 de julio). El Patrimonio Inmaterial de la Humanidad (UNESCO). [Video] YouTube.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=H1gv4puovfA" target="_blank" rel="noopener noreferrer") RE.H COLECTIVO. (2021, 1 de octubre). Hablemos de PATRIMONIO CULTURAL INMATERIAL. [Video] YouTube.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=p5UtQImZIeA" target="_blank" rel="noopener noreferrer") El Patrimonio Inmaterial de la Humanidad (UNESCO). [Video] YouTube.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=eRdnmNtufGI" target="_blank" rel="noopener noreferrer") SFPUE UV. (2024, 17 de mayo). La convención para la protección del patrimonio mundial, cultural y natural. [Video] YouTube.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://ich.unesco.org/es/tradiciones-y-expresiones-orales-00053" target="_blank" rel="noopener noreferrer") UNESCO. (S/A). Tradiciones y expresiones orales, incluido el idioma como vehículo del patrimonio cultural inmaterial.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://ich.unesco.org/es/usos-sociales-rituales-y-00055" target="_blank" rel="noopener noreferrer") UNESCO. (S/A). Usos sociales, rituales y actos festivos.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://ich.unesco.org/es/conocimientos-relacionados-con-la-naturaleza-00056" target="_blank" rel="noopener noreferrer") UNESCO. (S/A). Conocimientos y usos relacionados con la naturaleza y el universo.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://ich.unesco.org/es/tecnicas-artesanales-tradicionales-00057" target="_blank" rel="noopener noreferrer") UNESCO. (S/A). Técnicas artesanales tradicionales.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://ich.unesco.org/es/artes-del-espectaculo-00054" target="_blank" rel="noopener noreferrer") UNESCO. (S/A). Artes del espectáculo.

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>
