import React, {useState} from 'react';
import Table from './Table';
import Form from './Form';

function MyApp() {

const [characters, setCharacters] = useState([]);
  
function removeOneCharacter (index) {
  const updated = characters.filter((character, i) => {
    return i !== index 
    //this return statement returns an array of all the characters besides the index given (so that its removed)
  });
  setCharacters(updated);
}

function updateList(person) {
  setCharacters([...characters, person]);
}

    return (
        <div className="container">
            <Table characterData={characters} removeCharacter={removeOneCharacter} />
            <Form handleSubmit={updateList} />
        </div>
    );
}


export default MyApp;