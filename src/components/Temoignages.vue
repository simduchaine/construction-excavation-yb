<template>
    <div class="max-w-md mx-auto">
        <!-- Testimonial Card -->
        <div class="relative bg-white p-6 rounded-lg shadow-lg h-64">
            <div class="flex">
                <g-image src="../assets/icons/quotation-marks.svg" alt="Quote" class="w-10 h-10 mr-4" /> <!-- Adjust the path and size accordingly -->
                <!-- The content of the card -->
                <p class="text-gray-600" v-html="content"></p>
            </div>
            <!-- The arrow below the card with colored border -->
            <div class="absolute -bottom-6" style="width: 60px; height: 25px; background-color: white; clip-path: polygon(100% 0, 0 0, 50% 100%);"></div>
        </div>
        <!-- Name and Location -->
        <div class="mt-10" >
            <p class="text-gray-900 font-semibold font-display text-xl mb-2">{{ name }}</p>
            <p class="font-display font-light text-md text-wood-brown">{{ city }}</p>
        </div>
    </div>
</template>



<script>
export default {
    name: 'Temoignages',
    props: ['name', 'content', 'city'],
    
}
</script>

<style lang="scss">

</style>
