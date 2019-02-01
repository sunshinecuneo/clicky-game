import React, { Component } from 'react';

class Example extends Component {
    render() {
        return(
            <h1>The worlds going to the dogs!</h1>
        )
    }
}
export default Example

export function Sample (props) {
    return <h2>Hello {props.name}!</h2>
}
