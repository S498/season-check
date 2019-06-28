import React from 'react';
import './SeasonDisplay.css';

const getSeason=(lat,mon)=>{
    if(mon>2 && mon<9){
        if(lat>0)
            return "summer";
        else 
            return "winter";
    }
    else if(lat>0)
        return "winter";
    else
        return "summer";

}

const SeasonDisplay =(props)=>{

    const season=getSeason(props.latOfPos,new Date().getMonth());
    const text=season==='winter'?"Burr ....it's chill":"Let's hit the beach";
    const iconName=season==='winter'?"snowflake":"sun";

    return (
        <div class={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} loading icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} loading icon`}></i>
        </div>
    );
};

export default SeasonDisplay;