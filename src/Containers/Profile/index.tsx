import * as React from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import Avatar from 'Components/Avatar';
import { compose, graphql, withApollo, QueryProps } from 'react-apollo';
import { ME } from 'Graphql/Query';
import './style.css';
import { User } from 'CustomTypings/schema';
import SeoMaker from 'Components/SeoMaker';
import ArticleList from 'Components/ArticleList';
import FollowButton from 'Components/FollowButton';

interface Response {
  me: User;
}

type UserResponse = Response & QueryProps;

interface Props {
  me: UserResponse;
}

class Profile extends React.Component<Props> {
  state = {
    messages: [],
    is_typing: false,
  };

  render() {
    const { me } = this.props;

    if (this.props.me.loading) {
      return null;
    }

    return (
      <div className="uk-width-1-1">
        <SeoMaker title={me.me.firstname + ' ' + me.me.lastname} />
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
                  url={me.me.avatar ? me.me.avatar.url : ''} presence={false}
                />

                <p className="uk-text-bold" style={{fontSize: 16}}>{me.me.firstname} {me.me.lastname}</p>
                <p className="" style={{fontSize: 14}}>@{me.me.username}</p>
                <p style={{fontSize: 12}}>
                Founder at Gueva Technologies. Geek, programmer, interest in AI and Machine Learning, Big Data, love basketball.
                </p>
                  <p className="uk-text-bold ui label">{me.me.type}</p>
                <hr/>
                <div className="uk-text-left">
                  <p className="uk-text-bold">School: {me.me.institution ? me.me.institution.title : ''}</p>
                  <p className="uk-text-bold">Course: {me.me.department ? me.me.department.name : ''}</p>
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
                    Activity <br/> {me.me.postCount.length}
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
                    {me.me.connectTo && me.me.connectFrom ? me.me.connectTo.length + me.me.connectFrom.length : 0} 
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
      </div>
    );
  }
}

export default withRouter(
  compose(
    withApollo, 
    graphql <Response, {}, Props> (ME, {name: 'me'})
  )(Profile));