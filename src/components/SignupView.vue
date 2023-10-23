<template>
    <base-card>
    <v-sheet width="300" class="mx-auto" >
        <v-form @submit.prevent="formSubmit" v-model="form">
            <v-text-field
            :rules="nameRules"
            label="Name"
          ></v-text-field>
            <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            type="password"
          ></v-text-field>
          <v-text-field
            v-model="age"
            :rules="ageRules"
            label="Age"
            type="number"
          ></v-text-field>
          <v-btn type="submit" block class="mt-2" bg :disabled="!form">SignUp</v-btn>
        
        </v-form>
      </v-sheet><br>
      <div style="text-align: center;">
  <p style="display: inline; color: rgb(118,118,118);">Already have an account?</p>
  <router-link to='/login' style="text-decoration: none;"> Login</router-link>
</div>
    
    </base-card>
    </template>
    
    
    
    <script>

    export default{
      data(){
        return {
          form:false,
          name:null,
          nameRules:[
            (value)=>{
              if(value) {
                this.name = value
                return true
              }
              return "Please enter your name"
            }
          ],
          email: null,
          emailRules: [
            value => {
              if (value && /^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) 
              return true

              return 'Please enter a valid email.'
            },
          ],
          password: null,
          passwordRules:[
             value => {
               if (value ){
                  if(value.length>7)
                  return true
               else 
                return "password length must be greater than 7"
            }

            return 'You must enter your password'
            }
          ],
          age:null,
          ageRules:[
            value =>{
              if(value) return true

              return "please enter your age"
            }
          ]

        }
      },
      methods:{
        async formSubmit(){

          await this.$store.dispatch('signupUser',{
              name:this.name,
              email:this.email,
              password:this.password,
              age:this.age
            })
        }
      }
    }
    
    </script>
    
    
    <style scoped>
    .v-btn.v-btn--density-default {
    background-color: #3d008d;
    color:white
}
    
    </style>