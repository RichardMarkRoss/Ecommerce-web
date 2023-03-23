import React, { Component } from 'react';
import './Products.css';

export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    fetch("https://dummyjson.com/product")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.products
            
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
<div className="row">
{items.map((item) => ( 
  <div className="column">
    <div className="card">
    <img className="card-img-top" src= {item.thumbnail} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text"> {item.description}</p>
            <a href="#" className="btn btn-primary">$ {item.price.toFixed(2)}</a>
          </div>
        </div>
    </div>
  ))}
</div>
    )
  }
}
}
export default Products;