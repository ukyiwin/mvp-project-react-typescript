import * as React from 'react';
import { Route, Redirect, withRouter, Link, RouteComponentProps } from 'react-router-dom';
import { User } from 'CustomTypings/schema';
import RightSideBar from 'Components/RightSideBar';
import LeftSideBar from 'Components/LeftSideBar';
import glamorous from 'glamorous';
import Label from 'Components/Label';
import { PrivateHeader, BottomNav } from 'Components/Layouts/Header';
import './style.scss';
import AppViewWrapper from 'Components/AppViewWrapper';
import { ThreadsListScrollContainer } from 'Components/ListItems/style';

interface DefaultProps {
    // tslint:disable-next-line:no-any
    component: any;
    path?: string;
    exact?: boolean;
    isAuthenticated: boolean;
    match: object;
    location: object;
    history: object;
    me: User;
    logout: any;
}

const A = glamorous.a({
    fontFamily: 'brandon-grotesque',
    color: '#000000',
});

const PrivateLayout: React.SFC<RouteComponentProps<any> & DefaultProps> = (props) => {
    const { component: Component, isAuthenticated, ...rest } = props;

    return (
        <Route
            {...rest}
            exact={true}
            render={(matctProps) =>
                isAuthenticated ? (
                  <>
                    <PrivateHeader  me={props.me} isAuthenticated={isAuthenticated} logout={props.logout} />
                    <AppViewWrapper
                      data-cy="inbox-scroller"
                      style={{
                        overflow: 'auto',
                        position: 'absolute',
                        top: '0px',
                        right: 0,
                        bottom: '10px',
                        marginTop: 70
                      }}
                    >
                      <div 
                        className="uk-flex uk-flex-center uk-flex-around uk-width-1-1"
                        style={{
                          paddingTop: 30,
                          marginBottom: 50
                        }}
                      >
                          <div className="uk-width-1-5 uk-margin-large-left uk-margin-small-right uk-visible@m">
                            <LeftSideBar />
                          </div>
                          <div
                            className="uk-margin-small@s uk-width-expand"
                          >
                            <ThreadsListScrollContainer id={'scroller-for-dm-threads'}>
                              <Component {...matctProps} />
                            </ThreadsListScrollContainer>
                          </div>
                          <div
                              className="uk-width-1-5 uk-margin-large-right uk-margin-small-left uk-visible@m"
                          >
                            {!props.me.bio ? (
                                <div 
                                  className="uk-card uk-card-default uk-card-body uk-width-1-1 uk-padding-small"
                                  style={{marginBottom: 10}}
                                >
                                    <h3 className="uk-card-title">Hey! {props.me.firstname}</h3>
                                    <p>
                                        Please update your profile header image and biography by clicking below
                                    </p>
                                    <Link to={`/n/${props.me.username}/settings`} className="uk-button uk-button-primary">
                                        Update Profile
                                    </Link>
                                </div>
                            ) : null}
                            <RightSideBar />
                          </div>
                      </div>
                      </AppViewWrapper>
                    <BottomNav me={props.me} isAuthenticated={isAuthenticated} logout={props.logout} />
                  </>
                ) : (
                    <Redirect to={{ pathname: '/' }} />
                )
            }
        />
    );
};

export default withRouter(PrivateLayout);
