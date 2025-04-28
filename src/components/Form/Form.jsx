import React, { Component } from "react";

const Form = ({ name, number, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label>
      Name
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        required
      />
    </label>

    <label>
      Number
      <input
        type="tel"
        name="number"
        value={number}
        onChange={onChange}
        required
      />
    </label>

    <button type="submit">Add contact</button>
  </form>
);

export default Form;
