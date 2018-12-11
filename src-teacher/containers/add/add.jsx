// 在定义组件时, 即使没有直接使用React, 也必须显式的引入
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {addComment} from '../../store/actions'
/*
评论添加的组件
 */
class Add extends Component {

  addComment = () => {
    // 1. 得到输入的数据: username/content
    const username = this.refs.username.value.trim()
    const content = this.refs.content.value.trim()
    // 2. 检查
    if(!username || !content) {
      return alert('必须输入')
    }
    // 3. 包装成comment对象
    const comment = {
      username,
      content
    }
    // 4. 调用addComment()添加一个新comment
    this.props.addComment(comment)
    // 5. 清除输入
    this.refs.username.value = ''
    this.refs.content.value = ''
  }


  render () {
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名" ref='username'/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容" ref="content"></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.addComment}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(
  state => ({}),
  {addComment}
)(Add)