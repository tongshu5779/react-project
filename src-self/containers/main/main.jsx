import React from "react"
import {connect} from "react-redux"
import "./main.css"

class Main extends React.Component{
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
    state=>({user:state.user}),
    {}
)(Main)