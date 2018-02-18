import * as React from 'react';
import { Route } from 'react-router-dom';
import { PublicHeader } from 'Components/Layouts/Header';
import { FooterPublic } from 'Components/Layouts/FooterPublic';
// import { Grid } from 'material-ui';
import './style.css';

interface DefaultProps {
  // tslint:disable-next-line:no-any
  component: any;
  path?: string;
  exact?: boolean;
}

const PublicLayout: React.SFC<DefaultProps> = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route 
      {...rest} 
      exact={true}
      render={matctProps => (
      <div>
        <PublicHeader />
        <div className="uk-flex">
          <Component {...matctProps} />
          
        </div>
        <FooterPublic />
      </div>
      )}
    />
  );
};

export default PublicLayout;
