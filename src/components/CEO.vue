<!-- src/components/CEOProfile.vue -->

<template>
    <div class="container  max-w-6xl p-4 md:p-8 my-3 mx-2 bg-white shadow-lg rounded-lg">
        <div class="flex items-center">
            <img src="/hajji_barat.jpg" alt="CEO Image" class="w-16 h-16 rounded-full mr-4" />
            <div>
                <h1 class="text-3xl font-semibold text-gray-800">Hajji Barat Khan</h1>
                <p class="text-gray-600">Chief Executive of Hajj Services Company Pvt Ltd.</p>
            </div>
        </div>
        <p class="mt-6 text-gray-700 text-lg leading-relaxed">
            Welcome to Hajj Services Company Pvt Ltd,

            I am honored to extend my warmest greetings to all our valued clients and partners. As the Chief Executive, it
            is both a privilege and a responsibility to lead our company in serving the needs of Hajj pilgrims.

            At Hajj Services Company, we are dedicated to making your Hajj journey a sacred and memorable experience. Our
            team is committed to ensuring your comfort, safety, and peace of mind throughout your pilgrimage. We understand
            the significance of this spiritual journey and are here to provide you with the highest level of service and
            support.

            As we embark on this sacred pilgrimage together, I encourage you to embrace the spiritual essence of Hajj,
            reflect on its profound significance, and connect with your fellow pilgrims. May your journey be filled with
            blessings, forgiveness, and moments of deep spirituality.

            Thank you for choosing Hajj Services Company Pvt Ltd as your trusted partner for this life-changing journey. We
            are here to serve you with dedication and compassion.

            Wishing you a blessed and spiritually enriching Hajj experience.

            <span class="block mt-4 text-gray-800 font-semibold">Sincerely,</span>
            <span class="block">Haji Barat</span>
            <span class="block">Chief Executive Officer</span>
            <span class="block">Hajj Services Company Pvt Ltd</span>
        </p>
    </div>
</template>
  
<script>
export default {
    props: {
        ceoName: String,
        ceoDescription: String,
        ceoMessage: String,
    },
}
</script>
  