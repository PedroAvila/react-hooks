
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
    const [ users, setUsers ] = useState( [] )
    const [ isFetching, setFetching ] = useState( true )
    
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( res => res.json() )
            .then( users => {
                setUsers( users )
                setFetching( false )
            })
    }, [] )

    return (
        <div>
            <Header />
            { isFetching && <h1>Cargando...</h1> }
            <ul>
                { users.map( user => (
                    <li key={ user.id }>
                        { user.name }
                    </li>
                ) ) }
            </ul>
        </div>
    )
}




export default App