import React, { Component } from 'react';

class ToyForm extends Component {

  render() {
    return (
      <div className="container" onSubmit={this.props.handleSubmit} >
        <form className="add-toy-form">
          <h3>Create a toy!</h3>
          <input type="text" name="name" value={this.props.state.name} placeholder="Enter a toy's name..." className="input-text" onChange={this.props.handleChange}/>
          <br/>
          <input type="text" name="image" value={this.props.state.image} placeholder="Enter a toy's image URL..." className="input-text" onChange={this.props.handleChange}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
