<template>
  <div> <!-- class="lg:container lg:mx-auto" -->
    <main-header></main-header>
    <slot/>
    <main-footer></main-footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import MainHeader from '~/components/Header.vue'
import MainFooter from '~/components/Footer.vue'

export default {
  components: {
    MainHeader,
    MainFooter
  }
}
</script>


<style>

</style>
