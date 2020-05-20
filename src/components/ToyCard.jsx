import React, { Component } from 'react';

class ToyCard extends Component {
  state = {
    likes: this.props.toys.likes
  }

  handleDelete = () => {
    const id = this.props.toys.id
    fetch(`http://localhost:3000/toys/${id}`, {
      method: "DELETE"
    })
       .then(this.props.fetchData)
  }

  handleUpdate = () => {
    const likes = this.state.likes
    const id = this.props.toys.id
    fetch(`http://localhost:3000/toys/${id}`, {
      method: "PATCH",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        likes
      })
  }).then(this.setState(prevState => ({likes: prevState.likes + 1})))
    .then(this.props.fetchData)
  }

  render() {
    return (
      <div className="card">
        <h2>{this.props.toys.name}</h2>
        <img src={this.props.toys.image} alt={this.props.toys.name} className="toy-avatar" />
        <p>{this.props.toys.likes} Likes </p>
        <button onClick={this.handleUpdate} className="like-btn"> Like {'<3'}</button>
        <button onClick={this.handleDelete} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
