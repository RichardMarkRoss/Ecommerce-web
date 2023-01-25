import React, { Component } from 'react';
export class Instruction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
    

  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
            
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
    return(
        <div class="card-columns">
        {items.map((item) => ( 
                <div class="card">
                <img class="card-img-top" src= {item.image} alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                  <p class="card-text"> {item.description}</p>
                  <a href="#" class="btn btn-primary">R {item.price.toFixed(2)}</a>
                  </div>
                </div>
              ))}
        </div>
    )
  }
}
}
export default Instruction;