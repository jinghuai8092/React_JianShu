import axios from "axios";
import * as constants from './constants'

const changeLogin=(value)=>({
    type:constants.CHANG_LOGIN,
    value:true
})

export const logout =>({
    
})

export const login =(account,password)=>{
    return (dispatch) =>{
        axios.get('api/login.json?account='+account+'&password='+password).then((res)=>{
            const result=res.data.data;
            if(result){
                dispatch(changeLogin())
            }else{
                alert('log in unsuccess')    
            }
        })
    }
}