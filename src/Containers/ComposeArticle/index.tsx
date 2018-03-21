import * as React from 'react';
// import Editor from 'Components/Editor';
import UnizonnEditor from 'Components/Editor2';
import Select from 'react-select-plus';
import { ALL_INTEREST } from 'Graphql/Query';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose, graphql, withApollo } from 'react-apollo';
// import { Helmet } from 'react-helmet';
import { ChildProps } from 'react-apollo/types';
import 'react-select-plus/dist/react-select-plus.css';
import './style.css';
import { Interest } from 'CustomTypings/schema';

interface Props {
    // tslint:disable-next-line:no-any
    allInterest: any;
    // tslint:disable-next-line:no-any
    refreshToken?: any;
    // tslint:disable-next-line:no-any
    client?: any;
}

interface Response {
    allInterest: Interest[];
}

class ComposeWrite extends React.Component<RouteComponentProps & Props & ChildProps<Response, {}>, {}> {
    state = {
        title: null,
        body: null,
        category: [],
        removeSelected: true,
        value: [],
    };

    handleChange = value => {
        this.setState({ value });
        // console.log(`Selected: ${selectedOption.label}`);
    };

    addInterestContent() {
        this.props.client
            .query({
                query: ALL_INTEREST,
            })
            .then(result => {
                // tslint:disable-next-line:no-any
                const tempList = [] as any;
                result.data.allInterest.map(interest => {
                    const temp = { value: interest.id, label: interest.name };
                    tempList.push(temp);
                });
                // tslint:disable-next-line:no-console
                console.log(result);
                this.setState({ category: tempList });
            });
    }

    componentDidMount() {
        this.addInterestContent();
    }
    render() {
        const { value, category, title } = this.state;
        // tslint:disable-next-line:no-console
        console.log(title);

        return (
            <div className="uk-width-1-1">
                <div className="uk-flex uk-padding-large">
                    <div className="uk-width-2-3@m uk-width-1-1@s">
                        <div className="uk-card uk-card-small uk-card-default" style={{ paddingTop: 10 }}>
                            jkjk
                        </div>
                        <div
                            className="uk-card uk-card-large uk-card-default"
                            style={{ minHeight: '60vh', paddingTop: 10 }}
                        >
                            <UnizonnEditor />
                        </div>
                    </div>
                    <div className="uk-width-1-3@m uk-width-1-1@s uk-padding-small uk-padding-remove-vertical">
                        <div className="uk-width-1-1 uk-margin-small-bottom">
                            <button className="uk-button uk-button-secondary uk-width-1-2" type="button">
                                Go Back
                            </button>
                            <button className="uk-button uk-button-primary uk-width-1-2" type="button">
                                Publish
                            </button>
                        </div>
                        {!this.props.allInterest.loading ? (
                            <Select
                                name="form-field-name"
                                value={value}
                                onChange={this.handleChange}
                                placeholder="Add categories or interest"
                                multi={true}
                                closeOnSelect={true}
                                removeSelected={this.state.removeSelected}
                                simpleValue={false}
                                options={category}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(
    compose(
        withApollo,
        graphql<Response, {}, Props>(ALL_INTEREST, {
            name: 'allInterest',
        }),
    )(ComposeWrite),
);
