import React, {Component} from 'react'

import Search from '../../containers/search/search'
import Main from '../../containers/main/main'

/*
用户搜索组件
 */
export default class UserSearch extends Component {

  render() {
    return (
      <div className="container">
        <Search/>
        <Main/>
      </div>
    )
  }
}