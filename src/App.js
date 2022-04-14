import React from "react";
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Modal from 'react-bootstrap/Modal';
import './App.css';
import data from './animals.json';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: '',
      showModal: false,
      title: ''
    };
  }

  handleTicket = () => {
    this.setState({
      tickets: this.state.tickets + 1
    });
  }


  addTicket = () => {
    this.setState({
      tickets: this.state.tickets + '🗳'
    });
  }

  hideModalHandler = () => {
    this.setState({
      showModal: false
    });
  }

  showModalHandler = (title) => {
    this.setState({
      showModal: true,
      title: title
    });
  }


  render(){
    return(
      <>
        <Header tickets={this.state.tickets}/>
        <Main 
          addTickets={this.addTickets}
          showModalHandler={this.showModalHandler}
        data={data}
        />
        <Modal 
          show={this.state.showModal}
          onHide={this.hideModalHandler}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {this.state.name}
            </Modal.Title>
          </Modal.Header>
        <Footer />
      </Modal>
      </>
    )
  }
}

export default App;
