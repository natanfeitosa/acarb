<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="2000"
      controls
      indicators
      background="var(--success)"
      style="max-height: 362px; padding: 2px; margin: 8px 0;"
    >
      <b-carousel-slide v-for="(p, i) in photos" :key="i" :img-src="p"></b-carousel-slide>
    </b-carousel>
    <section class="section">
      <b-col lg class="section-title">
        <h3 class="title-text">Bem vindo ao nosso site</h3>
      </b-col>
      <b-row class="justify-content-around">
        <b-col md="4" style="margin: 6px 0;">
          <b-img fluid src="https://institucional.jequiti.com.br/img/galeria/2012/06/348.jpg" />
        </b-col>
        <b-col md="7" order-md="first" tag="p" class="md-text-center" style="margin: 6px 0; font-size: 1.102rem;">
          A Associação dos Catadores de Recicláveis de Barbalha <b>- ACARB -</b>, fundada em 23 (vinte e três) de Abril de 2008 (dois mil e oito), com CNPJ n° <b>09.576.459/0001-02</b>, é uma organização sem fins lucrativos e governamentais que opera na cidade de Barbalha, localizada no sul do estado do Ceará. Tem por objetivo promover e realizar a coleta e a reciclagem de materiais sólidos no município.

          <div style="margin: 22px 0; padding: 10px;">
            <b-button to="/sobre" variant="outline-success">Saiba mais</b-button>
          </div>
        </b-col>
      </b-row>
    </section>

    <section class="section why">
      <b-col lg class="section-title">
        <h3 class="title-text">Por que reciclar?</h3>
      </b-col>
      <b-row>
        <b-card no-body>
          <div class="img-wraper">
            <img src="@/assets/imgs/rio_poluido.png" class="img-fluid">
          </div>
          <b-card-body body-bg-variant="success">
            <b-card-text>
              Reciclar ajuda na dimuição da poluição de mares, rios e lençóis freáticos.
            </b-card-text>
          </b-card-body>
        </b-card>
        <b-card no-body>
          <div class="img-wraper">
            <img src="@/assets/imgs/reciclando.png" class="img-fluid">
          </div>
          <b-card-body body-bg-variant="success">
            <b-card-text>
              Reciclar ajuda na diminuição de lixões, cooperando assim com a saúde pública.
            </b-card-text>
          </b-card-body>
        </b-card>
        <b-card no-body>
          <div class="img-wraper">
            <img src="@/assets/imgs/poluicao_ambiental.jpg" class="img-fluid">
          </div>
          <b-card-body body-bg-variant="success">
            <b-card-text>
              Reciclar ajuda na redução do consumo de energia por parte de empresas.
              <br />
              <br />
              Saiba mais em: <b-link class="text-warning font-weight-bold" href="https://www.otempo.com.br/economia/reciclados-economizam-energia-1.273366#:~:text=Para%20especialistas%2C%20o%20reaproveitamento%20de,que%20pode%20chegar%20a%2095%25&text=Em%20tempos%20de%20discuss%C3%A3o%20sobre,o%20consumo%20energ%C3%A9tico%20no%20Brasil.">O Tempo</b-link>
            </b-card-text>
          </b-card-body>
        </b-card>
      </b-row>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    slide: 0,
    photos: [
      'https://i.pinimg.com/736x/43/89/87/4389873936d9ff6f84f0a9b646cd3c32.jpg',
      'https://cdn.pixabay.com/photo/2017/06/25/18/06/scrapyard-2441432_960_720.jpg',
      'https://firebasestorage.googleapis.com/v0/b/acarb-site.appspot.com/o/IMG-20210806-WA0023.jpg?alt=media&token=9b26b56b-e416-4190-80ec-9e56e0b86162',
      'https://firebasestorage.googleapis.com/v0/b/acarb-site.appspot.com/o/IMG-20210806-WA0024.jpg?alt=media&token=21b400d2-b99c-4d0b-bb2f-b0f1f057366c',
    ],
  }),
  components: {
    // Reciclagem,
    // Contaminacao
  },
}
</script>
