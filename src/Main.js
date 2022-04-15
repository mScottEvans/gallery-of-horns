import React from "react"; 
import HornedBeast from "./HornedBeast";
import Row from 'react-bootstrap/Row';
// import './Main.css';


class Main extends React.Component {
  


  render() {
    let beasts = this.props.beasts.map((beast) => {
      return (
        <HornedBeast
          title={beast.title}
          imgUrl={beast.image_url}
          description={beast.description}
          key={beast._id}
          addLikes={this.props.addLikes}
          showModalHandler={this.props.showModalHandler}
        />
      )
  });

    return (
      <>
      <Row xs={1} md={3} lg={5} className="g-4">
        {beasts}
      </Row>
      </>
    );
  } 
}



 export default Main;


