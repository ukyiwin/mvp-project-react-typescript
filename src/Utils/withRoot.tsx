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
        borderRadius: 3,
        border: 0,
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        padding: '0 20px',
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