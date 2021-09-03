import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList:[{
        id:1,
        title:"Social News",
        imgUrl:'http://pic.616pic.com/ys_b_img/00/44/76/IUJ3YQSjx1.jpg'
    },{
        id:2,
        title:"Drawing",
        imgUrl:'http://pic.616pic.com/ys_b_img/00/44/76/IUJ3YQSjx1.jpg'
    }],
    articleList:[{
        id:1,
        title:"This is the Title one",
        desc:'This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. ',
        
    }]
});

export default (state = defaultState, action) => {
    switch (action.type) {
    
        default:
            return state;
    }
}