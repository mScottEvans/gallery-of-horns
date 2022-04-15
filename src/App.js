import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data.json';
// import './App.css';
// import SelectedBeast from './SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";

let mainData = data;
console.log(data);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      tickets: '',
      modalTitle: '',
      modalImgUrl: '',
      modalDescription: '',
      filteredData: mainData,
    };
  }

  showModalHandler = (beastTitle, beastImage, beastDescription) => {
    this.setState({
      modalTitle: beastTitle,
      modalImgUrl: beastImage,
      modalDescription: beastDescription,
      showModal: true
    });
  }


  hideModalHandler = () => {
    this.setState({
      modalTitle: '',
      modalImgUrl: '',
      modalDescription: '',
      showModal: false,
      // filteredData: mainData,
    });
  }


  handleSelect = event => {
    let choice = event.target.value;
    // console.log(choice);

    if (choice !== 'all') {
      choice = parseInt(choice);
      let newData = data.filter(beasts => beasts.horns === parseInt(choice));
      // let filteredData = newData;
      this.setState({filteredData: newData});
    } else {
      // filteredData: data;
      this.setState({ filteredData: data});
    }
    
  }



  handleLikes = () => {
    this.setState({
      tickets: this.state.likes + 1
    });
  }


  addTicket = () => {
    this.setState({
      tickets: this.state.tickets + '🗳'
    });
  }
  

  





  render(){
    console.log('app state', this.state);
    console.log('app props', this.props);
    return (
      <>
        <Header/>
        
          <Form>
            <Form.Label>Filter the beasts:</Form.Label>
            <Form.Select 
              name="select"
              onChange={this.handleSelect}
              >
                <option value='all'>All Beast</option>
                <option value='1'>One Horn</option>
                <option value='2'>Two Horns</option>
                <option value='3'>Three Horns</option>
            </Form.Select>
          </Form>
          <Main
          beasts={this.state.filteredData}
          showModalHandler={this.showModalHandler}
          />
        
        <Footer />
        <Modal 
          show={this.state.showModal}
          onHide={this.hideModalHandler}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.state.modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              width="100%"
              height="auto"
              src ={this.state.modalImgUrl}
              alt={this.state.modalDescription} />
          </Modal.Body>
          <Modal.Footer>
            {this.state.modalDescription}
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default App;
