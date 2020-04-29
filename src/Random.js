import React from 'react'

const randomizer = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
}

const Random = (props) => {

    const randomValue = randomizer(props.min, props.max)

    return(
        <div className="random rectangle">
            <p>Random value between {props.min} and {props.max} => {randomValue}</p>
        </div>
    )
}

export default Random