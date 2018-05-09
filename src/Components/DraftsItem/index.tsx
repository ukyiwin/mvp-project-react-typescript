import * as React from 'react';
import * as ReactTags from 'react-tag-autocomplete';
import Select from 'react-select-plus';
import { Article, User, Interest } from '../../CustomTypings/schema';
import Avatar from '../Avatar/avatar';
import { Link, withRouter } from 'react-router-dom';
import { withApollo, compose, graphql } from 'react-apollo';
import Likebutton from '../LikeButton';
import PopoverLink from '../PopoverLink';
import TimeAgo from 'react-timeago';
import { strip_html_tags } from 'Utils/helper';
import Icon from 'semantic-ui-react';
import ArticleItem from 'Components/ArticleItem';
import * as UIkit from 'uikit';
import { PUBLISH_ARTICLE, LIKE_ARTICLE, DELETE_ARTICLE } from 'Graphql/Mutation';
import { ALL_INTEREST, DRAFTS } from 'Graphql/Query';
import { cookies } from '../../link';
import { CURRENT_USER } from '../../constants';
import { StyledOutlineButton } from 'Components/Buttons/style';
import './style.scss';
import 'react-select-plus/dist/react-select-plus.css';
import { Dropdowns, RequiredSelector } from 'Containers/ComposeArticle/style';
import { FlexRow } from 'Components/Globals';
import _ from 'lodash';
// import { Link } from 'react-router-dom';

interface Props {
  article: Article;
  small?: boolean;
  client?: any;
}

interface Response {
  allInterest: Interest[];
}

// tslint:disable-next-line:no-any
class DraftsItem extends React.Component<Props> {

  state = {
    user: {},
    saved: false,
    liked: false,
    tags: [] as any,
    those: [] as any,
    interest: '',
    suggestions: [] as any,
    deleting: false,
    loading: false
  };

  componentWillMount() {
    // UIkit.notification('MyMessage', 'danger');
    const user = cookies.get(CURRENT_USER);
  }

  publish = () => {
    const tags = this.state.tags;
    const those = _.map(tags, 'value');
    const interest = this.state.interest;
    this.setState({saved: true, loading: true});
    this.props.client.mutate({
      mutation: PUBLISH_ARTICLE,
      variables: {
        id: this.props.article.id,
        category: interest,
        tags: those
      },
      update: (cache, { data: { publishArticle } }) => {
        const { articles } = cache.readQuery({ query: DRAFTS });
        const node = {
          node: {
            ...publishArticle
          }
        };
        /*cache.writeQuery({
          query: ARTICLES,
          data: { articles: articles.edges.concat(node) }
        });*/
      },
      optimisticResponse: {
        __typename: 'Mutation',
        publishArticle: {
          id: this.props.article.id,
          __typename: 'Article',
          isPublished: true
        }
      }
    }).then((res) => {
      this.setState({loading: false});
      UIkit.modal('#modal-full').hide();
    }).catch((err) => {
      this.setState({loading: false});
    });
  }

  loadInterest() {
    this.addInterestContent();
    UIkit.modal('#modal-full').show();
  }

  addInterestContent() {
    this
    .props
    .client
    .query({query: ALL_INTEREST})
    .then((result) => {
      // tslint:disable-next-line:no-any
      const tempList = []as any;
      result
        .data
        .allInterest
        .map((interest) => {
          const temp = {
            value: interest.id,
            label: interest.name
          };
          tempList.push(temp);
        });
      this.setState({suggestions: tempList});
    }).catch((err) => {
      console.log('hjhjhjhjhj');
    });
  }

  setCategory = (e) => {
    this.setState({interest: e.target.value});
  }

  handleChange = (tags) => {
    this.setState({ tags });
  }

  deleteArticle = () => {
    this.setState({deleting: true, loading: true});
    this.props.client.mutate({
      mutation: DELETE_ARTICLE,
      variables: {
        id: this.props.article.id
      },
      update: (cache, { data: { deleteArticle } }) => {
        const { drafts } = cache.readQuery({ query: DRAFTS });
        const node = {
          node: {
            ...deleteArticle
          }
        };
        /*cache.writeQuery({
          query: ARTICLES,
          data: { articles: articles.edges.concat(node) }
        });*/
      },
      optimisticResponse: {
        __typename: 'Mutation',
        deleteArticle: {
          id: this.props.article.id,
          __typename: 'Article',
          isPublished: true
        }
      }
    }).then((res) => {
      this.setState({deleting: true, loading: false});
      UIkit.modal('#modal-delete').hide();
      this.setState({loading: false});
    }).catch((err) => {
      this.setState({deleting: true, loading: false});
    });
  }

  handleDelete = (i) => {
    const tags = this.state.tags.slice(0);
    tags.splice(i, 1);
    this.setState({ tags });
  }
 
