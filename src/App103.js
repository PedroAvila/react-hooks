
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
    const [ num, setNum ] = useState(0)
    const [ emoji, setEmoji ] = useState( '🐯' )

    useEffect( () => {
        alert( 'useEffect  🎇' )
    }, [ emoji, num ])

    const addNum = () => setNum( num + 1 )

    const toggleEmoji = () => {
        const nextEmoji = emoji === '🐯' ? '🐵' : '🐯'
        setEmoji( nextEmoji )
    }

    return(
        <div>
            <Header />
            <button onClick={ addNum }>
                ADD ( { num } )
            </button>
            <button onClick={ toggleEmoji }>
                Alternar Emoji
            </button>
            <h1>
                { emoji }
            </h1>
        </div>
    )
}








export default App