import React from "react";
import ReactDOM from "react-dom";
import { Form, Field } from "react-final-form";
import { TextField, Checkbox, Radio, Select } from "final-form-material-ui";
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel
} from "@material-ui/core";
// Picker
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

const onSubmit = async (values) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};
const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
);
export default function Edit() {
  return (
    <div style={{ padding: 16, margin: "auto", maxWidth: 600 }}>
      <CssBaseline />
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    required
                    name="Name"
                    component={TextField}
                    type="text"
                    label="Name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    name="role"
                    fullWidth
                    required
                    component={TextField}
                    type="text"
                    label="Roles"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Condition when="role" is="student">
                    <Field
                      fullWidth
                      name="policy"
                      component={Select}
                      label="Apply Group"
                      formControlProps={{ fullWidth: true }}
                    >
                      <MenuItem value="Policy1">Student</MenuItem>
                    </Field>
                  </Condition>
                  <Condition when="role" is="faculty">
                    <Field
                      fullWidth
                      name="policy"
                      component={Select}
                      label="Apply Group"
                      formControlProps={{ fullWidth: true }}
                    >
                      <MenuItem value="Policy2">Faculty</MenuItem>
                    </Field>
                  </Condition>
                  <Condition when="role" is="admin">
                    <Field
                      fullWidth
                      name="policy"
                      component={Select}
                      label="Apply Group"
                      formControlProps={{ fullWidth: true }}
                    >
                      <MenuItem value="Policy3">Admin</MenuItem>
                    </Field>
                  </Condition>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="instance"
                    component={Select}
                    label="Select Instance Types"
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value="Standard">Standard</MenuItem>
                    <MenuItem value="ComputeOptimised">
                      ComputeOptimised
                    </MenuItem>
                    <MenuItem value="AcceleratedComputing">
                      AcceleratedComputing
                    </MenuItem>
                  </Field>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </form>
        )}
      />
    </div>
  );
}
