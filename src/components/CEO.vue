<!-- src/components/CEOProfile.vue -->

<template>
    <div class="container mx-auto  px-4 py-8 bg-white shadow-lg rounded-lg">
        <div class="flex items-center space-x-4">
            <img src="/hajji_barat.jpg" alt="CEO Image" class="w-20 h-20 rounded-full" />
            <div>
                <h1 class="text-4xl font-bold text-gray-900">Hajji Barat Khan</h1>
                <p class="text-gray-700">Chief Executive of Hajj Services Company Pvt Ltd.</p>
            </div>
        </div>
        <p class="mt-8 text-gray-800 text-xl leading-relaxed">
            Welcome to Hajj Services Company Pvt Ltd,

            I am honored to extend my warmest greetings to all our valued clients and partners. As the Chief Executive, it
            is both a privilege and a responsibility to lead our company in serving the needs of Hajj pilgrims.

            At Hajj Services Company, we are dedicated to making your Hajj journey a sacred and memorable experience. Our
            team is committed to ensuring your comfort, safety, and peace of mind throughout your pilgrimage. We understand
            the significance of this spiritual journey and are here to provide you with the highest level of service and
            support.

        <div class="hidden md:block">
            As we embark on this sacred pilgrimage together, I encourage you to embrace the spiritual essence of Hajj,
            reflect on its profound significance, and connect with your fellow pilgrims. May your journey be filled with
            blessings, forgiveness, and moments of deep spirituality.

            Thank you for choosing Hajj Services Company Pvt Ltd as your trusted partner for this life-changing journey. We
            are here to serve you with dedication and compassion.

            Wishing you a blessed and spiritually enriching Hajj experience.
        </div>
        </p>
        <div class="mt-8 flex justify-end items-center space-x-2">
            <span class="text-gray-900 font-bold">Sincerely,</span>
            <span class="text-gray-900">Haji Barat</span>
            <span class="text-gray-900">Chief Executive Officer</span>
            <span class="text-gray-900">Hajj Services Company Pvt Ltd</span>
        </div>
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
  