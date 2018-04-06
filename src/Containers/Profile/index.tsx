import * as React from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import Avatar from 'Components/Avatar';
import { compose, graphql, withApollo, QueryProps, Query } from 'react-apollo';
import { ME, GET_USER_BY_USERNAME } from 'Graphql/Query';
import './style.scss';
import { User } from 'CustomTypings/schema';
import SeoMaker from 'Components/SeoMaker';
import ArticleList from 'Components/ArticleList';
import FollowButton from 'Components/FollowButton';

interface Response {
  me: User;
}

type UserResponse = Response & QueryProps;

interface Props {
  match: any;
  history: any;
}

export default class Profile extends React.Component<Props> {
  state = {
    messages: [],
    is_typing: false,
    username: '',
  };

  componentWillMount() {
    const { match: { params } } = this.props;
    // tslint:disable-next-line:no-console
    console.log(params);
    if (params.slug) {
        this.setState({username: params.username});
    } else {
        this.props.history.goBack('*');
    }
}
// tslint:disable-next-line:typedef
componentDidUpdate(prevProps) {
    // tslint:disable-next-line:no-console
    console.log(prevProps);
    const oldId = prevProps.match.params.username;
    const newId = this.props.match.params.username;
    if (newId !== oldId) {
      this.setState({username: newId});
    }
}

  render() {
    const { username } = this.state;

    return (
      <Query pollInterval={3000} query={GET_USER_BY_USERNAME} variables={{ username }} >
        {({loading, error, data}) => {
          if (loading) { return null; }
          if (error) { return `Error!: ${error}`; }
          return(
          <div className="uk-width-1-1">
            <SeoMaker title={data.firstname + ' ' + data.lastname} />
            <div className="uk-flex uk-flex-stretch uk-width-1-1 uk-height-1-1 uk-padding-large uk-padding-remove-top uk-height-match">
              <div className="uk-width-1-4@m uk-width-1-1@s uk-padding-small">
                <div
                  className="uk-width-1-1 uk-text-center ui card"
                  data-uk-sticky="offset: 77"
                >
                  <div className="uk-text-center uk-padding-small content" style={{paddingTop: 40}}>
                    <div className="uk-background-primary uk-width-1-1 uk-position-top" style={{height: 80}} />
                    <Avatar 
                      size={80} 
                      url={data.avatar ? data.avatar.url : ''} presence={false}
                    />

                    <p className="uk-text-bold" style={{fontSize: 16}}>{data.firstname} {data.lastname}</p>
                    <p className="" style={{fontSize: 14}}>@{data.username}</p>
                    <p style={{fontSize: 12}}>
                    Founder at Gueva Technologies. Geek, programmer, interest in AI and Machine Learning, Big Data, love basketball.
                    </p>
                      <p className="uk-text-bold ui label">{data.type}</p>
                    <hr/>
                    <div className="uk-text-left">
                      <p className="uk-text-bold">School: {data.institution ? data.institution.title : ''}</p>
                      <p className="uk-text-bold">Course: {data.department ? data.department.name : ''}</p>
                    </div>
                    <hr/>
                    <div className="ui small two buttons">
                      <FollowButton liked={false} unFollowClick={() => alert('hj')} followClick={() => alert('hoS')} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="uk-width-3-4@m uk-width-1-1@s uk-padding-small">
                <div className="uk-width-1-1 uk-padding-small ui card fluid">
                  <div className="uk-cover-container content uk-height-medium uk-card uk-card-default uk-background-primary">
                    <canvas width="" height="" />
                    <img
                        src="https://getuikit.com/docs/images/photo.jpg"
                        alt="cover image"
                        uk-cover="ratio: 1"
                        className="uk-blend-hard-darken"
                    />
                  </div>
                  <div className="uk-flex uk-flex-stretch uk-flex-between">
                    <div className="uk-text-left uk-padding-small" data-uk-tab>
                      <div data-uk-switcher="animation: uk-animation-fade">
                        <button className="uk-button uk-button-text uk-margin-right bolder" type="button">
                        Activity <br/> {data.postCount.length}
                        </button>
                        <button className="uk-button uk-button-text uk-margin-right bolder" type="button">
                          Activity <br/> 345K
                        </button>
                        <button className="uk-button uk-button-text uk-margin-right bolder" type="button">
                          Interests <br/> 0
                        </button>
                        <button className="uk-button uk-button-text uk-margin-right bolder" type="button">
                        Connections
                        <br/>
                        {data.connectTo && data.connectFrom ? data.connectTo.length + data.connectFrom.length : 0} 
                        </button>
                      </div>
                    </div>
                    <div className="uk-text-right uk-padding-small">
                      <button className="uk-button uk-button-secondary uk-button-small">
                        Message
                      </button>
                    </div>
                  </div>
                </div>
                <div className="uk-width-1-1 uk-padding-small fluid">
                  <ArticleList />
                </div>
              </div>
            </div>
          </div>); }}
      </Query>
    );
  }
}
interface InputProps {
  params: any;
}