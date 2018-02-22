import * as React from 'react';

type Props = {
  // tslint:disable-next-line:no-any
  selectChat: any,
  // tslint:disable-next-line:no-any
  key?: any
};
class ListViewRow extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this._selectChat = this._selectChat.bind(this);
  }

  _selectChat() {
    this.props.selectChat();
  }

  render() {
    return (
        <div onClick={this._selectChat} className="list-row ">
            <div className="flex" >
              <div className="flex avatar-container flex-15" >
                <figure className="avatar avatar-xl">
                  <img src="https://picturepan2.github.io/spectre/img/avatar-1.png" alt="..."/>
                </figure>
              </div>
              <div className="chat-body flex-85 flex flex-direction-column justify-content-center">
                <div className="flex justifiy-content-space-between alignItems-center" >
                  <span>Mepco Guys</span>
                  <span>10.33 PM</span>
                </div>
                <div className="flex alignItems-center " >
                  <span>+91 9839403049 HI this is renga</span>
                  <span />
                </div>
              </div>
            </div>
        </div>
    );
  }
}
export default ListViewRow;