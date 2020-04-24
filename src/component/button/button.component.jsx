import React from 'react'
import './button.style.css'

export const Button = (props) =>{
    //console.dir(props.id,props.btnval,props.hidden);
    var style = props.className+" button visible"
    return(
        <input id = {props.id} className={style} type={'button'} onClick={props.handleClick} value={props.btnval}/>
    )
/*     

        <button id = {props.id} className={style} type={'button'} onClick={props.handleClick} >{props.btnval}</button>
    var style = "button visible "+props.className;
    var disabled = false
    if(props.hidden && (props.btnval==="Submit" || props.btnval==="Cancel")){
        style = "button invisible "
    }
    if(props.hidden && (props.btnval === "Edit Name" || props.btnval === "Edit Email")){
        disabled = true;
    }
    //console.log(style)
    var btnVal = props.btnval;
    var evnt = props.handleClick;
    if(!props.edit.buttonHidden){
        if(btnVal==="Edit Name"){
            btnVal= "Submit"
            evnt = props.edit.handleSubmit
        } 
        if(btnVal==="Edit Email"){
            btnVal= "Cancel"
            evnt = props.edit.handleCancel
        }
    }

    return(
        <button id = {props.id} className={style} type={'button'} onClick={evnt}>{btnVal}</button>
        //<button id = {props.id} className={style} type={'button'} onClick={props.handleClick} disabled={disabled?true:false}>{props.btnval}<///button>
        // <a id={props.id} href={'#'} className={style} role={'button'} onClick={props.handleClick}>{props.btnval}</a>
    ) */
}