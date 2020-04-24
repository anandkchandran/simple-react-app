import React from 'react';
import {TextBox} from '../textbox/Textbox.component'
import './display.style.css'

export const DisplayText = (props)=>{
    var Tag="";
    var error = ""
    //console.log(props)

    if(props.edit.edit){
        var cls = "twelve columns editBox"
        if(props.edit.error && props.edit.error.length>0){
            console.log("display Error")
            console.log(props.edit.val)
            cls = cls+" error";
        }
        Tag = <TextBox id={props.edit.id} className={cls} kind={props.edit.kind} val={props.edit.val} handleChange={props.edit.handleChange}/>
        
    }else {
        Tag = <div className={'centertext twelve columns'}>{props.value}</div>
    }

    return(
        <div>{Tag}{error}</div>
    );
}