import React from "react"

export default function Card(props){
    return (
        <div className="card">
            <img src = {`${props.img}`} className="card--image"/>
            <div className="card--stats">
                <img src="https://react-project-3.dikdns.com/img/star.png" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) .</span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p><span className="bold">From ${props.price}</span></p><br /> <br /> <hr />
        </div>
    )
}