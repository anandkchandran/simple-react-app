import React from 'react'
import {DisplayText} from '../displayText/displayText.component'

export const Details =(props) => {
    var editName = props.editName;
    var editEmail = props.editEmail;
    
    var nameBox = <DisplayText id={props.id} kind={'name'} value={props.name} edit={editName}></DisplayText>
    var emailBox = <DisplayText id={props.id} kind={'email'} value={props.email} edit={editEmail}></DisplayText>
    if(editName.edit){
        emailBox = ""
    } else if(editEmail.edit){
        nameBox="";
    }
    return(
        <div>
            <div className={'row'}>
                {nameBox}
            </div>
            <div className={'row'}>
                {emailBox}
            </div>
        </div>

    )
}