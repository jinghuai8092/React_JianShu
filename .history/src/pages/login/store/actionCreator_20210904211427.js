import axios from "axios";
export const login =(account,password)=>{
    return (dispatch) =>{
        axios.get('get/login.json?account='+account+'&password='+password).then((res)=>{

        })
    }
}