import * as React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import ProfileLeft from 'Components/ProfileLeft';
import './style.css';
import { EmptyLayout } from '..';

interface DefaultProps {
  // tslint:disable-next-line:no-any
  component: any;
  path?: string;
  exact?: boolean;
  isAuthenticated: boolean;
  // tslint:disable-next-line:no-any
  refreshToken: any;
  match: object;
  location: object;
  history: object;
}

const ProfileLayout: React.SFC<DefaultProps> = (props) => {
  const { component: Component, isAuthenticated, exact, refreshToken, ...rest } = props;

  return (
    <EmptyLayout 
      {...rest} 
      isAuthenticated={isAuthenticated}
      exact={exact !== null ? exact : true}
      component={matchProps =>
        isAuthenticated ?
          (<div className="uk-width-1-1">
            <div className="uk-cover-container uk-height-medium uk-card uk-card-default uk-background-primary">
              <canvas width="" height="" />
              <img 
                src="https://getuikit.com/docs/images/photo.jpg" 
                alt="cover image" 
                uk-cover="ratio: 1" 
                className="uk-blend-hard-darken"
              />
            </div> 
            <div className="uk-card uk-card-default uk-padding">
              <div className="uk-align-right">
                <ul 
                  // tslint:disable-next-line:jsx-boolean-value
                  data-uk-tab 
                  style={{paddingTop: 1}}
                >
                  <li>
                    <a>
                      <div>
                        Articles
                        <br/>
                        <span className="">
                        20
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a>
                      <div>
                        Connections
                        <br/>
                        <span className="">
                        20
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a>
                      <div>
                        Likes
                        <br/>
                        <span className="">
                        20
                        </span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <button className="uk-button uk-button-secondary uk-button-small">Edit Profile</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="uk-flex uk-flex-stretch uk-width-1-1">
              <div className="uk-width-1-3">
                <ProfileLeft />
              </div>
              <div className="uk-width-2-3">
                <Component {...matchProps} refreshToken={refreshToken}/>
              </div>
            </div>
          </div>)
          : ( <Redirect to={{ pathname: '/' }} /> )
      }
    />
  );
};

export default withRouter(ProfileLayout);