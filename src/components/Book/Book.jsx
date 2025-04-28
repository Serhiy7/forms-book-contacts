import React from "react";

const Book = ({ bookCont }) => (
  <ul>
    {bookCont.map(({ id, text, num }) => (
      <li key={id}>
        <p>
          {text} : {num}{" "}
        </p>
      </li>
    ))}
  </ul>
);
export default Book;
