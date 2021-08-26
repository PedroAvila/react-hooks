
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';


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
                Hook useImperativeHandle
                <span role="img" aria="flame">
                    🔥
                </span>
            </div>
        </header>
    )
}

const FancyInput = forwardRef(( props, ref ) => {
    const [ text, setText ] = useState('***')
    const entrada = useRef()

    useImperativeHandle( ref, () => ({
        dispatchAlert: () => {
            alert('Hola')
        },

        setParragraph: (message) => {
            setText(message)
        },
        focusInput: () => {
            entrada.current.focus()
        }
    }))
    

    return (
        <div>
            <p>{ text }</p>
            <input type="text" ref={ entrada }/>
        </div>
    )
})

const App = () => {
    const fancyInput = useRef()

    const handleClick = () => {
        fancyInput.current.focusInput()
    }

    return (
        <div>
            <Header />
            <FancyInput ref={ fancyInput } />
            <button onClick={ handleClick }>
                Dispach
            </button>
        </div>
    )
}

export default App














