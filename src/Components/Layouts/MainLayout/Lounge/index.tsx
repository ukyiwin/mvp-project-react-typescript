import * as React from 'react';
import { Route, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
// import { FooterPublic } from 'Components/Layouts/FooterPublic';
import { User } from 'CustomTypings/schema';
import { BottomNav } from 'Components/Layouts/Header';

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

const EmptyLayout: React.SFC<RouteComponentProps<any> & DefaultProps> = (props) => {
    const { component: Component, isAuthenticated, exact, ...rest} = props;

    return (
        <Route
            {...rest}
            exact={exact}
            render={(matctProps) =>
              isAuthenticated ? (
                  <>
                    <div
                      className="uk-width-1-1 uk-flex uk-height-1-1"
                      style={{
                        overflow: 'auto',
                        position: 'absolute',
                        top: '0px',
                        right: 0,
                        bottom: '10px',
                        marginTop: 70
                      }}
                    >
                      <Component {...matctProps} />
                    </div>
                    <BottomNav me={props.me} isAuthenticated={isAuthenticated} logout={props.logout}/>
                  </>
              ) : (
                  <Redirect to={{ pathname: '/' }} />
              )
            }
        />
    );
};

export default withRouter(EmptyLayout);
