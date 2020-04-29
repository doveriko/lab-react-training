import React from 'react'

const multiGreeting = (language) => {
    switch(language) {
        case "de": return "Hallo";
        case "en": return "Hello";
        case "es": return "Hola";
        case "fr": return "Bonjour";
        default: return "Hello";
    }
}

const Greetings = (props) => {

    const greeting = multiGreeting(props.lang)

    return(
        <div className="greetings rectangle">
            <p>{greeting} {props.children}</p>
        </div>
    )
}

export default Greetings