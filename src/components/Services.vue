<script setup>
import { ref } from 'vue'

defineProps({
    msg: String,
})

</script>

<template>

    <!-- A hero section with a background image and some text -->
    <section class="bg-cover bg-center bg-no-repeat h-[40vh]" style="background-image: url('./hajj-background.jpg')">
        <div class="container mx-auto h-full flex items-center justify-center">
            <div class="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-center">
                <h2 class="text-4xl font-bold text-gray-800">Your Trusted Partner for Hajj and Umrah</h2>
                <p class="text-xl text-gray-600">We offer the best packages and services for your spiritual journey.</p>
                <a href="#" class="mt-4 inline-block bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">Learn
                    More </a>
            </div>
        </div>
    </section>
    
</template>

<style scoped></style>
