import * as React from 'react';
import Editor from 'Components/Editor';
import Select from 'react-select-plus';
import { ALL_INTEREST } from 'Graphql/Query';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose, graphql, withApollo } from 'react-apollo';
// import { Helmet } from 'react-helmet';
import { ChildProps } from 'react-apollo/types';
import 'react-select-plus/dist/react-select-plus.css';
import './style.css';
import { Interest } from 'CustomTypings/schema';

type Props = {
  // tslint:disable-next-line:no-any
  allInterest: any,
  // tslint:disable-next-line:no-any
  refreshToken?: any,
  // tslint:disable-next-line:no-any
  client?: any,
};

type Response = {
  allInterest: Interest[]
};

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

    this.props.client.query({
      query: ALL_INTEREST
    }).then( result => {
      // tslint:disable-next-line:no-any
      let tempList = [] as any;
      result.data.allInterest.map(interest => {
        const temp = { value: interest.id, label: interest.name };
        tempList.push(temp);
      });
      // tslint:disable-next-line:no-console
      console.log(result);
      this.setState({category: tempList});
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
      
      <div 
        className="uk-flex uk-width-1-1 uk-padding-small" 
        style={{minHeight: '90vh'}}
      >
        <div 
          className="uk-container uk-card uk-card-default uk-padding 
            uk-width-1-1 uk-container-expand"
          style={{textAlign: 'center'}}
        >
          <div className="uk-width-1-1 uk-flex uk-flex-stretch">
            <div className="uk-width-3-4@m uk-width-1-1@s">
              <Editor contentState={this.state.title} title="Title" config={{debug: true, read_only: false}}  />
              <Editor contentState={this.state.body} config={{debug: false, read_only: false}} />
            </div>
            <div className="uk-width-1-4@m uk-width-1-1@s">
              <div className="uk-width-1-1 uk-margin-small-bottom">
              <button 
                className="uk-button uk-button-default uk-width-1-2" 
                type="button"
                style={{borderBottomLeftRadius: 10, borderTopLeftRadius: 10}}
              >Draft
              </button>
              <button 
                className="uk-button uk-button-primary uk-width-1-2" 
                type="button"
                style={{borderBottomRightRadius: 10, borderTopRightRadius: 10}}
              >
                Publish
              </button>
              </div>
              {!this.props.allInterest.loading ? <Select
                name="form-field-name"
                value={value}
                onChange={this.handleChange}
                placeholder="Add categories or interest"
                multi={true}
                closeOnSelect={true}
                removeSelected={this.state.removeSelected}
                simpleValue={false}
                options={category}
              /> : null}
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(compose(
  withApollo,
  graphql<Response, {}, Props>(ALL_INTEREST, {
    name: 'allInterest',
  })
)(ComposeWrite));