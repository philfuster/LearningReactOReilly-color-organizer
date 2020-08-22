import { useState } from 'react';

/**
 * This hook takes an initialValue as a parameter and creates state
 * for an input element.
 * It return an array containing an object that has the value from state, and an onChange event handler which
 * will call the setValue to change state of the input based on the even target value.
 * and a second index containing a function that will reset input value to the initial
 * value passed
 *
 * @param {*} initialValue - Initial value for input
 */
export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initialValue),
  ];
};
