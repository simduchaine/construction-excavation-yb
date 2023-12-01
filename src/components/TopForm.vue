<template>
    <div class="flex flex-col md:flex-row justify-center items-center lg:h-36">

        <div class="bg-white h-full">
            <g-image src="~/assets/icons/contact-icon.svg" class="p-2 h-full w-24"></g-image>
        </div>
        
        <div class="mx-4">
            <h2 class="font-display text-3xl font-semibold text-white">Prêt à démarer votre projet?</h2>
            <h3 class="font-body text-sm text-white">Contactez-nous pour obtenir une estimation gratuite</h3>
        </div>

        <form action="https://fabform.io/f/kSQCelr" method="post" class="lg:w-1/2 my-4">

            <div class="flex flex-wrap items-center">
                <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label for="name" class="font-body block text-sm mb-2 text-gray-50">Votre Nom</label>
                    <input name="name" type="text" id="name" required class="block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                </div>
                 <div class="w-full md:w-1/4 px-3">
                    <label for="email" class="font-body block text-sm mb-2 text-gray-50">Votre Courriel</label>
                    <input name="email" type="email" id="email" required class="block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                </div>
                <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label for="tel" class="font-body block text-sm mb-2 text-gray-50">Votre Telephone</label>
                    <input type="tel" name="tel" id="tel" class="block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                </div>
                <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <button class="w-full md:w-auto py-5 px-8 text-sm font-body font-medium uppercase border-2 border-transparent bg-gray-800 hover:bg-gray-100 hover:text-gray-800 text-white transition duration-200" type="submit">Envoyer</button>
                </div>
            </div> 
        </form>
    </div>
</template>

<script>
export default {
    name: "TopForm"
}
</script>

<style lang="scss">

</style>