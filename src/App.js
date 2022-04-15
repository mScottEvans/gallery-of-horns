import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
// import SelectedBeast from './SelectedBeast';
import Modal from 'react-bootstrap/Modal';
import './App.css';
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: '',
      showModal: false,
      title: '',
      img_url: '',
      description: ''
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

  showModalHandler = (title, image, description) => {
    this.setState({
      showModal: true,
      title: title,
      img_url: image,
      description: description
    });
  }


  render(){
    return(
      <>
        <Header/>

        <Main 
          data={data}
          showModalHandler={this.showModalHandler}
          hideModalHandler ={this.hideModalHandler}
          title={this.state.title}
          img_url={this.state.img_url}
          description={this.state.description}
          addTickets={this.addTickets}
        />
        <SelectedBeast
          title={this.state.title}
          img_url={this.state.img_url}
          description={this.state.description}
          showModal={this.showModal}
          hideModal ={this.hideModal}
        />
          <Modal.Header closeButton>
            <Modal.Title>
              {this.state.name}
            </Modal.Title>
          </Modal.Header>
        <Footer />
      
      </>
    )
  }
}

export default App;
