import React, {useEffect} from 'react'
import "../DisplayBox.css"

export default function DisplayBox(props) {
    function handleRecipeId () {
        props.recipes
        .filter(item => item.id === props.counter) 
        .map(item =>  
            props.setRecipeId(item.id)
        ) 
    }
    useEffect(()=> {
        handleRecipeId()
    },[props.counter])
    return (
        <div>
            {
                props.recipes
                .filter(item => item.id === props.counter) 
                .map(item =>  
                <div key={item.id}> 
                    <h1>{item.name}</h1>
                    <h2>{item.author}</h2>
                    <p>{item.ingredients}</p>
                    <p>{item.instructions}</p>
                    {/* <p>image</p> */}
                </div>
                
                ) 
            }          
        </div>
    )
}
