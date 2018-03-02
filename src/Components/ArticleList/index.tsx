import * as React from 'react';
import ArticleItem from 'Components/ArticleItem';
import { graphql, QueryProps } from 'react-apollo';
import InfiniteScroll from 'react-infinite-scroller';
import { ErrorComponent, LoadingComponent } from 'Components/EmptyStates';
import { ARTICLES } from 'Graphql/Query';
import { Article } from 'CustomTypings/schema';

type Response = {
  articles: Article[];
};

type WrappedProps = Response & QueryProps;

const ArticleList = graphql<Response, {}, WrappedProps>(ARTICLES, {
  props: ({ data }) => ({ ...data })
});

export default ArticleList(({ loading, articles, error }) => {
  if (loading) { return <LoadingComponent />; }
  if (error) { return <ErrorComponent />; }
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