import React, { Component } from 'react';
import Plus from '../assets/icons/Plus.svg';
import api from '../services/api';
import io from 'socket.io-client';
 

class MainPage extends Component{
    state = {
        todos: [],
        feito: false,
    }
    async componentDidMount(){
        this.registerToSocket();

        const response = await api.get('tasks');

        this.setState({ todos: response.data });
    }

    registerToSocket = () =>{
        const socket = io('http://localhost:3333');

        socket.on('tasks', newTask =>{
            this.setState({ todos: [newTask, ...this.state.todos] });
        })

        
    }

    handleConcludeTrue = (id) => {
        api.post(`/tasks/${id}/concludeTrue`); // transforma em true
    }

    handleConcludeFalse = (id) => {
        api.post(`/tasks/${id}/concludeFalse`); // transforma em false
    }
    
    render() {
        return (
            <section id="todo-list">
                { this.state.todos.map(todo => (
                <article key={todo._id}>
                   <strong>{todo.description}</strong>
                   <form >
                   <button type="button" onChange={this.handleConcludeTrue(todo._id)}>+</button>
                   <button>-</button>
                   </form>
                </article>
                )) }
            </section>
        )
    }
}



export default MainPage;
