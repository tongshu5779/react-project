import React, {Component} from 'react'
import './headerSearch.styl'

export default class HeaderSearch extends Component{
    render(){
        return(
            <div className="searchGoods">
                <i className="iconfont icon-sousuo icon"></i>
                <input type="text" placeholder="搜索商品，共有111款好物"/>
            </div>
        )
    }
}