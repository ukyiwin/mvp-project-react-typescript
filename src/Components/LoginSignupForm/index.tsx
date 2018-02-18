import * as React from 'react';
import { withStyles, StyleRulesCallback } from 'material-ui/styles';
import { LinkProps } from 'react-router-dom';
import withRoot from 'Utils/withRoot';
import { WithStyles } from 'material-ui';
import './style.css';

type classNameNameNames = 'flex' | 'left' | 'root'| 'menuButton'| 'label'| 'logo';

const styles: StyleRulesCallback<classNameNameNames> = theme => ({
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
  classNameNamees?: object,
};

// tslint:disable-next-line:no-any
class LoginSignuphtmlForm extends React.Component<Props & WithStyles<classNameNameNames> & LinkProps> {

  componentDidMount() {
    // tslint:disable-next-line:typedef
  }
  
  render() {
    // const { classNameNamees } = this.props;
    return (
      <div className="testbox"  id={'#container '}>
        <h1>Registration</h1>
        <form action="/">
          <hr/>
          <div className="accounttype">
            <input type="radio" value="None" id="radioOne" name="account" checked={true}/>
            <label htmlFor="radioOne" className="radio">Personal</label>
            <input type="radio" value="None" id="radioTwo" name="account" />
            <label htmlFor="radioTwo" className="radio">Company</label>
          </div>
          <hr/>
          <label id="icon" htmlFor="name">
            <i className="icon-envelope " />
          </label>
          <input type="text" name="name" id="name" placeholder="Email" required={true} />
          <label id="icon" htmlFor="name"><i className="icon-user" /></label>
          <input type="text" name="name" id="name" placeholder="Name" required={true} />
          <label id="icon" htmlFor="name"><i className="icon-shield" /></label>
          <input type="password" name="name" id="name" placeholder="Password" required={true} />
          <div className="gender">
            <input type="radio" value="None" id="male" name="gender" checked={true}/>
            <label htmlFor="male" className="radio">Male</label>
            <input type="radio" value="None" id="female" name="gender" />
            <label htmlFor="female" className="radio">Female</label>
          </div> 
          <p>By clicking Register, you agree on our <a href="#">terms and condition</a>.</p>
          <a href="#" className="button">Register</a>
        </form>
      </div>
    );
  }
  
}

export default withRoot(withStyles(styles)(LoginSignuphtmlForm));