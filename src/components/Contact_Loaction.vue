<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

</script>

<template id="contact">
  <!-- A section with a contact form and a map -->
  <section class="py-16 bg-gray-100">
    <div class="container mx-auto px-8">
      <h3 class="text-3xl font-bold text-gray-800 text-center mb-8">Contact Us</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- A column with a contact form -->
        <div class="p-4 bg-white rounded-lg shadow-lg">
          <form>

            <form @submit.prevent="sendEmail" ref="form">
              <!-- A field for the name -->
              <div class="mb-4">
                <label for="name" class="block text-gray-600 font-medium">Name</label>
                <input type="text" id="user_name" name="user_name" v-model="name" placeholder="Enter your name" required
                  class="w-full border border-gray-300 rounded-lg py-2 px-4 mt-2 focus:outline-none focus:ring-green-600 focus:border-green-600">
              </div>
              <!-- A field for the email -->
              <div class="mb-4">
                <label for="email" class="block text-gray-600 font-medium">Email</label>
                <input type="email" id="user_email" name="user_email" v-model="email" placeholder="Enter your email"
                  required
                  class="w-full border border-gray-300 rounded-lg py-2 px-4 mt-2 focus:outline-none focus:ring-green-600 focus:border-green-600">
              </div>
              <!-- A field for the message -->
              <div class="mb-4">
                <label for="message" class="block text-gray-600 font-medium">Message</label>
                <textarea id="message" v-model="message" placeholder="Enter your message" required
                  class="w-full border border-gray-300 rounded-lg py-2 px-4 mt-2 h-32 resize-none focus:outline-none focus:ring-green-600 focus:border-green-600"></textarea>
              </div>
              <!-- A submit button -->
              <div class="mb-4">
                <button type="submit" id="submit"
                  class="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">{{ btnText }}</button>
              </div>
            </form>

          </form>
        </div>
        <!-- A column with a map showing the company location -->
        <div class="p-4 bg-white rounded-lg shadow-lg">
          <!-- An iframe with the Google Maps embed code -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.4267121189637!2d66.99829077532479!3d30.16780241271587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed2de018f1c2051%3A0xbda72553219c6d70!2sWali%20Hajj%20Services%20Company%20Pvt%20Ltd!5e0!3m2!1sen!2s!4v1693300083563!5m2!1sen!2s"
            width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>


        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      btnText: 'Send Message',
    };
  },
  methods: {
    sendEmail() {
      emailjs.init('4Qzdn7TZfTwibdQUd');
      this.btnText = 'Sending...';


      
      emailjs.send("service_gafse82", "template_bwfwext", {
        user_name: this.name,
        message: this.message,
        user_email: this.message,
      });

      this.btnText = 'Message sended';
    },
  },
};
</script>
<style scoped></style>


    