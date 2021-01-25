import React, { Component } from 'react';
import Plus from '../assets/icons/Plus.svg';
import api from '../services/api';

class MainPage extends Component{
    state = {
        todos: [],
    }
    async componentDidMount(){
        const response = await api.get('tasks');

        this.setState({ todos: response.data });
    }

    render() {
        return (
            <section id="todo-list">
                { this.state.todos.map(todos => (
                <article key={todos._id}>
                   <strong>{todos.description}</strong>
                   <button type="button">+</button>
                   <button>-</button>
                </article>
                )) }
            </section>
        )
    }
}



export default MainPage;
