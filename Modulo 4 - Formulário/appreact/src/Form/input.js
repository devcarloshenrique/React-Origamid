import React from 'react';

const input = ({
  id,
  label,
  type,
  value,
  onChange,
  onBlur,
  required,
  placeholder,
  error,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        placeholder={placeholder}
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default input;
