import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './HornedBeast.css';

 class HornedBeast extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      votes: 0,
      goodOrBad: false
    };
  }


  handleVotes = () => {
    console.log('handleVotes')
    this.setState({
      votes: this.state.votes + 1
    });
    // console.log(this.state.votes);
  }


  choiceGood = () => {
    this.setState({
      goodOrBad: true
    })
  }

  choiceBad = () => {
    this.setState({
      goodOrBad: false
    })
  }



  handleTitleClick = () => {
    this.props.showModalHandler(this.props.title);
  }

   render(){
     // console.log(this.props.name);
     // console.log(this.props);
     return (
      <Col className="mb-5">
        <Card className="h-100">
          <Card.Img 
            src={this.props.imgUrl}
            alt={this.props.desciption}
            onClick={this.props.addVotes}
          />
          <Card.Header>
            <h2 onClick={this.handleTitleClick}>{this.props.title}</h2>
            <Card.Text>☑️ {this.state.votes}Place your bet!</Card.Text>
            <Card.Text onClick={this.handleVotes}>VOTE</Card.Text>
          </Card.Header>
          <Card.Body>
            <div>{this.state.votes ? 'Good or Bad?' : ''}</div>
            <Button
              className="article-button"
              onClick={this.choiceGood}
            >
              Good
            </Button>
            <Button
              className="article-button"
              variant="success"
              onClick={this.choiceBad}
            >
              Bad
            </Button>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}



 
 export default HornedBeast;