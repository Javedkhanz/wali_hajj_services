<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

</script>

<template>
   <footer class="bg-green-600 py-8 px-8 text-white">
    <div class="container mx-auto flex flex-wrap justify-between items-center">

      <!-- A column with the company address and phone number -->
      <div class="w-full md:w-auto mb-4 md:mb-0">
        <p class="mb-2"><strong>Address:</strong></p>
        <p>1st Floor, Sardarwali Plaza, Satellite Town, Beside Pearl Institut, Satellite Town, Quetta, Balochistan</p>
        <p class="mt-4"><strong>Phone:</strong></p>
        <p>03003823655</p> 
        <p>03003829155</p>
        <p class="mt-4"><strong>Email:</strong></p>
        <p>walihajj5115@gamil.com</p> 
      </div>
      <!-- A column with the company logo and name -->
      <div class="w-full md:w-auto">
        <img src="/logo.jpeg" alt="Wali Hajj Services Company Pvt Ltd" class="h-16 rounded-2xl w-auto mb-4">
        <p class="text-sm">© 2023 Wali Hajj Services Company Pvt Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>

</template>

<style scoped></style>
