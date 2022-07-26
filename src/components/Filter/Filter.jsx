import React from 'react';
import css from './Filter.module.css';
export default function Filter({ value, onChange }) {
  return (
    <>
      <label className={css.label}>Filter</label>
      <input
        className={css.input}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        placeholder="You can filter your contact"
      />
    </>
  );
}
