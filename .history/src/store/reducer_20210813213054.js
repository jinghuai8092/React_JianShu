import { combineReducers } from 'redux';
import {reducer} from '../common/header/store';

const reducer=combineReducers({
    header:headerReducer
});

export default reducer;