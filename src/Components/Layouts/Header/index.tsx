import * as React from 'react';
// import PropTypes from 'prop-types';
import { withStyles, StyleRulesCallback } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Hidden from 'material-ui/Hidden';
import { Link, LinkProps } from 'react-router-dom';
// import Popover from 'material-ui/Popover';
import { ModalLink } from 'react-router-modal';
import SearchBar from '../../SearchBar';
import withRoot from '../../../Utils/withRoot';
import * as Logo from 'Assets/logo.png';
import { findDOMNode } from 'react-dom';
import { WithStyles } from 'material-ui';
import PublicHeader from 'Components/Layouts/Header/Public';
import PrivateHeader from 'Components/Layouts/Header/Private';

type classNames = 'flex' | 'left' | 'root'| 'menuButton'| 'label'| 'logo';

const styles: StyleRulesCallback<classNames> = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1
  },
  left: {
    flex: 1,
    left: -20
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  label: {
    color: '#ffffff'
  },
  logo: {
    width: 64,
    height: 64,
    marginRight: 40
  }
});

type Props = {
  classes?: object,
};

class NormalHeader extends React.Component<Props & WithStyles<classNames> & LinkProps> {

  // tslint:disable-next-line:no-any
  [x: string]: any;
  state = {
    open: false,
    anchorEl: null,
    anchorOriginVertical: 'bottom',
    anchorOriginHorizontal: 'center',
    transformOriginVertical: 'top',
    transformOriginHorizontal: 'center',
    positionTop: 200, // Just so the popover can be spotted more easily
    positionLeft: 400, // Same as above
    anchorReference: 'anchorEl',
    loggedIn: false,
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  }

  handleNumberInputChange = key => event => {
    this.setState({
      [key]: parseInt(event.target.value, 10),
    });
  }

  handleClickButton = () => {
    this.setState({
      open: true,
      anchorEl: findDOMNode(this.button),
    });
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <AppBar position="fixed">
        <Toolbar>
          <Hidden mdUp={true}>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
          </Hidden>
          <img src={Logo} className={classes.logo} />
          <SearchBar />
          <div className={classes.flex} />
          <Button 
            size={'small'} 
            variant="raised"
            color={'primary'}
            // tslint:disable-next-line:no-any jsx-alignment
            component={Link} {...{to: 'login'} as any} 
            // tslint:disable-next-line:jsx-alignment
            to={'/login'}
          >
            Login
          </Button>
          <Button
            size={'small'} 
            variant="raised"
            classes={{
              label: classes.label
            }}
            style={{ backgroundColor: 'teal'}}
            color={'primary'}
            // tslint:disable-next-line:no-any jsx-alignment
            component={ModalLink} {...{to: 'login'} as any} 
            // tslint:disable-next-line:jsx-alignment
            to={'/signup'}
          >
            Sign up
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
  
}

const Header = withRoot(withStyles(styles)(NormalHeader));

// export default withRoot(withStyles(styles)(NormalHeader));

export {
  Header,
  PublicHeader,
  PrivateHeader
};