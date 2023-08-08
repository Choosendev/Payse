import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';

const Checkbox = ({ id, label, value, onChange }) => {
    return (
      <div>
        <input 
          id={id} 
          type="checkbox" 
          checked={value} 
          onChange={onChange} 
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  };
  
  export default Checkbox;