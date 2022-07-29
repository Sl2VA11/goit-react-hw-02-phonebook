import { React, Component } from 'react';
import { Form } from './contacts/ContactForm';
import { nanoid } from 'nanoid';
import ContactsList from './contacts/ContactsList';
import Filter from './Filter/Filter';
import Notiflix from 'notiflix';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    if (
      this.state.contacts.filter(contact => contact.name === name).length > 0
    ) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
      return;
    }

    
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));

    console.log(this.state);
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    console.log(contacts);
    

    return contacts.filter(
      contact =>
        
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
      
    );
    
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <h1 className="phonebookTitle">Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2 className="phonebookContactTitle">Contact </h2>

        <Filter onChange={this.changeFilter} value={filter} />
        <p className="afterTitle">
          {this.state.contacts.length === 0 ? 'No contacts' : ''}
        </p>
        <ContactsList
          contacts={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}
