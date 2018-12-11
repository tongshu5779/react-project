import React from "react"
import {Route,Switch,Redirect} from "react-router-dom"
import CommentManage from "./components/comment_manage"
import MyNavLink from "./components/my_nav_link"
import UserSearch from "./components/user_search"

export default class App extends React.Component{
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>react + router + redux整合</h2></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*路由链接*/}
                            <MyNavLink className='list-group-item' to='/comment_manage'>评论管理</MyNavLink>
                            <MyNavLink className='list-group-item' to='/user_search'>用户搜索</MyNavLink>
                        </div>
                    </div>

                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*注册路由组件*/}
                                <Switch>
                                    <Route path='/comment_manage' component={CommentManage}/>
                                    <Route path='/user_search' component={UserSearch}/>
                                    <Redirect to='/comment_manage'/> {/*当请求的路由与上面没有一个匹配的, 就使用*/}
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}