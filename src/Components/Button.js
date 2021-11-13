import React, {useState} from 'react'
import axios from 'axios'


function Button() {
    const [ress, setRess]= useState([])
    const buttonHandler = () => {
        axios.get('/api/getrecipes')
        .then((res)=> setRess(res.data))
        .catch((err) => {console.log(err)})
    }
    return (
        <div>
            <button onClick ={buttonHandler}
            
            >Get Recipes</button>
{ ress.map((obj) => (<div>
    <span className="authorName">{obj.author}</span>
                <span className = "recipeName">{obj.ingredients}</span>
</div>))
            
}
        </div>
    )
}

export default Button
