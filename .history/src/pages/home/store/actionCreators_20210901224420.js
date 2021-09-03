import axios from 'axios';
import * as constants from './constants'

const changeHomeData=(result)=>({
    type: 'change_home_data',
    topicList: result.topicList,
    recommendList: result.recommendList,
    articleList: result.articleList,

})

export const getHomeInfo =()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            const action = changeHomeData(result)
            dispatch(action);

        })
    }
}