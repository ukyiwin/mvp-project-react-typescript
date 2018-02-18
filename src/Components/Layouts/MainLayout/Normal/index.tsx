import * as React from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'material-ui';

interface DefaultProps {
  // tslint:disable-next-line:no-any
  component: any;
  path?: string;
  exact?: boolean;
}

const EmptyLayout: React.SFC<DefaultProps> = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route 
      {...rest} 
      exact={true}
      render={matctProps => (
      <div>
        <Grid container={true} spacing={24} alignContent={'space-between'}>
          <Component {...matctProps} />
        </Grid>
      </div>
      )}
    />
  );
};

export default EmptyLayout;