/*
包含n个action creator函数的模块
 */
import {
    CATELIST,
    HOME,
    CATEGORY,
    TAB,
    TABTITLE
} from './action-types'
import {
    reqCategory,
    reqCateList,
    reqHome,
    reqTab,
    reqTabTitle
} from "../api";

// 同步action
export const cateList = (data) => ({type: CATELIST,data})
export const home = (data) => ({type: HOME,data})
export const category = (data) => ({type: CATEGORY,data})
export const tab = (data) => ({type: TAB,data})
export const tabTtile = (data) => ({type: TABTITLE,data})


export const getCateList = () => {
    return async dispatch => {
        const response = await reqCateList()
        if(response.code===0) {
            dispatch(cateList(response.data))
        }
    }
}
export const getHome = () => {
    return async dispatch => {
        const response = await reqHome()
        if(response.code===0) {
            dispatch(home(response.data))
        }
    }
}
export const getCategory = () => {
    return async dispatch => {
        const response = await reqCategory()
        if(response.code===0) {
            dispatch(category(response.data))
        }
    }
}
export const getTab = () => {
    return async dispatch => {
        const response = await reqTab()
        if(response.code==="200") {
            dispatch(tab(response.data))
        }
    }
}
export const getTabTitle = () => {
    return async dispatch => {
        const response = await reqTabTitle()
        if(response.code==="200") {
            dispatch(tabTtile(response.data))
        }
    }
}
