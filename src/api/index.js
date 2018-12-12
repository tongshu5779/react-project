/*
包含n个接口请求函数的模块
每个函数的返回值是promise
 */
import ajax from './ajax';

// const BASE='/api';

// export const reqTopicList =()=>ajax(`/topicList`);
// export const reqFocusList =()=>ajax(`/focusList`);
export const reqCateList =()=>ajax(`/cateList`);
// export const reqTagList =()=>ajax(`/tagList`);
// export const reqPolicyDescList =()=>ajax(`/policyDescList`);
export const reqCategory =()=>ajax(`/category`);
export const reqHome=()=>ajax("/home")
export const reqTab=()=>ajax("/req/topic/v1/find/recManual.json")
export const reqTabTitle=()=>ajax("/req/topic/v1/find/getTabs.json")
//发送短信验证码
export const sendCode = (phone) => ajax('/api/sendcode', {phone})
//手机号验证码登录
export const smsLogin = (phone, code) => ajax('/api/login_sms', {phone, code}, 'POST')