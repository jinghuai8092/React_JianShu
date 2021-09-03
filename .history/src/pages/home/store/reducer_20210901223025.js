import { fromJS } from 'immutable';

const defaultState = fromJS({
//     topicList: [{
//         id: 1,
//         title: "Social News",
//         imgUrl: 'http://pic.616pic.com/ys_b_img/00/44/76/IUJ3YQSjx1.jpg'
//     }, {
//         id: 2,
//         title: "Drawing",
//         imgUrl: 'http://pic.616pic.com/ys_b_img/00/44/76/IUJ3YQSjx1.jpg'
//     }],
//     articleList: [{
//         id: 1,
//         title: "This is the Title one",
//         desc: 'This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. ',
//         imgUrl: 'https://img95.699pic.com/photo/40007/4125.jpg_wh300.jpg'
//     }, {
//         id: 2,
//         title: "This is the Title two",
//         desc: 'This the content two. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. ',
//         imgUrl: 'https://img95.699pic.com/photo/40007/4125.jpg_wh300.jpg'
//     },
//     {
//         id: 3,
//         title: "This is the Title three",
//         desc: 'This the content three. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. ',
//         imgUrl: 'https://img95.699pic.com/photo/40007/4125.jpg_wh300.jpg'
//     },
//     {
//         id: 4,
//         title: "This is the Title four",
//         desc: 'This the content four. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. ',
//         imgUrl: 'https://img95.699pic.com/photo/40007/4125.jpg_wh300.jpg'
//     }
//     ],
//     recommendList: [{
//         id: 1,
//         imgUrl: 'http://pic.616pic.com/bg_w1180/00/11/34/vo5eyRAGS3.jpg!/fh/300'

//     },
//     {
//         id: 2,
//         imgUrl: 'http://pic.616pic.com/bg_w1180/00/04/13/1hHNbhU9ry.jpg!/fh/300'
//     }
//         , {
//         id: 3,
//         imgUrl: 'http://pic.616pic.com/bg_w1180/00/11/34/vo5eyRAGS3.jpg!/fh/300'

//     },
//     {
//         id: 4,
//         imgUrl: 'http://pic.616pic.com/bg_w1180/00/04/13/1hHNbhU9ry.jpg!/fh/300'
//     }],
//     writerList:[{
//         id:1,
//         name:"James",
//         info:"写了2107.8k字 · 34.4k喜欢",
//         imgUrl:"https://upload.jianshu.io/users/upload_avatars/11740279/4ba082e0-7a30-4429-9d9b-8cea04af272f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
//     },{
//         id:2,
//         name:"James",
//         info:"写了2107.8k字 · 34.4k喜欢",
//         imgUrl:"https://upload.jianshu.io/users/upload_avatars/11740279/4ba082e0-7a30-4429-9d9b-8cea04af272f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
//     },{
//         id:3,
//         name:"James",
//         info:"写了2107.8k字 · 34.4k喜欢",
//         imgUrl:"https://upload.jianshu.io/users/upload_avatars/11740279/4ba082e0-7a30-4429-9d9b-8cea04af272f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
//     },{
//         id:4,
//         name:"James",
//         info:"写了2107.8k字 · 34.4k喜欢",
//         imgUrl:"https://upload.jianshu.io/users/upload_avatars/11740279/4ba082e0-7a30-4429-9d9b-8cea04af272f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
//     }
// ]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'change_home_data':
           return state.merge({
                topList:fromJS(action.topicList),
                articleList:fromJS(action.articleList),
                recommendList:fromJS(action.recommendList),
            })
        default:
            return state;
    }
}