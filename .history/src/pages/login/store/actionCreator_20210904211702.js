import axios from "axios";
import * as constants from './constants'

const changeLogin=()=>({
    type:
})

export const login =(account,password)=>{
    return (dispatch) =>{
        axios.get('get/login.json?account='+account+'&password='+password).then((res)=>{
            const result=res.data.data;
            if(result){
                dispatch()
            }else{
                alert('log in unsuccess')    
            }
        })
    }
}