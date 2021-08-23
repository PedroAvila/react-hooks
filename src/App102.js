
import React, { useState, useEffect } from 'react';


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

const App = () => {
    const [ mouseX, setMouseX ] = useState(0)
    const [ mouseY, setMouseY ] = useState(0)
    
    const handleMove = ( e ) => { 
        setMouseX( e.clientX )
        setMouseY( e.clientY )
    }

    useEffect( () => {
        window.addEventListener( 'mousemove', handleMove )
        return () => {
            window.removeEventListener( 'mousemove', handleMove )
        }
    } )

    return (
        <div>
            <Header />
            <h1>
                X: { mouseX } Y: { mouseY }
            </h1>
        </div>
    )

}

export default App





