<script setup>
import { ref } from 'vue'

defineProps({
    msg: String,
})
</script>

<template id="about">
    <!-- A section with some features and icons -->
    <section class="py-16 bg-gray-100">
        <div class="container mx-auto px-8">
            <h3 class="text-3xl font-bold text-gray-800 text-center mb-8">Why Choose Us?</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- A feature card with an icon, title, and description -->
                <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
                    <img src="/direction.jpg" alt="Quality" class="h-15 w-auto mb-4">
                    <h4 class="text-xl font-bold text-gray-800">Quality</h4>
                    <p class="text-gray-600">We provide high-quality services and facilities for your comfort and
                        convenience.</p>
                </div>
                <!-- Another feature card -->
                <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
                    <img src="/experiance.jpg" alt="Experience" class="h-15 w-auto mb-4">
                    <h4 class="text-xl font-bold text-gray-800">Experience</h4>
                    <p class="text-gray-600">We have over 10 years of experience in organizing Hajj and Umrah trips for
                        thousands of pilgrims.</p>
                </div>
                <!-- Another feature card -->
                <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
                    <img src="/quilty.jpg" alt="Guidance" class="h-15 w-auto mb-4">
                    <h4 class="text-xl font-bold text-gray-800">Guidance</h4>
                    <p class="text-gray-600">We have qualified and knowledgeable guides who will assist you throughout your
                        journey.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
