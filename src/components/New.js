import React, { Component } from 'react';
import api from '../services/api';

import '../css/New.css';

// _____________________________________________
// Componente que representa o 'Header' da página
// Onde tem título e a funcionalidade de
// Adicionar uma nova task
// ______________________________________________
class New extends Component {
  state = {
    description: '',
  };

  // Função que lida com o "Submit" da informação do input
  // Chamada quando o botão (+) é apertado.
  handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('tasks', {
      description: this.state.description,
    });
    e.target.children[0].value = '';
    this.setState({ description: '' });
  };

  // Função chamada toda vez que o usuario muda
  // o input (adiciona ou remove texto).
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Render do JSX
  render() {
    return (
      <header>
        <h1>uTask</h1>
        <form id="new-todo" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="description"
            placeholder="Add uma nova tarefa.."
            onChange={this.handleChange}
            value={this.state.description}
          />
          <button
            type="submit"
            disabled={
              this.state.description.length === 0 ||
              this.state.description === ' ' ||
              this.state.description === '  ' ||
              this.state.description.includes('   ', 0)
            }
          >
            +
          </button>
        </form>
      </header>
    );
  }
}

export default New;