  handleAddition(tag) {
    const tags = [].concat(this.state.tags, tag);
    this.setState({ tags });
  }

  render() {
      const { article } = this.props;
      const { author } = article;
      const body = strip_html_tags(article.body);
      return (
          <div
            className="uk-card uk-card-default raised uk-width-1-1"
            style={{
                marginBottom: this.props.small ? 7 : 15,
                backgroundColor: '#fff',
            }}
          >
            <div style={{ paddingTop: 20 }}>
              <div
                className="card-body uk-padding-remove-vertical simple-link"
                style={{ paddingTop: this.props.small ? 0 : 10, borderBottom: 1 }}
              >
                <Link to={`/write/${article.id}`} className="simple-link">
                  <h5
                    className="uk-text-medium uk-text-bold uk-text-break"
                    style={{ fontSize: this.props.small ? 17 : 23, fontFamily: 'Crimson Text' }}
                  >
                    {this.props.small
                      ? article.title.truncString('...', 36)
                      : article.title.truncString('...', 140)}
                  </h5>
                </Link>
                <p style={{ color: '#212121', fontFamily: 'Muli', fontSize: this.props.small ? 14 : 17 }}>
                    {this.props.small ? body.truncString('...', 70) : body.truncString('...', 140)}
                </p>
              </div>
              <div
                className="post-stats clearfix uk-padding-small"
              >
                <div className="uk-flex pull-left">
                  <p className="uk-text-meta uk-margin-remove-top">
                    <time dateTime={article.createdAt}>
                      <TimeAgo className="timeago" date={article.createdAt} /> &#149;{' '}
                      {body.lengthInMinutes()}
                    </time>
                  </p>
                </div>
                <div className="uk-flex uk-flex-between response-count pull-right">
                  <Likebutton
                    frontIcon="down" 
                    text="Delete" 
                    frontClick={() => UIkit.modal('#modal-delete').show()}
                    style={{marginRight: 10}}
                  />
                  <Likebutton
                    frontIcon="down" 
                    text="Publish" 
                    frontClick={() => this.loadInterest()}
                  />
                </div>
              </div>
              </div>
              <div id="modal-delete" data-uk-modal>
                  <div className="uk-modal-dialog uk-modal-body">
                      <h2 className="uk-modal-title">Notice</h2>
                      <p>You are about to delete this article draft.</p>
                      <p className="uk-text-right">
                          <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                          <button 
                            className="uk-button uk-button-primary" type="button"
                            onClick={() => this.deleteArticle()}
                          >
                            Delete
                          </button>
                      </p>
                  </div>
              </div>
              <div
                id="modal-full"
                className="uk-modal-full"
                data-uk-modal
              >
                <div className="uk-modal-dialog" style={{ height: '100vh' }}>
                  <button className="uk-modal-close-full uk-close-large" type="button" data-uk-close />
                  <div
                    className=" uk-height-1-1 uk-grid-collapse uk-child-width-1-2@s"
                    data-uk-grid
                  >
                    <div className="uk-background-cover">
                          <ArticleItem article={article} />
                    </div>
                    <div className="uk-padding-large">
                        <h1>Publish Article</h1>
                        <p>Lets pick some tags to finish up the process.</p>

                        <div
                          className="uk-flex uk-flex-around"
                          style={{ marginBottom: 20 }}
                        >
                          <Dropdowns
                            style={{backgroundColor: 'transparent'}}
                          >
                            <span>Category:</span>
                            {this.props.allInterest.loading ? (
                              <div />
                              ) : (
                              <RequiredSelector
                                data-cy="composer-community-selector"
                                style={{minWidth: 180}}
                                onChange={this.setCategory}
                              >
                                <option key={0} value="">
                                  Select Category
                                </option>
                                {this.props.allInterest.allInterest.map((interest) => {
                                  return (
                                    <option key={interest.id} value={interest.id}>
                                      {interest.name}
                                    </option>
                                  );
                                })}
                              </RequiredSelector>
                            )}
                          </Dropdowns>
                        </div>
                        {this.state.interest}
                        {JSON.stringify(this.state.tags)}
                        {JSON.stringify(this.state.those)}
                        {this.props.article.id}
                        <Select
                          name="form-field-name"
                          value={this.state.tags}
                          multi
                          placeholder="Add at most 5 tags"
                          onChange={this.handleChange}
                          options={this.state.suggestions}
                        />
                        <StyledOutlineButton
                          disabled={
                            this.state.tags.length < 1 || this.state.interest === '' || this.state.loading
                          }
                          onClick={() => this.publish()}
                          style={{ marginTop: 20 }}
                        >Publish Now
                        </StyledOutlineButton>
                    </div>
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
    graphql <Response, {}, Props> (ALL_INTEREST, {name: 'allInterest'}),
  )(DraftsItem));