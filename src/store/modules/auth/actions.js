let timer;
export default{
    likeStatus(context,payload){
        context.commit('setLike',payload)
    },
    setUserName(context,payload){
        context.commit('addUserName',payload)
    },

    async loginUser(context,payload){
        const response = await fetch('http://localhost:3000/user/login',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    email:payload.email,
                    password:payload.password
                })
            })
            const responseData = await response.json()

            const expiresIn = 3600000;
            const expirationDate = new Date().getTime() + expiresIn

            timer = setTimeout(()=>{
                context.dispatch('logout')
             },expiresIn)


            // store id and token on browser local storage
            localStorage.setItem('token',responseData.token)
            localStorage.setItem('id',responseData.user._id)
            localStorage.setItem('expiresIn',expirationDate)
            localStorage.setItem('userName',responseData.user.name)
            localStorage.setItem('email',responseData.user.email)
            localStorage.setItem('age',responseData.user.age)
            console.log(responseData.user.postCount)
            context.dispatch('setUser',{
              id:responseData.user._id,
              token:responseData.token,
            })

            context.commit("user/saveUserData",{
                postCount:responseData.user.postCount,
                userName:responseData.user.name,
                userEmail:responseData.user.email,
                userAge:responseData.user.age,
            },{root:true})
    },

    async signupUser(context,payload){
        await fetch('http://localhost:3000/user/signup',{
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
              name:payload.name,
              email:payload.email,
              password:payload.password,
              age:payload.age
            })
          })

          // const responseData = await response.json()


          window.location.href='/login'
    },

    async logout(context){
        //remove id and token browser local storage
        const token = context.getters.getToken
       
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        localStorage.removeItem('expiresIn')
        localStorage.removeItem('userName')
        localStorage.removeItem('email'),
        localStorage.removeItem('age')

        clearTimeout(timer)
        
        context.commit('logoutUser')

        window.location.href='/'

        await fetch("http://localhost:3000/user/logout",{
            method:'POST',
            headers:{
                'authorization':`Bearer ${token}`
              },
        })
    },

    tryLogin(context){
        const token = localStorage.getItem('token')
        const id =localStorage.getItem('id')
        const expiresIn = localStorage.getItem('expiresIn')
        const userName = localStorage.getItem('userName')
        const userEmail = localStorage.getItem('email')
        const userAge = localStorage.getItem('age')
        const tokenExpiresIn = +expiresIn - new Date().getTime();
        if(tokenExpiresIn < 0){
            return 
        }

        timer = setTimeout(()=>{
            context.dispatch('logout')
        },tokenExpiresIn)



        if(token && id){
            context.dispatch('setUser',{
                id,
                token
            })
            context.commit("user/saveUserData",
            {
            userName,
            userEmail,
            userAge,
            },
            {root:true})

        }
        
    },
    setUser(context,payload){
        context.commit('loginUser',payload)
    },
}