import {createRouter, createWebHistory} from 'vue-router'

import PostView from './components/PostView.vue'
import  LoginView from './components/LoginView.vue'



const router = new createRouter({
    "history":createWebHistory(),
    "routes":[
       {path:'/',component:PostView},
       {path:'/login',component:LoginView}
    ]
})


export{router}