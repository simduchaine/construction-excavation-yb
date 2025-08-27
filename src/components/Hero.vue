<template>
    <div class="w-full bg-center bg-cover bg-hero relative" >
        <!-- Photo de <a href="https://unsplash.com/fr/@introspectivedsgn?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Erik Mclean</a> sur <a href="https://unsplash.com/fr/photos/personne-tenant-un-sac-vert-et-blanc-RfkaDKptt-A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> -->
        <div class="flex flex-col justify-center items-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
            <g-image src="../assets/icons/saw-wood-invert.svg" alt="Saw & Wood Icon" />
            <div class="text-center">
                <div class="container px-4 mx-auto">
                    <div class="max-w-8xl mx-auto text-center">
                        <h1 class="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100 uppercase font-display">Transformez Votre <span class="text-wood-brown">Espace de Rêve</span> en Réalité</h1>
                        <p class="max-w-3xl mx-auto mb-10 text-lg text-gray-300 font-body">Experts en Rénovation et Construction Résidentielle à Québec</p>
                        <a class="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-medium uppercase border-2 border-transparent bg-gray-800 hover:bg-gray-100 hover:text-gray-800 text-white transition duration-200"
              href="mailto:info@constructionyb.com">Contactez-nous</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex bg-gray-200 absolute bottom-0 left-1/2 -translate-x-1/2">
            <ul class="flex grow justify-items-center items-center content-center font-body mx-16 my-8 text-center">
                <li class="pr-6 border-r-2 border-gray-400 flex items-center"><span class="pr-2"><g-image src="../assets/icons/checkmark.svg" width="20" height="20" /></span> Service clé en main</li>
                <li class="pl-6 pr-6 border-r-2 border-gray-400 flex items-center"><span class="pr-2" ><g-image src="../assets/icons/checkmark.svg" width="20" height="20" /></span>Professionels qualifiés</li>
                <li class="pl-6 pr-6 border-r-2 border-gray-400 flex items-center"><span class="pr-2"><g-image src="../assets/icons/checkmark.svg" width="20" height="20" /></span>Service personnalisé</li>
                <li class="pl-6 flex items-center"><span class="pr-2"><g-image src="../assets/icons/checkmark.svg" width="20" height="20" /></span>Estimations gratuites</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero'
}
</script>

<style lang="scss">
.bg-hero {
    background-image: url("~@/assets/images/erik-mclean-RfkaDKptt-A-unsplash.jpg");
    height: 700px;
}
</style>