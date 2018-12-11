import React from "react"
import Main from "../../containers/main"
import Search from "../../containers/search"

export default class UserSearch extends React.Component{
    render(){
        return(
            <div className="container">
            <Search/>
            <Main/>
        </div>
        )
    }
}