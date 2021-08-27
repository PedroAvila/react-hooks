import React, { useState } from 'react';

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
                React.memo
                <span role="img" aria="flame">
                    🔥
                </span>
            </div>
        </header>
    )
}

// React.memo()  HOC
const Counter = React.memo(( { count } ) => {

    console.log("%cRender <Counter />", "color: blue")

    return(
        <h1>
            { count }
        </h1>
    )
})

const Title = React.memo(( { text } ) => {
    console.log("%cRender <Title />", "color: orangered")

    return(
        <h1>
            { text }
        </h1>
    )
})

const TitleNested = React.memo(
    ({ info }) => {
    console.log("%cRender <TitleNested />", "color: purple")

    return(
        <h1>
            { info.text }
        </h1>
    )
}, ( prevProps, nextProps ) => {
    // Si retorna true no se renderiza
    // Si retorna false, esta si se renderiza
    // console.log( prevProps, nextProps )
    return prevProps.info.text === nextProps.info.text
})

const App = () => {
    const [ title, setTitle ] = useState('')
    const [ count, setCount ] = useState(0)

    const handleInput = (e) => {
        setTitle( e.target.value )
    }

    const handleAdd = () => {
        setCount( count + 1 )
    }

    return (
        <div>
            <Header />
            <input
                type="text"
                onChange={ handleInput }
            />
            <button onClick={ handleAdd }>
                Add
            </button>
            <Counter count={ count } />
            <Title text={ title } />
            <TitleNested 
                info={{
                    text: title
                }}
            />
        </div>
    )
}
export default App









