import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

export default class Menu extends Component {

  render() {
    return (
      <div className='Menu'>
          <Link to="/dashboard">
              Dashboard
          </Link>
          <Link to="/about">
              About
          </Link>
          <Link to='404'>
              404
          </Link>
      </div>
    );
  }
}
