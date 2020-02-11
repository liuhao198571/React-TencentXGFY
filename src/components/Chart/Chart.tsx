import React, { useEffect } from 'react';
import {Chart as CHart, Geom, Axis, Tooltip, Legend} from "bizcharts";


interface ProType {
    chinadayaddlist: Array<{
        date: string,
        confirm: string,
        suspect: string,
        dead: string,
        heal: string
    }>,
    chinadaylist: Array<{
        date: string,
        confirm: string,
        suspect: string,
        dead: string,
        heal: string
    }>
}

const Chart = (props:ProType)=>{
    console.log('props...', props);

    const scale = {
        value: {
            type: 'linear',
        }
    }
    let dayaddlist:Array<{}> = [], daylist:Array<{}> = [], daydeadlist:Array<{}> = [];
    props.chinadayaddlist.forEach(item=>{
        dayaddlist.push({
            date:item.date,
            type: '确诊人数',
            value: item.confirm
        },{
            date:item.date,
            type: '疑似人数',
            value: item.suspect
        })
    })
    props.chinadaylist.forEach(item=>{
        daylist.push({
            date:item.date,
            type: '确诊人数',
            value: item.confirm
        },{
            date:item.date,
            type: '疑似人数',
            value: item.suspect
        })
        daydeadlist.push({
            date:item.date,
            type: '治愈人数',
            value: item.heal
        },{
            date:item.date,
            type: '死亡人数',
            value: item.dead
        })
    })
    return (
        <div className="chart">
            {/* 趋势图 */}
            <div className="trend">
                <section>
                <h3>疫情新增趋势（人）</h3>
                    <CHart height={300} data={dayaddlist} scale={scale} forceFit>
                        <Legend />
                        <Axis name="date"
                            label={{
                                formatter: val =>{
                                    let arr = val.slice(1).split('.');
                                    return `${arr[0]}-${arr[1]}`
                                } 
                            }}
                        />
                        <Tooltip crosshairs={{type: "y"}}/>
                        <Geom
                            type="line"
                            position="date*value"
                            size={2}
                            color="type"
                            shape={"smooth"}
                        />
                        <Geom
                            type="point"
                            position="date*value"
                            size={4}
                            color="type"
                            style={{
                                stroke: "#fff",
                                lineWidth: 1
                            }}
                        />
                    </CHart>
                </section>
                <section>
                    <h3> 累计确诊疑似趋势（人）</h3>
                    <CHart height={400} data={daylist} scale={scale} forceFit>
                        <Legend />
                        <Axis name="date"
                            label={{
                                formatter: val =>{
                                    let arr = val.slice(1).split('.');
                                    return `${arr[0]}-${arr[1]}`
                                } 
                            }}
                        />
                        <Tooltip crosshairs={{type: "y"}}/>
                        <Geom
                            type="line"
                            position="date*value"
                            size={2}
                            color="type"
                            shape={"smooth"}
                        />
                        <Geom
                            type="point"
                            position="date*value"
                            size={4}
                            color="type"
                            style={{
                                stroke: "#fff",
                                lineWidth: 1
                            }}
                        />
                    </CHart>
                </section>
            </div>
            {/* 对比图 */}
            <div className="area">

            </div>
        </div>
    )
}

export default Chart;