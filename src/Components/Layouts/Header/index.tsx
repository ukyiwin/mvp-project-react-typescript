import * as React from 'react';
// import PropTypes from 'prop-types';
import { withStyles, StyleRulesCallback } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Home from 'material-ui-icons/Home';
import Hidden from 'material-ui/Hidden';
import Explore from 'material-ui-icons/Explore';
import ChatBubble from 'material-ui-icons/Chat';
import Notifications from 'material-ui-icons/Notifications';
import { Link, LinkProps } from 'react-router-dom';
// import Popover from 'material-ui/Popover';
import Forum from 'material-ui-icons/Forum';
import { ModalLink } from 'react-router-modal';
import UserAvatar from '../../UserAvatar';
import SearchBar from '../../SearchBar';
import withRoot from '../../../Utils/withRoot';
import * as Logo from 'Assets/logo.png';
import { findDOMNode } from 'react-dom';
import { WithStyles } from 'material-ui';
import PublicHeader from 'Components/Layouts/Header/Public';

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

class PrivateHeader extends React.Component<Props & WithStyles<classNames> & LinkProps> {

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
    /* const {
      open,
      anchorEl,
      anchorOriginVertical,
      anchorOriginHorizontal,
      transformOriginVertical,
      transformOriginHorizontal,
      positionTop,
      positionLeft,
      anchorReference,
    } = this.state; */
    return (
      <AppBar position="fixed" color="inherit" >
        <Toolbar>
          <Hidden mdUp={true}>
          <IconButton 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          </Hidden>
          <img src={Logo} className={classes.logo} />
          <SearchBar />
          <div className={classes.flex} />
          <IconButton 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="Menu"
            // tslint:disable-next-line:no-any jsx-alignment
            component={Link} {...{to: '/'} as any} 
          >
            <Home />
          </IconButton>
          <IconButton 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="Menu"
            // tslint:disable-next-line:no-any jsx-alignment
            component={Link} {...{to: 'library'} as any} 
          >
            <Explore />
          </IconButton>
          <IconButton 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="Menu"
            // tslint:disable-next-line:no-any jsx-alignment
            component={Link} {...{to: 'message'} as any} 
          >
            <ChatBubble />
          </IconButton>
          <IconButton 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="Menu"
            // tslint:disable-next-line:no-any jsx-alignment
            component={Link} {...{to: 'forum'} as any} 
          >
            <Forum />
          </IconButton>
          <IconButton 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="Menu"
            // tslint:disable-next-line:no-any jsx-alignment
            component={Link} {...{to: 'notification'} as any} 
          >
            <Notifications />
          </IconButton>
          <IconButton 
            className={classes.menuButton}
            color="inherit" 
            aria-label="Menu"
            onClick={this.handleClickButton}
          >
            <UserAvatar fullName={'Rex Raphael'} fileName={'http://i44.tinypic.com/2i6chmq.jpg'} />
          </IconButton>
          <Button size={'small'} variant={'raised'} color={'secondary'}>Ask Question</Button>
        </Toolbar>
      </AppBar>
    );
  }
  
}

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

const AuthHeader = withRoot(withStyles(styles)(PrivateHeader));
const Header = withRoot(withStyles(styles)(NormalHeader));

// export default withRoot(withStyles(styles)(NormalHeader));

export {
  AuthHeader,
  Header,
  PublicHeader
};