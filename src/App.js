//import './App.css';
import React, {  useState, useMemo } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Container from './components/container/Container';
import ContactForm from './components/contactForm/ContactForm';
import Filter from './components/filter/Filter';
import ContactList from './components/contactList/ContactList';


function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // componentDidMount() {

  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const nextContacts = this.state.contacts;
  //   const prevContacts = prevState.contacts;

  //   if (nextContacts !== prevContacts) {
  //     localStorage.setItem('contacts', JSON.stringify(nextContacts));
  //   }
  //   }

  const addContact = (newContact) => {
    if (contacts.find(contact => contact.name === newContact.name)) {
      toast.warn(`${newContact.name} is already in your phonebook!`);
      return;
    }
   
    setContacts([newContact, ...contacts]);
    toast.success(`${newContact.name} has been added to your phonebook!`);
    console.log(contacts)
    return contacts;
};

const deleteContact = (contactId) => {
    // this.setState(prevState => ({
    //   contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    // }));

    console.log(contactId);
    toast.warn("Contact deleted from your phonebook!");
};

   const changeFilter = (event) => {
    return setFilter(event.target.value);
  }

  const handleBlur = () => {
   if (this.getVisibleContacts().length === 0) {
     toast.error("No contact found. Enter the correct request!")
    } else {
      toast.success(` ${this.getVisibleContacts().length} contacts found!`)
    }
  }

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
   
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  
  const visibleContacts = getVisibleContacts();
   
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
        <h2>Contacts</h2>
        <Filter
          value={filter}
          onChange={changeFilter}
          onBlur={handleBlur}
        />
        <ContactList
         // contacts={visibleContacts}
          contacts={contacts}
          onDeleteContact={deleteContact}
        />
     </Container>
    );
  }

export default App;