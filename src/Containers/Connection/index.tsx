import * as React from 'react';
import FollowButton from 'Components/FollowButton';
import { Button } from 'semantic-ui-react';
import InterestItemSlim from 'Components/InterestItemSlim';
import AppViewWrapper from 'Components/AppViewWrapper';
import SeoMaker from 'Components/SeoMaker';
import Titlebar from 'Components/Titlebar';
import { CommunityProfile } from 'Components/Profile';
import { Wrapper } from './style';
import CommunitySearchWrapper from 'Containers/Connection/components/searchWrapper';
import Search from 'Components/Search';
import VirtualList from 'react-tiny-virtual-list';
// import { CommunityListItem } from 'Components/ListItems';
import { User } from 'CustomTypings/schema';

// tslint:disable-next-line:no-object-literal-type-assertion
const user = {} as User;
user.firstname = 'Rex';
user.lastname = 'Fredrick';
user.bio = 'Hhhhhhhhhhhhhoooo pe dhcsgdh gsdsjdhsvdhgszg,shdmgshd';
export default class Connection extends React.Component {
  state = {
    messages: [
    ],
    is_typing: false
  };

  renderItem = (user, key) => {
    return <CommunityProfile user={user} key={key} />;
  }

  render() {
    return (
      <AppViewWrapper>
        <Wrapper data-cy="connection-page">
          <Titlebar title={'Connections'} noComposer />
          <CommunitySearchWrapper
            redirectPath={window.location}
          >
            <Search />
          </CommunitySearchWrapper>
          <div className="uk-flex-stretch">
            <VirtualList
              width="auto"
              height={800}
              itemCount={7}
              scrollDirection="horizontal"
              itemSize={60}
              renderItem={({index, user}) => this.renderItem(index, user)}
            />
          </div>
        </Wrapper>
      </AppViewWrapper>
    );
  }
}

/*

            <div className="ui items divided ">
              <div className="item">
                <a className="ui tiny image">
                  
                  <img 
                    // tslint:disable-next-line:max-line-length
                 </a>
                <div className="middle aligned content">
                  <a className="header">Stevie Feliciano</a>
                  <div className="description">
                    <p>Stevie Feliciano is a living in New York City.
                    She likes to spend her time reading, running, and writing.</p>
                  </div>
                </div>
                <div className="center middle aligned content">
                  <button className="ui button center aligned">Support</button>
                </div>
              </div>
              <div className="item">
                <a className="ui tiny image">
                  
                  <img 
                    // tslint:disable-next-line:max-line-length
                   </a>
                <div className="middle aligned content">
                  <a className="header">Stevie Feliciano</a>
                  <div className="description">
                    <p>Stevie Feliciano is a living in New York City.
                    She likes to spend her time reading, running, and writing.</p>
                  </div>
                </div>
                <div className="center aligned content">
                <FollowButton liked={false} />
                </div>
              </div>
              <div className="item">
                <a className="ui tiny image">
                  
                  <img 
                    // tslint:disable-next-line:max-line-length
                  </a>
                <div className="middle aligned content">
                  <a className="header">Stevie Feliciano</a>
                  <div className="description">
                    <p>Stevie Feliciano is a living in New York City.
                    She likes to spend her time reading, running, and writing.</p>
                  </div>
                </div>
                <div className="center aligned content">
                <FollowButton liked={false} />
                </div>
              </div>
              <div className="item">
                <a className="ui tiny image">
                  
                  <img 
                    // tslint:disable-next-line:max-line-length
                    src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZ
                    GluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTV
                    kcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dH
                    A6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd
                    mVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzd
                    HlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9I
                    jUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGNpcmNsZSBzdHlsZT0iZmlsbDojNzFFMkVGOyIgY3g9IjI1NiIgY3k9I
                    jI1NiIgcj0iMjU2Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMzOEM2RDk7IiBkPSJNMjI1LjcyNiw0MzkuNTQ2bDY5LjQ2
                    OCw2OS40NjhDNDE3Ljk3NSw0OTAuMTUxLDUxMiwzODQuMDU3LDUxMiwyNTYgIGMwLTAuNjgxLTAuMDIxLTEuMzU4LT
                    AuMDI2LTIuMDM4TDM1OC44NiwxMDAuODQ4TDIyNS43MjYsNDM5LjU0NnoiLz4KPHJlY3QgeD0iMjEzLjMzMyIgeT0iM
                    jkyLjIxOSIgc3R5bGU9ImZpbGw6I0ZDRDA4ODsiIHdpZHRoPSI4NS4zMzMiIGhlaWdodD0iODUuMzMzIi8+CjxyZWN0
                    IHg9IjI1Ni4yOTMiIHk9IjI5Mi4yMTkiIHN0eWxlPSJmaWxsOiNEREFCNjI7IiB3aWR0aD0iNDIuMzc5IiBoZWlnaHQ
                    9Ijg1LjMzMyIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRDlFREVDOyIgZD0iTTM1Ny43NjQsMzYwLjVsLTQ1LjIyLTkuMD
                    Q0bC03Ljk5Mi0xMS42NjZjLTEuNDk2LTIuMTg0LTQuMzI3LTMuMDA3LTYuNzU5LTEuOTY1TDI1NiwzNTUuODMgIGwtND
                    EuNTQzLTE3Ljk4N2MtMi40MTUtMS4wNTMtNS4yMzktMC4yNjItNi43NTQsMS44OTNsLTguMjQ3LDExLjcxOWwtNDUuMj
                    IsOS4wNDRjLTIzLjAyNCw0LjYwNi0zOS41OTYsMjQuODIxLTM5LjU5Niw0OC4zdjYwLjY0NyAgQzE1NS4xNDgsNDk2Lj
                    MyOCwyMDMuNzQsNTEyLDI1Niw1MTJzMTAwLjg1Mi0xNS42NzIsMTQxLjM2LTQyLjU1NXYtNjAuNjQ3QzM5Ny4zNiwzOD
                    UuMzE5LDM4MC43ODcsMzY1LjEwNCwzNTcuNzY0LDM2MC41eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojQzdEOEQ3OyIgZD0
                    iTTM5Ny4zNiw0MDguNzk4YzAtMjMuNDgtMTYuNTc0LTQzLjY5Ni0zOS41OTYtNDguM2wtNDUuMjItOS4wNDRsLTcuOTky
                    </a>
                <div className="middle aligned content">
                  <a className="header">Stevie Feliciano</a>
                  <div className="description">
                    <p>Stevie Feliciano is a living in New York City.
                    She likes to spend her time reading, running, and writing.</p>
                  </div>
                </div>
                <div className="center aligned content">
                <FollowButton liked={false} />
                </div>
              </div>
            </div>*/