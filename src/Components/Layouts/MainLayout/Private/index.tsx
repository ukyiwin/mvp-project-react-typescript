import * as React from 'react';
import { Route } from 'react-router-dom';
import { AuthHeader } from 'Components/Layouts/Header';
import { Grid } from 'material-ui';
import Footer from 'Components/Layouts/Footer';

interface DefaultProps {
  // tslint:disable-next-line:no-any
  component: any;
  path?: string;
  exact?: boolean;
}

const PrivateLayout: React.SFC<DefaultProps> = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route 
      {...rest} 
      exact={true}
      render={matctProps => (
      <div>
        <AuthHeader />
        <Grid 
          container={true} 
          spacing={24} 
          style={{ paddingTop: 73, paddingLeft: 70, paddingRight: 70 }}
          alignContent={'space-between'}
        >
          <Grid item={true} xs={3}>
            Left Sidebar
          </Grid>
          <Grid item={true} xs={6}>
            <Component {...matctProps} />
          </Grid>
          <Grid item={true} xs={3}>
            Right
          </Grid>
        </Grid>
        <Footer />
      </div>
      )}
    />
  );
};

export default PrivateLayout;