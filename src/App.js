import React, {useState} from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Form from './Form';
import Member from "./Member";


function App() {
  const [team, setTeam]= useState([{

    Username: "nadia",
    email: "sucks@code@gmail.com",
    role: "Sleep specialist"
  }]);

  const addNewMember = Teammember => {
    const newTeamMember ={
      id: Date.now(),
      name: Teammember.Username,
      email: Teammember.email,
      role:Teammember.role
    }
    const newmemberArray = [...team, newTeamMember];
    setTeam(newmemberArray);
  }
  return (
    <div className="App">
      <h1>My Team Mates</h1>
      <Form addNewMember={addNewMember}/>
      <Member team={team} />

    </div>
  );
}

export default App;