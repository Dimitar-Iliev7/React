import React from "react"

export default function Contact(props){
    
    return(
        <div className="contact-card">
                <img src= {props.img}/>
                <h3>{props.name}</h3>
                <div className="info-group"> 
                    <img src="https://static.vecteezy.com/system/resources/previews/005/043/127/original/a-phone-icon-in-a-round-circle-free-vector.jpg" />
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img src="https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png" />
                    <p>{props.mail}</p>
                </div>
            </div>
    )
}