import React from 'react'
import {Avatar} from '../avatar/Avatar.component'
import {Details} from '../details/details.component'
import {Buttons} from '../buttons/buttons.component'

export const Card = (props) =>{
    
    var monster = props.monster;
    //console.log(!monster.buttonProps.editNameButtonHidden)

    const editName = {
        id: monster.id,
        kind:'text',
        val: monster.textBoxProps.editNameVal,
        handleChange:props.events.onNameChange,
        handleSubmit:props.events.onNameSubmit,
        handleCancel:props.events.onCancelClick,
        edit : monster.editName
    }

    const editEmail = {
        id: monster.id,
        kind:'email',
        val: monster.textBoxProps.editEmailVal,
        handleChange:props.events.onEmailChange,
        handleSubmit:props.events.onEmailSubmit,
        handleCancel:props.events.onCancelClick,
        edit: monster.editEmail,
        error : monster.emailError
    }

    return(
        <div>
                <Avatar id={monster.id} name={monster.name} set={((monster.id*17)%13)%9}/>
                <Details id={monster.id} name={monster.name} email={monster.email} editName={editName} editEmail={editEmail}/>
                <Buttons id={monster.id} monster={monster} events={props.events}></Buttons>
        </div>
    )
}