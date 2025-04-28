import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    tel: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    // очищаем оба поля
    this.setState({ name: "", tel: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Имя Фамилия
        <input
          type="text"
          name="name"
          value={this.state.name} // ← теперь совпадает с ключом
          onChange={this.handleChange}
          required
        />
        <br />
        Номер Телефона
        <input
          type="tel"
          name="tel"
          value={this.state.tel} // ← тоже
          onChange={this.handleChange}
        />
        <button type="submit">Сохранить</button>
      </form>
    );
  }
}

export default Form;
