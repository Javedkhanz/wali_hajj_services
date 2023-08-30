// router.js
import { createRouter, createWebHistory } from 'vue-router'

import NavBar from './components/NavBar.vue'
import CardView from './components/CardView.vue'
import Services from './components/Services.vue'
import AboutUs from './components/AboutUs.vue'
import Contact_Loaction from './components/Contact_Loaction.vue'
import Foot from './components/Foot.vue'


const routes = [
    { path: '/', name: 'NavBar', component: NavBar },
    { path: '/Card-View', name: 'CardView', component: CardView },
    { path: '/Services', name: 'Services', component: Services },
    { path: '/About-Us', name: 'AboutUs', component: AboutUs },
    { path: '/Contact-Loaction', name: 'Services', component: Contact_Loaction },
    { path: '/Footer', name: 'Foot', component: Foot },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})
router.beforeEach((to, from, next) => {
    // Call your function here
    yourFunction(to);
  
    // Continue with the navigation
    next();
});
export default router
