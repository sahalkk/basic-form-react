import { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleFirstNameInputChange = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };
  const handleLastNameInputChange = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };

  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  return (
    <div>
      <form className="form">
        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          className="form-field"
          type="text"
          placeholder="First Name"
        ></input>
        <input
          onChange={handleLastNameInputChange}
          value={values.lastName}
          className="form-field"
          type="text"
          placeholder="Last Name"
        ></input>
        <input
          onChange={handleEmailInputChange}
          value={values.email}
          className="form-field"
          type="email"
          placeholder="Email"
        ></input>
        <button className="button">Register</button>
      </form>
    </div>
  );
}

export default App;
