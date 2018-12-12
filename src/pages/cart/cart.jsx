import React, {Component} from 'react'
import "./cart.styl"

export default class Cart extends Component {
  render() {
    return (
        <div className="shopCart">
          <div className="shopWrap">
              <div className="wrap">
                  <div className="main">
                      <div className="cart">
                          <div className="cartHD">
                              <span className="text1">购物车</span>
                              <div className="text2">
                                  <span>领券</span>
                              </div>
                          </div>
                      </div>
                      <div className="tab">
                          <ul className="tabContent">
                              <li>
                                  <i className="iconfont icon-dian"/>
                                  <span>30天无忧退货</span>
                              </li>
                              <li>
                                  <i className="iconfont icon-dian"/>
                                  <span>48小时快速退款</span>
                              </li>
                              <li>
                                  <i className="iconfont icon-dian"/>
                                  <span>满88元免邮费</span>
                              </li>
                          </ul>
                      </div>
                      <div className="content">
                          <div className="cartContent">
                              <div className="img"/>
                              <div className="text">
                                   <span className="one">
                                     去添加点什么吧
                                   </span>
                                  <div className="two">登录</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    )
  }
}