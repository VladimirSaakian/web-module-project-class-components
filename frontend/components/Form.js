import React from "react";

class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            input: ""
        }
    }
    handleAdd = (e) =>{
        e.preventDefault();
        this.props.handleAdd(this.state.input);
      }
    
    handleChange = (e) =>{
        this.setState({
            ...this.state,
            input: e.target.value
        });
    }

    render(){
        return(
            <form>
                <input onChange={this.handleChange} />
                <button onClick={this.handleAdd}>Add</button>
            </form>
        );
    }
   

}

export default Form;
