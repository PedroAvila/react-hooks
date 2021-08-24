import React, { useRef } from 'react';

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
                Hook useRef
                <span role="img" aria="flame">
                    🔥
                </span>
            </div>
        </header>
    )
}

const App = () => {
    const entrada = useRef()
    const focus = () => entrada.current.focus()
    const blur = () => entrada.current.blur()

    return(
        <div>
            <Header />
            <input
                type="text"
                placeholder="Ingresa tu texto" 
                ref={ entrada }
            />
            <button onClick={ focus }>
                Focus
            </button>
            <button onClick={ blur }>
                Blur
            </button>
        </div>
    )
}

export default App