import React, {Component} from 'react'
import "./homeHeader.styl"
import {connect} from 'react-redux'
import {getCateList} from '../../store/actions'
import BScroll from "better-scroll"

import HeaderSearch from "../headerSearch/headerSearch"


class HomeHeader extends  Component{
    componentWillMount(){
        this.props.getCateList();

    };
    componentDidMount(){
        setTimeout(()=>{
            this.setUlWidth()
            new BScroll(".huadong", {click: true})
        },1000)
    }
    setUlWidth=()=>{
        const ul = this.refs.tabUl
        const liWidth = 1.6
        const size = this.props.cateList.length
        ul.style.width = liWidth * size+ 'rem'
    }
    render(){
        const cateLists = this.props.cateList
        if(cateLists){
            return(
                <div className="homeHeader">
                    <div className="homeHeaderWrap">
                        <div className="package">
                            <span className="logo"></span>
                            <HeaderSearch></HeaderSearch>
                            <div className="login">登录</div>
                        </div>
                    </div>
                    <div className="nav" >
                        <i className="iconfont icon-jiantou9"/>
                        <div className="huadong">
                            <div className="homeHeaderNav" ref="tabUl">
                                {
                                    cateLists.map((cateList,index)=>{
                                        return (
                                            <div className="navItem" key={index}>
                                                <span>{cateList.name}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else {
            return null
        }

    }
}
export default connect(
    state => ({cateList: state.cateList}),
    {getCateList}
)(HomeHeader)