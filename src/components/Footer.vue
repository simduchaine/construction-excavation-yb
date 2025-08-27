<template>
    <footer class="bg-gray-900 text-gray-300">
        <div class="flex flex-col justify-center items-center py-24">
            <g-image src="../../src/assets/logo.png" alt="" width="250" class="mix-blend-screen" />
        </div>

        <div class="lg:container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 px-8">
            <!-- About Section -->
            <div>
                <h2 class="text-xl font-bold mb-4">À propos</h2>
                <g-image src="../assets/images/line.svg" class="pb-4"/>
                <p class="hover:text-wood-brown">Construction et Excavation Y.B inc. à Québec, votre partenaire de confiance en construction résidentielle. Nous sommes déterminés à offrir une qualité exceptionnelle des fondations aux finitions. Notre priorité: transformer vos rêves en réalité.</p>
            </div>
            
            <!-- Services Section -->
            <div>
                <h2 class="text-xl font-bold mb-4">Nos Services</h2>
                <g-image src="../assets/images/line.svg" class="pb-4" />
                <ul class="space-y-4">
                    <li class="hover:text-wood-brown"><span class="text-xl">&#x1F852;</span> Rénovation Résidentielle</li>
                    <li class="hover:text-wood-brown"><span class="text-xl">&#x1F852;</span> Toiture</li>
                    <li class="hover:text-wood-brown"><span class="text-xl">&#x1F852;</span> Après-Sinistres</li>
                    <li class="hover:text-wood-brown"><span class="text-xl">&#x1F852;</span> Paysagement</li>
                    <li class="hover:text-wood-brown"><span class="text-xl">&#x1F852;</span> Terasse et Patio</li>
                    <li class="hover:text-wood-brown"><span class="text-xl">&#x1F852;</span> Revêtement Extérieur</li>
                </ul>
            </div>
            
            <!-- Contact Section -->
            <div>
                <h2 class="text-xl font-bold mb-4">Contactez-nous</h2>
                <g-image src="../assets/images/line.svg" class="pb-4" />
                <div class="space-y-8">
                    <div class="flex">
                        <div class="bg-gray-600 rounded w-6 h-6 flex items-center flex-col justify-center" >
                            <g-image src="../assets/icons/location-dot-solid.svg" />
                        </div>
                        <address class="pl-2 flex items-center hover:text-wood-brown">
                            1097 rue Edison Québec, Québec G3K 1T1
                        </address>
                    </div>
                    <div class="flex">
                        <div class="bg-gray-600 rounded w-6 h-6 flex items-center flex-col justify-center">
                            <g-image src="../assets/icons/phone-icon.svg" width="15" />
                        </div>
                        <a href="tel:+15819986184" class="pl-2 flex items-center hover:text-wood-brown">(581) 998-6184</a>
                    </div>
                    <div class="flex">
                        <div class="bg-gray-600 rounded w-6 h-6 flex items-center flex-col justify-center">
                            <g-image src="../assets/icons/envelope-solid.svg" />
                        </div>
                        <a href="mailto:Ybureauconstruction@hotmail.com" class="pl-2 flex items-center hover:text-wood-brown">info@constructionyb.com</a>
                    </div>
                </div>
            </div>

        </div>
        
        <!-- Copyright Section -->
        <div class="bg-slate-800 h-16 text-center mt-8 pt-5">
           <span class="text-stone-300">Copyright &copy;  2023 Construction & Excavation YB Inc. Tous droits réservés.</span>
        </div>

    </footer>
</template>

<!-- <footer class="bg-gray-900 text-white">
        <div class="lg:container lg:mx-auto text-stone-300">
            <div class="flex flex-col justify-center items-center py-32">
                <g-image src="../../src/assets/logo.png" alt="" width="250" class="mix-blend-screen" />
            </div>
            <div class="grid grid-cols-3 justify-items-center">
                <div>
                    <h3>À Propos</h3>
                    <p>Construction et Excavation Y.B inc. à Québec, votre partenaire de confiance en construction résidentielle. Nous sommes déterminés à offrir une qualité exceptionnelle, des fondations aux finitions. Notre priorité : transformer vos rêves en réalité.</p>
                </div>
                <div>
                    <h3>Nos Services</h3>
                    <ol>
                        <li></li>
                    </ol>
                </div>
                <div>
                    <h3>Contactez-nous</h3>
                    <address>
                        1097 rue Edison Québec, Québec G3K 1T1
                    </address>
                    <a href="tel:+15819986184">(581) 998-6184</a>
                    <a href="mailto:Ybureauconstruction@hotmail.com">info@constructionyb.com</a>
                </div>
            </div>
        </div>
        <div class="bg-slate-800 h-16 text-center mt-8 pt-5">
           <span class="text-stone-300">Copyright &copy;  2025 Construction & Excavation YB Inc. Tous droits réservés.</span>
        </div>
    </footer> -->

<script>
export default {
    name: "Footer"
}
</script>

<style lang="scss">
.line-decorator {
    background-image: url('~@/assets/images/line.svg');
}

</style>
