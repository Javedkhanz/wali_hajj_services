<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

</script>

<template id="services">
  <!-- <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://source.unsplash.com/random" alt=""> -->

  <div class="container mt-32 mx-auto p-4 md:p-0 my-3">

    <!-- Card wrapper -->
    <div class="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">

      <!-- Card image -->
      <div class="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
        style="background-image:url('/bg2.jpg') ; background-position: center;">
        <div class="absolute text-xl">
          <i class="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
        </div>
      </div>
      <!-- ./Card image -->

      <!-- Card body -->
      <div class="bg-white w-full md:w-2/3">
        <!-- Card body - outer wrapper -->
        <div class="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
          <!-- Card body - inner wrapper -->
          <div
            class="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
            <!-- Card title and subtitle -->
            <div class="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
              <h3>Hajj Packege</h3>
              <p class="mb-0 mt-3 text-grey-dark text-sm italic">2023 to 2023 </p>
              <hr class="w-1/4 md:ml-0 mt-4  border lg:hidden">
            </div>
            <!-- ./Card title and subtitle -->

            <!-- Card description -->
            <div class="w-full lg:w-3/5 lg:px-3">
              <p class="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                Our 2023 Hajj package with Wali Hajj Services includes a comprehensive range of services to ensure a
                comfortable and fulfilling pilgrimage experience. We offer accommodation, daily meals, transportation to
                and from sacred sites, guided tours, and assistance with all essential aspects of the Hajj journey. Join
                us for a worry-free pilgrimage where we take care of all your logistical needs, allowing you to focus on
                the spiritual significance of this sacred journey.
              </p>
            </div>
            <!-- ./Card description -->

            <!-- Call to action button -->
            <div class="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
              <button
                class="bg-white hover:bg-grey-darker hover:text-red-600 border border-solid border-grey w-1/3 lg:w-full py-2">BOOK NOW</button>
            </div>
            <!-- ./Call to action button -->
          </div>
          <!-- ./Card body - inner wrapper -->
        </div>
        <!-- ./Card body - outer wrapper -->
      </div>
      <!-- ./Card body -->
    </div>
    <!-- ./Card wrapper -->
  </div>
  <!-- ./Container end --></template>

<style scoped></style>
