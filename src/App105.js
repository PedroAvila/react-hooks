
import React, { useState } from 'react'

const Header = () => {
    const subtitleStyles = {
        fontWeight: "bold"
    }
    const headerStyle = {
        margin: "0.6em",
        borderRadius: "0.3em",
        border: "1px solid #d2d2d2",
        padding: "2em 0.4em",
        fontFamily: "monospace",
        fontSize: "17px"
    }

    return (
        <header style={headerStyle}>
            <div>

            </div>
            <div style={subtitleStyles}>
                Hook useState
                <span role="img" aria="flame">
                    🔥
                </span>
            </div>
        </header>
    )
}

const useResize = () => {
    
}

// Los Hooks van en el primer nivel, tampoco se llama en condicionales o en formas anidadas
// SE DEBEN CREAR HOOKS PERSONALIZADOS
const App = () => {
    const [ clicks, setClicks ] = useState(1)
    const add = () => setClicks( clicks + 1 )


    return (
        <div>
            <Header />
            <button onClick={ add }>
                Clicks ({ clicks })
            </button>
        </div>
    )
}



export default App