import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: "Social News",
        imgUrl: 'http://pic.616pic.com/ys_b_img/00/44/76/IUJ3YQSjx1.jpg'
    }, {
        id: 2,
        title: "Drawing",
        imgUrl: 'http://pic.616pic.com/ys_b_img/00/44/76/IUJ3YQSjx1.jpg'
    }],
    articleList: [{
        id: 1,
        title: "This is the Title one",
        desc: 'This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. ',
        imgUrl: 'https://img95.699pic.com/photo/40007/4125.jpg_wh300.jpg'
    }, {
        id: 2,
        title: "This is the Title two",
        desc: 'This the content two. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. ',
        imgUrl: 'https://img95.699pic.com/photo/40007/4125.jpg_wh300.jpg'
    },
    {
        id: 3,
        title: "This is the Title three",
        desc: 'This the content three. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. ',
        imgUrl: 'https://img95.699pic.com/photo/40007/4125.jpg_wh300.jpg'
    },
    {
        id: 4,
        title: "This is the Title four",
        desc: 'This the content four. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. This the content one. ',
        imgUrl: 'https://img95.699pic.com/photo/40007/4125.jpg_wh300.jpg'
    }
    ],
    recommendList: [{
        id: 1,
        imgUrl: 'http://pic.616pic.com/bg_w1180/00/11/34/vo5eyRAGS3.jpg!/fh/300'

    },
    {
        id: 2,
        imgUrl: 'https://lh3.googleusercontent.com/proxy/oVt6GWKcOQqQlhYMLWm4C205SZamZ_zH0nA32O5sbkgLqMfqXIplTA_NNAzMBZQylpN3KBbIB254v1nGwXGJaEar_aIteSX84eUlJ7Ded4AWh_P64OvEzuPsB7HSiYFxdWiHXFqbF0u8yAbSUGZmo11EoP4lcqnYa32jn3hrAqWZlNhU2w'
    }
        , {
        id: 3,
        imgUrl: 'https://lh3.googleusercontent.com/proxy/U6zULlD-JVQkcbIHvjMXgMgj5ATMJumvQSqnFHjWxyOgXzm0SCosdz0XkdMACQDvAJrUiGNS9QxL_bJmKTvcu9_pGTg4b_Rqne5zD0Rs'

    },
    {
        id: 4,
        imgUrl: 'https://lh3.googleusercontent.com/proxy/oVt6GWKcOQqQlhYMLWm4C205SZamZ_zH0nA32O5sbkgLqMfqXIplTA_NNAzMBZQylpN3KBbIB254v1nGwXGJaEar_aIteSX84eUlJ7Ded4AWh_P64OvEzuPsB7HSiYFxdWiHXFqbF0u8yAbSUGZmo11EoP4lcqnYa32jn3hrAqWZlNhU2w'
    }],
    writerList:[{
        id:1,
        name:"James",
        info:"写了2107.8k字 · 34.4k喜欢",
        imgUrl:"https://upload.jianshu.io/users/upload_avatars/11740279/4ba082e0-7a30-4429-9d9b-8cea04af272f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
    },{
        id:2,
        name:"James",
        info:"写了2107.8k字 · 34.4k喜欢",
        imgUrl:"https://upload.jianshu.io/users/upload_avatars/11740279/4ba082e0-7a30-4429-9d9b-8cea04af272f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
    },{
        id:3,
        name:"James",
        info:"写了2107.8k字 · 34.4k喜欢",
        imgUrl:"https://upload.jianshu.io/users/upload_avatars/11740279/4ba082e0-7a30-4429-9d9b-8cea04af272f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
    },{
        id:4,
        name:"James",
        info:"写了2107.8k字 · 34.4k喜欢",
        imgUrl:"https://upload.jianshu.io/users/upload_avatars/11740279/4ba082e0-7a30-4429-9d9b-8cea04af272f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
    }
]
});

export default (state = defaultState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}