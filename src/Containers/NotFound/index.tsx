import * as React from 'react';
import './style.scss';

export default class NotFound extends React.Component {
  render() {
    return (
      <div className="notFound uk-flex-center" style={{ height: '100vh' }}>
        <main id="main-404-content" className="uk-padding-large">

          <div className="content-wrap">

            <div className="shadow-overlay" />

            <div className="main-content">
              <div className="row">
                <div className="col-twelve">
                
                  <h1 className="kern-this" style={{ fontSize: 200 }}>404 Error.</h1>
                  <p style={{ fontSize: 30 }}>
                Oooooops! Looks like nothing was found at this location.
                You found the coconuts!!!
                  </p>

                  <div className="search">
                    <form>
                      <input type="text" id="s" name="s" style={{ height: 60, width: 500, padding: 10 }} placeholder="Type and hit enter …" />
                    </form>
                  </div>	   			

                </div>	   			
              </div> 		 		
            </div>
          </div>

          </main>
      </div>
    );
  }
}