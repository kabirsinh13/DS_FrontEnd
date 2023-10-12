import {createRouter, createWebHistory} from 'vue-router'

import PostView from './components/PostView.vue'
import  LoginView from './components/LoginView.vue'
import SignupView from './components/SignupView.vue'
import CreatePost from './components/CreatePost.vue'
import MyPost from './components/MyPost.vue'

const router = new createRouter({
    "history":createWebHistory(),
    "routes":[
       {path:'/',component:PostView},
       {path:'/login',component:LoginView},
       {path:'/signup',component:SignupView},
       {path:'/upload',component:CreatePost},
       {path:'/mypost',component:MyPost}
    ]
})


export{router}