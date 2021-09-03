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
        imgUrl:'https://img95.699pic.com/photo/40007/4125.jpg_wh300.jpg'
    },{
        id:2,
        title:"This is the Title two",
        desc:'This the content two. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. ',
        imgUrl:'https://img95.699pic.com/photo/40007/4125.jpg_wh300.jpg'
    },
    {
        id:3,
        title:"This is the Title three",
        desc:'This the content three. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. ',
        imgUrl:'https://img95.699pic.com/photo/40007/4125.jpg_wh300.jpg'
    },
    {
        id:4,
        title:"This is the Title four",
        desc:'This the content four. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. ',
        imgUrl:'https://img95.699pic.com/photo/40007/4125.jpg_wh300.jpg'
    }
]
});

export default (state = defaultState, action) => {
    switch (action.type) {
    
        default:
            return state;
    }
}