import React, { Component } from 'react';
class Footer extends Component {
  render() {
    return (
        <footer className="text-center text-white mt-4">
        <hr className="text-dark" />
    
        <div className="container">
            <section className="mb-3">
                <a className="btn-link btn-floating btn-lg text-white" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-facebook-f"></i></a>
                <a className="btn-link btn-floating btn-lg text-white" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-twitter"></i></a>
                <a className="btn-link btn-floating btn-lg text-white" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-google"></i></a>
                <a className="btn-link btn-floating btn-lg text-white" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-instagram"></i></a>
                <a className="btn-link btn-floating btn-lg text-white" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-youtube"></i></a>
                <a className="btn-link btn-floating btn-lg text-white" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-github"></i></a>
            </section>
        </div>
        <div className="text-center p-3">
        </div>
    
    </footer>
    );
  }
}

export default Footer;