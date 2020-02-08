import React,{ useState } from 'react';

const Nav = ()=>{

    let [index, setIndex] = useState(0);

    return (
        <div className="nav">
            <span className={ 0 === index ? 'active':'' } onClick={()=>{setIndex(0)}}><a href="#charts">疫情地图</a></span>
            <span className={ 1 === index ? 'active':'' } onClick={()=>{setIndex(1)}}><a href="#news">最新进展</a></span>
            <span className={ 2 === index ? 'active':'' } onClick={()=>{setIndex(2)}}><a href="#rumor">辟谣信息</a></span>
            <span className={ 3 === index ? 'active':'' } onClick={()=>{setIndex(3)}}><a href="#prevent">医疗预防</a></span>
        </div>
    )
}

export default Nav;