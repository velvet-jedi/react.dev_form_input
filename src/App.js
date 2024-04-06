import { useState } from 'react'; // import useState hook 

export default function Form() {
  let [firstName, setFirstName] = useState('');  // stateInit
  let [lastName, setLastName] = useState('');    // stateInit

  function handleFirstNameChange(e) {
    firstName = e.target.value;
    setFirstName(firstName);     // use setter functions 
  }

  function handleLastNameChange(e) {
    lastName = e.target.value;    // use setter functions 
    setLastName(lastName);       // use setter functions 
  }

  function handleReset() {
    setFirstName('');        // use setter functions 
    setLastName('');         // use setter functions 
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
