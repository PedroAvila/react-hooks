
import React, { useState, useEffect, useLayoutEffect } from 'react'

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
    const [ count, setState ] = useState(0)

    useEffect(() => {
        console.log('useEffect 1')
    }, [ count ])

    useEffect(() => {
        console.log('useEffect 2')
    }, [ count ])

    // useEffect -> asincrono
    // useEffect -> se ejecuta después de que se actualiza el DOM
    // useLayoutEffect -> sincrono
    // useLayoutEffect -> se ejecuta antes de la actualizacion DOM  

    useLayoutEffect(() => {
        console.log('useLayoutEffect 1')
    }, [ count ])

    useLayoutEffect(() => {
        console.log('useLayoutEffect 2')
    }, [ count ])

    const add = () => setState( count + 1 )

    return (
        <div>
            <Header />
            <button onClick={ add }>
                Add ({ count })
            </button>
        </div>
    )
}





export default App