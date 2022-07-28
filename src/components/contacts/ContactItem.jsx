import React from "react";
import css from "./Contacts.module.css";
export default function ContactItem({ contact }) {
  const { name, number, id } = contact;
  return (
    <li className={css.ContactItem} key={id}>
      <p>{name}:</p>
      <p>{number}</p>
    </li>
    
  );
}
