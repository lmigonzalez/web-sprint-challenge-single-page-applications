import React, { useState } from "react";
import "../App.css";

import schema from "../validation/schema";
import * as yup from "yup";

const initialName = {
  name: "",
};

const Form = () => {
  const [value, setValue] = useState(initialName);

  const [valueError, setValueError] = useState(initialName);

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(()=>setValueError({...valueError, [name]: ''}))
    .catch(err => setValueError({...valueError, [name]: err.errors[0]}))

  };

  // const inputChange = (name, value) => {
  //   // 🔥 STEP 10- RUN VALIDATION WITH YUP
  //   validate(name, value);
  //   setFormValues({
  //     ...formValues,
  //     [name]: value // NOT AN ARRAY
  //   })
  // }

  const change = (event) => {
    setValue({ ...value, name: event.target.value });
    validate(event.target.name, event.target.value )
    console.log(event.target.value);
  };
  return (
    <form id="pizza-form" className="form-hero">
      <div className="errors">
        {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}

        <div>{valueError.name}</div>
      </div>
      <label>
        Enter Your Name
        <input
          type="text"
          id="name-input"
          name="name"
          value={value.name}
          onChange={change}
        />
      </label>

      <label>
        {" "}
        Chose your size
        <select name="size" id="size-dropdown">
          <option value="">--Select an option--</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">large</option>
          <option value="extra">Extra Large</option>
        </select>
      </label>
      <div className="extra-ingredients">
        <label>
          {" "}
          Extra Cheese
          <input type="checkbox" name="extracheese" />
        </label>

        <label>
          {" "}
          pepperoni's
          <input type="checkbox" name="pepperoni" />
        </label>

        <label>
          {" "}
          Ham
          <input type="checkbox" name="ham" />
        </label>

        <label>
          {" "}
          Pineapple
          <input type="checkbox" name="Pineapple" />
        </label>
      </div>

      <label>
        Special Instructions
        <input type="text" id="special-text" />
      </label>

      <input type="submit" id="order-button" value="ORDER" />
    </form>
  );
};

export default Form;
