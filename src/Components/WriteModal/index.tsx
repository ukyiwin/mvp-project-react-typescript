import * as React from 'react';
import Avatar from 'Components/Avatar';
import { User } from 'CustomTypings/schema';
// import { Link } from 'react-router-dom';

type Props = {
  me?: User,
};

// tslint:disable-next-line:no-any
class WriteModal extends React.PureComponent<Props> {

  render() {
    const { me } = this.props;
    return (
      <div 
        className="uk-card uk-card-small uk-card-default uk-width-1-1 uk-margin-bottom"
        style={{ borderRadius: 5 }}
      >
        <div className="uk-padding-small">
          <div className="uk-grid-small uk-flex" uk-grid={true} >
            <div className="uk-width-auto">
                <Avatar 
                  url="https://getuikit.com/docs/images/avatar.jpg"
                  presence={false}
                  size={20}
                />
            </div>
            <div className="uk-width-auto">
                <p className="uk-card-title uk-margin-remove-bottom">
                {me ? `${me.firstname} ${me.lastname}` : ''}
                </p>
            </div>
          </div>
        </div>
        <div 
          className="uk-card-body"
        >
          <a data-uk-toggle="target: #modal-close-default">
            <p className="uk-text-lead">Write something...</p>
          </a>
        </div>
        
        <div id="modal-close-default"data-uk-modal={true}>
            <div  
              style={{maxWidth: 800}} 
              className="uk-modal-dialog uk-modal-body
               uk-overflow-hidden uk-article uk-padding"
            >
                <button className="uk-modal-close-default" type="button" data-uk-close={true} />
                
                <input 
                  className="uk-article-meta" 
                  placeholder="Tags"  
                  style={{marginTop: 70, marginBottom: 10}}
                />
                <div className="uk-width-1-1">
                  <button className="uk-button uk-button-default" type="button">Save Draft</button>
                  <button className="uk-button uk-button-primary uk-align-right" type="button">Publish</button>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
}

export default WriteModal;