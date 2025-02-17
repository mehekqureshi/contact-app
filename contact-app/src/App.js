import React, { useState } from 'react';
import './App.css';
import ContactForm from './components/contactform';
import ContactList from './components/contactlist';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div className="App">
      <h1>Contact App</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
