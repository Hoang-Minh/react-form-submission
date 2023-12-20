import { useState } from "react";
export default function Login() {
  // const [enteredValues, setEnteredValues] = useState({
  //   email: {
  //     value: "",
  //     didEdit: false
  //   },
  //   password: "",
  // });

  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({ email: false, password: false });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(enteredValues);
  };

  const handleInputBlur = (identifier) => {
    setDidEdit((prevState) => ({
      ...prevState,
      [identifier]: true,
    }));
  };

  const handleInputChange = (identifier, value) => {
    // setEnteredValues((prevState) => {
    //   return {
    //     ...prevState,
    //     [identifier]: event.target.value,
    //   };
    // }
    setEnteredValues((prevState) => ({
      ...prevState,
      [identifier]: value,
    }));

    setDidEdit((prevState) => ({
      ...prevState,
      [identifier]: false,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={() => handleInputChange("email", event.target.value)}
            onBlur={() => handleInputBlur("email")}
            value={enteredValues.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={() => handleInputChange("password", event.target.value)}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
