import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCategory} from '../../store/actions'
import BScroll from "better-scroll"
import HeaderSearch from "../../components/headerSearch/headerSearch"
import SortType from "../../components/sortType/sortType"
import "./category.styl"

class Category extends Component {
  state={
     currentIndex:0
  };
  componentWillMount(){
      this.props.getCategory();
  };
  componentDidMount(){
    setTimeout(()=>{
        new BScroll(".menu-wrapper", {click: true})
        // new BScroll(".goods-wrapper", {click: true})
    },1000)

  }
  changeIndex=(index)=>{
      this.setState({
         currentIndex:index
      })
  };
  render(){
    const  category=this.props.category
      if(category[0]){
              return (
                  <div className="sortWrap">
                      <div className="sortPackage">
                          <div className="sortHeader">
                              <div className="header">
                                  <HeaderSearch></HeaderSearch>
                              </div>
                          </div>
                          <div className="menu-wrapper">
                              <ul className="menuUL">
                                  {
                                      category.map((item, index) => {
                                          return (
                                              <li className="menu-item"  key={index} onClick={() => {
                                                  this.changeIndex(index)
                                              }}>
                                                  <span className={this.state.currentIndex===index?"text active":"text"}>{item.name}</span>
                                              </li>
                                          )
                                      })
                                  }
                              </ul>
                          </div>
                          <div className="goods-wrapper">
                              <div className="list">
                                  <div className="pic" style={{backgroundImage: `url('${category[this.state.currentIndex].wapBannerUrl}')`}}/>
                                  <SortType category={category} currentIndex={this.state.currentIndex}></SortType>
                              </div>
                          </div>
                      </div>
                  </div>
              )
    }else{
      return null
    }
  }
}
export default connect(
    state=>({category:state.category}),
    {getCategory}
)(Category)