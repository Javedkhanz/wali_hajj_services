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
                <a href="/packege.jpeg"  download=""
                    class="mt-4 inline-block bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
                    >Download packege and See facilaties</a>


                <div v-if="messageVisible"
                    class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div class="bg-white p-8 rounded shadow-lg text-center">
                        <h1 class="text-xl font-bold">Soon hajj package for 2024 will be announced</h1>
                        <button class="mt-4 px-4 py-2 bg-red-600 text-white rounded" @click="hideMessage">
                            Close
                        </button>
                    </div>
                </div>


            </div>
        </div>
    </section>
    <!--  -->
</template>
<script>
export default {
    data() {
        return {
            messageVisible: false,
        };
    },
    methods: {
        showMessage() {
            this.messageVisible = true;
        },
        hideMessage() {
            this.messageVisible = false;
        },
    },
};
</script>
<style scoped></style>
