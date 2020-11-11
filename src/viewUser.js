import React from "react";
import "./style.css";

const App = () => {
  return (
    <>
      <div className="registerPageRoot">
        <div className="rootLeft">
          <label className="uploadLabels" for="upload">
            <div className="uploadDiv">Upload Your Photo</div>
            <input type="file" id="test" />
          </label>{" "}
        </div>
        <div className="rootRight-view">
          <div>
            I am Mr. David and I am above 20 years and you can send email to
            maew@gmail.com. I lives in the state of Alaska. I likes to play
            hockey, read, and football. And Please send me the news letters.
            Please reach out to me on 123123
          </div>

          <button type="submit" className="submitRegForm agreeButton">
            Agree
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
