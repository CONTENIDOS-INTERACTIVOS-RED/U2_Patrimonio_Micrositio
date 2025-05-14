<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Patrimonio cultural'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-5.align-items-center
        .col-lg-8
          p El patrimonio cultural es el legado de bienes y expresiones que una comunidad recibe de sus antepasados y tiene la posibilidad de heredar a futuras generaciones. Este legado incluye:
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/1.svg", alt="")

      .bg-full-width.bg-fondo-2
        .px-4.px-md-5.py-4
          .row.justify-content-center.align-items-stretch
            .col-lg-6.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/tarjeta-1.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Primero
                  p.mb-0 Bienes materiales como monumentos, objetos, artefactos, esculturas, artesanías, vestuario y edificaciones.
            .col-lg-6.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/tarjeta-2.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Segundo
                  p.mb-0 Bienes inmateriales como tradiciones, conocimientos, practicas, historias, mitos, leyendas, festivales, carnavales y gastronomía.

      .bg-full-width.bg-color-1.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El patrimonio cultural tiene un valor agregado para la identidad y el desarrollo de las comunidades, sobre todo en lo que corresponde a la identidad de pueblos locales y naciones, siendo también parte del orgullo de un territorio.
      

      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Patrimonio material
      
      .row.mb-5
        .col-lg-8
          .bg-color-6.px-4.py-4(data-aos="fade-left").mb-4
            p.mb-0 Gran parte de los patrimonios materiales pueden ser visitados por turistas o por académicos, con el ánimo de analizar, estudiar, investigar o contemplar dichos escenarios. Adicionalmente, los museos juegan  un papel relevante en su conservación porque son el lugar donde se protegen los materiales, herramientas, insumos y muestras que corresponden a los patrimonios materiales de una cultura, un territorio o una comunidad.
          
          p(data-aos="fade-left") A continuación, se presentan algunos sitios patrimonio cultural que pueden ofrecen visitas virtuales, a través de exhibiciones o rutas:
        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in").mb-4.mb-lg-0
      


      .bg-full-width.bg-fondo-info.mb-5
        .px-4.px-md-5.pt-4.pt-md-5
          .row.justify-content-center.align-items-center
            .col-lg-10
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema2/info1.png', alt='', style="max-width: 1230px;").mx-auto
      
                .bg-color-white.box-shadow.p-3(x="9%" y="10%" numero="+")
                  h5 Stonehenge (Inglaterra)
                  p Corresponden a las ruinas prehistóricas ubicadas en Wiltshire, Inglaterra, puede parecer como si uno estuviera caminando hacia atrás en el tiempo. Construido entre 3000 y 2000 BC, este sitio es un anillo de piedras de pie en el suelo y rodeado por un montículo circular de tierra. Las teorías sobre el propósito de Stonehenge incluyen que se concibió como un sitio funerario para su uso en ceremonias rituales, y/o un lugar de peregrinación para aquellos que buscan la curación. Aún se mantiene el misterio de cómo llegaron las piedras a su sitio actual. 
                  
                  a.anexo.mb-4.bg-white.w-fit(href="https://www.english-heritage.org.uk/visit/places/stonehenge/history-and-stories/stonehenge360/" target="_blank")
                    .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p <strong>Sitio web. </strong> History and Stories

      
                .bg-color-white.box-shadow.p-3(x="29%" y="10%" numero="+")
                  h5 Museo de China 
                  p China tiene 59 bienes registrados como patrimonio y en el museo de China es posible reconocer la cultura revolucionaria y la cultura socialista avanzada de China. El museo es el máximo exponente de la historia y el arte, y un centro cultural para China.
                  a.anexo.mb-4.bg-white.w-fit(href="https://en.chnmuseum.cn/" target="_blank")
                    .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p <strong>Sitio web. </strong> chnmuseum

                .bg-color-white.box-shadow.p-3(x="70%" y="10%" numero="+")
                  h5 Museo Arqueológico de España
                  p Exhibe y conserva objetos que pertenecieron a los distintos pueblos de la actual España y del ámbito mediterráneo, desde la Antigüedad hasta épocas recientes, de manera que el conocimiento de su historia les sea útil para analizar y comprender la realidad actual.  
                  a.anexo.mb-4.bg-white.w-fit(href="https://www.man.es/man/museo/el-man.html" target="_blank")
                    .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p <strong>Sitio web. </strong> chnmuseum
                .bg-color-white.box-shadow.p-3(x="91%" y="10%" numero="+")
                  h5 Museo de África
                  p Las salas de exposición albergaban animales naturalizados, muestras geológicas, productos básicos, objetos etnográficos y artísticos congoleños, así como objetos de arte creados en Bélgica. En el parque se recreó una aldea africana que albergó a varios congoleños durante el día. 
                  a.anexo.mb-4.bg-white.w-fit(href="https://www.africamuseum.be/en/see_do/virtual_exhibition" target="_blank")
                    .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p <strong>Sitio web. </strong> africamuseum

      .bg-full-width.bg-color-1
        .px-4.px-md-5.py-4
          .row.align-items-center.mb-5
            .col-lg-auto
              img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 A través de la plataforma #[strong Mus3ums] se pueden hacer visitas o identificación de los museos más relevantes del mundo por su historia, importancia global y las piezas que conserva. Hay en su listado más de 100 museos que permiten la visita virtual 3D.
      
      .row.justify-content-center.align-items-center(style="margin-top: -50px;").mb-5
        .col-lg-9
          .bg-color-white.shadow-soft.py-4.px-lg-5
            .row.justify-content-around.align-items-center
              .col-md-auto
                img(src="@/assets/template/bg-icono-link.svg", style="width: 80px;")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1 mus3ums
                    p.text-small A continuación lo invitamos a conocer información sobre las principales ciudades del mundo, sus atractivos culturales, artísticos y turísticos.
                  .col-sm-auto
                    a.boton.color-acento-botones.texto-blanco(href="https://mus3ums.com/en/" target="_blank")
                      span Ir al sitio
                      i.fas.fa-arrow-right

      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Patrimonio material en Colombia
      
      .row.mb-5
        .col-lg-8
          .bg-color-3.px-4.py-5(data-aos="fade-left").mb-4
            p.mb-0 Dentro del patrimonio cultural en Colombia, se encuentran algunas edificaciones históricas que datan de diferentes momentos épicos del país, algunas asociadas al colonialismo y a la historia local, incluyendo algunas iglesias épicas. Dentro del escenario arqueológico, sobresalen: el Parque Arqueológico de San Agustín y el Parque Arqueológico de Tierradentro; sin embargo, existen múltiples huellas y vestigios de las culturas precolombinas por todo el territorio nacional. Algunas ciudades (territorios), son también declarados patrimonio de la humanidad; tal es el caso de la ciudad de Cartagena de Indias y Santa Cruz de Mompox, además 18 pueblos que han sido declarados "Pueblos Patrimonio de Colombia", destacando su arquitectura colonial y su riqueza cultural, como Barichara, Lorica y Villa de Leyva.
          
          p(data-aos="fade-left") De acuerdo con la lista World Heritage Convention, Colombia cuenta con los siguientes patrimonios materiales:
        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in").mb-4.mb-lg-0
      

      .titulo-figura.mb-2
        h5 Tabla 1. 
        span Patrimonios materiales de Colombia
      
      .tabla-a.color-acento-contenido.mb-5
        table

          thead
            tr
              th.bg-color-tabla Elemento
              th.bg-color-tabla Posibles fortalezas
              th.bg-color-tabla Posibles debilidades

          tbody
            tr
              td Conjunto monumental de Cartagena
              td.text-center 1984
              td
                a.anexo.mb-4.bg-white.w-fit(href="https://whc.unesco.org/es/list/285" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> UNESCO. World Heritage Convention 

            tr
              td Centro Histórico de Santa Cruz de Mompox
              td.text-center 1995
              td
                a.anexo.mb-4.bg-white.w-fit(href="https://whc.unesco.org/es/list/742" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> UNESCO. World Heritage Convention 

            tr
              td Parque Arqueológico de San Agustín
              td.text-center 1995
              td
                a.anexo.mb-4.bg-white.w-fit(href="https://whc.unesco.org/es/list/744" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> UNESCO. World Heritage Convention 

            tr
              td Parque Arqueológico Nacional de Tierradentro
              td.text-center 1995
              td
                a.anexo.mb-4.bg-white.w-fit(href="https://whc.unesco.org/es/list/743" target="_blank")
                  .anexo__icono(:style="{'background-color': '#DBE7FC'}")
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p <strong>Sitio web. </strong> UNESCO. World Heritage Convention 


      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://whc.unesco.org/es/list/285" target="_blank" rel="noopener noreferrer") WORLD HERITAGE CONVENTION – UNESCO. (2025). Conjunto monumental de Cartagena.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://whc.unesco.org/es/list/742" target="_blank" rel="noopener noreferrer") WORLD HERITAGE CONVENTION – UNESCO. (2025). Centro Histórico de Santa Cruz de Mompox.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://whc.unesco.org/es/list/744" target="_blank" rel="noopener noreferrer") WORLD HERITAGE CONVENTION – UNESCO. (2025). Parque Arqueológico de San Agustín.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://whc.unesco.org/es/list/743" target="_blank" rel="noopener noreferrer") WORLD HERITAGE CONVENTION – UNESCO. (2025). Parque Arqueológico Nacional de Tierradentro.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
