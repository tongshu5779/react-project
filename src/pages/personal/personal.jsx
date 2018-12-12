import React, {Component} from 'react'
import Toast from 'antd-mobile/lib/toast'
import {connect} from "react-redux"
import {sendCode,smsLogin} from "../../api";
import 'antd-mobile/dist/antd-mobile.css';
import "./personal.styl"

class Personal extends Component {
  state={
    flag:1,
    time:0,
    phone:"",
    code:""
  }
  handleChange=(event,flag)=>{
      this.setState({[flag]: event.target.value});
  };
  changeFlag = (flag)=>{
    this.setState({
      flag:flag
    })
  };
  routerJump=()=>{
    this.props.history.replace("/home")
  };
  rightPhoneNumber=()=>{
      return /^1\d{10}$/.test(this.state.phone)
  };
  getCode = async()=>{
      if (this.rightPhoneNumber) {
          let result = await sendCode(this.state.phone)
          if(result.code===0){
              Toast.success("验证码发送成功", 0.1)
          }
      }
  };
  phoneLogin=async()=>{
      if (!this.state.phone) {
          Toast.fail("请输入手机号")
          return
      } else if (!(/^\d{6}$/gi.test(this.state.code))) {
          Toast.fail("验证码不正确")
          return
      }
      //手机号短信登录
      const result = await smsLogin(this.state.phone, this.state.code);
      if (result.code === 0) {
          this.setState({
              flag:3
          })
      } else {
          Toast.fail("手机号或验证码不正确")
      };
  };
  render() {
    return (
        <div className="personalWrap">
            <header className="header">
                <div className="headerWarp">
                      <div className="icon" onClick={this.routerJump}>
                        <i className="iconfont icon-shouye3"/>
                      </div>
                      <div className="img">
                          <span className="logo"/>
                      </div>
                      <div className="search">
                          <i className="iconfont icon-sousuo icon1"/>
                          <i className="iconfont icon-gouwuche1 icon2"/>
                      </div>
                </div>
            </header>
            {
              !this.state.flag
                  ?     <div className="personalContent">
                            <div className="cont">
                                <div className="logoWrap">
                                    <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
                                </div>
                                <div className="btn">
                                    <div className="pLogin" onClick={()=>{this.changeFlag(1)}}>
                                          <i className="iconfont icon-shouji"/>
                                          <span>手机号码登录</span>
                                    </div>
                                    <div className="eLogin" onClick={()=>{this.changeFlag(2)}}>
                                          <i className="iconfont icon-youxiang"/>
                                          <span>邮箱账号登录</span>
                                    </div>
                                    <div className="register" onClick={()=>{this.changeFlag(1)}}>
                                          <span className="text">手机号快捷注册</span>
                                          <i className="iconfont icon-youjiantou"/>
                                    </div>
                                </div>
                            </div>
                            <div className="thirdWrap">
                                <div className="wx item">
                                <i className="iconfont icon-weixin"/>
                                <span>微信</span>
                            </div>
                            <div className="qq item">
                            <i className="iconfont icon-qq"/>
                            <span>QQ</span>
                            </div>
                            <div className="wb item">
                            <i className="iconfont icon-weibo"/>
                            <span>微博</span>
                            </div>
                            </div>
                        </div>
                  :null

            }
            {
              this.state.flag===1
                  ?       <div className="phoneLogin">
                              <div className="logoWrap">
                                  <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
                              </div>
                              <div className="loginContent">
                                  <div className="loginWrap">
                                      <section className="login_message">
                                          <input type="tel" maxLength="11" placeholder="请输入手机号" onChange={(e)=>{this.handleChange(e,'phone')}}/>
                                      </section>
                                      <section className="login_verification">
                                          <input type="text" maxLength="8" placeholder="请输入短信验证码" onChange={(e)=>{this.handleChange(e,'code')}}/>
                                          {
                                              this.state.time?<button disabled="disabled" className="get_verification">已发送{this.state.time}</button>
                                                  : <button className="get_verification" onClick={this.getCode}>获取验证码</button>
                                          }


                                      </section>
                                      <section className="info">
                                          <div className="left">
                                              <span>遇到问题？</span>
                                          </div>
                                          <div className="right">
                                              <span>使用密码验证登录</span>
                                          </div>
                                      </section>
                                      <div className="btn-3" onClick={this.phoneLogin}>
                                          <span>登录</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="footer">
                                  <div className="btn-1"  onClick={()=>{this.changeFlag(0)}}>
                                      <span>其他登录方式</span>
                                  </div>
                                  <div className="btn-2">
                                      <span>注册账号</span>
                                      <i className="iconfont icon-youjiantou"/>
                                  </div>
                              </div>
                          </div>
                  :null
            }
            {
              this.state.flag===2
                  ?        <div className="phoneLogin">
                                <div className="logoWrap">
                                    <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
                                </div>
                                <div className="loginContent">
                                    <div className="loginWrap">
                                        <section className="login_message">
                                            <input type="tel"  placeholder="邮箱账号"/>
                                        </section>
                                        <section className="login_verification">
                                            <input type="password"  placeholder="密码"/>
                                        </section>
                                        <section className="info">
                                            <div className="left">
                                                <span>注册账号</span>
                                            </div>
                                            <div className="right">
                                                <span>忘记密码</span>
                                            </div>
                                        </section>
                                        <div className="btn-3">
                                            <span>登录</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer" onClick={()=>{this.changeFlag(0)}}>
                                    <div className="btn-1">
                                        <span>其他登录方式</span>
                                    </div>
                                </div>
                            </div>
                  :null
            }
            {
              this.state.flag===3
                 ?    <div className="loginSuccess">
                            <span>登录成功</span>
                            <div>
                                <span>手机号</span>
                                <span>User.phone</span>
                            </div>
                            <div className="logout" >
                                <span>退出登录</span>
                            </div>
                        </div>
                  :null
            }

        </div>
          )
        }
      }
export default connect(
    state=>({code:state.code}),
    {}
)(Personal)