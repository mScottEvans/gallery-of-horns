import React from "react"; 
import HornedBeast from "./HornedBeast";

 class Main extends React.Component {
   render(){
     return (
       <>
          <HornedBeast title="Horned Beast 1" description="Im a horned beasty guy" source="./beast1.jpeg" />
          <HornedBeast title="Horned Beast 2" description="Im the horned beastiest guy" source="./beast2.jpeg" />
       </>
     )
   }
 }

 export default HornedBeast