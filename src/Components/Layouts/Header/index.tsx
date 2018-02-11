import * as React from 'react';
import { withStyles, StyleRulesCallback } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Home from 'material-ui-icons/Home';
import Hidden from 'material-ui/Hidden';
import Explore from 'material-ui-icons/Explore';
import ChatBubble from 'material-ui-icons/Chat';
import Notifications from 'material-ui-icons/Notifications';
// import Popover from 'material-ui/Popover';
import Forum from 'material-ui-icons/Forum';
import UserAvatar from '../../UserAvatar';
import SearchBar from '../../SearchBar';
import withRoot from '../../../Utils/withRoot';
import { findDOMNode } from 'react-dom';
import { WithStyles } from 'material-ui';

type classNames = 'flex' | 'left' | 'root'| 'menuButton';

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
});

type Props = {
  classes?: object,
};

// tslint:disable-next-line:no-any
class PublicHeader extends React.Component<Props & WithStyles<classNames>> {

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
      <div className={classes.root}>
        <AppBar position="fixed" color="default" >
          <Toolbar>
            <Hidden mdUp={true}>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography variant="title" color="inherit" align="left" className={classes.flex}>
              UNIZONN
            </Typography>
            <SearchBar />
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <Home />
            </IconButton>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <Explore />
            </IconButton>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <ChatBubble />
            </IconButton>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <Forum />
            </IconButton>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
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
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
}

export default withRoot(withStyles(styles)(PublicHeader));

/*
<Popover
              open={this.state.open}
              anchorEl={anchorEl}
              anchorReference={anchorReference}
              anchorPosition={{ top: positionTop, left: positionLeft }}
              onClose={this.handleClose}
              anchorOrigin={{
                vertical: anchorOriginVertical,
                horizontal: anchorOriginHorizontal,
              }}
              transformOrigin={{
                vertical: transformOriginVertical,
                horizontal: transformOriginHorizontal,
              }}
            >
              <Typography>The content of the Popover.</Typography>
            </Popover>
*/