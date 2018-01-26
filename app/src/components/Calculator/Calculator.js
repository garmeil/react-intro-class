import React from "react";
import calculatorImg from "../../calculator.png";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      header: "Calculator",
      display: "0",
      operator: "",
      temp: 0,
      resetDisplay: false
    };
    this.clearDisplay = this.clearDisplay.bind(this);
    // this.updateHeader = val => (this.state.header = val);
  }
  updateHeader(val) {
    this.setState({ header: val });
  }
  setDisplay(val) {
    if (this.state.resetDisplay === true) {
      this.clearDisplay();
    }
    let display = this.state.display === "0" ? val : this.state.display + val;

    this.setState({
      display: this.state.display.length < 13 ? display : this.state.display
    });
  }
  setOperator(operator) {
    !this.state.operator
      ? this.setState({
          operator: operator,
          temp: parseInt(this.state.display, 10),
          display: "0"
        })
      : false;
  }
  calculate() {
    if (this.state.operator === "") {
      return;
    }
    let result;
    switch (this.state.operator) {
      case "-":
        result = this.state.temp - Number(this.state.display);
        break;
      case "+":
        result = this.state.temp + Number(this.state.display);
        break;
      case "*":
        result = this.state.temp * Number(this.state.display);
        break;
      case "/":
        result = this.state.temp / Number(this.state.display);
        break;
    }
    this.setState({ display: String(result), resetDisplay: true });
  }
  clearDisplay() {
    this.setState({ display: "0", operator: "", temp: 0, resetDisplay: false });
  }
  render() {
    return (
      <div id="calculator-container">
        <input
          id="header-input"
          onChange={e => this.updateHeader(e.target.value)}
        />
        <h1 id="header"> {this.state.header}</h1>
        <img
          className="remove-highlight"
          src={calculatorImg}
          alt="calculator"
        />
        <div id="calculator-mask" className="remove-highlight">
          <div className="output">
            <span className="total">{this.state.display}</span>
          </div>

          <div className="btn clear" onClick={() => this.clearDisplay()} />

          <div
            className="btn zero"
            onClick={() => {
              this.setDisplay("0");
            }}
          />
          <div
            className="btn one"
            onClick={() => {
              this.setDisplay("1");
            }}
          />
          <div
            className="btn two"
            onClick={() => {
              this.setDisplay("2");
            }}
          />
          <div
            className="btn three"
            onClick={() => {
              this.setDisplay("3");
            }}
          />
          <div
            className="btn four"
            onClick={() => {
              this.setDisplay("4");
            }}
          />
          <div
            className="btn five"
            onClick={() => {
              this.setDisplay("5");
            }}
          />
          <div
            className="btn six"
            onClick={() => {
              this.setDisplay("6");
            }}
          />
          <div className="btn seven" onClick={() => this.setDisplay("7")} />
          <div
            className="btn eight"
            onClick={() => {
              this.setDisplay("8");
            }}
          />
          <div
            className="btn nine"
            onClick={() => {
              this.setDisplay("9");
            }}
          />

          <div
            className="btn equal"
            onClick={() => {
              this.calculate();
            }}
          />
          <div
            className="btn multiply"
            onClick={() => {
              this.setOperator("*");
            }}
          />
          <div
            className="btn divide"
            onClick={() => {
              this.setOperator("/");
            }}
          />
          <div
            className="btn subtract"
            onClick={() => {
              this.setOperator("-");
            }}
          />
          <div
            className="btn add"
            onClick={() => {
              this.setOperator("+");
            }}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
