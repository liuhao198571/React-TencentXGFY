import React from 'react';

const TopDataWrap = (porps:any)=>{
    return (
        <div className="topdatawrap">
            <div className="lastupdatatime">
                <p>统计截止：{porps.lastupdatatime}</p>
            </div>
        </div>
    )
}

export default TopDataWrap;