import React, {Component} from 'react'

import {connect} from 'react-redux'

import './main.css'

class Main extends Component {


  /*// 父组件重新render()时自动调用
  async componentWillReceiveProps (newProps) { // 点击search指定新的searchName
    const {searchName} = newProps
    // 发请求前, 更新状态(请求中)
    this.setState({
      firstView: false,
      loading: true
    })
    // 发异步ajax请求, 获取users
    const url = `https://api.github.com/search/users?q=${searchName}`
    try {
      const response = await axios.get(url)
      const result = response.data
      const users = result.items.map(item => ({
        name: item.login,
        avatar_url: item.avatar_url,
        url: item.html_url
      }))
      // 如果成功了, 更新状态(成功)
      this.setState({
        loading: false,
        users
      })
    } catch (error) {
      // 如果失败了, 更新状态(失败)
      this.setState({
        loading: false,
        errorMsg: '请求失败!!!'
      })
    }
  }*/

  render() {

    const {firstView, loading, users, errorMsg} = this.props.user

    if(firstView) {
      return <h2>请输入关键字进行搜索: {this.props.searchName}</h2>
    } else if (loading) {
      return <h2>正在加载中...</h2>
    } else if (errorMsg) {
      return <h2>{errorMsg}</h2>
    } else {
      return (
        <div className="row">
          {
            users.map((user, index) => (
              <div className="card" key={index}>
                <a href={user.url} target="_blank">
                  <img src={user.avatar_url} style={{width: 100}} alt='avatar'/>
                </a>
                <p className="card-text">{user.name}</p>
              </div>
            ))
          }


        </div>
      )
    }

  }
}

export default connect(
  state => ({user: state.user}),
  {}
)(Main)