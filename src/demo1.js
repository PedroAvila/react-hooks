import React from 'react'

export class MyHelloComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { myText: "hello" }
        //this.onChangeText = this.onChangeText.bind(this)
    }

    onChangeText = () => {
        this.setState({ myText: "world" })
    }

    render() {
        return (
            <>
                <h3>{this.state.myText}</h3>
                <button
                    onClick={ this.onChangeText }
                >
                    Change text
                </button>
            </>
        )
    }
}



