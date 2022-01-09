import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  // for validation
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    setIsValid(true);
    setEnteredValue('');
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : '' }`}>
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
        {
          !isValid ? <p style={{ color: 'salmon' }}>This field is required</p> : ''
        }
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
