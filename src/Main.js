import React from "react"; 
import HornedBeast from "./HornedBeast";
import Row from 'react-bootstrap/Row';
// import './Main.css';


class Main extends React.Component {
  render() {
    let beastsArr = this.props.data.map((beasts, idx) => {
      return (
        <HornedBeast
          title={beasts.title}
          imgUrl={beasts.image_url}
          key={idx}
          addVotes={this.props.addVotes}
          showModalHandler={this.props.showModalHandler}
        />
      )
    });

    return (
      <main>
        <Row xs={1} sm={3} md={4} lg={6}>
          {beastsArr}
        </Row>
      </main>
    )
  } 
}



 export default Main;


