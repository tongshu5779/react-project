import React from "react"
import {connect} from "react-redux"
import {addComment} from "../../store/action"

class Add extends React.Component{
    addComment=()=>{
        const username = this.ref.username.value.trim()
        const content = this.ref.content.value.trim()
        if(!username||!content){
            return alert("不能输入空白值")
        }
        const comment={
            username,
            content
        }
        this.props.addComment(comment)
        this.ref.username.value=""
        this.ref.content.value=""
}

    render(){
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
    state=>({}),
    {addComment}
)(Add)
