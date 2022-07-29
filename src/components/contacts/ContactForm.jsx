import { Component } from "react";
import css from "./Contacts.module.css";
import { PropTypes } from 'prop-types';
export class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  static propTypes = {
    onSubmit: PropTypes.func,
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);

    e.target.reset();
  };

  render() {
    return (
      <div className={css.formWrapper}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <div className={css.textFieldFloating}>
            <label className={css.textFieldLabel} htmlFor="name">
              Name:
            </label>
            <input
              className={css.textFieldInput}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </div>
          <div className={css.textFieldFloating}>
            <label className={css.textFieldLabel} htmlFor="number">
              Number:
            </label>
            <input
              className={css.textFieldInput}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </div>
          <div className={css.btnWrapper}>
            <button type="submit" className={css.btn}>
              Add Contact
            </button>
          </div>
        </form>
      </div>
    );
  }
}
