<template>
    <div>
        <VueSlickCarousel :arrows="true" :dots="true">
            <div v-for="realisation in $page.realisations.edges" :key="realisation.node.id" >
                <!-- <div class="max-w-md w-72 group bg-white border border-gray-50 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700" > -->
                    <div class="relative h-75">
                        <g-image :src="realisation.node.image" :alt="realisation.node.title" class="h-full w-full absolute object-fill" />
                    </div>
                    <div class="p-6">
                        <!-- <h3 class="text-gray-700 capitalize font-body ">{{  categorieToString  }}</h3> -->
                        <h4 class="text-gray-90 font-semibold font-display text-xl mb-2">{{ realisation.node.title }}</h4>
                        <p class="mb-8 font-sans antialiased text-base leading-relaxed hidden text-gray-70 group-hover:block font-body" v-html="realisation.node.content"></p>
                    </div>
                <!-- </div> -->
            </div>
        </VueSlickCarousel>
    </div>
</template>



<script>
import VueSlickCarousel from 'vue-slick-carousel'
  // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default { 
    name: "Realisations-Carousel",
    props: ['title', 'content', 'image', 'categorie'],
    computed: {
        categorieToString() {
            return this.categorie.toString()
        }
    },
    components: { VueSlickCarousel },
}
</script>

<style lang="scss">



</style>