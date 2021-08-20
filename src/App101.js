
import React, { useState, useEffect } from 'react'


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
    const [ clicks, setClicks ] = useState(0)

    
    
    useEffect( () => {
        // componentDidMount
        // componentDidUpdate
        console.log('Dentro de UseEffect', clicks)
        console.log('%c--------------------------', 'color: green')

        return () => {
            // componentWillUnmount
            console.log('Return de UseEffect', clicks)
        }
    })

    const add = () => setClicks( clicks + 1 )


    return (
        <div>
            <Header />
            <button onClick={ add }>
                Clicks ({clicks})
            </button>
            
        </div>
    )

}


export default App