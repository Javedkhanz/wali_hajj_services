<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})


</script>
<!-- url('https://source.unsplash.com/random') -->
<template>
  <div class="h-[80vh] relative bg-cover selection:bg-slate-600 selection:text-white" style="background-image: url('/logo.jpeg') ">
    <div class="px-2 pt-6 md:px-0 md:pt-0">

      <div class=" selection:text-black md:p-6 p-2  text-black  flex md:justify-between md:flex-row  flex-col ">

        <div class="flex justify-between   ">
          <div class="flex flex-col md:flex-row  justify-between md:space-x-3 md:space-y-0 space-y-5  ">
            <img src="/logo.jpeg" alt="logo" class="md:w-[100px] md:h-[100px] w-[32px] h-[32px] rounded-full">
            <h2
              class=" md:block hidden  md:pt-9  text-2xl md:shadow-none shadow-lg shadow-neutral-500 md:text-3xl hover:cursor-grab text-center md:my-2 md:px-0 px-16 md:py-0 py-3 md:font-bold font-serif font-light  md:ml-0 ml-2 ">
              Wali Hajj Services</h2>
          </div>

          <div v-on:click="toggleNav" ref="ham" class="space-y-1 sm:hidden" id="hamburger">
            <div class="w-6   bg-black p-[2px] "></div>
            <div class="w-6   bg-black p-[2px] "></div>
            <div class="w-6   bg-black p-[2px] "></div>
          </div>
        </div>

        <div :class="{ hidden: hidden }" ref="nav" class="navbar md:block  md:pt-8 md:text-xl ">
          <div class="flex font-semibold  md:flex-row flex-col pl-4 md:mt-0 mt-4    ">
            <a href="#" class="md:px-4  py-2 px-1   ">Home</a>
            <a href="#" class="md:px-4  py-2 px-1   ">About</a>
            <a href="#" class="md:px-4  py-2 px-1   ">Services</a>
            <a href="#" class="md:px-4  py-2 px-1   ">Contact</a>

          </div>
        </div>
      </div>
    </div>

    <div ref="w_min" class="flex flex-col h-[80%] justify-center items-center md:space-y-8 space-y-0   text-black">
      <h1 class=" md:text-7xl   text-2xl  font-bold  ">Wali Hajj Services PVT </h1>
      <p  class=" md:text-2xl text-2xl ">Your description here</p>
    </div>

  </div>


</template>

<script>
export default {
  data() {
    return {
      hidden: true, // initial state of the navbar
      reset_h: 0, // initial state of the navbar
    };
  },
  methods: {
    toggleNav() {
      this.hidden = !this.hidden; // toggle the state of the navbar
      
      if (this.reset_h  == 0) {
        this.$refs.w_min.style.height = "40%";
        this.reset_h=1;
      } else {
        this.$refs.w_min.style.height = "80%";
        this.reset_h=0;

      }
    },
  },

};
</script>


<style scoped>
</style>
