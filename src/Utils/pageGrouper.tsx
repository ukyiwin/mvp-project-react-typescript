import * as React from 'react';

type Props = {
  // tslint:disable-next-line:no-any
  pg: any,
  side: string
};

export default class PageGrouper extends React.Component<Props> {

    side: string;
  // tslint:disable-next-line:no-any
  pg: any;
  // tslint:disable-next-line:no-any
  constructor(props: Props) {
    super(props);
    this.pg = this.props.pg;
    this.side = this.props.side;
    this._renderPage(this.pg, this.side);

  }
  // tslint:disable-next-line:no-any
  _renderPage(page: any, side: any) {
    switch (page) {
      case '1' :
          if (side === 'left') {
            return( this._page1Left());
          } else {
            return( this._page1Right());
          }
      case '2':
          if (side === 'left') {
            return( this._page2Left());
          } else {
            return( this._page2Right());
          }
      case '3':
        return( this._page3Left());
      default:
        return( this._page3Left());
    }
  }

  _page1Left() {
      return(
          <div>
            <div className="title">
                  multiScro
            </div>
            <div className="content">
                  Responsive divided
            </div>
          </div>
      );
  }
  _page1Right() {
      return(
            <div>
              <div className="title">
                ll.ReactJs
              </div>
              <div className="content">
                &nbsp;multi-scroll pages!
              </div>
            </div>
      );
  }
  _page2Left() {
    return(
          <div>
            <div className="title">
                div
            </div>
            <div className="content">
                backgroun
            </div>
          </div>
    );
  }
  _page2Right() {
    return(
        <div>
            <div className="title">
                vide
            </div>
            <div className="content">
                d images
            </div>
        </div>
      );
  }
  _page3Left() {
    return(
      <div>
        <div className="title">
          ...and create as many pages
        </div>
        <div className="content">
          as you want!
        </div>
      </div>
    );
  }

  render() {
    const content = this._renderPage(this.props.pg, this.props.side);
    return(
      <div>
        {content}
      </div>
    );
  }
}
