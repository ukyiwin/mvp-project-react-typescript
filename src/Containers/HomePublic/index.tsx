import * as React from 'react';
// import * as $ from 'jquery';
// import LoginSignupForm from 'Components/LoginSignupForm';
import './style.css';
// import { purple } from 'material-ui/colors';

type Props = {
  classes?: object,
};

class HomePublic extends React.Component<Props> {

  offsetTarget: number;
  state = {
    strokeDashOffset: 0,
    pinPin: false,
    pinUnpin: false
  };

  componentWillMount() {
    // dhsj
  }

  componentDidMount() {
    // kjk
  }

  componentWillUnmount() {
    // hjh
  }
  
  render() {
    // const { classes } = this.props;

    return(
      <div className="uk-width-expand">

        <div className="uk-section uk-section-muted" uk-height-viewport="expand: true">      
          <div className="uk-container uk-container-expand">
              <h3>Section Muted</h3>
              <div className="uk-grid-match uk-child-width-1-3@m" uk-grid={true}>
                <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
              </div>
            </div>
        </div>

        <div className="uk-section uk-section-primary uk-light uk-height-1-1">
          <div className="uk-container">
            <h3>Section Primary</h3>
            <div className="uk-grid-match uk-child-width-1-3@m" uk-grid={true}>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="uk-section-default">
          <div 
            className="uk-section uk-light uk-background-cover" 
            style={{backgroundImage: 'url(../docs/images/dark.jpg)'}}
          >
            <div className="uk-container">
              <h3>Section with Images</h3>
              <div className="uk-grid-match uk-child-width-1-3@m" uk-grid={true}>
                <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default HomePublic;