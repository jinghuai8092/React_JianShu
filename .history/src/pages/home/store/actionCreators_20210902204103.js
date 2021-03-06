import axios from 'axios';
import * as constants from './constants'

const changeHomeData=(result)=>({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    recommendList: result.recommendList,
    articleList: result.articleList,
    writerList:result.writerList

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

export const getMoreList=()=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json').then((res) => {
            const result = res.data.data;
            const action = changeHomeData(result)
            dispatch(action);
        })
    }
}