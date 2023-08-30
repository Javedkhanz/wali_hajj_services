<script setup>
import NavBar from './components/NavBar.vue'
import CardView from './components/CardView.vue'
import Services from './components/Services.vue'
import Foot from './components/Foot.vue'
import AboutUs from './components/AboutUs.vue'
import Contact_Loaction from './components/Contact_Loaction.vue'

</script>

<template>
  <button @click="openWhatsApp" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4  fixed right-16  bottom-16 p-8 rounded-full">
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
      const phoneNumber = "03108120772"; // Replace with the desired phone number
      const message = "Hello, this is a test message."; // Replace with the desired message
      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      
      window.open(url, "_blank");
    }
  }
};
</script>