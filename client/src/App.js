/** @format */

import React, { Component } from "react";
import "./style/styles.css";
import { sendGreeting, getGreetings } from "./APIUtils";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "", greetings: [], greetFlag: true };
  }

  componentDidMount() {
    getGreetings().then((response) => {
      if (response.status === 200) {
        this.setState({ greetings: response.data });
      }
    });
  }

  componentDidUpdate(prevProps, prevState, snapshots) {
    if (prevState.greetFlag !== this.state.greetFlag) {
      getGreetings().then((response) => {
        if (response.status === 200) {
          this.setState({ greetings: response.data });
        }
      });
    }
  }

  handleChange = (e) => {
    const {
      target: { value },
    } = e;

    this.setState({ value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    sendGreeting(this.state.value).then((response) => {
      if (response.status === 200) {
        this.setState((prevState) => ({
          greetFlag: !prevState.greetFlag,
          value: "",
        }));
      }
    });
  };

  render() {
    const { greetings } = this.state;
    return (
      <main className='main'>
        <h1 className='main__title'>Welcome to GR2DA 🎨</h1>
        <form className='main__form' onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='greetings'
            className='main__input'
            placeholder='Say hello!'
            value={this.state.value}
            onChange={this.handleChange}
            autoFocus
            autoComplete='off'
          />
        </form>
        <ul className='main__greetings'>
          {greetings.map((greeting) => (
            <li className='main__greeting' key={greeting._id}>
              {greeting.text}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default App;
