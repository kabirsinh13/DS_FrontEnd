<template>

  <v-card class="mx-auto mt-10" style="max-width: 500px;">
    <v-toolbar color="deep-purple accent-4"> <v-toolbar-title>Create Post</v-toolbar-title></v-toolbar>
    <v-form @submit.prevent="formSubmit" class="pa-4 pt-6" v-model="form">
        <v-text-field 
          v-model="title"
          :rules="titleRules"
          label="Title"
        ></v-text-field>
        <v-textarea
            name="input-7-1"
            variant="filled"
            label="Description"
            v-model="description"
            auto-grow
            :rules="descriptionRules"
        ></v-textarea>

        <v-file-input
          accept="image/*"
          label="Upload Image"
          prepend-icon="mdi-camera"
          :rules="imageRules"
          v-model="image"
        ></v-file-input>
        <v-btn
        type="submit"
        :disabled="!form"
        :loading="loading"
        block
        class="text-none mb-4"
        color="deep-purple accent-4"
        size="x-large"
        variant="flat"
       > Upload </v-btn>
        <!-- <div class="text-center"><base-button>Upload</base-button></div> -->
        
    </v-form>
</v-card>


</template>


<script>
export default{
    data(){
        return {
            form:false,
            loading:false,
            
            title:"",
            titleRules:[
                (value)=> {
                    if(value) return true

                    return "title cannot be emty"
                }
            ],
            description:'',
            descriptionRules:[
                (value)=>{
                    if(value) return true

                    return "description cannot be empty"
                }
            ],
            image:[],
            imageRules:[
                (value)=>{
                    return  !value || !value.length || value[0].size < 8000000 || 'Image size should be less than 2 MB!'
                }
            ],
            token:null
        }
    },
    created(){
      this.token = this.$store.getters.getToken
    },
    methods:{
        async formSubmit(){
           this.loading=!this.loading
        //    console.log(this.title, this.description)
           const formdata = new FormData() 
           console.log(this.image[0])

           formdata.append('title',this.title)
           formdata.append('description',this.description)
           formdata.append('postedBy',this.$store.getters.getUserId)
           formdata.append('photos',this.image[0])
        

         await fetch('http://localhost:3000/createpost',{
            method:'POST',
            headers:{
                'authorization':`Bearer ${this.token}`
            },
          
            body:formdata
         })
         this.loading = false;
         this.title="",
         this.description="",
         this.image=[]
        //  this.$router.go()  it will refresh the current route 
        }
    },
    watch:{
        loading(val){
            if (!val) return}
    }
}

</script>

