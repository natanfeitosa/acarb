<template>
  <div id="app">
    <b-navbar tag="header" type="dark" variant="success" style="border-bottom: 10px;">
      <div class="container-xl mx-auto">
      
        <b-navbar-brand to="/">
          <Reciclagem width="52px" height="52px"/>
        </b-navbar-brand>
        <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
        
        <b-navbar-nav class="mx-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/sobre">Sobre nós</b-nav-item>
        </b-navbar-nav>
      </div>
    </b-navbar>
    
    <router-view class="container-xl mx-auto" style="padding: 10px 8px; margin: 6px;"/>

    <footer class="page-footer">
      <div class="bg-warning">
        <b-row class="container-xl mx-auto justify-content-around">
          <b-card no-body>
            <img style="padding: 4px" class="img-fluid" src="@/assets/imgs/reciclando.png" />
            <b-card-body>
              <h4 style="margin: 0">Entre nessa corrente do bem e recicle também.</h4>
            </b-card-body>
          </b-card>

          <b-card no-body>
            <b-card-header>
              <strong>Localização</strong>
            </b-card-header>

            <b-list-group flush>
              <b-list-group-item>Barbalha - Ceará</b-list-group-item>
              <!-- <b-list-group-item>Temporariamente sem endereço</b-list-group-item> -->
            </b-list-group>

            <b-card-footer>
              <strong>Localização</strong>
            </b-card-footer>
          </b-card>

          <b-card id="contatos" no-body>
            <b-card-header>
              <strong>Meios de contato</strong>
            </b-card-header>

            <b-list-group flush>
              <b-list-group-item itemscope itemtype="http://schema.org/Person">
                <a href="tel:+558881373294" itemprop="telephone">+55 88 8137-3294</a>
                <br/>
                <span>
                  <span itemprop="name">
                    Jesualdo
                  </span>
                  -
                  <strong itemprop="jobTitle">presidente</strong>
                </span>
              </b-list-group-item>
              <b-list-group-item>
                <a href="mailto:cordeirofeitosajesualdo@gmail.com">cordeirofeitosajesualdo@gmail.com</a>
              </b-list-group-item>
            </b-list-group>

            <b-card-footer>
              <strong>Meios de contato</strong>
            </b-card-footer>
          </b-card>
        </b-row>
      </div>

      <div class="bg-secondary">
        <b-row class="font-weight-bold justify-content-around justify-content-sm-between text-white-50 container-xl mx-auto">
          <p style="margin: 0 2px; width: fit-content;">09.576.459/0001-02</p>
          <p style="margin: 0 2px; width: fit-content;">Com &#x2764; by <b-link href="https://www.instagram.com/santos_natanoficial" class="text-white">Natan Santos</b-link></p>
        </b-row>
      </div>
    </footer>
    <b-button v-if="showBToTop" @click="totop" variant="light" class="border rounded-circle" style="z-index: 1030; position: fixed; right: 26px; bottom: 28px; padding: 10px 12px; box-shadow: 0 0 20px 10px rgb(0 0 0 / 12%);">
      <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20px">
        <path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
      </svg>
    </b-button>
  </div>
</template>

<script>
import Reciclagem from '@/components/Reciclagem'

export default {
  name: 'App',
  components: {
    Reciclagem
  },
  data: () => ({
    showBToTop: false
  }),
  methods: {
    totop() {
      window.scroll({
        top: 0,
        behavior: "smooth",
      })
    },
    handler() {
      if (document.body.scrollTop > 240 || document.documentElement.scrollTop > 240) {
        this.showBToTop = true
      } else {
        this.showBToTop = false
      }
    }
  },
  created() {
    window.onscroll = this.handler.bind(this)
  },
}
</script>
