import React from "react"
import PropTypes from "prop-types"
class Add extends React.Component{
    static propTypes = {
        addComment : PropTypes.func.isRequired
    };
    addComment = ()=>{
        const username = this.refs.username.value.trim();
        const content = this.refs.content.value.trim();
        if(username===""||content===""){
            alert("请输入内容");
            return
        }
        const commentOne = {
            username,
            content
        };
        this.props.addComment(commentOne);
        this.refs.username.value = "";
        this.refs.content.value = ""
    };
    render(){
        return(
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
export default Add
