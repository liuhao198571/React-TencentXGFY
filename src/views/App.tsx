import React,{ useState, useEffect, useRef } from 'react';
import './App.css';

import { getDisease } from '../services/index';

// 引入模块
import Nav from '../components/Nav/Nav';
import Head from '../components/Head/Head';
import TopDataWrap from '../components/TopDataWrap/TopDataWrap';

const App = () => {
    const appRef = useRef(null);

    let [lastupdatatime, setLastUpdataTime] = useState('');

    useEffect(()=>{
        getDisease().then((res:any)=>{
            res = JSON.parse(res.data);
            console.log(res,'res...');
            setLastUpdataTime(res.lastUpdateTime)
        })
    },[])

    let showNav = (e:any)=>{
        console.log(e.target.scrollTop)
    }

    return (
        <div className="App" ref={appRef} onScroll={(e)=>showNav(e)} >
            {/* 顶部导航栏 */}
            <Nav />
            <div id="charts">
            {/* 头部 */}
            <Head />
            {/* 顶部数据展示窗口 */}
            <TopDataWrap lastupdatatime={lastupdatatime} />
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
