import * as React from 'react';
import { withStyles, StyleRulesCallback } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import withRoot from 'Utils/withRoot';
import ListItem from 'material-ui/List';
import { WithStyles } from 'material-ui';

const drawerWidth = 240;

type classNames = 'root' | 'appFrame' | 'drawerPaper'| 'drawerHeader';

const styles: StyleRulesCallback<classNames> = theme => ({
  root: {
    width: '100%',
    height: 430,
    marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
});

type Props = {
  classes?: object,
  // tslint:disable-next-line:no-any
  theme?: any
};

class PersistentDrawer extends React.Component<Props & WithStyles<classNames>> {
  state = {
    open: false,
    anchor: 'left',
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  }

  handleDrawerClose = () => {
    this.setState({ open: false });
  }

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <Drawer
        variant="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor={'left'}
        open={open}
      >
        <div>
          <div className={classes.drawerHeader}>
            UNIZONN
          </div>
          <Divider />
          <List>
            <ListItem title={'Hey'} />
          </List>
          <Divider />
          <List>
            <ListItem title={'Hey'} />
          </List>
        </div>
      </Drawer>
    );
  }
}

export default withRoot(withStyles(styles)(PersistentDrawer));