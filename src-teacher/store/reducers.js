/*
包含n个reducer函数
reducer函数: 根据老的state和指定的action返回一个新的state
 */
import {combineReducers} from 'redux'

import {
  ADD_COMMENT,
  DELETE_COMMENT,
  REQUESTING,
  REQ_FAIL,
  REQ_SUCCESS
} from './action-types'
/*
管理评论的数据(comments)的reducer
 */
const initComments = [
  {
    username: 'Jack',
    content: 'React不难222!!!'
  },
  {
    username: 'Bob',
    content: 'React so easy222!!!!'
  }
]
function comments (state = initComments, action) {
  switch (action.type) {
    case ADD_COMMENT:
      const comment = action.data
      // state.unshift(comment)  // 不能直接修改状态数据, 只能返回一个新的状态数据
      return [comment, ...state]
    case DELETE_COMMENT:
      const index = action.data
      // state.splice(index, 1)
      return state.filter((comment, i) => index!==i) // 过滤不会改变原数组, 返回一个新的子数组
    default:
      return state
  }
}

/*
管理用户相关数据的reducer
 */
const initUser = {
  firstView: true, // 是否显示第一个界面
  loading: false, // 是否正在请求加载中
  users: [], // 所有匹配用户的数组
  errorMsg: '', // 请求错误提示信息
}

function user(state=initUser, action) {

  switch (action.type) {
    case REQUESTING:
      return {
        firstView: false,
        loading: true,
        users: [],
        errorMsg: '',
      }
    case REQ_SUCCESS:
      const users = action.data
      return {
        firstView: false,
        loading: false,
        users,
        errorMsg: '',
      }
    case REQ_FAIL:
      const errorMsg = action.data
      return {
        firstView: false,
        loading: false,
        users: [],
        errorMsg,
      }
    default:
      return state
  }
}

/*
向外暴露是整合多个reducer后产生一个新的reducer函数
整合后的reducer管理的状态的结构: {comments: comments(), user: user()}
 */
export default combineReducers({
  comments: comments,
  user: user
})

