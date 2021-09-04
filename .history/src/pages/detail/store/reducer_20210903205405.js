import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState=fromJS({
    title:'I wish we did not have to do this: Alberta to offer $100 incentive to get vaccinated against COVID-19',

})

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}