import React, {Component} from 'react'
import PropTypes from 'prop-types'
import "./sortType.styl"
export default class SortType extends Component{
    static propTypes = {
        category: PropTypes.array.isRequired,
        currentIndex: PropTypes.number.isRequired
    }
    render(){
        if(this.props.category[this.props.currentIndex].type===1){
            return(
                <div className="good-list">
                    {
                        this.props.category[this.props.currentIndex].subCateList.map((pic, index) => {
                            return (
                                <a href="javasrcipt:;" key={index}>
                                    <img src={pic.bannerUrl} alt=""/>
                                    <h1 className="title">{pic.name}</h1>
                                </a>
                            )
                        })
                    }
                </div>
            )
        }else if(this.props.category[this.props.currentIndex].type===0){
            return(
                <div className="goodList2">
                {
                    this.props.category[this.props.currentIndex].subCateList.map((pic, index) => {
                        return (
                            <div className="sub" key={index}>
                                <h4>{pic.name}</h4>
                                {
                                    pic.categoryList.map((item, index) => {
                                        return (
                                            <div className="item" key={index}>
                                                <a href="javascript:;">
                                                    <img src={item.wapBannerUrl} alt=""/>
                                                    <i className="title">{item.name}</i>
                                                </a>
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
        }
    }
}