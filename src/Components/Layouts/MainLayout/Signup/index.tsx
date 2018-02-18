import * as React from 'react';
import { Route } from 'react-router-dom';
import { Header } from 'Components/Layouts/Header';
import { Step1, } from 'Components/SignupSlide';
import { Grid } from 'material-ui';

interface DefaultProps {
  // tslint:disable-next-line:no-any
  component: any;
  path?: string;
  exact?: boolean;
}

const SignupLayout: React.SFC<DefaultProps> = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route 
      {...rest} 
      exact={true}
      render={matctProps => (
      <div>
        <Header />
        <Grid container={true} spacing={24} alignContent={'space-between'}>
          <Grid item={true} xs={6}>
            <Step1 />
          </Grid>
          <Grid item={true} xs={6}>
            <Component {...matctProps} />
          </Grid>
        </Grid>
      </div>
      )}
    />
  );
};

export default SignupLayout;