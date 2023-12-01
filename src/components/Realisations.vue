<template>
    <div class="max-w-md w-72 group bg-white border border-gray-50 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700" >
        <div class="relative h-75">
            <g-image :src="image" :alt="title" class="h-full w-full absolute object-fill" />
        </div>
        <div class="p-6">
            <!-- <h3 class="text-gray-700 capitalize font-body ">{{  categorieToString  }}</h3> -->
            <h4 class="text-gray-90 font-semibold font-display text-xl mb-2">{{ title }}</h4>
            <p class="mb-8 font-sans antialiased text-base leading-relaxed hidden text-gray-70 group-hover:block font-body" v-html="content"></p>
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
        }
    }
}
</script>

<style lang="scss">



</style>