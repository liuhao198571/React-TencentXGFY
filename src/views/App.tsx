import React,{ useState, useEffect } from 'react';
import './App.css';
import { getDisease } from '../services/index';
import { TotalType } from '../utils/types';

// 引入模块
import Nav from '../components/Nav/Nav';
import Head from '../components/Head/Head';
import TopDataWrap from '../components/TopDataWrap/TopDataWrap';
import Map from '../components/Map/Map';


const App = () => {

    let [total, setTotal] = useState<TotalType>({}); //数据更新时间
    let [countrydata, setCountryData] = useState([]); // 全国疫情分布


    useEffect(()=>{
        getDisease().then((res:any)=>{
            res = JSON.parse(res.data);
            console.log(res,'res...');
            setTotal({
                lastUpdateTime:res.lastUpdateTime,
                chinaTotal:res.chinaTotal
            });
            let countryData = res.areaTree[0].children.map((item: any)=>{
                return {
                  name: item.name,
                  value: item.total.confirm
                }
            })
            setCountryData(countryData);
        })
    },[])

    return (
        <div className="App" >
            <div id="charts">
                {/* 头部 */}
                <Head />
                {/* 顶部数据展示窗口 */}
                <TopDataWrap total={total} />
                {/* 导航栏 */}
                <Nav />
                <div className="places">
                    {/* 中国地图 */}
                    <Map countrydata={countrydata} />
                </div>
            </div>
            <div id="news">
                2最新进展
            </div>
            <div id="rumor">
                3辟谣信息
            </div>
            <div id="prevent">
                4医疗预防
            </div>
        </div>
    )
}


export default App;
