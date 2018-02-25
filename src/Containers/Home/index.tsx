import * as React from 'react';
import WriteModal from 'Components/WriteModal';

import './style.css';
import { User } from 'CustomTypings/schema';
// import ArcticleListComponent from 'Components/ArticleList';
type Props = {
  me?: User
};

class Home extends React.Component<Props> {

  tracks: { id: number; }[];
  // tslint:disable-next-line:typedef
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.me) {
      // if (this.props.me.)
    }
  }

  render() {

    return (
      <div className="uk-width-1-1">
        <WriteModal />
        <div className="uk-flex">
        jkhjh
        </div>
      </div>
    );
  }
}

export default Home;