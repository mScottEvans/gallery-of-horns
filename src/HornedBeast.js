 import React from "react"; 

 class HornedBeast extends React.Component {
   render(){
     return (
       <>
          <h2>{this.props.title}</h2>
          <img url={this.props.source} alt="Beast"></img>
          <p>Description: {this.props.description}</p>
       </>
     )
   }
 }

 export default HornedBeast;