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

    handleChange = (value) => {
        this.setState({ value });
        // console.log(`Selected: ${selectedOption.label}`);
    }

    addInterestContent() {
        this.props.client
            .query({
                query: ALL_INTEREST,
            })
            .then((result) => {
                // tslint:disable-next-line:no-any
                const tempList = [] as any;
                result.data.allInterest.map((interest) => {
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
              <div className="uk-width-1-1 mdc-elevation--z1 uk-flex uk-flex-between" style={{backgroundColor: '#454d5d', padding: 4}}>
                <div className="uk-flex-around">
                  <button className="uk-button uk-button-small uk-button-secondary" type="button">
                      Back
                  </button>
                </div>
                <div className="uk-flex-around">
                  <button className="uk-button uk-light uk-button-small uk-button-default uk-width-1-2" type="button">
                      Drafts
                  </button>
                  <button className="uk-button uk-button-small uk-button-primary uk-width-1-2" type="button">
                      Publish
                  </button>
                </div>
              </div>
              <div 
                className="uk-width-1-1 uk-flex uk-margin-small-bottom"
                style={{backgroundColor: '#e1eaf1', height: 250}}
                >
                  <img src="" />
              </div>
              <div className="uk-width-1-1 uk-padding-large mdc-card mdc-elevation--z5 uk-padding-remove-vertical">
                <div className="uk-width-1-1 uk-padding-large uk-margin-top uk-padding-remove-vertical">
                  <div className="uk-width-1-1 uk-padding-large uk-margin-top uk-padding-remove-vertical">
                    {!this.props.allInterest.loading ? (
                        <Select
                            name="form-field-name"
                            value={value}
                            onChange={this.handleChange}
                            placeholder="Add categories or interest"
                            multi={true}
                            closeOnSelect={true}
                            style={{borderWidth: 0}}
                            removeSelected={this.state.removeSelected}
                            simpleValue={false}
                            options={category}
                        />
                    ) : null}
                  </div>
                </div>
                <div className="uk-width-1-1 uk-padding-large uk-padding-remove-vertical uk-margin-top">
                  <div className="uk-width-1-1 uk-padding-large uk-padding-remove-vertical">
                      <input 
                        className="uk-article-title uk-width-1-1" 
                        style={{borderWidth: 0, fontWeight: 'bolder'}} 
                        placeholder="Title of article" 
                      />
                  </div>
                </div>
                <div className="uk-width-1-1 uk-padding-large uk-padding-remove-vertical" style={{ minHeight: '40vh'}} >
                        
                        <div className="uk-width-1-1 uk-padding-large uk-padding-remove-vertical">
                          <UnizonnEditor />
                        </div>
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
