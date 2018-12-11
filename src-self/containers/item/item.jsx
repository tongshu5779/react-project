import React from "react"
import "./item.css"
import {deleteComment} from "../../store/actions"


class Item extends React.Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        deleteComment: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired,
    }
    deleteComment=()=>{
        const{comment,index,deleteComment} = this.props
        if(windows.confirm(`确定删除${username}的评论吗？`)){
            deleteComment(index)
        }
    }
    render(){
        const {username,contenr} = this.props.comment
        return(
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.deleteComment}>删除</a>
                </div>
                <p className="user"><span >{username}</span><span>说:</span></p>
                <p className="centence">{content}</p>
            </li>
        )
    }
}
export default connect(
    state=>({}),
    {deleteComment}
)(Item)
