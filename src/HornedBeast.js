 import React from "react"; 
//  import App from "./App.js";
//  import animals from "./animals.json";

 class HornedBeast extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      votes: 0,
    };
  }


  handleVotes = () => {
    console.log('handleVotes')
    this.setState({
      votes: this.state.votes + 1,
    });
    console.log(this.state.votes);
  }


   render(){
     return (
       <article className="beast">
          <h2 class>{this.props.title}
          </h2>
          <p>{this.state.votes} Votes
          </p>
          <p onClick={this.handleVotes}>Click to vote!
          </p>
          <img src={this.props.imageUrl} 
          alt={this.props.description} 
          title={this.props.title} 
          />
          <p>{this.props.description}
          </p>
       </article>
     )
   }
 }

 export default HornedBeast;