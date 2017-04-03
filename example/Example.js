import React, { Component } from 'react';
import FaBeer from 'react-icons/lib/fa/beer';
import PasswordMask from '../src/index';

export default class Example extends Component {
  state = {
    password: ''
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleBlur(e) {
    console.log('blur')
  }

  handleFocus(e) {
    console.log('focues')
  }

  render() {
    return (
      <div>
        <h1>React Password Mask</h1>

        <PasswordMask
          value={this.state.password}
          id="password"
          name="password"
          placeholder="Enter password"
          onChange={this.handleChange.bind(this)}
          onBlur={this.handleBlur.bind(this)}
          onFocus={this.handleFocus.bind(this)}
          buttonShow={<FaBeer />}
          buttonHide={<FaBeer />}
          inputStyles={{
            padding: '8px',
            fontSize: '16px'
          }}
          buttonStyles={{
            width: '61px'
          }}
        />
      </div>
    );
  }
}
