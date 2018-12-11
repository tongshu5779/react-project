import React from "react"
import PropTypes from "prop-types"
import "./item.css"
class Item extends React.Component{
    static propTypes={
        comment : PropTypes.object.isRequired,
        delComment : PropTypes.func.isRequired,
        index : PropTypes.number.isRequired
    };
    delComment = ()=>{
        const {username} = this.props.comment;
        const isDel = window.confirm(`你确定要删除${username}的评论吗?`);
        if(isDel){
            this.props.delComment(this.props.index);
        }
    };
    render(){
        const {username,content} = this.props.comment;
        return(
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.delComment}>删除</a>
                </div>
                <p className="user"><span >{username}</span><span>说:</span></p>
                <p className="center">{content}</p>
            </li>
        )
    }
}
export default Item
