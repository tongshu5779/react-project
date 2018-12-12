import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getHome} from '../../store/actions'
import HomeHeader from "../../components/homeHeader/homeHeader"

import "./home.styl"
import "swiper/dist/css/swiper.min.css"
import Swiper from "swiper"

class Home extends Component {
    componentWillMount(){
        this.props.getHome();
    };
    componentDidMount(){
        new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination'
            },
            autoplay: true,
        });
    };

   render() {
     const {focusList,policyDescList,kingKongModule,indexActivityModule,tagList,categoryHotSellModule} = this.props.home
       if(kingKongModule){
           var {kingKongList} =kingKongModule
       }
       if(categoryHotSellModule){
           var categoryList = categoryHotSellModule.categoryList
           var  categoryLists = categoryList.filter((category,index)=>index<2)
           var categoryLists2 = categoryList.filter((category,index)=>index>=2)
       }
     if(focusList){
         return (
            <div className="home">
                 <HomeHeader/>
                 <nav className="home_nav">
                     <div className="swiper-container">
                         <div className="swiper-wrapper">
                             {
                                 focusList.map((focus, index) => {
                                     return (
                                         <div className="swiper-slide" key={index}>
                                             <img src={focus.picUrl} alt=""/>
                                         </div>
                                     )
                                 })
                             }
                         </div>
                         <div className="swiper-pagination"></div>
                     </div>
                 </nav>
                 <div className="present">
                     <ul className="introduce">
                         {
                             policyDescList.map((policy, index) => {
                                 return (
                                     <li className="item" key={index}>
                                         <i className="icon" style={{'background' :`url('${policy.icon}')`, backgroundSize: '100% 100%'}}></i>
                                         <span>{policy.desc}</span>
                                     </li>
                                 )
                             })
                         }
                     </ul>
                  </div>
                 <div className="content">
                     <div className="products">
                         <div className="productWrap">
                             <div className="package">
                                 <div className="product">
                                     {
                                        kingKongList.map((kingkong,index)=>{
                                           return(
                                               <div key={index} className="con">
                                                   <div className="img" >
                                                       <img src={kingkong.picUrl} alt=""/>
                                                   </div>
                                                   <div className="productName">
                                                       {kingkong.text}
                                                   </div>
                                               </div>
                                            )
                                         })
                                     }
                                 </div>
                             </div>
                         </div>
                      </div>
                     <div className="discount">
                         <div className="icon">
                             <div className="img-package">
                                 <img src="https://yanxuan.nosdn.127.net/15435902145614507.gif" alt=""/>
                             </div>
                         </div>
                         <div className="special-offer">
                             <div className="free">
                                 <div className="freeImg">
                                     <img src="https://yanxuan.nosdn.127.net/15435902383484509.png" alt=""/>
                                 </div>
                             </div>
                             <div className="price-reduction">
                                 <div className="priceReductionImg">
                                     <div className="up">
                                         <img src="https://yanxuan.nosdn.127.net/15435902616394510.png" alt=""/>
                                     </div>
                                     <div className="down">
                                         <img src="https://yanxuan.nosdn.127.net/15438974429982991.png" alt=""/>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div className="offer">
                             <div className="offerPackage">
                                 <div className="left">
                                     <img src="https://yanxuan.nosdn.127.net/15438955793172733.png" alt=""/>
                                 </div>
                                 <div className="right">
                                     <img src="https://yanxuan.nosdn.127.net/15435903918604513.png" alt=""/>
                                 </div>
                             </div>
                         </div>
                         <div className="background"></div>
                     </div>
                     <div className="newcomer-exclusive">
                         <div className="newTitle">
                             <span>新人专享礼</span>
                         </div>
                         <div className="newContent">
                             <div className="left">
                                 <div className="title">
                                     新人专享红包
                                 </div>
                                 <div className="img">
                                     <div className="imgPackage">
                                         <img src="//yanxuan.nosdn.127.net/d074d02fb86bff9bfbf4fa3010d1e1e6.png" alt=""/>
                                     </div>
                                     <div className="animate"></div>
                                 </div>
                             </div>
                             <div className="right">
                                 <div className="up">
                                     <div className="upContent">
                                         <div className="imgPackage">
                                             <img src={indexActivityModule[0].picUrl} alt=""/>
                                             <div className="icon">
                                                 <div className="line1">{indexActivityModule[0].activityPrice}</div>
                                                 <div className="line2">{indexActivityModule[0].originPrice}</div>
                                             </div>
                                         </div>
                                         <div className="title">
                                             <p className="p1">{indexActivityModule[0].title}</p>
                                             <p className="p2">{indexActivityModule[0].subTitle}</p>
                                         </div>
                                     </div>
                                 </div>
                                 <div className="down">
                                     <div className="downContent">
                                         <div className="imgPackage">
                                             <img src="indexActivityModule[1].picUrl" alt=""/>
                                             <div className="icon">
                                                 <div className="line1">{indexActivityModule[1].activityPrice}</div>
                                                 <div className="line2">{indexActivityModule[1].originPrice}</div>
                                             </div>
                                         </div>
                                         <div className="title">
                                             <p className="p1">{indexActivityModule[1].title}</p>
                                             <p className="p2">{indexActivityModule[1].subTitle}</p>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className="manufacturersSupplying">
                         <div className="manufacturerName">
                             <div className="left">品牌制造商直供</div>
                             <a className="right">
                                 <span>更多</span>
                                 <i className="iconfont icon-youjiantou"></i>
                             </a>
                         </div>
                         <ul className="goodsList">
                             {
                                 tagList.map((tag, index) => {
                                   return(
                                       <li className="item list1" key={index} style={{'background' :`url('${tag.picUrl}')`, backgroundSize: '100% 100%'}}>
                                           <div className="cnt">
                                               <h4>{tag.name}</h4>
                                               <div className="sellPrice">
                                                   <div className="price">{tag.floorPrice}元起</div>
                                                   <i className="icon-31shangxin iconfont"></i>
                                               </div>
                                           </div>
                                       </li>
                                   )
                                 })
                             }
                         </ul>
                     </div>
                     <div className="hotSell">
                         <div className="hotTitle">
                             <div className="left">
                                 <span className="list">{categoryHotSellModule.title}</span>
                             </div>
                         </div>
                         <div className="hotContent">
                             <div className="line1">
                                 {
                                     categoryLists.map((category, index) => {
                                         return (
                                             <div className="top" key={index}>
                                                 <div className="name">
                                                     <span className="text">{category.categoryName}</span>
                                                 </div>
                                                 <div className="img">
                                                     <img src={category.picUrl} alt=""/>
                                                 </div>
                                             </div>
                                         )
                                     })
                                 }
                             </div>
                             <div className="line2">
                                 {
                                     categoryLists2.map((category, index) => {
                                         return (
                                             <a href="javascript:;" className="item" key={index}>
                                                 <div className="name">{category.categoryName}</div>
                                                 <div className="imgWrap">
                                                     <div className="img">
                                                         <img src={category.picUrl} alt=""/>
                                                     </div>
                                                 </div>
                                             </a>
                                         )
                                     })
                                 }
                             </div>
                         </div>
                     </div>
                     <div className="footWrap">
                         <div className="wrap">
                             <div className="version">
                                 <a href="javascript:;" className="app">下载APP</a>
                                 <a href="javascript:;" className="computer">电脑版</a>
                             </div>
                             <p className="info">
                                 <span>网易公司版权所有 © 1997-2018</span>
                                 <br/>
                                     <span>食品经营许可证：JY13301080111719</span>
                             </p>
                         </div>
                     </div> 
                 </div>
                 <i className="upIcon"ref="up"></i>
             </div>
         )
     }else{
       return null
     }
  }
}

export default connect(
    state => ({home: state.home}),
    {getHome}
)(Home)



