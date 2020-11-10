import React from 'react';

const input = ({ id, label, type, value, setValue, required, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        required={required}
        {...props}
      />
    </>
  );
};

export default input;
