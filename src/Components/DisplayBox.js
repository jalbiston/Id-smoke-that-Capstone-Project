import React from 'react'


export default function DisplayBox(props) {
    return (
        <div>
            {
                props.recipes
                .filter(item => item.id === props.counter) 
                .map(item => 
                <div key={item.id}> 
                    <h1>{item.name}</h1>
                </div>
                
                ) 
            }          
        </div>
    )
}
