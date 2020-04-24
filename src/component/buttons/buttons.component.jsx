import React from 'react'
import {Button} from '../button/button.component'

export const Buttons =(props)=>{
    var events = props.events;
    var monster = props.monster
    var btn1Text = "Edit Name";
    var btn2Text = "Edit Email";
    var btn1Event = events.onEditNameClick
    var btn2Event = events.onEditEmailClick
    if(monster.editName || monster.editEmail){
        btn1Text = "Submit"
        btn2Text = "Cancel"
        if(monster.editName){
            btn1Event = events.onNameSubmit
        }else if(monster.editEmail){
            btn1Event = events.onEmailSubmit
        }
        btn2Event  = events.onCancelClick
    }


    return(
        <div>
            <Button id = {monster.id} className={'five columns'} handleClick={btn1Event} btnval={btn1Text}/>
            <Button id = {monster.id} className={'five columns'} handleClick={btn2Event} btnval={btn2Text}/>
        </div>
    )
}