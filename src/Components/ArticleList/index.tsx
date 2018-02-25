import * as React from 'react';
import ArticleItem from 'Components/ArticleItem';
import { graphql, QueryProps, compose, withApollo } from 'react-apollo';
import InfiniteScroll from 'react-infinite-scroller';
import { ErrorComponent } from 'Components/EmptyStates';
import { ARTICLES } from 'Graphql/Query';
import { Article } from 'CustomTypings/schema';
/*
const renderWhileLoading = (component, propName = 'data') =>
  branch(
    props => props[propName] && props[propName].loading,
    renderComponent(component),
  );

const renderForError = (component, propName = 'data') =>
  branch(
    props => props[propName] && props[propName].error,
    renderComponent(component),
  );

const setRefetchProp = (propName = 'data') =>
  withProps(props => ({refetch: props[propName] && props[propName].data}));
*/
type Response = {
  data: Article[];
};

type WrappedProps = Response & QueryProps;

// const ArcticleListComponent = graphql<Response, {}, WrappedProps>(ARTICLES);

export const ArcticleListComponents = (({ loading, articles, error}) => {
  if (loading) { return <div>Loading</div>; }
  if (error) { return <h1>ERROR</h1>; }
  return (
    <InfiniteScroll
          pageStart={0}
          hasMore={true || false}
          loader={<div className="loader" key={0}>Loading ...</div>}
    >
        {articles.map((article, i) =>
            <div key={article.id}>
              <ArticleItem />
            </div>
        )}
    </InfiniteScroll>
  );
});

export const Character: React.SFC<WrappedProps> = props => {
  const { data, loading } = props;
  // tslint:disable-next-line:no-console
  console.log(props);
  
  if (loading) { return <ErrorComponent />; }
  return (
    <InfiniteScroll
          pageStart={0}
          hasMore={true || false}
          loader={<div className="loader" key={0}>Loading ...</div>}
    >
        {data.map((article, i) =>
            <div key={article.id}>
              <ArticleItem />
            </div>
        )}
    </InfiniteScroll>
  );
};

export default compose(
  withApollo,
  graphql<Response, {}>(ARTICLES)
)(Character);
// export default graphql<Response, {}, WrappedProps>(ARTICLES)(Character);