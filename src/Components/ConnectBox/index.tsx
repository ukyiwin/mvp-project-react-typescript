import * as React from 'react';
import { graphql, QueryProps } from 'react-apollo';
import InfiniteScroll from 'react-infinite-scroller';
import { ErrorComponent, LoadingComponent } from 'Components/EmptyStates';
import { ARTICLES } from 'Graphql/Query';
import { Article } from 'CustomTypings/schema';
import PersonItem from 'Components/PersonItem';
import Label from 'Components/Label';

type Response = {
  articles: Article[];
};

type WrappedProps = Response & QueryProps;

const ConnectBox = graphql<Response, {}, WrappedProps>(ARTICLES, {
  props: ({ data }) => ({ ...data })
});

export default ConnectBox(({ loading, articles, error, refetch }) => {
  if (loading) { return <LoadingComponent />; }
  if (error) { return <ErrorComponent refresh={refetch} />; }
  return (
    <div className="uk-card">
      <Label text="Suggested Connection" />
      <InfiniteScroll
            pageStart={0}
            hasMore={false}
      >
          {articles.map((article, i) =>
              <div key={article.id}>
                <PersonItem 
                  url={'dsdsds'} 
                  name={`${article.author.firstname} ${article.author.lastname}`} 
                />
              </div>
          )}
      </InfiniteScroll>
    </div>
  );
});