import * as React from 'react';
import './style.scss';

export default class NotFound extends React.Component {
  render() {
    return (
      <div className="notFound">
        <main id="main-404-content" className="main-content-static">

          <div className="content-wrap">

            <div className="shadow-overlay" />

            <div className="main-content">
              <div className="row">
                <div className="col-twelve">
                
                  <h1 className="kern-this">404 Error.</h1>
                  <p>
                Oooooops! Looks like nothing was found at this location.
                Maybe try on of the links below, click on the top menu
                or try a search?
                  </p>

                  <div className="search">
                    <form>
                      <input type="text" id="s" name="s" className="search-field" placeholder="Type and hit enter …" />
                    </form>
                  </div>	   			

                </div>	   			
              </div> 		 		
            </div>

            <footer>
              <div className="row">

                <div className="col-seven tab-full social-links pull-right">
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-skype" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                    <li><a href="#"><i className="fa fa-instagram" /></a></li>   			
                  </ul>
                </div>
                  
                <div className="col-five tab-full bottom-links">
                  <ul className="links">
                    <li><a href="#">Home</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Contact</a></li>			                    
                  </ul>

                  <div className="credits">
                    <p>Designed by <a href="http://www.skyeye-themes.com/" title="Skyeye Themes">Skyeye Themes</a></p>
                  </div>
                </div>   		   		

              </div>   		  		
            </footer>

          </div>

          </main>
      </div>
    );
  }
}