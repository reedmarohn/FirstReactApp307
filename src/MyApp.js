import React, {useState} from 'react';
import Table from './Table';

function MyApp() {
  const [characters, setCharacters] = useState([
    {
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      name: 'Dee',
      job: 'Aspring actress',
    },
    {
      name: 'Dennis',
      job: 'Bartender',
    },
  ]);
  
function removeOneCharacter (index) {
  const updated = characters.filter((character, i) => {
    return i !== index 
    //this return statement returns an array of all the characters besides the index given (so that its removed)
  });
  setCharacters(updated);
}
    return (
        <div className="container">
            <Table characterData={characters} removeCharacter={removeOneCharacter} />
        </div>
    );
}


export default MyApp;