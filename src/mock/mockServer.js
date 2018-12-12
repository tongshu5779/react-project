import Mock from 'mockjs'
import msite from './msite.json'
import category from "./category.json"
// import shiwu from "./shiwu.json"

// 指定监听的url和对应的json数据模板
Mock.mock('/cateList', {
    code: 0,
    data: msite.cateList
})
Mock.mock("/home",{
    code:0,
    data:msite
})
Mock.mock('/category', {
    code: 0,
    data: category
})
// Mock.mock('/tab', {
//     code: 0,
//     data: shiwu
// })


