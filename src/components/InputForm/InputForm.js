import React from 'react';
import { useState } from 'react';
import { InputForms } from './InputForm.styled';
import { nanoid } from 'nanoid';

const InputForm = ({ onSubmit }) => {
  const [state, setState] = useState({ name: '', number: '', id: '' });
  const { name, number } = state;

  const handleChangeInputsForm = evt => {
    const currentInput = evt.target.name;
    setState({ ...state, [currentInput]: evt.target.value });
  };

  const handleSubmitContact = evt => {
    evt.preventDefault();

    onSubmit(state);

    setState({
      name: '',
      number: '',
      id: nanoid(),
    });
  };

  return (
    <InputForms onSubmit={handleSubmitContact}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={handleChangeInputsForm}
        name="name"
        placeholder="Name"
      />

      <label htmlFor="number">Number</label>
      <input
        id="number"
        type="tel"
        value={number}
        onChange={handleChangeInputsForm}
        name="number"
        placeholder="123-123-1234"
        title="Phone number must be digits and dashes. Example: 101-010-1010"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        required
      />

      <button type="submit">Add contact</button>
    </InputForms>
  );
};

// class InputForm extends Component {
//   state = {
//     name: '',
//     number: '',
//     id: '',
//   };

//   handleChangeInputsForm = evt => {
//     const currentInput = evt.target.name;
//     this.setState({ [currentInput]: evt.target.value });
//   };

//   handleSubmitContact = evt => {
//     evt.preventDefault();

//     this.props.onSubmit(this.state);

//     this.setState({
//       name: '',
//       number: '',
//       id: nanoid(),
//     });
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <InputForms onSubmit={this.handleSubmitContact}>
//         <label htmlFor="name">Name</label>
//         <input
//           id="name"
//           type="text"
//           value={name}
//           onChange={this.handleChangeInputsForm}
//           name="name"
//           placeholder="Name"
//         />

//         <label htmlFor="number">Number</label>
//         <input
//           id="number"
//           type="tel"
//           value={number}
//           onChange={this.handleChangeInputsForm}
//           name="number"
//           placeholder="123-123-1234"
//           title="Phone number must be digits and dashes. Example: 101-010-1010"
//           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//           required
//         />

//         <button type="submit">Add contact</button>
//       </InputForms>
//     );
//   }
// }

export default InputForm;
