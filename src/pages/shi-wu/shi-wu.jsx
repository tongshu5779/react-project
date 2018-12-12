import React, {Component} from 'react'
import {Route, Switch,Link,Redirect} from 'react-router-dom'
import {connect} from "react-redux"
import {getTabTitle} from "../../store/actions";
import Tab from "./tab/tab"
import "./shi-wu.styl"

class ShiWu extends Component {
  componentWillMount(){
      this.props.getTabTitle();
  };
  render() {
    const path=this.props.location.pathname
    const {tabTitle} = this.props
    return (
      <div className="findGoods">
          <header className="header">
              <div className="headerWarp">
                  <div className="icon">
                  <i className="iconfont icon-shouye3"></i>
              </div>
              <div className="text">
                  <span className="one">发现</span>
                  <span className="two">甄选家</span>
              </div>
              <div className="search">
                  <i className="iconfont icon-sousuo icon1" ></i>
                  <i className="iconfont icon-gouwuche1 icon2"></i>
              </div>
      </div>
  </header>
          <div className="tab">
              <ul className="tabUL">
                  {
                      tabTitle.map((tab,index)=>{
                          return(
                              <li  key={index} className="item">
                                  <Link to={`/shiwu/tab/${index}`} className={path===`/shiwu/tab/${index}`?"active":""}>{tab.tabName}</Link>
                              </li>
                          )
                      })
                  }
            </ul>
          </div>
          <div>
              <Switch>
                  <Redirect exact from='/shiwu' to='/shiwu/tab/0'/>
                  <Route path="/shiwu/tab/:id" component={Tab}/>
              </Switch>
          </div>
      </div>
    )
  }
}
export default connect(
    state=>({tabTitle:state.tabTitle}),
    {getTabTitle}
)(ShiWu)