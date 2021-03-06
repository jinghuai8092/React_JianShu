import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState=fromJS({
    title:'',
    content:'',
});

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}