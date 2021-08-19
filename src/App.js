import React, { Component, useState } from 'react'



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

    const [ clicks, setClicks ] = useState( 0 )
    

    return (
        <div>
            <Header />
            <button onClick={ () => {
                setClicks( clicks + 1 )
            } }>
                Clicks ({ clicks })
            </button>
        </div>
    )
}

// class App extends Component {
//     state = {
//         clicks: 0
//     }


// addClicks = () => {
//     this.setState( state => ({
//         clicks: state.clicks + 1
//     }) )
// }

// render () {
//     const { clicks } = this.state
//     return (
        
//     )
// }

// }

export default App







