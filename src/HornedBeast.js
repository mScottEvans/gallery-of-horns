import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
// import './HornedBeast.css';

 class HornedBeast extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      likes: 0,
      goodOrBad: false
    };
  }


  handleLikes = () => {
    // console.log('handleLikes')
    this.setState({
      likes: this.state.likes + 1
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



  handleImgClick = () => {
    this.props.showModalHandler(this.props.title, this.props.imgUrl, this.props.description);
  }

   render(){
     // console.log(this.props.name);
     // console.log(this.props);
     return (
       <Col>
        <Card className="h-100">
          <Card.Img 
            src={this.props.imgUrl}
            alt={this.props.description}
            onClick={this.handleImgClick}
          />
          <Card.Header>
            <h2 onClick={this.handleTitleClick}>{this.props.title}</h2>

            <Card.Text>
              ☑️ {this.state.likes}: Likes
            </Card.Text>

            <Card.Text onClick={this.handleLikes}>
              Click Here to Like!
            </Card.Text>

          </Card.Header>
          
          <Card.Body>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <div>{this.state.likes ? 'Good or Bad?' : ''}</div>
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