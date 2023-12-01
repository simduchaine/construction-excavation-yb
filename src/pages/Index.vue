<template>
  <Layout>

    <section id="hero">
      <hero></hero>
    </section>

    <section id="topForm" class="bg-zinc-400 md:mx-auto mb-24 pt-10 md:pt-0">
      <top-form></top-form>
    </section>

    <section id="services" class="lg:container lg:mx-auto">
      <div class="flex flex-col justify-center items-center">
        <g-image src="../assets/icons/saw-wood-icon.svg" alt="Saw & Wood Icon" />
        <h2 class="font-display text-4xl font-semibold pt-7 pb-14">Nos Services</h2>
      </div>
      <div class="flex flex-wrap justify-evenly mb-32">
        <services v-for="service in $page.services.edges" :key="service.node.id" :title="service.node.title" :content="service.node.content" :Icon="service.node.Icon"></services>
      </div>
    </section>

    <section id="a-propos" class="bg-smoke bg-wave bg-contain">
      <a-propos class="mb-32"></a-propos>
    </section>

    <section id="realisations" class="lg:container lg:mx-auto">
      <div class="flex flex-col justify-center items-center">
        <g-image src="../assets/icons/saw-wood-icon.svg" alt="Saw & Wood Icon" />
        <h2 class="font-display text-4xl font-semibold pt-7 pb-14">Quelques Réalisations</h2>
      </div>
       <div class="flex flex-wrap justify-evenly items-start mb-32" >
          <realisations v-for="realisation in $page.realisations.edges" :key="realisation.node.id" :title="realisation.node.title" :content="realisation.node.content" :image="realisation.node.image" :categorie="realisation.node.categorie"></realisations>
      </div>
    </section>

    <section id="temoignages" class="bg-smoke bg-earth">
      <temoignages class="lg:container lg:mx-auto"></temoignages>
    </section>

    <section id="contact">
      <call-to-action></call-to-action>
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
        image
      }
    }
  }
}
</page-query>

<script>
import services from '../components/Services.vue'
import realisations from '../components/Realisations.vue'
import aPropos from '../components/APropos.vue'
import CallToAction from '../components/CallToAction.vue'
import Temoignages from '../components/temoignages.vue'
import Hero from '../components/Hero.vue'
import TopForm from '../components/TopForm.vue'

export default {
  metaInfo: {
    title: 'Accueil',
    htmlAttrs: {
      class: 'scroll-smooth'
    }
  },
  components: {
    services,
    realisations,
    aPropos,
    CallToAction,
    Temoignages,
    Hero,
    TopForm
  }
}
</script>

<style>

</style>
