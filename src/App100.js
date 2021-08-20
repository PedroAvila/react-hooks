
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
    const [ clicks, setClicks ] = useState(0)
    const [ title, setTitle ] = useState( 'Hook usState' )


const addClicks = () => {
    setClicks( clicks + 1 )
}

const handleInput = (e) => {
    setTitle( e.target.value )
}

return (
    <div>
        <Header />
        <input 
            type="text"
            value={ title }
            onChange={ handleInput }
        />
        <button onClick={ addClicks }>
            Clicks ({ clicks })
        </button>
        <h3>{ title }</h3>
    </div>
)

}





export default App