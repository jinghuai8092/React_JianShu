import { fromJS } from 'immutable';
import * as constants from './constants'

const defaultState = fromJS({
    login:false
});




export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANG_LOGIN:
            console.log(action.value)
            state.set('login',action.value)
        default:
            return state;
    }
}