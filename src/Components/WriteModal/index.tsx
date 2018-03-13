import * as React from 'react';
import Avatar from 'Components/Avatar';
import { ID } from 'CustomTypings/schema';
import Editor from 'Components/Editor';
// import { Link } from 'react-router-dom';

type State = {
  title: string,
  body: string,
  category: ID[],
};

type Props = {
};

// tslint:disable-next-line:no-any
class WriteModal extends React.PureComponent<Props, State> {

  state = {
    title: '',
    body: '',
    category: []
  };

  render() {
    
    return (
      <div 
        className="uk-card uk-card-small uk-card-default uk-width-1-1 uk-margin-bottom"
        style={{ borderRadius: 1, padding: 0, marginLeft: 0, marginRight: 0 }}
      >
        <div className="uk-padding-small">
          <div className="uk-grid-small uk-flex uk-text-center" uk-grid={true} >
              <Avatar 
                url="https://getuikit.com/docs/images/avatar.jpg"
                presence={false}
                size={50}
              />
              <div data-uk-toggle="target: #modal-close-default">
                <p className="uk-text-lead uk-text-center">Write something...</p>
              </div>
          </div>
        </div>
        <div 
          className="uk-card-body" 
          style={{padding: 0}}
        >
         <button className="uk-button uk-button-default uk-width-1-3" type="button">Photo</button>
         <button className="uk-button uk-button-default uk-width-1-3" type="button">Video</button>
         <button className="uk-button uk-button-default uk-width-1-3" type="button">Write</button>
        </div>
        
        <div id="modal-close-default" className="uk-modal-full" data-uk-modal={true}>
            <div  
              style={{height: '100vh', paddingBottom: 0}} 
              className="uk-modal-dialog uk-modal-body
               uk-overflow-hidden uk-article uk-padding-large"
            >
              <button className="uk-modal-close-full uk-close-large" type="button" data-uk-close={true} />
              <input 
                className="uk-width-1-1 uk-article-title" 
                placeholder="Title of article" 
                multiple={true}
                value={this.state.title}
                style={{borderWidth: 0}}
              />
              <Editor />
              <div className="uk-width-1-1 uk-position-bottom uk-padding-small">
                <button className="uk-button uk-button-default" type="button">Save Draft</button>
                <button className="uk-button uk-button-primary" type="button">Publish</button>
              </div>
            </div>
        </div>
      </div>
    );
  }
  
}

export default WriteModal;