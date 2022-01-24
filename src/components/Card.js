import React from 'react'


function Card(props) {
    return (
        <section className="card-container">
            <img src={props.img} alt=""className="card-image"/>
            <div className="card-stats">
            <span>{props.rating}</span>
            <span className = "count1">({props.updatedCount})</span>
            <span className= "count2">{props.country}</span>
            </div>
            <p className="main-text">{props.text}</p>
            <p className ="main-text">{props.price}</p>
        </section>
    )
}

export default Card