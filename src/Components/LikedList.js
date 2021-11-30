import React from 'react'
import Liked from './Liked'

function LikedList(props) {
    console.log(props.array, "LikedList")
    return (
        <div>
            {props.array.map((obj) => {
                 <div>
                 <h1> {obj.name}</h1>
                 <h2>{obj.ingredients}</h2>
                 <p>{obj.instructions}</p>
             </div>
            })}
        </div>
    )
}

export default LikedList
