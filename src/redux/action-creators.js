/*
* 包含生成n个 生产action对象工厂函数模块
* */


import { SAVE_USER } from './action-types';//引入常量模块

// 保存用户数据
export const saveUser = (user) => ({type: SAVE_USER, data: user});