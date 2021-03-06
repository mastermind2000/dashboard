import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const submitForm = (e) => {
  var formdata = new FormData();
  e.preventDefault();
  console.log(e);
  var name = document.getElementById("testName").value;
  formdata.append("name", name);
  var file = document.getElementById("testFile");
  console.log(file.files[0]);
  formdata.append("testFile", file.files[0]);
  for (var key of formdata.entries()) {
    console.log(key[0] + ", " + key[1]);
  }
};

export default function Policy() {
  return (
    <div style={styles}>
      <form onSubmit={submitForm} id="testForm">
        <input type="text" id="testName" />
        <input type="file" name="test" id="testFile" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
