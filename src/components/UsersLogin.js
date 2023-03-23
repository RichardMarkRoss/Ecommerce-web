import React, { Component} from 'react';
import logo from '../logo.svg';

export class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://dummyjson.com/users/1")
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
      return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Loading!
      </header>
    </div>;
    } else {
    return(
        <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Password</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">location</th>
              </tr>
            </thead>
            <tbody>
            {items.map((item) => ( 
              <tr>
                <th scope="row">{item.user.id}</th>
                <td>{item.user.username}</td>
                <td>{item.user.password}</td>
                <td>{item.user.firstname}</td>
                <td>{item.user.lastname}</td>
                <td>{item.user.email}</td>
                <td>{item.user.phone}</td>
                <td><a target="_blank" rel="noreferrer" href={"https://www.google.com/maps/search/?api=1&query="+item.address.coordinates.lat+"%2C"+item.address.coordinates.lng}>View location</a></td>
              </tr>
                ))}
            </tbody>
       </table>
    )
  }
}
}
export default UserLogin;