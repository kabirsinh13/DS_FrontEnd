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
      <v-btn
        class="ma-2"
        variant="text"
        icon="mdi-thumb-up"
        :color="buttonColor"
        @click="like"
        outlined
      ></v-btn>
      <v-card-text>
        <div>PostedBy: {{ user }}</div>
        <div>Title: {{ title }}</div>
        <div>Description: {{ Description }}</div>
      </v-card-text>
        <v-textarea
          prepend-inner-icon="mdiThumb"
          label="Type your comments here"
        ></v-textarea>
        <user-comment></user-comment>
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
        click:false
  
       }
    },
    computed:{
    img(){
        const imageData = this.post.file[0].buffer.toString('base64')
        return `data:image/jpeg;base64,${imageData}`
        }
    },
    async created(){
        const result = await fetch("http://localhost:3000/postbyid",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(
                {id:this.id}
            )

        })
        const responseData = await result.json()
        this.post = responseData
        console.log(this.post)
    },
    methods:{
      like(){
        this.click=!this.click
        this.buttonColor =this.click ? 'blue-lighten-2': ''
      }
    }
}


</script>


<style scoped>

.container{

  display:flex
}

</style>