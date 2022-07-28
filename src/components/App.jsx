import { React, Component } from "react";
import { Form } from "./contacts/ContactForm";
import { nanoid } from "nanoid";
import ContactsList from "./contacts/ContactsList";
export class App extends Component {
  state = {
    contacts: [],
    // filter: "",
  };

  formSubmitHandler = ({ name, number }) => {
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
  // onFilterChange = (e) => {

  //     this.state.contacts
  //       .filter((person) => person.name === e.currentTarget.value)
  //       .map((filteredPerson) => console.log(filteredPerson));

  // };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contact </h2>
        {/* <label>
          Filter
          <input type="text" name="filter" onChange={this.onFilterChange} />
        </label> */}
        <ContactsList contacts={contacts} />
      </>
    );
  }
}
