import axios from "axios";
export const login =(account,password)=>{
    return (dispatch) =>{
        axios.get('get/login.json?account='+account+'&password='+password).then((res)=>{
            const result=res.data.data;
            if(result){

            }else{
                alert('log in unsuccess')    
            }
        })
    }
}