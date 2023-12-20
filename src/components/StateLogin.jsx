import { useRef } from "react";
export default function StateLogin() {

  const [emailIsValid, setEmailIsValid] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;

    const emailIsValid = enteredEmail.includes("@");

    if(!emailIsValid) {
      setEmailIsValid(true);
      return;
    }
    setEmailIsValid(false);
    
    console.log("sending http request...");
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
            ref={emailRef}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={passwordRef}
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
