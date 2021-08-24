
import React, { useState, useContext } from 'react'

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
                Hook useContext
                <span role="img" aria="flame">
                    🔥
                </span>
            </div>
        </header>
    )
}

const MyContext = React.createContext()

// Consumir context de forma tradicional 
// const Nieto = () => (
//     <MyContext.Consumer>
//         {( context ) => (
//             <div>
//                 <p>Nieto { context.num }</p>
//                 <button onClick={ context.addNum }>
//                     Nieto Dispatcher
//                 </button>
//             </div>
//         )}
//     </MyContext.Consumer>
// )

const Nieto = () => {
    const { num, addNum } = useContext( MyContext )

    return (
        <div>
            <p>Nieto { num }</p>
            <button onClick={ addNum }>
                Nieto Dispatcher
            </button>
        </div>
    )

}



const Hijo = () => (
    <div>
        <p>Hijo</p>
        <Nieto />
    </div>
)

const App = () => {
    const [ num, setNum ] = useState(0)

    const addNum = () => setNum( num + 1 )

    return (
        <MyContext.Provider value={{
            num,
            addNum
        }}>
            <div>
                <Header />
                <button onClick={ addNum }>
                    App ({ num })
                </button>
                <Hijo />
            </div>
        </MyContext.Provider>
        
    )
}











export default App 