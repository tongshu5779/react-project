import React from "react"
import  Main from "./components/main"
import  Search from "./components/search"

export default class App extends React.Component{


    render(){
        return (
            <div className="container">
                <Search setSearchName={this.setSearchName}/>
                <Main searchName={this.state.searchName}/>
            </div>
        )
    }
}