import React from "react"; 
import HornedBeast from "./HornedBeast";
import animals from "./animals.json";



class Main extends React.Component {
  render(){
    return(
      <>
      {animals.map((animal) => {
        return (
          <HornedBeast
          title={animal.title}
          imageUrl={animal.image_url}
          description={animal.description}
          key={animal._id}
          />
        )
        })}
      </>
    )
  }
}

 export default Main;


