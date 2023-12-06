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
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
        <services v-for="service in $page.services.edges" :key="service.node.id" :title="service.node.title" :content="service.node.content" :Icon="service.node.Icon"></services>
      </div>
    </section>

    <section id="a-propos" class="bg-smoke bg-wave bg-contain">
      <a-propos></a-propos>
    </section>

    <section id="realisations" class="py-32 bg-shape bg-right-bottom bg-no-repeat">
      <div class="flex flex-col justify-center items-center">
        <g-image src="../assets/icons/saw-wood-icon.svg" alt="Saw & Wood Icon" />
        <h2 class="font-display text-4xl font-semibold pt-7 pb-14">Quelques Réalisations</h2>
      </div>
       <!-- <div class="flex flex-wrap justify-evenly items-start mb-32" > -->
        <div class="lg:container lg:mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 p-8">
          <realisations v-for="realisation in $page.realisations.edges" :key="realisation.node.id" :title="realisation.node.title" :content="realisation.node.content" :image="realisation.node.image" :categorie="realisation.node.categorie"></realisations>
      </div>
    </section>

    <section id="temoignages" class="bg-smoke bg-earth py-20">
      <div class="flex flex-col justify-center items-center">
        <div class="flex items-center">
            <g-image src="../assets/icons/saw-wood-icon.svg" alt="Saw & Wood Icon" />
            <h2 class="font-display font-medium text-lg text-wood-brown pl-2">Témoignages</h2>
        </div>
        <h3 class="font-display text-4xl font-semibold pt-4 pb-14">Ce que nos clients pensent de nous</h3>
      </div>
      <div class="lg:container lg:mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 p-8 pb-10">
        <temoignages v-for="temoignage in $page.temoignages.edges" :key="temoignage.node.id" :name="temoignage.node.name" :content="temoignage.node.content" :city="temoignage.node.city"></temoignages>
      </div>
      
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
  temoignages: allTemoignages {
    edges {
      node {
        id
        name
        content
        city
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
import Temoignages from '../components/Temoignages.vue'
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
