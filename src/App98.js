
import React, { useState } from 'react'



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

      return(
        <header style={ headerStyle }>
          <div>
            
          </div>
          <div style={ subtitleStyles }>
            Hook useState
            <span role="img" aria="flame">
              🔥 
            </span>
          </div>
        </header>
      )
}


const App = () => {
    const [ isActive, setActive ] = useState(false)

    const toggle = () => {
        setActive(!isActive)
    }

    return (
        <div>
            { isActive && <Header /> }
            <button onClick={ toggle }>
                { isActive ? 'Desactivar' : 'Activar' }
            </button>
        </div>
    )
}



export default App
