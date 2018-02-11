import * as React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Home from 'material-ui-icons/Home';
import Hidden from 'material-ui/Hidden';
import Explore from 'material-ui-icons/Explore';
import ChatBubble from 'material-ui-icons/Chat';
import Notifications from 'material-ui-icons/Notifications';
import Forum from 'material-ui-icons/Forum';
import UserAvatar from '../../UserAvatar';
import withRoot from '../../../Utils/withRoot';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1
  },
  left: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

// tslint:disable-next-line:no-any
function PublicHeader(props: any) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Hidden mdUp={true}>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="title" color="inherit" align="left" className={classes.flex}>
            Unizonn
          </Typography>
          <Input className={classes.flex} disableUnderline={true} placeholder={'Search articles, people, answer etc.'}/>
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
          <UserAvatar fullName={'Rex Raphael'} fileName={'http://i44.tinypic.com/2i6chmq.jpg'} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRoot(withStyles(styles)(PublicHeader));
