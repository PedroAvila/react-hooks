import React, { useState, useEffect, useRef } from "react";
import { useDebounce } from "use-debounce";

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

    const [ name, setName ] = useState('')
    const [ search ] = useDebounce( name, 1000 )
    const [ products, setProducts ] = useState([])

    //const entrada = useRef()

    useEffect( ()=> {
       // Solicitud HTTP
       fetch( 'https://universidad-react-api-test.luxfenix.vercel.app/products?name=' + name )
       .then( res => res.json() )
       .then( data => setProducts( data.products ) )             

    }, [ search ] )

    const handleInput = ( e ) => {
        setName( e.target.value )
    }
 
    return (
        <div>
            <Header />
            <input
                 type="text"
                 onChange={ handleInput } 
                 
            />
            
            <ul>
                {products.map( product => (
                    <li key={ product.id }>
                        { product.name }
                    </li>
                ) )}
            </ul>
        </div>
    )
}


export default App