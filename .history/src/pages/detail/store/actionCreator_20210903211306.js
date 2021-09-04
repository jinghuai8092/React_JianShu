import axios from "axios"

export const getDetail=()=>{
    return (dispatch)=>{
        axios.get('/api/detail.json').then((res)=>{
            const result=res.data.data;
            dispatch(changeDetail())
        })
    }
}