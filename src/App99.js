
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

    const [ state, setState ] = useState({
        clicks: 0,
        title: ''
    })

    const merge = (nextState) => {
        setState({
            ...state,
            ...nextState
        })
    }

    const addClick = () => {
        merge({
            ...state,
            clicks: state.clicks + 1
        })
    }

    const handleInput = ( e ) => {
        const title = e.target.value

        merge({ 
            title 
        })
    }

    return (
        <div>
            <Header />
            <input 
                type="text"
                value={ state.title }
                onChange={ handleInput }
            />
            <button onClick={ addClick }>
                Clicks ({ state.clicks })
            </button>
            <h3>{ state.title }</h3>
        </div>
    )
}




export default App