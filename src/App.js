import React, {Component} from 'react'; 
import './App.css';
import Person from './basicinfo.js/BasicInfo'

class App extends Component {
  
 state = {
   people: [
     {name:'Elon',
     species:'Human', 
     number: '123-456-7890',
     birthday: '06/28/1971',
     profession: 'Engineer'},
     {name:'Jeff',
      species:'Human', 
      number: '123-123-4567',
      birthday: '01/12/1964',
      profession: 'Investor' },
      {name:'Mark',
      species:'Human', 
      number: '010-101-1010',
      birthday: '05/14/1984',
      profession: 'Philanthropist'
    }
  ]
 }



  render(){
    return(
      <div>
        {
          this.state.people.map(BasicInfo =>{
            return <Person 
            name ={BasicInfo.name} 
            species = {BasicInfo.species} 
            number = {BasicInfo.number} 
            birthday ={BasicInfo.birthday}
            profession = {BasicInfo.profession}
            />
          })
        }
      </div>

    );
  }
}

export default App;
