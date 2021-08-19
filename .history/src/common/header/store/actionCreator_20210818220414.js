import * as constants from './constants';

export const searchFocus=()=>({
    type:constants.SEARCH_FOCUS()
})
export const searchBlur=()=>({
    type:'search_blur'
})