<template>
   <!-- Portfolio Card -->
  <div class="group relative w-full h-[400px] overflow-hidden rounded-sm shadow-lg transition-all duration-300 ease-in-out">
    <!-- Card Image -->
    <g-image :src="image" :alt="title" class="absolute top-0 left-0 w-full h-full object-cover group-hover:w-[125%] group-hover:h-[110%] transition-all duration-300 ease-in-out" />
    <!-- Card Content -->
    <div class="absolute bottom-0 left-0 bg-white w-full h-1/3 p-4 transition-all duration-300 ease-in-out group-hover:w-5/6 group-hover:h-2/3">
      <div class="flex">
        <div>
          <h4 class="capitalize font-display font-medium text-lg text-wood-brown">{{ categorieToString }}</h4>
          <h3 class="text-gray-900 font-semibold font-display text-xl mb-2">{{ title }}</h3>
        </div>
        <!-- <g-image src="../assets/icons/cross-button.svg" class="ml-4" /> -->
      </div>
      <!-- Additional Details (Hidden by default) -->
      <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <p class="text-gray-700 pt-4 font-body" v-html="excerpt"></p>
      </div>
    </div>
  </div>
</template>


<script>

export default { 
    name: "Realisations",
    props: ['title', 'content', 'image', 'categorie'],
    computed: {
        categorieToString() {
            return this.categorie.toString()
      },
      excerpt() {
          return this.content.substring(0, 200)
        }
    }
}
</script>

<style lang="scss">
/* Additional CSS for hover effects */
  .group:hover .opacity-0 {
    transition: opacity 0.3s ease-in-out;
}


</style>