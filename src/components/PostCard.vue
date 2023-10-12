<template>
    <v-card
      class="mx-auto"
      max-width="400"
    >
      <v-img
        class="align-end text-white"
        height="200"
        :src="imageSource"
        cover
      >
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
  
        <v-btn color="orange">
          Explore
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>

<script>

export default{
  props:['title','description','image'],
  computed:{
    imageSource(){
      console.log(this.image[0])
      const imageData = this.image[0].buffer.toString('base64')
      return `data:image/jpeg;base64,${imageData}`
      // return ""
    }
  }

}


</script>