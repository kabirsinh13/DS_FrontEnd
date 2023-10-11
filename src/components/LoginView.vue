
<template>
<div class='card'>
<v-sheet width="300" class="mx-auto" >
    <v-form @submit.prevent="formSubmit">
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
      <v-btn type="submit" block class="mt-2">Login</v-btn>
    </v-form>
  </v-sheet><br>

<div style="text-align: center;">
  <p style="display: inline; color: rgb(118,118,118);">Not signed up yet?</p>
  <router-link to='/signup' style="text-decoration: none;"> SIGN UP NOW</router-link>
</div>
</div>
  
</template>
<script>
  export default {
    data: () => ({
      email: '',
      emailRules: [
        value => {
          if (value && /^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) 
            return true

          return 'Please enter a valid email.'
        },
      ],
      password: '',
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
      ]

    }),
    methods:{
        async formSubmit(){
        
            const response = await fetch('http://localhost:3000/user/login',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    email:this.email,
                    password:this.password
                })
            })
            const responseData = await response.json()
            console.log(responseData)
            
            this.$store.dispatch('setUser',{
              id:responseData.user._id,
              token:responseData.token
            })

        //  console.log(   this.$store.getters.getToken)

        }
    }
  }
</script>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}

.v-btn.v-btn--density-default {
    background-color: #3d008d;
    color:white
}

</style>