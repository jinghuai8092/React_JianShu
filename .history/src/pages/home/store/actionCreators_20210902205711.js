import axios from 'axios';
import * as constants from './constants'
import { fromJS } from 'immutable';

const changeHomeData=(result)=>({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    recommendList: result.recommendList,
    articleList: result.articleList,
    writerList:result.writerList

})
const addHomeList=(list)=>({
    type:constants.ADD_ARTICLE_LIST,
    list:fromJS(list)
})

export const getHomeInfo =()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        })
    }
}

export const getMoreList=(page)=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json').then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result));
        })
    }
}