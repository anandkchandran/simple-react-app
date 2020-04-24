import React from 'react'
import './avatar.style.css'

export const Avatar =(props) =>{
    var style = "img"
    return(
            <img alt={props.name} className={style} src={`https://robohash.org/${props.id}?set=${props.set}&size=150x150`}></img>
    )
}