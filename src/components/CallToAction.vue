<template>
    <div class="relative flex bg-gray-800 text-white h-96">
        <!-- Decorative element: absolute positioning on the top left -->
        <div class="absolute top-0 left-0">
            <g-image src="../assets/images/triangles.png" class="w-auto h-96"/>
        </div>

        <div class="xl:w-1/2 flex flex-col justify-center items-start p-4 pl-44 z-10">
            <div class="flex items-center mb-4">
                <g-image width="20" src="../assets/icons/phone-icon.svg" />
                <a class="pl-2 font-semibold lg:text-lg text-wood-brown" href="tel:+15819986184">(581) 998-6184</a>
            </div>
            <div>
                <p class="font-semibold leading-tight font-display lg:text-3xl text-xl pt-4">À la recherche d’un entrepreneur en construction à Québec? <br> Contactez nous dès maintenant!</p>
            </div>
            <a class="inline-block w-auto mb-4 mt-10 lg:mr-6 py-5 px-8 text-sm font-body uppercase border-2 border-transparent hover:bg-gray-500 bg-gray-100 text-gray-800 hover:text-white transition duration-200" href="mailto:info@constructionyb.com">Contactez-nous</a>
        </div>

        <!-- Background image occupying 50% of the right side -->
        <div class="w-1/2 bg-img"></div>
    </div>

</template>

<script>
export default {
    name: 'CallToAction'
    
}
</script>

<style lang="scss">
.bg-img {
    background-image: url("~@/assets/images/greyson-joralemon-A1g0oeX29ec-unsplash.jpg");
    background-size: cover; 
    background-position: center;
    clip-path: polygon(100% 0%, 100% 51%, 100% 100%, 53% 100%, 20% 100%, 0 0);
}

</style>
