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
        <p><a
            href="https://maps.google.com?q=Sardar+Wali+Plaza+New+Truck+Adda,+Near+Satellite+Pearl+Institut+Town,+Quetta,+Balochistan"
            target="_blank">Sardar Wali Plaza New Truck Adda, Near Satellite Pearl Institut Town, Quetta, Balochistan</a>
        </p>
        <p class="mt-4"><strong>Phone:</strong></p>
        <p><a href="tel:+923003823655">0300 3823655</a></p>
        <p><a href="tel:+923003829155">0300 3829155</a></p>

        <p class="mt-4"><strong>Email:</strong></p>
        <p><a href="mailto:walihajj5115@gmail.com">walihajj5115@gmail.com</a></p>
       

      </div>
      <!-- A column with the company logo and name -->
      <div class="w-full md:w-auto">
        <img src="/logo.jpeg" alt="Wali Hajj Services Company Pvt Ltd" class="h-16 rounded-2xl w-auto mb-4">
        <p class="text-sm">© 2023 Wali Hajj Services Company Pvt Ltd. All rights reserved.</p>
        <br>
        <p class="text-sm">Website created by <b class="underline">Javed Khan</b>. Contact: <a href="tel:+923108120772">0310 8120772</a>. Email: <a href="mailto:javed49818@gmail.com">javed49818@gmail.com</a>.</p>
        
      </div>

    </div>
  </footer>
</template>

<style scoped></style>
