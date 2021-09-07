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
                Hook Personalizados
                <span role="img" aria="flame">
                    🔥
                </span>
            </div>
        </header>
    )
}

const useSizes = () =>{
    const [ width, setWith ] = useState(window.innerWidth)
    const [ height, setHeight ] = useState(window.innerHeight)

    // Agregar listener
    const handleResize = () => {
        setWith(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(()=> {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return{
        width,
        height
    }
}

const App = () => {
    const { height, width } = useSizes()

    return(
        <div>
            <Header />
            <h1>
                Width: { width }px Height: { height }px
            </h1>
        </div>
    )
}



export default App 