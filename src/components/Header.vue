<template>
    <header class="flex flex-col md:flex-row md:justify-between md:items-center mb-2 lg:container lg:mx-auto"> 
        <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
            <g-link to="/">
                    <g-image src="../assets/logo.png" alt="Construction & Excavation YB Inc. Logo" width="250px" />
            </g-link>

            <div class="block sm:hidden">
                <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>

            <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
                <div class="sm:flex-grow sm:align-baseline sm:flex-col font-display font-medium text-gray-800 space-x-8">
                    <a href="#services">Services</a>
                    <a href="#a-propos">À propos</a>
                    <a href="#realisations">Réalisations</a>
                    <a href="#temoignages">Témoignages</a>
                    <a href="#contact">Contact</a>
                </div>

            
            </div>
        </nav>    
    </header>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            open: false,
        }
    },
    methods: {
        toggle() {
            this.open = !this.open
        }
    }
}
</script>

<style lang="scss">

    
</style>