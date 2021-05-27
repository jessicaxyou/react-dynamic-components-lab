import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render () {
    const opacity = 1
    const newOpacity = opacity - 0.1
    while (newOpacity > 0.2) {
      return newOpacity;
      newOpacity - 0.1;
    }

  }
 

  // render() {
  //   let newOpacity = this.props.opacity - x
  //     if (newOpacity <= 0.2) {
  //       return null
  //     } else {
  //       let x = 0.1
  //       return this.render(
  //         <div className="color-box" style={{opacity: this.props.opacity}}>
  //           </div>
  //       )
  //     }
  //   }