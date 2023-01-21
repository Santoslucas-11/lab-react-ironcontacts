import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import { useState } from "react";

function App() {

  const fiveContacts = contacts.slice(0, 5);
  const [contactsList, setContacts] = useState(fiveContacts);
  function addRandomContact() {
    const randomIndex = Math.floor(Math.random() * contacts.length);
    const addContact = contacts[randomIndex];

    setContacts([addContact, ...contactsList]);
  }

  function sortContactName() {
    const sortedName = [...contactsList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    setContacts(sortedName);
  }

  function sortContactPopularity() {
    const sortedPopularity = [...contactsList].sort((a, b) =>
      b.popularity > a.popularity ? 1 : -1
    );

    setContacts(sortedPopularity);
  }

  const deleteContact = (id) => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(filteredContacts);
  };
 

  return (
    <div className="App">
      
      <h1>Iron Contacts</h1>
      <aside >
        <button  onClick={addRandomContact}>
          Add Random Contact
        </button>
        <button  onClick={sortContactName}>
          Sort contact by name
        </button>
        <button  onClick={sortContactPopularity}>
          Sort contact by popularity
        </button>
      </aside>
      <br/><br/>
      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Won Emmy</th>
        </thead>
        <br/><br/>
        {contactsList.map((contact) => (
          <>
            <tbody>
              <td>
                <img src={contact.pictureUrl} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? <td>🏆</td> : <td>-</td>}</td>
              <td>{contact.wonEmmy ? <td>🏆</td> : <td>-</td>}</td>
              <td>
                <button  onClick={() => deleteContact(contact.id)}>
                  Delete contact
                </button>
              </td>
            </tbody>
          </>
        ))}
      </table>
    </div>
  );
}


export default App;
