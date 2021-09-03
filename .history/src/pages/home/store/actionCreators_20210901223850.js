export const getHomeInfo =()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            const action = {
                type: 'change_home_data',
                topicList: result.topicList,
                recommendList: result.recommendList,
                articleList: result.articleList,
            }
            dispatch(action);

        })
    }
}