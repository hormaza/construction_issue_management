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
        <div className="form-header">
          <h2>Submit a new Issue</h2>
        </div>
        <div className="form-body">
         
          <div className="horizontal-group">
          <div className="form-group">
            <label htmlFor="type">Type of issue:</label>
            <div className="select-wrapper">
              <select id="type" name="type" ref={register}>
                <option value="quality">Quality</option>
                <option value="safety">Safety</option>
                <option value="cost">Cost</option>
              </select>
            </div>
          </div>
            <div className="form-group">
              <label htmlFor="description">Select Due Date:</label>
              <DatePicker
                showTimeSelect
                dateFormat="MMMM d yyyy, h:mm a"
                selected={dueDate}
                className='datepicker'
                onChange={date => setDueDate(date)}
                ref={register}
                customInput={<DatePickerInput />}
              />
            </div>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                className={errors.description ? 'error' : ''}
                type='textarea'
                name="description"
                id="description"
                ref={register({ required: true, maxLength: 100 })}
                rows="4" cols="50"
              >
              </textarea>
          </div>
          <div className="error-box">
            { errors.description && errors.description.type === "maxLength" && <span className="error">Sorry. The maximum length for description should be 100 characters.</span>}
            { errors.description && errors.description.type === "required" && <span className="error">Sorry. The description is required.</span>}
          </div>
        </div>
        <div className="form-footer">
          <input type="submit" />
        </div>
      </form>
    </Style>
  )
}

export default Navbar;

const Style = styled.section`
  display: flex;
  justify-content: center;

  form {
    border-radius: 10px;
    box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    display: flex;
    flex-direction: column;
    margin: 10px;

    label {
      color: #666;
      font-size: 17px;
      font-weight: bold;
      margin: 5px 0;
    }

    .form-header {
      background-color: #eff0f1;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;

      h2 {
        font-size: 30px;
        text-align: center;
        color: #666;
        padding: 20px 0;
        margin: 0;
        border-bottom: 1px solid #cccccc;
      }
    }
    
    .form-body {
      padding: 0 20px;

      input, select, textarea {
        font-size: 17px;
        box-sizing: border-box;
        padding-left: 10px;
        padding-right: 10px;
        color: #333333;
        text-align: left;
        border: 1px solid #d6d6d6;
        border-radius: 4px;
        background: white;
      }

      input, select {
        width: 100%;
        height: 34px;
        outline: none;
      }

      .horizontal-group {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .form-group {
          flex-basis: 49%;
          display: flex;
          justify-content: space-between
        }
      }

      .select-wrapper {
        width: 100%;
      }

      .form-group {
        margin: 10px 0;
        display: flex;
        flex-direction: column;
      }
    }

    .form-footer {
      display: flex;
      justify-content: flex-end;
      background-color: #eff0f1;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      border-top: 1px solid #cccccc;
      input {
        display: inline-block;
        padding: 10px 20px;
        margin: 20px;
        background-color: #1bba93;
        font-size: 17px;
        border: none;
        border-radius: 5px;
        color: #bcf5e7;
        cursor: pointer;
        &:hover {
          background-color: #169c7b;
          color: white;
        }
      }
    }

    .error-box{
      height: 21px;
    }

    .error{
      border-color: red;
      color:red;
      &:focus{
        outline-color: red;
      }
    }
  }
`;