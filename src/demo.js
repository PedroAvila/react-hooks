import React from 'react'


const useClientInfo = (name, lastname) => {
    const [ clientInfo, setClientInfo ] = React.useState({
        name,
        lastname
    })

    const getFullname = () => {
        return `${ clientInfo.name } ${ clientInfo.lastname }`
    }    

    return { clientInfo, setClientInfo, getFullname }
}



export const MyComponent = () => {

    const [ color ] = React.useState("teal")
    const { getFullname } = useClientInfo("John", "Doe")

    return (
        <div style={{ background: color }}>
            <h3>{ getFullname() }</h3>
            
        </div>
    )
}





