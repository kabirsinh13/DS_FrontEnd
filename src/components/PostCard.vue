<template>
    <v-card
      class="mx-auto"
      max-width="400"
    >
      <v-img
        class="align-end text-white bg-grey-lighten-2"
        height="200"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        :src="imgsrc"
        cover
       
      >
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
      
        <v-card-title>{{ title }}</v-card-title>
      </v-img>
  
      <v-card-subtitle class="pt-4">
        Number 10
      </v-card-subtitle>
  
      <v-card-text>
        <!-- <div>title:{{ title }}</div> -->
  
        <div>{{ description }}</div>
      </v-card-text>
  
      <v-card-actions>
        <v-btn color="orange">
          Share
        </v-btn>
  
        <v-btn color="orange" @click="explorePost">
          Explore
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>

<script>

export default{
  props:['title','description','image','id'],
  data(){
     return {
      imgsrc:null
     }
  },
  created(){
    const imageData = this.image[0].buffer.toString('base64')
    this.imgsrc = `data:image/jpeg;base64,${imageData}`
  },
  methods:{
    explorePost(){
      this.$router.push('/explorepost/'+ this.id)
    }
  }

}


</script>