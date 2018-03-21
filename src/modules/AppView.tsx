import * as React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';
import IndexContainer from './index/IndexContainer';
import PageNotFound from '../Containers/NotFound';

export type IAppViewProps = RouteComponentProps<undefined>;

const AppView: React.StatelessComponent<IAppViewProps> = () =>
    // tslint:disable-next-line:jsx-wrap-multiline
    <div className="app-base">
        <Switch>
            <Route path="/" exact component={IndexContainer} />
            <Route component={PageNotFound} />
        </Switch>
    </div>;

export default AppView;
