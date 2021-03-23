import React, { Component, Fragment } from "react";
import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  Typography
} from "@material-ui/core";

export class Name extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  constructor() {
    super();
    this.state = {
      disabled: false
    };
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <Fragment>
        <AppBar style={{ background: "#333" }} position="sticky">
          <Toolbar title="Enter Username">
            <Typography color="inherit" variant="title">
              Enter Username
            </Typography>
          </Toolbar>
        </AppBar>
        <TextField
          label="Name"
          hintText="Enter Name"
          onChange={handleChange("name")}
          defaultValue={values.name}
        />
        <br />
        <br />
        <Button
          style={{
            background: "#EE3B55",
            color: "#FFFFFF",
            marginRight: "1em"
          }}
          label="Back"
          onClick={this.back}
        >
          Back
        </Button>
        <Button
          style={{
            background: "#991A76",
            color: "#FFFFFF"
          }}
          label="Continue"
          onClick={this.continue}
        >
          {" "}
          Continue
        </Button>
      </Fragment>
    );
  }
}

export default Name;
