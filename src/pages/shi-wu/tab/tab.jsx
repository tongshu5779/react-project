import React, {Component} from "react"
import {connect} from 'react-redux'
import {getTab} from "../../../store/actions"
import "./tab.styl"

class Tab extends Component{
    componentWillMount(){
        this.props.getTab();
    }
    render(){
        const {tab} =this.props
        if(tab){
            return(
                <div className="recommend" >
                    {
                        tab.map((dataItem,index)=>{
                            return(
                                <div key={index}>
                                {
                                   dataItem.ad?<div className="pic">
                                       <div className="imgPackage">
                                           <img src={dataItem.ad.picUrl} alt=""/>
                                       </div>
                                   </div>:null
                                }
                                {
                                        dataItem.topics.map((item,index)=>{
                                            return(
                                                <div className="item" key={index}>
                                                 {
                                                     item.type===0?
                                                         <div className="type0">
                                                             <div className="type0content">
                                                                 <div className="name">
                                                                     <span className="ava">
                                                                        <img src={item.avatar} alt=""/>
                                                                     </span>
                                                                     <span>{item.nickname}</span>
                                                                 </div>
                                                                 <div className="title">{item.title}</div>
                                                                 <div className="pic">
                                                                     <img src={item.picUrl} alt=""/>
                                                                 </div>
                                                                 <div className="count">
                                                                     <i className="icon-guankan iconfont"/>
                                                                     <span>{item.readCount/1000}k人看过</span>
                                                                 </div>
                                                             </div>
                                                         </div>
                                                         :
                                                         <div className="type1">
                                                             <div className="type1content">
                                                                 <div className="text">
                                                                     <div className="name">
                                                                        <span className="avatar">
                                                                          <img src={item.avatar} alt=""/>
                                                                        </span>
                                                                         <span>{item.nickname}</span>
                                                                     </div>
                                                                     <div className="title">{item.title}</div>
                                                                     <div className="desc">{item.subTitle}</div>
                                                                     <div className="count">
                                                                         <i className="icon-guankan iconfont"/>
                                                                         <span>{item.readCount/1000}k人看过</span>
                                                                     </div>
                                                                 </div>
                                                                 <div className="pict">
                                                                     <img src={item.picUrl} alt=""/>
                                                                 </div>
                                                             </div>
                                                         </div>
                                                  }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }

                </div>
            )
        }else{
            return null
        }
    }
}
export default connect(
    state=>({tab: state.tab}),
    {getTab}
)(Tab)