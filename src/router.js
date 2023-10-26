import {createRouter, createWebHistory} from 'vue-router'

import {store} from './store/index.js'
 
import PostView from './components/PostView.vue'
import  LoginView from './components/LoginView.vue'
import SignupView from './components/SignupView.vue'
import CreatePost from './components/CreatePost.vue'
import MyPost from './components/MyPost.vue'
import ExplorePost from './components/ExplorePost.vue'
import NotFound from './components/NotFound.vue'
import UserAccount from './components/ShowUserAccount.vue'
import ShowLikedPost from './components/ShowLikedPost.vue'

const router = new createRouter({
    "history":createWebHistory(),
    "routes":[
       {path:'/',component:PostView},
       {path:'/login',component:LoginView},
       {path:'/signup',component:SignupView},
       {path:'/upload',component:CreatePost,meta:{requireAuth:true}},
       {path:'/mypost',component:MyPost,meta:{requireAuth:true}},
       {path:'/explorepost/:id',component:ExplorePost,props:true,meta:{requireAuth:true}},
       {path:'/myaccount',component:UserAccount,meta:{requireAuth:true}},
       {path:'/likedpost',component:ShowLikedPost,meta:{requireAuth:true}},
       {path: '/:notFound(.*)',component:NotFound}
    ]
})

router.beforeEach((to,from,next)=>{
    if(to.meta.requireAuth && !store.getters.isAuthenticated){
        next('/login')
    }
    else{
        next()
    }
})


export {router}