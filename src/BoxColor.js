import React from 'react'

const BoxColor = (props) => {

    const {r,g,b} = props

    const color = {backgroundColor: `rgb(${r}, ${g}, ${b})`}
    const colorCode = `rgb(${r}, ${g}, ${b})`

    return(
        <div>
            <div className="box-color rectangle" style={color}>
                <p>{colorCode}</p>
            </div>
        </div>
    )
}

export default BoxColor