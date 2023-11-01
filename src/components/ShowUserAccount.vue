<template>
    
   <base-card>
   <div class="d-flex justify-end pb-10">
    <base-tooltip text= "Edit your profile" location="top">
    <v-btn variant="text" @click="isediting=!isediting">
    <v-icon >{{"mdi-pencil"}}</v-icon>
   </v-btn>
    </base-tooltip>
   
   </div>
   <div class="d-flex justify-center mb-2">
    <v-avatar size="60">
        <v-img :src="profilePic" cover>
            <div v-if="isediting" class="d-flex align-center justify-center" style="height: 100%;" >       
             <v-file-input ref="uploader" class="d-none" type="file" accept="image/*" @change="onFileChanged"></v-file-input>
             <base-tooltip text="change your pic" location="top"><v-btn @click="onButtonClick" variant="text"><v-icon>{{ "mdi-camera" }}</v-icon></v-btn></base-tooltip>
            </div> 
        </v-img>
    </v-avatar>
        </div>
   
     <v-divider></v-divider>
     <template v-if="!isediting">
        <div>Name: {{ userName }}</div>
     <div>Email: {{ userEmail }}</div>
     <div>Age: {{ userAge }}</div>
     <div>Uploaded Post: <router-link style="text-decoration: none;" to='/mypost'>{{ postCount }}</router-link></div>
     <div>Post Liked: <router-link style="text-decoration:none;" to="/likedpost">{{ likedPostCount }}</router-link></div>
     </template>
     <template v-else>
        <v-form v-model="form" @submit.prevent="saveProfile"> 
            <v-text-field
               label="name"
               v-model="editedName"
               :rules="nameRule"

            ></v-text-field>
            <v-text-field 
               label="age"
               v-model="editedAge"
               :rules="ageRule"
               type="number"
            ></v-text-field>
            <div class="d-flex justify-center">
                <v-btn color="primary" type="submit" :disabled="!form">Save</v-btn>
            </div>
        </v-form>
       
     </template>
    
   </base-card>


</template>

<script>


export default{
    data(){
        return {
            form:false,
            selectedfile:null,
           likedPostData:[],
           isediting:false,
           editedName:null,
           profilePic:"https://ui-avatars.com/api/?name=&&rounded=true",
           nameRule:[
            (value)=>{
                if(value)
                return true
                return "Please enter your name"
              }
              
           ],
           editedAge:null,
           ageRule:[
            (value)=>{
                if(value && value>0) return true

                return "please enter your age"
            }
           ]
        }
    },
    
    computed:{
        userName(){
            return this.$store.state.user.userName;
        },
        userAge(){
            return this.$store.state.user.userAge
        },
        userEmail(){
            return this.$store.state.user.userEmail
        },
        postCount(){
            return this.$store.state.user.postCount
        },
        likedPostCount(){
            return this.$store.state.user.likeCount
        }
    },
   async created(){
    this.profilePic = localStorage.getItem('profilePic')
         await  this.$store.dispatch('user/getlikeCount')
         await  this.$store.dispatch('user/getpostCount')
    },
    methods:{
        onButtonClick(){
        //     this.isSelecting = true;
        //     window.addEventListener(
        //        "focus",
        //         () => {
        //           this.isSelecting = false;
        //         },
        //         { once: true }
        // );

               this.$refs.uploader.click();
       },
       onFileChanged(e){
        this.selectedfile = e.target.files[0]
       },
       async saveProfile(){
          const token = this.$store.getters.getToken
          const userData = new FormData()
          userData.append('name',this.editedName)
          userData.append('age',this.editedAge)
          if(this.selectedfile!==null){
          userData.append('profilePic',this.selectedfile)
          this.selectedfile=null
          }

         const result =  await fetch("http://localhost:3000/user/updateuser",{
            method:'POST',
            headers:{
    
                'authorization':`Bearer ${token}`

            },
            body:userData
            
          })
          const profileImage =await result.json()

          if(profileImage){
            const imageData = profileImage.buffer.toString('base64')
            this.profilePic  = `data:image/jpeg;base64,${imageData}`
            
          }
          
          this.$store.commit('user/updateUserProfile',{name:this.editedName,age:this.editedAge,profilePic:this.profilePic})
          this.isediting = false;

          
       }
    },
}

</script>

<style scoped>

div{
    font-weight: bold;
}

</style>