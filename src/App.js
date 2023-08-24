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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">
            Success! Thank you for registering
          </div>
        ) : null}
        <div className="wrapper">
          <input
            onChange={handleFirstNameInputChange}
            value={values.firstName}
            className="form-field"
            type="text"
            placeholder="First Name"
          ></input>
          {submitted && !values.firstName ? (
            <span>Please enter a name</span>
          ) : null}

          <input
            onChange={handleLastNameInputChange}
            value={values.lastName}
            className="form-field"
            type="text"
            placeholder="Last Name"
          ></input>
          {submitted && !values.lastName ? (
            <span>Please enter a name</span>
          ) : null}

          <input
            onChange={handleEmailInputChange}
            value={values.email}
            className="form-field"
            type="email"
            placeholder="Email"
          ></input>
          {submitted && !values.email ? (
            <span>Please enter a email address</span>
          ) : null}
        </div>
        <button className="button">Register</button>
      </form>
    </div>
  );
}

export default App;
