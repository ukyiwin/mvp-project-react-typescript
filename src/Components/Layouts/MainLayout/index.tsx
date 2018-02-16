import * as React from 'react';
import { Route } from 'react-router-dom';
import Header from 'Components/Layouts/Header';
import { FooterPublic } from 'Components/Layouts/FooterPublic';
import { Step1, } from 'Components/SignupSlide';
import { Grid } from 'material-ui';
import Footer from 'Components/Layouts/Footer';
// import Drawer from 'Components/Layouts/Drawer';

/*
type StyleProps = {
  // tslint:disable-next-line:no-any
  children: any,
  classes: object,
};

// tslint:disable-next-line:typedef
function createStyled(styles, options) {
  // tslint:disable-next-line:typedef
  // tslint:disable-next-line:no-shadowed-variable
  function Styled(props: StyleProps) {
    const { children, ...other } = props;
    return props.children(other);
  }
  return withStyles(styles, options)(Styled);
}

const Styled = createStyled({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
    }
  // tslint:disable-next-line:align
  }, {}
);*/

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
        <Header />
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

const PublicLayout: React.SFC<DefaultProps> = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route 
      {...rest} 
      exact={true}
      render={matctProps => (
      <div>
        <Header />
        <Grid container={true} spacing={24}>
          <Component {...matctProps} />
        </Grid>
        <FooterPublic />
      </div>
      )}
    />
  );
};

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

const SignupLayout: React.SFC<DefaultProps> = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route 
      {...rest} 
      exact={true}
      render={matctProps => (
      <div>
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

export {
  PublicLayout,
  PrivateLayout,
  EmptyLayout,
  SignupLayout
};