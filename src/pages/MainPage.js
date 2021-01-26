import React, { Component } from 'react';
import api from '../services/api';
import io from 'socket.io-client';

import placeholder from '../assets/PlaceholderBg.png';
import '../css/Main.css';

class MainPage extends Component {
  state = {
    todos: [],
  };
  async componentDidMount() {
    this.registerToSocket();

    const response = await api.get('tasks');

    this.setState({ todos: response.data });
  }

  registerToSocket = () => {
    const socket = io('http://localhost:3333');

    socket.on('store', (newTask) => {
      this.setState({ todos: [newTask, ...this.state.todos] });
    });

    socket.on('conclude', (concludedTask) => {
      this.setState({
        todos: this.state.todos.map((todo) =>
          todo._id === concludedTask._id ? concludedTask : todo,
        ),
      });
    });

    socket.on('remove', (removedTask) => {
      this.setState({
        todos: this.state.todos.filter((todo) => todo._id !== removedTask._id),
      });
    });
  };

  handleConclude = (id) => {
    api.post(`/tasks/${id}/conclude`);
  };

  handleRemove = (id) => {
    api.delete(`/tasks/${id}/remove`);
  };

  handleHoverEnter = async (e) => {
    e.target.nextSibling.style.opacity = '1';
  };
  handleHoverLeave = async (e) => {
    e.target.nextSibling.style.opacity = '0';
  };
  handleBtnHoverEnter = async (e) => {
    e.currentTarget.style.opacity = '1';
  };
  handleBtnHoverLeave = async (e) => {
    e.currentTarget.style.opacity = '0';
  };

  render() {
    return (
      <article>
        {/* Seção de TO DO */}
        <ul id="todo-list">
          <h2>To Do</h2>

          {this.state.todos
            .filter((todo) => todo.feito === false)
            .map((todo) => (
              <li key={todo._id}>
                <p
                  onMouseEnter={this.handleHoverEnter}
                  onMouseLeave={this.handleHoverLeave}
                >
                  {todo.description}
                </p>
                <div
                  className="containerBtn"
                  onMouseEnter={this.handleBtnHoverEnter}
                  onMouseLeave={this.handleBtnHoverLeave}
                >
                  <button
                    type="button"
                    className="checkBtn"
                    onClick={() => this.handleConclude(todo._id)}
                  >
                    &#x2713;
                  </button>
                  <button
                    type="button"
                    className="removeBtn"
                    onClick={() => this.handleRemove(todo._id)}
                  >
                    -
                  </button>
                </div>
              </li>
            ))}
          {this.state.todos.filter((todo) => todo.feito === false).length ===
          0 ? (
            <img src={placeholder} alt="Não há nenhuma tarefa por aqui ;)" />
          ) : (
            <li></li>
          )}
        </ul>
        {/* Seção de DONE */}
        <ul id="done-list">
          <h2>Done</h2>
          {this.state.todos
            .filter((todo) => todo.feito === true)
            .map((todo) => (
              <li key={todo._id}>
                <p
                  onMouseEnter={this.handleHoverEnter}
                  onMouseLeave={this.handleHoverLeave}
                >
                  {todo.description}
                </p>
                <div
                  className="containerBtn"
                  onMouseEnter={this.handleBtnHoverEnter}
                  onMouseLeave={this.handleBtnHoverLeave}
                >
                  {' '}
                  <button
                    type="button"
                    className="refreshBtn"
                    onClick={() => this.handleConclude(todo._id)}
                  >
                    &#x21bb;
                  </button>
                  <button
                    type="button"
                    className="removeBtn"
                    onClick={() => this.handleRemove(todo._id)}
                  >
                    -
                  </button>
                </div>
              </li>
            ))}
          {this.state.todos.filter((todo) => todo.feito === true).length ===
          0 ? (
            <img src={placeholder} alt="Não há nenhuma tarefa por aqui ;)" />
          ) : (
            <li></li>
          )}
        </ul>
      </article>
    );
  }
}

export default MainPage;
