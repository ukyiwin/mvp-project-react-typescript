import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as UIkit from 'uikit';
import ServerIndexItem from './serverName';
import CreateCommunityForm from 'Components/Community/CreateCommunityForm';
import CommunityList from 'Components/Community/CommunityList';
import './style.scss';

class CommunitySidebar extends React.Component<any> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    /*let channel = pusher.subscribe('users')
    channel.bind('newUser', (user) => {
      this.props.receiveUser(user)
    })*/
  }

  getServerId() {
    const regex = /\d+/g;
    const location = this.props.location.pathname;
    return location.match(regex)[0];
  }
  
  render() {
    // const serverId = this.props.location.pathname.includes('channels') ? this.getServerId() : '';
    return (
      <div className="sidebar-wrapper">
        <Link to="/conversation" className="direct-message-link circle-base">
        <div className="direct-message-button">
          <i className="fa fa-user-o fa-2x" aria-hidden="true" />
          </div>
        </Link>
          
        <span className="sidebar-text">Direct Messages</span>
        <div className="sidebar-control" />
        <span className="sidebar-text">Communities</span>
        <CommunityList itemClick={this.props.itemClick}/>
        <div className="add-server-button circle-base" onClick={() => UIkit.modal('#modal-comm').show()}>
          <div id="add-server-plus">+</div>
        </div>
        <div id="modal-comm" className="uk-modal-full" style={{ height: '100vh' }} data-uk-modal>
          <div className="uk-modal-dialog">
            <button className="uk-modal-close-full uk-close-large" type="button" data-uk-close/>
            <div className="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" data-uk-grid>
                <div className="uk-padding-large" uk-height-viewport>
                  djkjkj
                </div>
                <div className="uk-padding-large">
                    <h1>Create Community</h1>
                    <p>Start a beautiful community today.</p>
                    <CreateCommunityForm />
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CommunitySidebar);

/*
<ul className="index-item-wrapper">
          {Object.keys(servers).map((key) => {
            const selected = key === serverId ? 'selected-server' : '';
            return (
              <ServerIndexItem className="server-index-item" 
              key={key} server={servers[key]} selected={selected}/>
            ) ;
          })}
        </ul>
        */