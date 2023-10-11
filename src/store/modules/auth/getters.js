export default{
    getUserId(state){
        return state.id;
    },
    isAuthenticated(state){
        return !!state.token
    }
}