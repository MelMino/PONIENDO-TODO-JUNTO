
import React, { Component } from 'react'
import PersonCard from './Persona/PersonCard';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
  }


  render () {
    return (
      <>
        <PersonCard firstName={"Jane"}
                    lastName={"Doe"}
                    age={45}
                    hairColor={"Black"} />
        
        

        <PersonCard firstName={"John"}
                    lastName={"Smith"}
                    age={23}
                    hairColor={"Brown"} />
        
        
        <PersonCard firstName={"Millard"}
                    lastName={"Fillmore"}
                    age={67}
                    hairColor={"Brown"} />
  
        <PersonCard firstName={"Maria"}
                    lastName={"Smith"}
                    age={98}
                    hairColor={"Brown"} />
        

      </>
    );
  }
}
export default App