<script setup>
import NavBar from './components/NavBar.vue'
import CardView from './components/CardView.vue'
import Services from './components/Services.vue'
import Foot from './components/Foot.vue'
import AboutUs from './components/AboutUs.vue'
import Contact_Loaction from './components/Contact_Loaction.vue'

</script>

<template>
  <button @click="openWhatsApp" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4  fixed md:right-16  md:bottom-16 right-8 bottom-12 z-10 w-fit h-16 md:w-28 md:h-28 cursor-pointer rounded-full">
    WhatsApp
  </button>
  <NavBar msg="true" />
  <router-view />
  <CardView msg="true" />
  <Services msg="true" />
  <AboutUs msg="true" />
  <Contact_Loaction msg="true" />
  <Foot msg="true" />
</template>

<style scoped></style>



<script>
export default {
  methods: {
    openWhatsApp() {
      const phoneNumber = "+923108120772"; // Replace with the desired phone number
      const message = "Hello, this is a test message."; // Replace with the desired message
      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      
      window.open(url, "_blank");
    }
  }
};
</script>