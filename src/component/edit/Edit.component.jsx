import React from 'react'
import {Button} from '../button/button.component'
import {TextBox} from '../textbox/Textbox.component'


export const Edit=(props)=>{
    //console.log(props.edit)
    return(
        <div hidden = {props.edit.buttonHidden}>
            <div className={'row'}>
                <TextBox id={props.edit.id} className={'ten columns'} hidden={props.edit.buttonHidden} kind={props.edit.kind} val={props.edit.val} handleChange={props.edit.handleChange}/>
            </div>
            <div className = {'row'}>
                <Button id = {props.edit.id} className={'five columns'} hidden={props.edit.buttonHidden} handleClick={props.edit.handleSubmit} btnval={'Submit'}/>
                <Button id = {props.edit.id} className={'five columns'} hidden={props.edit.buttonHidden} handleClick={props.edit.handleCancel} btnval={'Cancel'}/>
            </div>
            
        </div>
    )
}