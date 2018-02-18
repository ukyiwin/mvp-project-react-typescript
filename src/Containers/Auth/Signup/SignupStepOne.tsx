import * as React from 'react';
import { withStyles, StyleRulesCallback } from 'material-ui/styles';
// import Input, { InputLabel } from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';
import purple from 'material-ui/colors/purple';
import withRoot from 'Utils/withRoot';
import { Button, WithStyles, Grid } from 'material-ui';

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
  },
  textFieldInput: {
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
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
        <div style={{ padding: 30 }}>
          <h2 style={{ fontSize: 30 }}>Sign up</h2>
          <Grid container={true} spacing={24}>
            <Grid item={true} xs={12} sm={12} md={6}>
              <FormControl className={classes.formControl} fullWidth={true}>
                <TextField
                  label="Firstname"
                />
              </FormControl>
            </Grid>
            <Grid item={true} xs={12} sm={12} md={6}>
              <FormControl className={classes.formControl} fullWidth={true}>
                <TextField
                  label="Firstname"
                />
              </FormControl>
            </Grid>
          </Grid>
          <FormControl className={classes.formControl} fullWidth={true}>
            <TextField
              label="Username"
            />
          </FormControl>
          <FormControl className={classes.formControl} fullWidth={true}>
              <TextField
                defaultValue=""
                label="Date of Birth"
                type="date"
              />
          </FormControl>
          <FormControl className={classes.formControl} fullWidth={true}>
            <TextField
                  placeholder="Email"
                  label="Email"
            />
          </FormControl>
          <FormControl className={classes.formControl} fullWidth={true}>
              <TextField
                placeholder="Password"
                label="Password"
              />
          </FormControl>
          <FormControl className={classes.formControl} fullWidth={true}>
              <TextField
                placeholder="Confirm Password"
                label="Confirm Password"
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