import React from 'react'

function Liked(props) {
    return (
        <div>
            <h1> {props.name}</h1>
            <h2>{props.ingredients}</h2>
            <p>{props.instructions}</p>
        </div>
    )
}

export default Liked
