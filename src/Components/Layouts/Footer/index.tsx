import * as React from 'react';
import { Theme, withStyles, WithStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import Hidden from 'material-ui/Hidden';

const styles = (theme: Theme) => ({
  root: {
    width: '100%',
  }
});

type Props = {
   classes?: object
};

// tslint:disable-next-line:no-any
class FooterNavigation extends React.Component<Props & WithStyles<'root'>> {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
        <Hidden mdUp={true}>
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels={true}
                className={classes.root}
            >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
      </Hidden>
    );
  }
}

export default withStyles(styles)(FooterNavigation);