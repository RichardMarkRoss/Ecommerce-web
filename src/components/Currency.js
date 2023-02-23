import React, { Component } from 'react';
class Currency extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
        
    
      }
    
      componentDidMount() {
        fetch("https://api.exchangerate.host/latest")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: Object.keys(result.rates)
                
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
          
        render() {
            const { error, isLoaded, items } = this.state;

            if (error) {
              return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
              return <div>Loading...</div>;
            } else {
                console.log(items);
            return(
                <ol>
                {items.map((item) => ( 
                          <li>{item}</li>
                      ))}
                </ol>
            )
          }
        }
}

export default Currency;