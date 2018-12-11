import React from "react"

import Add from "../../containers/add"
import List from "../../containers/list"

export default class CommentManage extends React.Component{

    render(){
        return (
            <div style={{width: '80%'}}>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <Add/>
                    <List/>
                </div>
            </div>
        )
    }
}