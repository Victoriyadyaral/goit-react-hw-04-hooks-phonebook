import { useState } from 'react';
import shortid from 'shortid';
import { ImCheckmark } from "react-icons/im";
import s from "./ContactForm.module.css";

export default function ContactForm({onSubmit}) {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const id = shortid.generate();
  
  const nameInputId = shortid.generate();
  const phoneNumberInputId = shortid.generate();

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, number, id });
    reset();
    };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
          <form onSubmit = {handleSubmit}>
            <label  htmlFor={nameInputId} className={s.label}>
            Name
          <input
            type="text"
            name="name"
            className={s.input}
            value={name}
            onChange = {handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            id={nameInputId}
            autoComplete = "off"
          />
           </label>
                
            <label htmlFor={phoneNumberInputId} className={s.label} >
            Number 
            <input
            type="tel"
            name="number"
            className={s.input}
            value={number}
            onChange = {handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            id={phoneNumberInputId}
            autoComplete = "off"
        />       
           </label>
                
          <button
          className={s.button}
          type="submit"
          >
            Add contact  <ImCheckmark color="rgb(11, 100, 11)" size="30px"/>
          </button>
        </form>
        )
}