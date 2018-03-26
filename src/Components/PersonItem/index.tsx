import * as React from 'react';
import Avatar from 'Components/Avatar';
import FollowButton from 'Components/FollowButton';

interface Props {
    url: string;
    name: string;
}

// tslint:disable-next-line:typedef
const PersonItem = (props: Props) => {
    return (
        <div className="tile tile-centered px-2">
          <div className="tile-icon">
            <Avatar url={props.url} size={40} presence={false} />
          </div>
          <div className="tile-content">
            <div className="tile-title">{props.name}</div>
            <div className="tile-subtitle text-gray">I like to eat alot everyday with</div>
          </div>
          <div className="tile-action">
            <FollowButton liked={false}/>
          </div>
        </div>
    );
};

export default PersonItem;
