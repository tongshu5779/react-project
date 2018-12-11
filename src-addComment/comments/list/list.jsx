import React from "react"
import Item from  "../item/item"
import "./list.css"
import PropTypes from "prop-types"
class List extends React.Component{
    static propTypes = {
        comments : PropTypes.array.isRequired,
        delComment : PropTypes.func.isRequired
    };
    render(){
        const comments = this.props.comments;
        const delComment = this.props.delComment;
        const display = comments.length === 0 ? "block" : "none";
        return(
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((ele,index)=> <Item key={index} comment={ele} delComment={delComment} index={index}/>)
                    }
                </ul>
            </div>
        )
    }
}
export default List
