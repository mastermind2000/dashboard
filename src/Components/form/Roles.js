import React, { Component, Fragment } from "react";
import {
  AppBar,
  Button,
  TextField,
  Toolbar,
  Typography
} from "@material-ui/core";

export class Roles extends Component {
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
          <Toolbar title="Add a new Role">
            <Typography color="inherit" variant="title">
              Add Role
            </Typography>
          </Toolbar>
        </AppBar>
        <TextField
          label="Role"
          hintText="Enter Role"
          onChange={handleChange("roles")}
          defaultValue={values.roles}
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

export default Roles;
