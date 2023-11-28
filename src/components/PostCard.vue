<!-- <template> -->
    <!-- <v-card
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
        <div>title:{{ title }}</div> -->
  
        <!-- <div>{{ description }}</div>
      </v-card-text>
  
      <v-card-actions>
        <v-btn color="orange">
          Share
        </v-btn>
  
        <v-btn color="orange" @click="explorePost">
          Explore
        </v-btn>
      </v-card-actions>
    </v-card> -->
  <!-- </template> --> 

  <template>
  <div>
    <v-hover v-slot="{ isHovering, props }">
      <v-card
        class="mx-auto"
        max-width="344"
        v-bind="props"
      >
        <v-img
          :src="imgsrc" max-height="12rem">
        </v-img>

        <v-card-text>
          <h2 class="text-h6 text-primary">
            {{ title }}
          </h2>
          {{description.substring(0,120) + '...'}}
          <!-- {{description.}} -->
        </v-card-text>

        <v-card-title>
          <v-rating
            :model-value="calculateAverageRating"
             dense
            color="orange"
            background-color="orange"
            hover
            class="me-2"
            readonly
          ></v-rating>
          <span class="text-primary text-subtitle-2">{{ totalRating }} Reviews</span>
        </v-card-title>

        <v-overlay
          :model-value="isHovering"
          contained
          scrim="#036358"
          class="align-center justify-center"
        >
          <v-btn variant="flat" @click="explorePost">See more info</v-btn>
        </v-overlay>
      </v-card>
    </v-hover>
  </div>
</template>

<script>

export default{
  props:['title','description','image','id','allrate'],
  data(){
     return {
      imgsrc:null,
      totalRating:this.allrate.length
     }
  },
  computed:{
    calculateAverageRating(){
      if(this.allrate.length===0)
      return 0
      const totalRating =  this.allrate.reduce((acc,ele)=>{
              return acc+ele.rate
      },0)
      return Math.round(totalRating/this.allrate.length)
    },
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