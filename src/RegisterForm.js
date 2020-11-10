import React from "react";
import { Control, Form, Errors, combineForms } from "react-redux-form";
import { countryList, stateList } from "./config";
import "./register.css";

const required = val => val && val.length;
const maxLength = len => val => val && val.length <= len;
const isNumber = val => !isNaN(Number(val));
var regEx = /[0-9]+/g;
const isString = val => (val && val.match(regEx) ? false : true);

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: "",
      address: "",
      interestList: [],
      interest: ""
    };
  }
  handleSubmit = data => {
    alert(data);
  };
  handleInterestField = e => {
    this.setState({ interest: e.target.value });
  };

  keyPressed = event => {
    const { interest } = this.state;
    var code = event.charCode || event.which;
    if (code === 44 || code === 13) {
      let list = new Set(interest.split(","));
      this.setState({ interestList: [...list], interest: "" });
    }
  };

  handleRemoveInterest = e => {
    const { interestList } = this.state;
    if (Array.isArray(interestList)) {
      let newList = interestList.filter(_item => _item !== e);
      this.setState({ interestList: newList });
    }
  };

  onChangeHandler = (e, variable) => {
    this.setState({ [variable]: e.target.value });
  };

  render() {
    const { interestList, selectedCountry, address } = this.state;
    return (
      <div className="registerPageRoot">
        <div className="rootLeft">
          <label className="uploadLabels" for="upload">
            <div className="uploadDiv">Upload Your Photo</div>

            <input type="file" id="test" />
          </label>{" "}
        </div>{" "}
        <div className="rootRight">
          <h1> Profile Details</h1>
          <div>
            <Form model="user" onSubmit={this.handleSubmit}>
              <div className="field formRow">
                <label>Name:</label>
                <Control.text
                  className="cmmonField"
                  placeholder="First Name"
                  model=".firstName"
                  validators={{
                    required,
                    maxLength: maxLength(20),
                    isString
                  }}
                />
                <Control.text
                  className="cmmonField lastName"
                  placeholder="Last Name"
                  model=".lastName"
                  validators={{
                    required,
                    maxLength: maxLength(20),
                    isString
                  }}
                />
                <div className="nameErrors">
                  <Errors
                    className="errors errorInfo fnameError"
                    model="user.firstName"
                    show="touched"
                    messages={{
                      required: "First Name Required",
                      maxLength: "Must be 20 characters or less",
                      isString: "First Name cannot have digit"
                    }}
                  />
                  <Errors
                    className="errors errorInfo lnameError"
                    model="user.lastName"
                    show="touched"
                    messages={{
                      required: "Last Name Required ",
                      maxLength: "Must be 20 characters or less",
                      isString: "last Name cannot have digit"
                    }}
                  />
                </div>
              </div>

              <div className="field">
                <label>Age:</label>
              </div>

              <div className="field">
                <label>Email:</label>
                <Control.text
                  className="cmmonField"
                  model=".email"
                  validators={{
                    required,
                    validEmail: val =>
                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)
                  }}
                />
                <Errors
                  className="errors errorInfo"
                  model="user.email"
                  show="touched"
                  messages={{
                    required: "Required !",
                    validEmail: "Invalid email address"
                  }}
                />
              </div>
              <div className="field">
                <label>Tel :</label>
                <Control.text
                  className="cmmonField"
                  model=".tel"
                  validators={{
                    required,
                    isNumber
                  }}
                />
                <Errors
                  className="errors errorInfo"
                  model="user.tel"
                  show="touched"
                  messages={{
                    required: "Required ! ",
                    isNumber: "Invalid tel number"
                  }}
                />
              </div>
              <div className="field">
                <label>Country</label>
                <Control.select
                  className="cmmonField"
                  model=".country"
                  onChange={e => {
                    this.onChangeHandler(e, "selectedCountry");
                  }}
                >
                  <option value="">Select any value</option>
                  {Array.isArray(countryList) &&
                    countryList.length > 0 &&
                    countryList.map(country => {
                      return <option value={country}>{country}</option>;
                    })}
                </Control.select>
              </div>
              <div className="field">
                <label>State</label>
                <Control.select className="cmmonField" model=".state">
                  <option value="">Select any value</option>
                  {Array.isArray(stateList) &&
                    stateList.length > 0 &&
                    stateList.map(_item => {
                      if (_item.country === selectedCountry) {
                        return (
                          <option key={_item.state} value={_item.state}>
                            {_item.state}
                          </option>
                        );
                      }
                    })}
                </Control.select>
              </div>
              <div className="field">
                <label>Address</label>
                <Control.select
                  className="cmmonField"
                  model=".favoriteColor"
                  onChange={e => {
                    this.onChangeHandler(e, "address");
                  }}
                >
                  <option value="">Choose Preferable Address</option>
                  <option value="Home">Home</option>
                  <option value="Company">Company</option>
                </Control.select>
              </div>
              {address ? (
                <>
                  <div className="field">
                    <label>{address} Address 1</label>
                    <Control.textarea
                      className="cmmonField"
                      model=".address1"
                    />
                  </div>
                  <div className="field">
                    <label>{address} Address 2</label>
                    <Control.textarea
                      className="cmmonField"
                      model=".address2"
                    />
                  </div>
                </>
              ) : null}
              <div className="field">
                <label>Interest</label>
                <Control.textarea
                  className="cmmonField"
                  model=".notes"
                  onChange={e => this.handleInterestField(e)}
                  onKeyPress={this.keyPressed}
                />
              </div>
              <div className="listInterest">
                {Array.isArray(interestList) &&
                  interestList.length > 0 &&
                  interestList.map(_interest => {
                    return (
                      <div class="chip">
                        {_interest}
                        <span
                          class="closebtn"
                          onClick={() => this.handleRemoveInterest(_interest)}
                        >
                          &times;
                        </span>
                      </div>
                    );
                  })}
              </div>

              <div className="field">
                <label>
                  <Control.checkbox model=".employed" />
                  Subscribe to news letter
                </label>
              </div>
              <button type="submit">Submit</button>

              <Control.reset model="user" type="reset">
                Reset
              </Control.reset>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
