import React from "react"
import './App.css';
import Screen from './Screen'
import Button from "./Button"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentNumber: [],
      firstNumberExists: false,
      secondNumberExists: false,
      firstNumber: "0",
      secondNumber: "0",
      symbol: ""
    }
    this.handleClick = this.handleClick.bind(this)
    this.calculate = this.calculate.bind(this)
  }

  // Every time a button is clicked, this function is triggered
  handleClick(event) {
    console.log(this.state)
    const { value } = event.target
    const symbolRegex = /[+\-*/]/
    const equalsRegex = /[=]/

    // Was a symbol button pressed?
    if (symbolRegex.test(value)) {

      // This is triggered if this is the first number in the calculation
      if (!this.state.firstNumberExists) {
        this.setState(prevState => {
          return { 
            currentNumber: [],
            firstNumberExists: true,
            symbol: value
          }
        })
      }
      // TODO if this is the second number in the calculation, it should act as if equals has been called and set the next calculation type (e.g. + or -)
    }

    // Was the equals button pressed?
    else if (equalsRegex.test(value)) {

      // TODO if the equals button is pressed again the calculation happens once more
      if (this.state.firstNumberExists && this.state.secondNumberExists) {

      }

      else {
        const answer = this.calculate(this.state.firstNumber, this.state.secondNumber, this.state.symbol)
        this.setState({
          secondNumberExists: true,
          currentNumber: answer
        })
      }
      
    }

    // For any other button the number is added to currentNumber and either firstNumber or secondNumber
    else {

      // if this is the first number to be entered
      if (!this.state.firstNumberExists) {
        this.setState(prevState => {
          return {
            currentNumber: prevState.currentNumber.concat(value),
            firstNumber: prevState.currentNumber.concat(value)
          }
        })
      }

      // if this is the second nuber to be entered
      else if (this.state.firstNumberExists && !this.state.secondNumberExists) {
        this.setState(prevState => {
          return {
            currentNumber: prevState.currentNumber.concat(value),
            secondNumber: prevState.currentNumber.concat(value)
          }
        })
      }
    }
  }

  // Function that does the calculation. Takes strings as inout and converts to ints
  calculate(a, b, sign) {

    const firstNum = parseInt(a.join(''))
    const secondNum = parseInt(b.join(''))

    if (sign === "+") {
      return firstNum + secondNum
    }
    else if (sign === "-") {
      return firstNum - secondNum
    }
    else if (sign === "*") {
      return firstNum * secondNum
    }
    else if (sign === "/") {
      return firstNum / secondNum
    }
    else {
      return firstNum
    }
  }

  render() {
    return(
      <div className="container">
        <Screen number={this.state.currentNumber} firstNumber={this.state.firstNumber}/>
        <div className="button-container">
          <Button display="" value="" />
          <Button display="" value="" />
          <Button display="" value="" />
          <Button display="" value="" />
          <Button display="7" value="7" onClick={this.handleClick}/>
          <Button display="8" value="8" onClick={this.handleClick}/>
          <Button display="9" value="9" onClick={this.handleClick}/>
          <Button display="+" value="+" onClick={this.handleClick}/>
          <Button display="4" value="4" onClick={this.handleClick}/>
          <Button display="5" value="5" onClick={this.handleClick}/>
          <Button display="6" value="6" onClick={this.handleClick}/>
          <Button display="-" value="-" onClick={this.handleClick}/>
          <Button display="1" value="1" onClick={this.handleClick}/>
          <Button display="2" value="2" onClick={this.handleClick}/>
          <Button display="3" value="3" onClick={this.handleClick}/>
          <Button display="=" value="=" onClick={this.handleClick}/>
          <Button display="0" value="0" onClick={this.handleClick}/>
          <Button display="" value="" />
          <Button display="" value="" />
          <Button display="Hi!" value="" />
        </div>
      </div>
    )
  }
}

export default App;
