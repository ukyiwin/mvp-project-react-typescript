import * as React from 'react';
import { withStyles, StyleRulesCallback } from 'material-ui/styles';
// import Input, { InputLabel } from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';
import purple from 'material-ui/colors/purple';
import withRoot from 'Utils/withRoot';
import { Button, WithStyles, FormLabel, FormControlLabel, RadioGroup, Radio } from 'material-ui';

type classNames = 'container' | 'formControl' | 'inputLabelFocused'| 'inputInkbar' | 'textFieldRoot' |
  'textFieldInput' | 'textFieldFormLabel' | 'formControl2';

const styles: StyleRulesCallback<classNames> = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'inherit',
    marginTop: 80
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  formControl2: {
    margin: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  inputLabelFocused: {
    color: purple[500],
  },
  inputInkbar: {
    '&:after': {
      backgroundColor: purple[500],
    },
  },
  textFieldRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  textFieldInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid teal',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  textFieldFormLabel: {
    fontSize: 18,
  },
});

type Props = {
  classes?: object,
};

class SignupStepOne extends React.Component<Props & WithStyles<classNames>> {

    render() {

      const { classes } = this.props;

      return(
        <div>
          <div className={classes.container}>
            <FormControl className={classes.formControl} fullWidth={true}>
              <TextField
                defaultValue="Firstname"
                label="Firstname"
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.textFieldRoot,
                    input: classes.textFieldInput,
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                  className: classes.textFieldFormLabel,
                }}
              />
            </FormControl>
            <FormControl className={classes.formControl} fullWidth={true}>
              <TextField
                defaultValue="Firstname"
                label="Firstname"
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.textFieldRoot,
                    input: classes.textFieldInput,
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                  className: classes.textFieldFormLabel,
                }}
              />
            </FormControl>
          </div>
          <FormControl className={classes.formControl} fullWidth={true}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              row={true}
              className={classes.formControl}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>
          <FormControl className={classes.formControl} fullWidth={true}>
              <TextField
                defaultValue=""
                label="Date of Birth"
                type="date"
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.textFieldRoot,
                    input: classes.textFieldInput,
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                  className: classes.textFieldFormLabel,
                }}
              />
          </FormControl>
          <FormControl className={classes.formControl} fullWidth={true}>
            <TextField
                  placeholder="Email"
                  label="Email"
                  InputProps={{
                    disableUnderline: true,
                    classes: {
                      root: classes.textFieldRoot,
                      input: classes.textFieldInput,
                    },
                  }}
                  InputLabelProps={{
                    shrink: true,
                    className: classes.textFieldFormLabel,
                  }}
            />
          </FormControl>
          <FormControl className={classes.formControl} fullWidth={true}>
              <TextField
                placeholder="Password"
                label="Password"
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.textFieldRoot,
                    input: classes.textFieldInput,
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                  className: classes.textFieldFormLabel,
                }}
              />
          </FormControl>
          <FormControl className={classes.formControl} fullWidth={true}>
              <TextField
                placeholder="Confirm Password"
                label="Confirm Password"
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.textFieldRoot,
                    input: classes.textFieldInput,
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                  className: classes.textFieldFormLabel,
                }}
              />
          </FormControl>
          <FormControl className={classes.formControl2}>
            <Button variant="raised" color="default">Clear</Button> 
            <Button variant="raised" color="secondary">NEXT</Button>
          </FormControl>
        </div>
      );
    }
}

export default withRoot(withStyles(styles)(SignupStepOne));