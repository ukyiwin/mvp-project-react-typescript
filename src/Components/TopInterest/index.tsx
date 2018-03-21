import * as React from 'react';
import InterestItemSlim from 'Components/InterestItemSlim';
import { graphql, QueryProps } from 'react-apollo';
import { ErrorComponent, LoadingComponent } from 'Components/EmptyStates';
import { Interest } from 'CustomTypings/schema';
import { ALL_INTEREST } from 'Graphql/Query';

interface Response {
  allInterest: Interest[];
}

type WrappedProps = Response & QueryProps;

const TopInterest = graphql<Response, {}, WrappedProps>(ALL_INTEREST, {
  props: ({ data }) => ({ ...data })
});

export default TopInterest(({ loading, allInterest, error }) => {
  if (loading) { return <LoadingComponent />; }
  if (error) { return <ErrorComponent />; }
  return (
    <div className="tags-wrapper undefined">
    {allInterest.map((interest, i) =>

      <InterestItemSlim key={interest.id} url={interest.avatar} name={interest.name} />

    )}
    </div>
  );
});
