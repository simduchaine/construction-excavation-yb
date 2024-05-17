<template>
    <header class="flex flex-col md:flex-row md:justify-between md:items-center h-40 max-h-40 mb-2 lg:container lg:mx-auto"> 
        <nav class="flex justify-between items-center w-[92%] mx-auto">
            <div class="logo">
                <g-link to="/">
                    <g-image src="../assets/logo.png" alt="Construction & Excavation YB Inc. Logo" width="250px" />
                </g-link>
            </div>

            <div class="block sm:hidden">
                <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            
            <div :class="open ? 'block': 'hidden'" class="md:static absolute md:min-h-fit min-h-[60vh] left-0 md:w-auto w-full flex items-center px-5">
                <ul class="flex md:flex-row flex-col md:items-center font-display font-medium text-gray-800 space-x-8">
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#a-propos">À propos</a>
                    </li>
                    <li>
                        <a href="#realisations">Réalisations</a>
                    </li>
                    <li>
                        <a href="#temoignages">Témoignages</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>

        </nav>    
    </header>
</template>

<script>
export default {
    name: "HeaderCopy",
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