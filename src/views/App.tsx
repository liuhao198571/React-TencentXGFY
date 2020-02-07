import React,{ useState, useEffect } from 'react';
import './App.css';

import { getDisease } from '../services/index';

// 引入模块
import Nav from '../components/Nav';


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
                1
            </div>
            <div id="news">
                2
            </div>
        </div>
    )
}


export default App;
