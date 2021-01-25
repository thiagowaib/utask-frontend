import React, { Component } from 'react';
import api from '../services/api';

class New extends Component{
    state = {
        description: '',
    };

    handleSubmit =  e =>{
        e.preventDefault();

        //const data = new FormData();

        //data.append('description', this.state.description);

        e.handlePost();
        }
      
        
    handlePost = e =>  {
            this.setState({ description: "aaa" });
            console.log(this.state);
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    render (){
        return (
            <form id="new-Todo" onSubmit={this.handleSubmit}>
                <input type="text"
                    name="description"
                    placeholder="Add uma nova Tarefa"
                    onChange={this.handleChange}
                    value={this.state.description}/>
                <button type="submit">Enviar</button>
            </form>       
    )
}
}

export default New;
