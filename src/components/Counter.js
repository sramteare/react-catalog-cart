import React, { memo } from "react"

const Counter = ({
    min,
    max,
    id,
    value,
    onChange=()=>{}
}) => {
    
    const getContainedValue = (val)=> {
        
        if(val < min) return min;
        else if(val > max) return max;
        return val;
    }
    const dispatchChange = (evt, val)=>{
        val = getContainedValue(val);
        evt.target.setAttribute("data-value", val)
        onChange(val);
    }
    return (<div className="counter">
        <button data-id={id} onClick={(evt)=>dispatchChange(evt,value-1)}>-</button>
        <span>{value}</span>
        <button data-id={id} onClick={(evt)=>dispatchChange(evt,value+1)}>+</button>
    </div>)
}
export default memo(Counter);