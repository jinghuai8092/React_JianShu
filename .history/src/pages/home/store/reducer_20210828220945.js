import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList:[{
        id:1,
        title:"Social News",
        imgUrl:'http://pic.616pic.com/ys_b_img/00/44/76/IUJ3YQSjx1.jpg'
    }]
});

export default (state = defaultState, action) => {
    switch (action.type) {
    
        default:
            return state;
    }
}