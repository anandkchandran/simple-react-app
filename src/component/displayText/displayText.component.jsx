import React from 'react';
import {TextBox} from '../textbox/Textbox.component'
import './display.style.css'

export const DisplayText = (props)=>{
    var Tag="";
    var error = ""
    //console.log(props)
    if(props.edit.edit){
        var cls = "twelve columns editBox"
        Tag = <TextBox id={props.edit.id} className={cls} kind={props.edit.kind} val={props.edit.val} handleChange={props.edit.handleChange}/>
        if(props.edit.error && props.edit.error.length>0){
            console.log("display Error")
         error = <span style={{color: "red"}}>{props.edit.error}</span> 
        }
    }else {
        Tag = <div className={'centertext twelve columns'}>{props.value}</div>
    }

/*     if(!props.edit.buttonHidden){
        Tag = <TextBox id={props.edit.id} className={'twelve columns'} kind={props.edit.kind} val={props.edit.val} handleChange={props.edit.handleChange}/>
        if(props.edit.error && props.edit.error.length>0){
            console.log("display Error")
         error = <span style={{color: "red"}}>{props.edit.error}</span> 
        }
    } else {
        Tag = <div className={'centerText twelve columns'}>{props.value}</div>
    } */
    return(
        <div>{Tag}{error}</div>
    );
}