import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState=fromJS({
    title:[],
    content:`<img src="https://i.cbc.ca/1.5773860.1606932633!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/hinshaw-kenney.jpg"></img><p><b>Premier Jason Kenney and Alberta's chief</b> medical officer of health, Dr. Deena Hinshaw, announced new public health measures on Friday, including a $100 payment to those who get their first or second doses of vaccine. (Jason Franson/The Canadian Press)</p><p>Premier Jason Kenney and Alberta's chief medical officer of health, Dr. Deena Hinshaw, announced new public health measures on Friday, including a $100 payment to those who get their first or second doses of vaccine. (Jason Franson/The Canadian Press)</p><p>Premier Jason Kenney and Alberta's chief medical officer of health, Dr. Deena Hinshaw, announced new public health measures on Friday, including a $100 payment to those who get their first or second doses of vaccine. (Jason Franson/The Canadian Press)</p><p>Premier Jason Kenney and Alberta's chief medical officer of health, Dr. Deena Hinshaw, announced new public health measures on Friday, including a $100 payment to those who get their first or second doses of vaccine. (Jason Franson/The Canadian Press)</p>`,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}