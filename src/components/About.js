import React, { Component } from 'react';
import Chart from './sub-components/Chart';
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      rates: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://api.exchangerate.host/latest?base=ZAR")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            rates: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    document.getElementById("txt-primary").value= this.state.value1;
    document.getElementById("txt-secondary").value= this.state.value2;
    event.preventDefault();
  }


  render() {
    const { error, isLoaded, rates } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      var tifOptions = [];

      Object.keys(rates.rates).forEach(function(key) {
      tifOptions.push(<option value={key}>{rates.rates[key]}</option>);
      });
    return (

        <div>
          <h2>Currency Exchange</h2>
          <hr/>

        <form onSubmit={this.handleSubmit}>
        <input id="exhange-amount" type="number" />
        <select value={this.state.value1} id="primary" class="input">
        {tifOptions.map(rate => (
                    <option value={rate.props.value}>{rate.props.value}</option>
                  ))}
        </select>
        <input id="amount" type="number" />
        <select value={this.state.value2} id="secondary" class="input">
        {tifOptions.map(rate => (
                    <option value={rate.props.value}>{rate.props.value}</option>
                  ))}</select>   
        <input id="btn-convert" type="button" value="Convert" />   
      </form>
      <p id="result">
        <span id="txt-primary"></span>
        <span id="txt-secondary"></span>
        <span id="txt-tertiary"></span>
      </p>   
      <Chart />
      </div>
    );
  }
}
}

export default About;