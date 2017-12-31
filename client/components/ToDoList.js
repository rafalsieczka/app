import React from 'react';
import { Button } from 'react-bootstrap';

let nextId = 0;
export default class ToDoList extends React.Component {

    constructor(props){
        super(props);
        this.add = this.add.bind(this);

    }

    add() {
        this.setState({
            id: ++nextId,
            text: this.input.value
            },() => { 
                this.props.addToList(this.state);
                this.input.value = '';
            }
        );
       
    }

    toggle(id){
        this.props.Toggle(id);    
    }

    render(){
        return(
            <div>
                <div>
                    <ul>
                        { this.props.value.map(todo => <li key={todo.id} onClick = {() => this.toggle(todo.id)} style = {{textDecorationLine: todo.completed ? 'line-through':'none'}}>{todo.text}</li>)}
                    </ul>
                </div>
                <div class="form-group">
                    <label for="usr">To do list:</label>
                    <input type="text" class="form-control" id="usr" ref= { node => {this.input = node; }}  />
                    <Button onClick = {this.add}>Add</Button>
                </div>
            </div>
        );
    }
}