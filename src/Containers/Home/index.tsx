import * as React from 'react';
import WriteModal from 'Components/WriteModal';
import ArticleList from 'Components/ArticleList';
import { Helmet } from 'react-helmet';
import { User } from 'CustomTypings/schema';

import './style.css';
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
        <Helmet>
          <title>Unizonn | Home</title>
          <meta name="an inclusive community" content="Unizonn community" />
        </Helmet>
        <WriteModal me={this.props.me} />
        <div className="uk-flex">
          <ArticleList />
        </div>
      </div>
    );
  }
}

export default Home;