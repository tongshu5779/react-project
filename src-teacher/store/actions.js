import axios from 'axios'
import {
  ADD_COMMENT,
  DELETE_COMMENT,
  REQUESTING,
  REQ_FAIL,
  REQ_SUCCESS
} from './action-types'
// 每个action type都对应一个同步action


// 添加评论同步action
export const addComment = (comment) => ({type: ADD_COMMENT, data: comment})

// 删除评论的同步action
export const deleteComment = (index) => ({type: DELETE_COMMENT, data: index})

// 更新为请求中
export const requesting = () => ({type: REQUESTING})

// 更新为请求成功
export const reqSuccess = (users) => ({type: REQ_SUCCESS, data: users})

// 更新为请求失败
export const reqFail = (errorMsg) => ({type: REQ_FAIL, data: errorMsg})

// 搜索的异步action
export function search(searchName) {
  return async dispatch => {
    // 发一个同步action(变为请求中)
    dispatch(requesting())
    // 1. 执行异步ajax请求
    const url = `https://api.github.com/search/users?q=${searchName}`
    try {
      const response = await axios.get(url)
      const result = response.data
      const users = result.items.map(item => ({
        name: item.login,
        avatar_url: item.avatar_url,
        url: item.html_url
      }))
      // 2. 根据异步结果(成功), 分发对应的同步action
      dispatch(reqSuccess(users))
    } catch (error) {
      // 2. 根据异步结果(失败), 分发对应的同步action
      dispatch(reqFail('请求失败'))
    }
  }
}
