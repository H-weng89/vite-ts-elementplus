import request from '../request'
import axios from 'axios'


//登录
export const login = (data:loginData):Promise<loginRes>=>request.post('/admin/login',data)

//获取个人信息
export const userInfo = ():Promise<userInfo>=>request.get('/admin/info')

export const getAdminStat = ():Promise<statInfo>=>request.get('http://kumanxuan1.f3322.net:8360/admin/stat')