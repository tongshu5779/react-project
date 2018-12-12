/*
产生初始状态或新的状态的reducer函数
 */
import {combineReducers} from 'redux'

import {
    CATELIST,
    HOME,
    CATEGORY,
    TAB,
    TABTITLE
} from './action-types'

//首页导航栏
function cateList(state=[], action) {
    switch(action.type) {
        case CATELIST:
            return action.data
        default:
            return state
    }
}
function home(state={}, action) {
    switch(action.type) {
        case HOME:
            return action.data
        default:
            return state
    }
}
function category(state=[], action) {
    switch(action.type) {
        case CATEGORY:
            return action.data
        default:
            return state
    }
}
function tab(state=[], action) {
    switch(action.type) {
        case TAB:
            return action.data
        default:
            return state
    }
}
function tabTitle(state=[], action) {
    switch(action.type) {
        case TABTITLE:
            return action.data
        default:
            return state
    }
}

// 向外暴露是整合多个reducer产生的新的reducer
export default combineReducers({
    cateList,
    home,
    category,
    tab,
    tabTitle
})