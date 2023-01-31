import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { HiSwitchHorizontal } from 'react-icons/hi';
import Dropdown from 'react-dropdown';
import Chart from './sub-components/Chart';
import './About.css';

function About() {
  
  // Initializing all the state variables 
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("zar");
  const [to, setTo] = useState("usd");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);
  
  // Calling the api whenever the dependency changes
  useEffect(() => {
    Axios.get(
`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
   .then((res) => {
      setInfo(res.data[from]);
    })
  }, [from]);
  
  // Calling the convert function whenever
  // a user switches the currency
  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info])
    
  // Function to convert the currency
  function convert() {
    var rate = info[to];
    setOutput(input * rate);
  }
  
  // Function to switch between two currency
  function flip() {
    var temp = from;
    setFrom(to);
    setTo(temp);
  }
  
  return (
    <div className="About">
      <div className="heads">
        <h1>Currency converter</h1>
      </div>
      <div className="contain">
        <div className="left">
          <h4>Amount</h4>
          <input type="text" class="input-group mb-3"
             placeholder="Enter the amount" 
             onChange={(e) => setInput(e.target.value)} />
        </div>
        <div className="middle">
          <h4>From</h4>
          <Dropdown className='myClassName' options={options} 
                    onChange={(e) => { setFrom(e.value) }}
          value={from} placeholder="From" />
        </div>
        <div className="switch">
          <HiSwitchHorizontal size="30px" 
                        onClick={() => { flip()}}/>
        </div>
        <div className="right">
          <h4>To</h4>
          <Dropdown className='myClassName' options={options} 
                    onChange={(e) => {setTo(e.value)}} 
          value={to} placeholder="To" />
        </div>
      </div>
      <div className="result">
        <button onClick={()=>{convert()}}>Convert</button>
        <h3>Converted Amount:</h3>
        <p>{input+" "+from+" = "+output.toFixed(2) + " " + to}</p>
      </div>
    </div>
  );
}
  
export default About;