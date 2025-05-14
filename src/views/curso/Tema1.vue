<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Patrimonio mundial'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-3.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En París, del 17 de octubre al 21 de noviembre de 1972, se llevó a cabo la Conferencia General de la Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura. Dicha convención plantea la disposición de declarar patrimonios culturales y naturales de la humanidad, con el objetivo de mitigar su destrucción y deterioro a causa de las amenazas de la vida social, económica y las causas naturales que alteran o ponen en peligro lo correspondiente a material e inmaterial.
    
        p(data-aos="fade-left").mb-4 La consideración de Patrimonio Mundial, se fundamenta en la idea de que algunos lugares y bienes mundiales son de alto valor (invaluable) y que su protección y conservación son de interés para toda la humanidad. Para su definición, la UNESCO considera su valor cultural, importancia histórica, belleza natural y representatividad de paisajes y ecosistemas.

        p(data-aos="fade-left").mb-4 Actualmente, la Lista del Patrimonio Mundial de la UNESCO cuenta con 1223 lugares, distribuidos en 168 países. 


    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-9
            .bg-color-white.shadow-soft.py-4.px-lg-5
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/bg-icono-link.svg", style="width: 90px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Lista del Patrimonio Mundial
                      p Estos bienes se clasifican en culturales, naturales y mixtos y pueden ser reconocidos en el siguiente enlace de consulta de World Heritage Convention - UNESCO
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://whc.unesco.org/es/list/" target="_blank")
                        span Ir al sitio
                        i.fas.fa-arrow-right
        

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-8
            .bg-color-5.p-4.h-100
              p.mb-0.text-white En América Latina y el Caribe, hay un total de 136 bienes declarados Patrimonio Mundial, algunos que además se encuentran categorizados en peligro de deterioro o pérdida irremediable. 

          .col-lg-4
            figure
              img(src="@/assets/curso/tema1/3.png", alt="")


        .row.justify-content-center.align-items-center.mb-5
          .col-lg-9
            .bg-color-white.shadow-soft.py-4.px-lg-5
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/bg-icono-video.svg", style="width: 90px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 La convención para la protección del patrimonio mundial, cultural y natural
                      p En el siguiente enlace se amplía la explicación acerca de la convención, los acuerdos pactados y las consideraciones sobre el patrimonio mundial cultural y natural: 
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=eRdnmNtufGI" target="_blank")
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
              a(href="https://whc.unesco.org/es/list/" target="_blank" rel="noopener noreferrer") WORLD HERITAGE CONVENTION – UNESCO. (2025). Lista de Patrimonios mundiales.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
