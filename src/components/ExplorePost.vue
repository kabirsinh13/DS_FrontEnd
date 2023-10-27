<template>
   <base-card v-if="post!==null">
   <v-img 
      cover 
      :src="img">
      <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
    </v-img>
    <div class="container">
      <div class="ele1"><v-btn
        class="ma-2"
        variant="text"
        icon="mdi-thumb-up"
        :color="buttonColor"
        @click="like"
        outlined
      ></v-btn></div>
      <div class="elem2"><v-text>{{ likeCount }}</v-text></div>
      <div class="elem3"><p><b>Views:</b> {{ viewCount }}</p></div>
    </div>
      
      <v-card-text>
        <div><b>PostedBy:</b> {{ post.postedBy.name }}</div>
        <div><b>Title:</b> {{ post.title }}</div>
        <div><b>Description:</b> {{ post.description }}</div>
      </v-card-text>
      <form @submit.prevent="addComment">
        <v-textarea
          append-inner-icon="mdi-comment"
          label="Type your comments here"
          v-model="inputComments"
        ></v-textarea>
        <v-btn type="submit">Submit</v-btn>
      </form><br>
       
        <user-comment :comments=postComments></user-comment>
  </base-card>



  

</template>

<script>

import UsersComment from './UsersComment.vue'

export default{

  components:{
     'user-comment': UsersComment
  },

    props:['id'],
    data(){
       return {
        post:null,
        buttonColor:'',
        click:null,
        inputComments:'',
        postComments:'',
        likeCount:0,
        token:null,
        viewCount:0
  
       }
    },
    computed:{
    img(){
        const imageData = this.post.file[0].buffer.toString('base64')
        return `data:image/jpeg;base64,${imageData}`
        }
    },
    async created(){
        // console.log(this.$store.getters.getUserName)
        this.token =  this.$store.getters.getToken
        const result = await fetch("http://localhost:3000/postbyid",{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'authorization':`Bearer ${this.token}`
            },
            body:JSON.stringify(
                {id:this.id}
            )

        })


        const responseData = await result.json()

        this.likeCount = responseData.likedBy.length
        this.viewCount = responseData.viewedBy.length
        this.post = responseData
        this.postComments = responseData.commentsBy
        this.click=this.$store.getters.islikeOrNot
        const checkLike = await fetch("http://localhost:3000/getLike",{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
            'authorization':`Bearer ${this.token}`
          },
          body:JSON.stringify({
            userid:this.$store.getters.getUserId,
            postid:this.post._id
          })
        })
        const response = await checkLike.json()
        if(response){
          this.buttonColor = 'blue-lighten-2'
          this.click=true
        }
        else{
          this.buttonColor=''
          this.click=false
        }

        const checkView = await fetch("http://localhost:3000/getView",{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
            'authorization':`Bearer ${this.token}`
          },
          body:JSON.stringify({
            userid:this.$store.getters.getUserId,
            postid:this.post._id
          })
        })
        const viewResult = await checkView.json()
        if(!viewResult){
          this.viewCount++
        }
    },
    methods:{
      async like(){
        this.click=!this.click
        this.buttonColor =this.click ? 'blue-lighten-2': ''
        if(this.click){
          await fetch("http://localhost:3000/likepost",{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
              'authorization':`Bearer ${this.token}`
            },
            body:JSON.stringify(
              {
                userid:this.$store.getters.getUserId,
                userName:this.$store.getters.getUserName,
                postid:this.post._id,
                isLike:true
              }
            )
          })
          this.$store.dispatch('likeStatus',{like:this.click})
          this.$router.go()
        }
        else{
          await fetch("http://localhost:3000/unlikepost",{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
              'authorization':`Bearer ${this.token}`
            },
            body:JSON.stringify(
              {
                userid:this.$store.getters.getUserId,
                postid:this.post._id
              }
            )
          })
          this.$store.dispatch('likeStatus',{like:this.click})
          this.$router.go()
        }
        
      },
     async addComment(){
         const commentData = {
          postid : this.post._id,
          userid : this.$store.getters.getUserId,
          contents:this.inputComments,
          userName : this.$store.getters.getUserName
         }
         await fetch("http://localhost:3000/postcomment",{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
              'authorization':`Bearer ${this.token}`
            },
            body:JSON.stringify(commentData)
         })
         this.$router.go()
      }
    }
}


</script>


<style scoped>

.container{

  display:flex;
  align-items: baseline;

  
}

.elem3{
  flex-grow: 3;
  text-align: right;
}


</style>