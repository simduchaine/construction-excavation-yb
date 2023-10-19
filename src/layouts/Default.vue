<template>
  <div class="lg:container lg:mx-auto">
    <main-header></main-header>
    <slot/>
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

export default {
  components: {
    MainHeader
  }
}
</script>


<style>

</style>
