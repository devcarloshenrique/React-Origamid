import React from 'react';

const radio = ({ options, value, setValue, ...props }) => {
  return (
    <>
      {options.map((option) => (
        <label htmlFor="">
          <input
            type="radio"
            value={option}
            checked={value == option}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default radio;
