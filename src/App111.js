
import { useState, useReducer } from "react";


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
                Hook useReducer
                <span role="img" aria="flame">
                    🔥
                </span>
            </div>
        </header>
    )
}

const reducer = (state, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            }
        case 'SET_TITLE':
            return {
                ...state,
                title: action.title
            }

        default:
            break;
    }
}

const initialState = {
    count: 0,
    title: 'Hola'
}

const App = () => {
    // const [ count, setCount ] = useState(0)
    // const [ title, setTitle ] = useState( 'Hola' )

    const [state, dispach] = useReducer(reducer, initialState)
    

    const increment = () => {
        dispach({ type:'INCREMENT' })
    }

    const decrement = () => {
        dispach({ type:'DECREMENT' })
    }

    const handleTitle = (e) => {
        dispach({ type:'SET_TITLE', title: e.target.value })
    }

    return (
        <div>
            <Header />
            <input
                type='text'
                onChange={handleTitle}
                value={state.title}
            />
            <button onClick={increment}>
                Increment
            </button>
            <button onClick={decrement}>
                Decrement
            </button>
            <h1>
                { state.count } - { state.title }
            </h1>
        </div>
    )

}

export default App












