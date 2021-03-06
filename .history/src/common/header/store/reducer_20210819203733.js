import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState =fromJS({
    focused:false
});

export default (state=defaultState,action)=>{
    if(action.type===constants.SEARCH_FOCUS){
        return{
            focused:true
        }
    }
    if(action.type===constants.SEARCH_BLUR){
        return{
            focused:false
        }
    }
    return state;
}