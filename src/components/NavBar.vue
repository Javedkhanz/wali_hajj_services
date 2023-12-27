<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})


</script>
<!-- url('https://source.unsplash.com/random') -->
<template id="navbar">
  <div class="h-[80vh] relative bg-cover md:bg-[50%] bg-70 selection:bg-slate-600 selection:text-white"
    style="  background-image: url('/mainbg.jpg');   background-repeat: repeat; background-position:  center; ">
    <div class="px-2 pt-6 md:px-0 md:pt-0">

      <div class=" selection:text-black md:p-6 p-2  text-white  flex md:justify-between md:flex-row  flex-col ">

        <div class="flex justify-between   ">
          <div class="flex flex-col md:flex-row  justify-between md:space-x-3 md:space-y-0 space-y-5  ">
            <img src="/logo.jpeg" alt="logo" class="md:w-[100px] md:h-[100px] w-[32px] h-[32px] rounded-full">
            <h2
              class=" md:block hidden  md:pt-9  text-2xl md:shadow-none shadow-lg shadow-neutral-500 md:text-3xl hover:cursor-grab text-center md:my-2 md:px-0 px-16 md:py-0 py-3 md:font-bold font-serif font-light  md:ml-0 ml-2 ">
              Wali Hajj Services</h2>
          </div>
          <!-- hamburger three dot  -->
          <div v-on:click="toggleNav" ref="ham" class="space-y-1 sm:hidden" id="hamburger">
            <div class="w-6   bg-white p-[2px] "></div>
            <div class="w-6   bg-white p-[2px] "></div>
            <div class="w-6   bg-white p-[2px] "></div>
          </div>
        </div>

        <div :class="{ hidden: hidden }" ref="nav" class="navbar md:block  md:pt-8 md:text-xl ">
          <div class="flex font-semibold  md:flex-row flex-col pl-4 md:mt-0 mt-4    ">
            <a href="#navabar" class="md:px-4  py-2 px-1   ">Home</a>
            <a href="#about" class="md:px-4  py-2 px-1   ">About</a>
            <a href="#about" class="md:px-4  py-2 px-1   ">location</a>
            <a href="#services" class="md:px-4  py-2 px-1   ">Services</a>
            <a href="#Contact" class="md:px-4  py-2 px-1   ">Contact</a>


            <!-- <router-link  to="/Card-View">Serivces</router-link>
              <router-link  to="/About-Us">About-Us</router-link>
              <router-link  to="/Contact-Loaction">Contact-Us</router-link>
              <router-link  to="/Contact-Loaction">Locaiton</router-link>
               -->

          </div>
        </div>
      </div>
    </div>

    <div ref="w_min"
      class="flex flex-col text-center h-[80%] justify-center items-center md:space-y-8 space-y-0   text-white">
      <!-- <h1 class=" md:text-7xl   text-2xl  font-bold  ">Wali Hajj Services PVT limmited(5115) </h1> -->
      <div id="app">
        <div class="word  md:text-7xl   text-2xl  font-bold ">{{ part }}</div>
      </div>
      <p class=" md:text-2xl text-2xl ">Register from Paksitan hajj organization</p>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      hidden: true,
      reset_h: 0,
      words: [
        "WellCome to Wali hajj services",
        "Enrollment number: 5115",
        "We offer hajj and umrah",
        "18 Years Experiance of hajj manamgment",
        "Contact Number: 03003823655 & 03003829155",
        "Address :  Sardar Wali Plaza New Truck Adda ,Near Satellite Pearl Institut Town, Quetta ,Balochistan ",
      ],
      part: "",
      i: 0,
      offset: 0,
      len: 0,
      forwards: true,
      skip_count: 0,
      skip_delay: 50,
      speed: 70
    };
  },
  mounted() {
    this.len = this.words.length;
    this.wordflick();
  },
  methods: {
    toggleNav() {
      this.hidden = !this.hidden; // toggle the state of the navbar

      if (this.reset_h == 0) {
        this.$refs.w_min.style.height = "40%";
        this.reset_h = 1;
      } else {
        this.$refs.w_min.style.height = "80%";
        this.reset_h = 0;

      }
    },
    wordflick() {
      setInterval(() => {
        if (this.forwards) {
          if (this.offset >= this.words[this.i].length) {
            ++this.skip_count;
            if (this.skip_count == this.skip_delay) {
              this.forwards = false;
              this.skip_count = 0;
            }
          }
        } else {
          if (this.offset == 0) {
            this.forwards = true;
            this.i++;
            this.offset = 0;
            if (this.i >= this.len) {
              this.i = 0;
            }
          }
        }
        this.part = this.words[this.i].substr(0, this.offset);
        if (this.skip_count == 0) {
          if (this.forwards) {
            this.offset++;
          } else {
            this.offset--;
          }
        }
      }, this.speed);
    }
  },

};
</script>

<style scoped></style>
