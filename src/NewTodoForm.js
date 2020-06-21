import React, { Component } from 'react';
import TodoList from './TodoList';
import uuid from 'uuid/v4';

class NewTodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task : "",
        }

        this.handleTodo = this.handleTodo.bind(this);
        this.submitTodo = this.submitTodo.bind(this);
        
    }
    handleTodo(e) {
        this.setState({
            task : e.target.value
        })
    }
    submitTodo(e) {
        e.preventDefault();
        this.props.createTodo({...this.state, id: uuid()});
        this.setState({
            task : ""
        })
    }
    render() {
        return(
            <form onSubmit={this.submitTodo}>
                <label htmlFor="task">New Todo</label>
                <input 
                type="text" 
                placeholder="Enter new todo" 
                id="task"
                name="task"
                value={this.state.task} 
                onChange={this.handleTodo} />
                <button>Add</button>
            </form>
        )
    }
}


export default NewTodoForm;