import axios from 'axios';
import jsonp from 'jsonp';
import { TruthType } from '../utils/types';

// 获取全国省份列表
export const getHospitalProvince = ()=>{
    return axios.post('/wechat/api/THPneumoniaService/getHospitalProvince',{
        service: 'THPneumoniaService',
        args: {req:{}},
        func: 'getHospitalProvince',
        context: {channel: 'AAEEviDRbllNrToqonqBmrER'}
    })
}

// 获取分页辟谣信息列表
export const getTruth = (params: TruthType = { page:0 })=>{
    return new Promise((reslove, reject)=>{
        jsonp(`/fact/loadmore?page=${params.page}`, {}, (err, data)=>{
            if(err){
                reject(err)
            }else{
                reslove(data)
            }
        })
    })
}

// 获取疫情最新进展
export const getTrace = ()=>{
    return new Promise((reslove, reject)=>{
        jsonp(`/inews/g2/getOnsInfo?name=wuwei_ww_time_line`, {}, (err, data)=>{
            if(err){
                reject(err)
            }else{
                reslove(data)
            }
        })
    })
}

// 最新疫情数据
export const getDisease = ()=>{
    return new Promise((reslove,reject)=>{
        jsonp(`/inews/g2/getOnsInfo?name=disease_h5`, {}, (err, data)=>{
            if(err){
                reject(err)
            }else{
                reslove(data)
            }
        })
    })
}

// 省份疫情防治列表
export const getProvinceNews = (code: string)=>{
    return axios.post('/api/news/v1/province/news/list?province_code='+code);
}
