import React, { Component } from 'react'
import Triangle from './components/Triangle'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vertices: [[0, 60], [30, 0], [60, 60]],
      color: getRandomColor(),
      style: {
        animation: 'bounce 1.2s ease both infinite',
        transformOrigin: '0% 50% 100%',
        delay: '1ms'
      }
    }
  }

  changeColor = () => {
    this.setState({
      color: getRandomColor()
    })
  }

  render() {
    return (
      <svg width='300' height='300'>
        <Triangle vertices={this.state.vertices}
                  color={this.state.color}
                  styles={this.state.style}
                  handleClick={this.changeColor} />
      </svg>
    )
  }
}

function getRandomColor () {
  const clrs = ['#FFE200', '#34A766', '#0072BB']
  return clrs[Math.floor(Math.random() * clrs.length)]
}

export default App
