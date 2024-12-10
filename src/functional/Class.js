import React, { Component, useState } from 'react'
import img1 from './img1.webp';

export default class Class extends Component {
    constructor(props){
        super(props)
        this.state = { name:"vijay",
            firstName:"vasanth"
        };
    }
    changeName = () => {
        this.setState({ name: this.state="arun"});
      };
      componentDidMount() {
        console.log('componentDidMount');
        // Fetch data or set up subscriptions here
      }

      componentDidUpdate() {
        console.log('componentDidUpdate');
        // Do something after the component updates, like fetch data based on new state
      }
      componentWillUnmount() {
        console.log('componentWillUnmount');
        // Clean up (clear timers, cancel network requests, etc.)
      }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.firstName}</h2>
        <p>ndsfj bfjsnfj jdkjsanddddddddddddddddddd </p>
        <img src={img1} height={200} width={200}/>
        <button onClick={this.changeName}>click</button>
      </div>
    )
  }
}
//class 
// componentDidMount
// componentDidUpdate
// componentWillUnmount







