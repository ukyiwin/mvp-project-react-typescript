import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import './style.scss';

interface Props extends RouteComponentProps<{}> {
    // tslint:disable-next-line:no-any
    me: any;
    // tslint:disable-next-line:no-any
    refreshToken?: any;
}

class FinishPage extends React.Component<Props> {
    render() {
        return (
            <div className="uk-width-1-1" style={{ height: '100vh', backgroundColor: 'teal' }}>
                Finihesd
            </div>
        );
    }
}

export default withRouter(FinishPage);
