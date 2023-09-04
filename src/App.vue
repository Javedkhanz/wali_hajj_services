<script setup>
import NavBar from './components/NavBar.vue'
import CardView from './components/CardView.vue'
import Services from './components/Services.vue'
import Foot from './components/Foot.vue'
import AboutUs from './components/AboutUs.vue'
import CEO from './components/CEO.vue'
import Contact_Loaction from './components/Contact_Loaction.vue'

</script>

<template>
  <button @click="openWhatsApp" class="fixed right-8 bottom-8 h-20 w-20 z-10" style="background-image: url('/whatsapp_logo.png'); background-size: cover;">
</button>

  <NavBar msg="true" />
  <!-- <router-view /> -->
  <CardView msg="true" />
  <Services msg="true" />
  <CEO msg="true" />
  <AboutUs msg="true" />
  <Contact_Loaction msg="true" />
  <Foot msg="true" />
</template>

<style scoped></style>



<script>
export default {
  methods: {
    openWhatsApp() {
      const phoneNumber = "+923136331116" // Replace with the desired phone number
      const message = "Hello MR Wali, ...."; // Replace with the desired message
      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      
      window.open(url, "_blank");
    }
  }
};
</script>