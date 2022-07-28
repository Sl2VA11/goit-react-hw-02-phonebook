
import css from "./Contacts.module.css";
import ContactItem from "./ContactItem";
import React from "react";

export default function ContactsList({ contacts }) {
  return (
    <ul className={css.ContactList}>
      
      
      {contacts.map((contact) => {
        
        return <ContactItem contact={contact} />;
        
      })}
    </ul>
  );
}