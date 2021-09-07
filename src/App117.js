
import React, { useState, useMemo } from 'react'; 

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
                Hook useMemo
                <span role="img" aria="flame">
                    🔥
                </span>
            </div>
        </header>
    )
}

const SuperList = ({ list, log }) => {

    console.log('%cRender <SuperList />' + log, 'color: green')

    return(
        <ul>
            { list.map(item =>(
                <li key={ item }>
                    { item }
                </li>
            )) }
        </ul>
    )
}





const App = () => {
    const [ clicks, setClicks ] = useState(0)

    const add = () => {
        setClicks( clicks + 1 )
    }

    const memoList = useMemo(()=>{
        return(
            <SuperList 
                list={[ 1, 2, 11, 55, 88 ]}
                log='Memorizado'
            />
        )
    }, [ ])

    return(
        <div>
            <Header />
            <button onClick={add}>
                Clicks ({ clicks })
            </button>

            <SuperList 
                list={[ 'orange', 'pink', 'purple', 'yellow' ]}
                log='Normal'
            />

            { memoList }
        </div>
    )
}

export default App