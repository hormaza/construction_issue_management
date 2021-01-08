import React, { useState } from 'react';
import styled from 'styled-components'
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from 'react-redux';
import moment from 'moment';

function Navbar() {
  const [dueDate, setDueDate] = useState(new Date());
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch({
      type: 'ADDISSUE',
      payload: {
        ...data,
        uniqueID: Date.now() + '_' + Math.floor(Math.random() * 999999),
        creationDate: moment(Date.now()).format("MMMM D YYYY, h:mm A")
      }
    });
  };

  const DatePickerInput = React.forwardRef(
    (props, ref) => (
      <input
        {...props}
        name='dueDate'
        ref={register}
      />
    ));

  return (
    <Style>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="type">Type:</label>
        <select id="type" name="type" ref={register}>
          <option value="quality">Quality</option>
          <option value="safety">Safety</option>
          <option value="cost">Cost</option>
        </select>

        <label htmlFor="description">Due Date:</label>
        <DatePicker
          showTimeSelect
          dateFormat="MMMM d yyyy, h:mm a"
          selected={dueDate}
          className='datepicker'
          onChange={date => setDueDate(date)}
          ref={register}
          customInput={<DatePickerInput />}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          type='textarea'
          name="description"
          id="description"
          ref={register({ required: true, maxLength: 100 })}
        >
        </textarea>
        {errors.description && <span>Sorry. The maximum length for description should be 100 characters.</span>}

        <input type="submit" />
      </form>
    </Style>
  )
}

export default Navbar;

const Style = styled.section`
  background: red;
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;

  }
`;