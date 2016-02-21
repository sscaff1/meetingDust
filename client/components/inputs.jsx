import React from 'react';

export const TextInput = ({classNames, inputPlaceholder, label}) => (
  <div className="form-group">
    <label>{label}</label>
    <input className={`form-control ${classNames}`} placeholder={inputPlaceholder} />
  </div>
);
