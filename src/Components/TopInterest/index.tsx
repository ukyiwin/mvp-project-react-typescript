import * as React from 'react';
import InterestItemSlim from 'Components/InterestItemSlim';
import { Query } from 'react-apollo';
import { ErrorComponent, LoadingComponent } from 'Components/EmptyStates';
import { Interest } from 'CustomTypings/schema';
import { ALL_INTEREST } from 'Graphql/Query';

const TopInterest = () => (
    <Query query={ALL_INTEREST}>
    {({ loading, error, data }) => {
      if (loading) {
          return <LoadingComponent />;
      }
      if (error) {
          return <ErrorComponent />;
      }
      return (
          <div className="tags-wrapper uk-padding-small undefined">
            {data.allInterest.map((interest, i) => (
                  <InterestItemSlim key={interest.id} url={`/interest/${interest.name}`} name={interest.name} />
              ))}
          </div>
      );
    }}
    </Query>);

export default TopInterest;
