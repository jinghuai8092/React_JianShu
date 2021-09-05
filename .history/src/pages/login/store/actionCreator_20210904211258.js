export const login =(account,password)=>{
    return (dispatch) =>{
        axios.get('get/login?account='+account+'&password='+password)
    }
}