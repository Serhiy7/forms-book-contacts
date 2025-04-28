// components/Book.js
import React from "react";

const Book = ({ contacts }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
      </li>
    ))}
  </ul>
);

export default Book;
