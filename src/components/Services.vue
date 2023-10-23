<template>
    <div class="flex group justify-around lg:w-1/3 max-w-md h-52 flex-row rounded-sm border border-gray-50 bg-white hover:bg-gray-900 bg-clip-border text-gray-70 shadow-xl mb-5 overflow-hidden">
        <div class="mt-6 flex justify-center items-center w-20 h-20 m-0 overflow-hidden text-gray-700 bg-gray-200 rounded-r-none shrink-0 bg-clip-border">
            <img :src="Icon" :alt="title" class="object-cover w-1/2 h-1/2">
        </div>
        <div class="p-6 w-1/2">
            <h4 class="text-gray-900 group-hover:text-white font-semibold font-display text-xl mb-2">{{ title }}</h4>
            <p class="block mb-8 font-sans antialiased text-base leading-relaxed text-gray-700 group-hover:text-white font-body" v-html="content"></p>
        </div>
    </div>
</template>



<script>

export default { 
    name: "Services",
    props: ['title', 'content', 'Icon']
}
</script>

<style lang="scss">



</style>