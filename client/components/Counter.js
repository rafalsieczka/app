import React from 'react';
import { Button } from 'react-bootstrap';




export default class Counter extends React.Component {
    constructor(props) {
        super(props)
    }

    increment() {
        this.props.onIncerment();
    }

    decrement() {
        this.props.onDecrement();
    }

    render() {
        return(
            <div>
                <h1>{this.props.value.counter}</h1>
                <Button onClick = {() => this.increment()}>+</Button>
                <Button onClick = {() => this.decrement()}>-</Button>
            </div>
        );
    }

}
