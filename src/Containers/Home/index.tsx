import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import ArticleItem from 'Components/ArticleItem';
import WriteModal from 'Components/WriteModal';

import './style.css';

class Home extends React.Component {

  tracks: { id: number; }[];
  // tslint:disable-next-line:typedef
  constructor(props) {
    super(props);
    this.tracks = [{id: 1}, {id: 2}, {id: 3}];
  }

  render() {

    // tslint:disable-next-line:no-any
    var items: any[] = [];
    this.tracks.map((track, i) => {
      items.push(
        <ArticleItem />
      );
    });
    return (
      <div className="uk-width-1-1">
        <WriteModal />
        <div className="uk-flex">
        <InfiniteScroll
          pageStart={0}
          hasMore={true || false}
          loader={<div className="loader" key={0}>Loading ...</div>}
        >
          {items}
        </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default Home;