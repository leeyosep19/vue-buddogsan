// import AddressWithMap from "@/components/AddressWithMap.vue";


// @/router/index.js

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
// { 
// path: "/address-map", 
// name: "AddressWithMap",
//  component: AddressWithMap 
// },

{
path: "/",
name: "home",
component: HomeView,
},

{
path: "/about",
name: "about",
component: () => import("../views/AboutView.vue"),
},

{
path: '/login',
name: 'login',
component: () =>import("../views/LoginView.vue"),
 },

 {
    path: '/login/accession',
    name: 'accession',
    component: () =>import("../views/accession/AccessionView.vue"),
     },
    
 {
    path: '/login/agreement',
    name: 'agreement',
     component: () =>import("../views/accession/AgreementView.vue"),
     },

     
];

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes,

});



export default router;