import React from "react"
import Add from "./comments/add/add"
import List from "./comments/list/list";
class App extends React.Component{
    state = {
        comments : [
            {
                username : "童童",
                content : "React太难了"
            },
            {
                username : "ppp",
                content : "啥啥啥"
            }
        ]
    };
    addComment = (commentOne)=>{
        const {comments} = this.state;
        comments.unshift(commentOne);
        this.setState({
            comments
        })
    };
    delComment = (index)=>{
        const {comments} = this.state;
        comments.splice(index,1);
        this.setState({
            comments
        })
    };
    render(){
        const {comments} = this.state;
        return(
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <Add addComment={this.addComment}/>
                    <List comments={comments} delComment={this.delComment}/>
                </div>
            </div>
        )
    }
}
export default App

