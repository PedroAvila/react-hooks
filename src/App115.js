import React, { useState, useCallback } from 'react';



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
                Hook useCallback
                <span role="img" aria="flame">
                    🔥
                </span>
            </div>
        </header>
    )
}

const getRandomColor = () => '#' + Math.random().toString(16).slice(2, 8)

const Button = React.memo(({ callback, children }) => {

    const styles = {
        padding: '1em',
        fontSize: '20px',
        background: getRandomColor()
    }

    return(
        <button style={styles} onClick={ callback }>
            { children }
        </button>
    )
})

const App = () => {
    const [ a, setA ] = useState(0)

    const incrementA = useCallback(() => {
        setA( a => a + 1 )
    }, [])

    return(
        <div>
            <Header />
            <Button callback={ incrementA }>
                Increment A 
            </Button>
            <h1>
                a: { a }
            </h1>
        </div>
    )
}




export default App