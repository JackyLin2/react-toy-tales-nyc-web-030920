import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'



class App extends React.Component{

  state = {
    display: false,
    data: [],
    name: '',
    image: '',
    likes: ''
  }


  fetchData = () => {
    fetch('http://localhost:3000/toys')
    .then(resp => resp.json())
    .then(data => this.setState({ data:data}))
  }

  componentDidMount(){
    this.fetchData()
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  handleChange = (event) => {
    const {value} = event.target
    this.setState({[event.target.name]: value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("Submitted")
    const {name , image, likes} = this.state
    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {"Content-Type": "application/json", Accept: 'application/json'},
      body: JSON.stringify({
        name,
        image,
        likes
      })
    })
    .then(this.setState({
      name:'',
      image:'',
      likes:''
    }))
    .then(this.fetchData)
  }

 

  render(){
    console.log(data)
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm state={this.state} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>{
          this.state.data.map(toys => <ToyContainer toys={toys} key={toys.id} fetchData={this.fetchData}/>)
        }
        
      </>
    );
  }

}

export default App;
