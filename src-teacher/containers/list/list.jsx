import React, {Component} from 'react'
import {connect} from 'react-redux'

import Item from '../item/item'

import './list.css'

/*
评论列表组件
 */
class List extends Component {

  render() {
    const {comments} = this.props
    // 定义标识是否显示的变量
    const display = comments.length===0 ? 'block' : 'none'

    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map((comment, index) => <Item key={index} comment={comment} index={index}/>)
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({comments: state.comments}),
  {}
)(List)