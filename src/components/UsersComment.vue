<template>
    <v-card
      class="mx-auto"
      max-width="640"
      max-height="200"
    >
      <v-card-item class="bg-orange-darken-4">
        <v-card-title>
          All comments
        </v-card-title>
  
        <!-- <template v-slot:append>
          <v-btn
            color="white"
            icon="mdi-plus"
            size="small"
          ></v-btn>
        </template> -->
      </v-card-item>
  
      
  
      <v-divider></v-divider>
  
      <v-virtual-scroll
        :items="items"
        height="300"
        item-height="50"
      >
        <template v-slot:default="{ item }">
          <v-list-item>
            <template v-slot:prepend>
              <v-avatar
                :color="item.color"
                class="text-white"
                size="40"
              >
                {{ item.initials }}
              </v-avatar>
            </template>
  
            <v-list-item-title>{{ item.fullName }}:{{ item.comment }}</v-list-item-title>
  
            <!-- <template v-slot:append>
              <v-btn
                size="small"
                variant="tonal"
              >
                View User
  
                <v-icon
                  color="orange-darken-4"
                  end
                >
                  mdi-open-in-new
                </v-icon>
              </v-btn>
            </template> -->
          </v-list-item>
        </template>
      </v-virtual-scroll>
    </v-card>
  </template>
  <script>
    export default {
      props:['comments'],
      data: () => ({
        colors: ['#2196F3', '#90CAF9', '#64B5F6', '#42A5F5', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1', '#82B1FF', '#448AFF', '#2979FF', '#2962FF'],
        names: [],
        surnames: [],
      }),
  
      computed: {
        items () {
          console.log(this.comments)
          const commentsLength = this.comments.length
          const colorsLength = this.colors.length
          return Array.from({ length:commentsLength}, (v,id) => {
            const name = this.comments[id].comments.userName
            const comment = this.comments[id].comments.contents
            console.log(name,comment)
            // const surname = this.surnames[this.genRandomIndex(surnamesLength)]
  
            return {
              color: this.colors[this.genRandomIndex(colorsLength)],
              fullName: `${name}`,
              initials: `${name[0]}`,
              comment: `${comment}`
            }
          })
        },
      },
  
      methods: {
        genRandomIndex (length) {
          return Math.ceil(Math.random() * (length - 1))
        },
      },
    }
  </script>