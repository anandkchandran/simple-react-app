import React, {Fragment } from 'react'
import {Avatar} from '../avatar/Avatar.component'
import {DisplayText} from '../displayText/displayText.component'
import {Details} from '../details/details.component'
import {Button} from '../button/button.component'
import {Buttons} from '../buttons/buttons.component'
import {Edit} from '../edit/Edit.component'

export const Card = (props) =>{
    
    var monster = props.monster;
    //console.log(!monster.buttonProps.editNameButtonHidden)

    const editName = {
        id: monster.id,
        kind:'text',
        buttonHidden: !monster.buttonProps.editNameButtonHidden,
        val: monster.textBoxProps.editNameVal,
        handleChange:props.events.onNameChange,
        handleSubmit:props.events.onNameSubmit,
        handleCancel:props.events.onCancelClick,
        edit : monster.editName
    }

    const editEmail = {
        id: monster.id,
        kind:'email',
        buttonHidden: !monster.buttonProps.editEmailButtonHidden,
        val: monster.textBoxProps.editEmailVal,
        handleChange:props.events.onEmailChange,
        handleSubmit:props.events.onEmailSubmit,
        handleCancel:props.events.onCancelClick,
        edit: monster.editEmail,
        error : monster.emailError
    }

    return(
        <div>
            <div className={'row'}>
                <Avatar id={monster.id} name={monster.name} set={((monster.id*17)%13)%9}/>
            </div>
            <div className={'row'}>
                <Details id={monster.id} name={monster.name} email={monster.email} editName={editName} editEmail={editEmail}/>
            </div>
            <div className={'row'}>
                <Buttons id={monster.id} monster={monster} events={props.events}></Buttons>
            </div>
        </div>
    )
    
/*     return(
        <div>
            <Avatar name={monster.name} id={monster.id} set={((monster.id*17)%13)%9}/>
            <div className={'row'}>
                <DisplayText kind={'name'} value={monster.name} edit={editName}></DisplayText>
                <DisplayText kind={'email'} value={monster.email} edit={editEmail}></DisplayText>
            </div>
            <div className={'row'}>
                <Buttons id={monster.id} monster={monster} events={props.events}></Buttons>
            </div>
            *remove from here*
             <Button id = {monster.id} className={'five columns'} hidden={monster.buttonProps.editNameButtonHidden} handleClick={props.events.onEditNameClick} edit={editName} btnval='Edit Name'/>
            <Button id = {monster.id} className={'five columns'} hidden={monster.buttonProps.editEmailButtonHidden} handleClick={props.events.onEditEmailClick} edit={editEmail} btnval='Edit Email'/> 
           <Edit edit={editName}/>
            <Edit edit={editEmail}/> 
        </div>
    ) */
} 

/* class Card extends Component{
     constructor(props){
        super(props);
        this.state={
            monster:props.monster,
            displayNameEditTextBoxHidden:true,
            toggleEditNameButton:false,
            changingName : props.monster.name
        };
        console.log(this.state);
    }

    displayTextBox = (e)=>{
        e.preventDefault();
        console.log(e);
        this.setState({
            displayNameEditTextBoxHidden:false,
            toggleEditNameButton:true
        })
    }

    changeName = (e)=>{
        e.preventDefault();
        console.log(e.target.value);
        this.setState({
            changingName:e.target.value
        })
    }

    submitChange = (e)=>{
        e.preventDefault();
        let monst = this.state.monster
        monst.name = this.state.changingName
        this.setState({
            monster:monst,
            displayNameEditTextBoxHidden:true,
            toggleEditNameButton:false
        })
    }

    cancelChange = (e) =>{
        e.preventDefault();
        this.setState({
            displayNameEditTextBoxHidden:true,
            toggleEditNameButton:false
        })
    }


    render(){
        return(
            <div>
                <div>
                    <img alt="monster" src={`https://robohash.org/${this.state.monster.id}?set=set3&size=100x100`}></img>
                    <div>{this.state.monster.name}</div>
                    <div>{this.state.monster.email}</div>
                </div>
            </div>
        );
    }
} */

//export default Card;