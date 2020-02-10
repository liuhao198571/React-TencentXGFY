import React from 'react';
import './TopDataWrap.css';

// interface PropType {
//     total:{
//         lastUpdateTime:number,
//         chinaTotal:Object
//     }
// }

const TopDataWrap = (props:any)=>{

    console.log(props.total.chinaTotal)
    return (
        <div className="topdatawrap">
            <div className="lastupdatatime">
                <p>统计截止：<span>{props.total.lastUpdateTime}</span>
                更新于：<span>{ Math.floor((new Date().getTime() - new Date(props.total.lastUpdateTime).getTime())/1000/60)+''}</span>
                分钟前</p>
            </div>
            <div className="recentnumber">
                <dl>
                    <dt className="number"></dt>
                    <dd className="text"></dd>
                </dl>
                <dl>
                    <dt className="number"></dt>
                    <dd className="text"></dd>
                </dl>
                <dl>
                    <dt className="number"></dt>
                    <dd className="text"></dd>
                </dl>
                <dl>
                    <dt className="number"></dt>
                    <dd className="text"></dd>
                </dl>
                <dl>
                    <dt className="number"></dt>
                    <dd className="text"></dd>
                </dl>
            </div>
        </div>
    )
}

export default TopDataWrap;