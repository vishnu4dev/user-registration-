import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import RegisterForm from "./RegisterForm";

const LandingPage = props => {
  const { history } = props;
  const handleRegisterClick = () => {
    history.push("/register");
  };
  return (
    <div className="landingPage">
      <button className="registerButton" onClick={handleRegisterClick}>
        Register
      </button>
    </div>
  );
};
const formLabels = ["Email", "Tel", "State", "Country", "Address", "Interests"];
const RegisterUser = props => {
  const { history } = props;
  const handleSubmit = () => {};
  return (
    <div className="registerPageRoot">
      <div className="rootLeft">
        <label className="uploadLabels" for="upload">
          <div className="uploadDiv">Upload Your Photo</div>
          <input type="file" id="test" />
        </label>
      </div>
      <div className="rootRight">
        <h1> Profile Details</h1>
        <div>
          <label className="formNameLabel">Name</label>
          <input
            type="text"
            className="commonTextBox "
            placeholder="First Name"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            placeholder="Last Name"
            className="commonTextBox "
          />
          <br />
        </div>
        <div>
          <label className="formAgeLabel">Age</label>
          <br />{" "}
        </div>
        <div className="profileDetails">
          <div className="labelDiv">
            {Array.isArray(formLabels) &&
              formLabels.map(_label => {
                return (
                  <>
                    <div>
                      <label className="formLabel">{_label}</label>
                    </div>
                    <br />
                  </>
                );
              })}
          </div>
          <div className="inputDiv">
            <form>
              <input
                type="text"
                className="commonTextBox "
                placeholder="abc@xyz.com"
              />
              <br />

              <input type="number" className="commonTextBox " />
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={RegisterForm} />
      </Switch>
    </Router>
  );
};

export default App;
