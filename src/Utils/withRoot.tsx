import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import deepOrange from 'material-ui/colors/deepOrange';
import red from 'material-ui/colors/red';
import Reboot from 'material-ui/Reboot';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
      dark: '#151E29'
    },
    secondary: deepOrange,
    error: red,
    type: 'light',
    // contrastThreshold: 3,
    // tonalOffset: 0.2,
  },
  overrides: {
    MuiButton: {
      // Name of the styleSheet
      root: {
        // Name of the rule
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
      },
    },
  },
});
type Prop= {
  pageContext?: object,
  reduxServerState?: object,
  url?: object,
};

function withRoot(Component: React.ComponentType) {
  class WithRoot extends React.Component<Prop> {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context

    render() {
      // const { pageContext } = this.props;

      return (
        <MuiThemeProvider theme={theme}>
          {/* Reboot kickstart an elegant, consistent, and simple baseline to build upon. */}
          <Reboot />
          <Component {...this.props} />
        </MuiThemeProvider>
      );
    }
    
  }

  return WithRoot;
}

export default withRoot;