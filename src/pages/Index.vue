<template>
  <Layout>
    <section id="services">
      <div class="flex flex-col justify-center items-center">
        <img src="../assets/icons/saw-wood-icon.svg" alt="Saw & Wood Icon">
        <h2 class="font-display text-4xl font-semibold pt-7 pb-14">Nos Services</h2>
      </div>
      <div class="flex flex-wrap justify-evenly mb-32">
        <services v-for="service in $page.services.edges" :key="service.node.id" :title="service.node.title" :content="service.node.content" :Icon="service.node.Icon"></services>
      </div>
    </section>

    <section id="a-propos">
      <h2>À propos de nous</h2>
    </section>

    <section id="realisations">
      <div class="flex flex-col justify-center items-center">
        <img src="../assets/icons/saw-wood-icon.svg" alt="Saw & Wood Icon">
        <h2 class="font-display text-4xl font-semibold pt-7 pb-14">Quelques Réalisations</h2>
      </div>
       <div class="flex flex-wrap justify-evenly mb-32">
        <realisations v-for="realisation in $page.realisations.edges" :key="realisation.node.id" :title="realisation.node.title" :content="realisation.node.content" :image="realisation.node.image" :categorie="realisation.node.categorie"></realisations>
      </div>
    </section>

    <section id="temoignages">
      <h2>Témoignages</h2>
      <h3>Ce que nos clients pensent de nous</h3>
    </section>

  </Layout>
</template>

<page-query>
query {
  services: allServices {
    edges {
      node {
        id
        title
        content
        Icon
      }
    }
  }
  realisations: allRealisations {
    edges {
      node {
        id
        title
        content
        categorie
      }
    }
  }
}
</page-query>

<script>
import services from '../components/Services.vue'
import realisations from '../components/Realisations.vue'

export default {
  metaInfo: {
    title: 'Accueil'
  },
  components: {
    services,
    realisations
  }
}
</script>

<style>

</style>
