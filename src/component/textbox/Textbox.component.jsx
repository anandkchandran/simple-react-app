import React from 'react'

export const TextBox = (props)=>{
    //if(props.val.indexOf("@")!=-1){
        //console.log(props.val)
    //}
    return(
        <input id={props.id} className={props.className} type={props.kind} onChange={props.handleChange} defaultValue={props.defaultValue} value = {props.val} hidden={props.hidden}/>
    );
}