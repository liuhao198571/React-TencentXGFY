import React,{ useState, useEffect } from 'react';
import './App.css';

import { getDisease } from '../services/index';

// 引入模块
import Nav from '../components/Nav';
import Head from '../components/Head';


const App = () => {
    useEffect(()=>{
        getDisease().then((res:any)=>{
            res = JSON.parse(res.data);
            console.log(res,'res...');
        })
    },[])

    return (
        <div className="App">
            {/* 顶部导航栏 */}
            <Nav />
            <div id="charts">
            <Head />
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
