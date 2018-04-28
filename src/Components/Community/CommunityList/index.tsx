import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { MY_COMMUNITIES } from 'Graphql/Query/Community';
import { cookies } from 'link';
import { User } from 'CustomTypings/schema';
import { CURRENT_USER } from '../../../constants';
import ServerIndexItem from 'Components/Community/CommunitySidebar/serverName';

const user = cookies.get(CURRENT_USER) as User;

class CommunityList extends React.Component<any> {
  
  render() {
    return (
      <div>
        <Query query={MY_COMMUNITIES} variables={{ username: user.username}}>
          {({ data, loading, error }) => {

            if (loading) {
              return <div>loading</div>;
            }

            if (error) {
              return null;
            }

            if (data.myCommunities.length < 1) {
              return null;
            }
            
            return(
              <div className="index-item-wrapper">
              {
                data.myCommunities.map((community) => (
                  <div key={community.id}>
                      <ServerIndexItem community={community} />
                  </div>
                ))
              }
            </div>
            );
          }}
        </Query>
      </div>
    );
  }
}
export default CommunityList;