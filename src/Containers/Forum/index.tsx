import * as React from 'react';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { asyncComponent } from 'react-async-component';
import { LoadingComponent } from 'Components/EmptyStates';
import ThemeProvider from 'anchor-ui/theme-provider';
import SearchBox from 'anchor-ui/search-box';
import List from 'anchor-ui/list';
import ListItem from 'anchor-ui/list-item';
import ChannelHeader from 'anchor-ui/channel-header';
import Button from 'anchor-ui/button';
import IconChannels from 'anchor-ui/icons/icon-channels';
import IconPeople from 'anchor-ui/icons/icon-people';
import './style.css';
// import { compose } from 'react-apollo';

const ChatDetail = asyncComponent({
  resolve: () => System.import('Containers/ChatDetail'),
  LoadingComponent: () => <LoadingComponent />, // Optional
  ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
});

const items = [{
  primaryText: 'Rex Raphael',
  secondaryText: 'Been long brava',
  image: 'http://www.ghgh.gh/hjh.png'
}, {
  primaryText: 'Rex Raphael',
  secondaryText: 'Been long brava',
  image: 'http://www.ghgh.gh/hjh.png'
}, {
  primaryText: 'Rex Raphael',
  secondaryText: 'Been long brava',
  image: 'http://www.ghgh.gh/hjh.png'
}, {
  primaryText: 'Rex Raphael',
  secondaryText: 'Been long brava',
  image: 'http://www.ghgh.gh/hjh.png'
}, {
  primaryText: 'Rex Raphael',
  secondaryText: 'Been long brava',
  image: 'http://www.ghgh.gh/hjh.png'
}, {
  primaryText: 'Rex Raphael',
  secondaryText: 'Been long brava',
  image: 'http://www.ghgh.gh/hjh.png'
}, {
  primaryText: 'Rex Raphael',
  secondaryText: 'Been long brava',
  image: 'http://www.ghgh.gh/hjh.png'
}];
export default class Forum extends React.Component {
  
  render() {
    return (
      <ThemeProvider color="#f2912c">
        <div className="App">
          <Helmet>
            <title>Unizonn | Forum</title>
            <meta name="an inclusive community" content="Unizonn community" />
          </Helmet>
          <div 
            style={{height: '91vh', width: '100vw'}}
            className="uk-width-1-1 uk-flex"
          >
            <div id="chat-list" className="uk-width-1-4 un-border-right" style={{backgroundColor: '#ffffff'}}>
              
              <SearchBox placeholder="Search for channels and chat" />
              <List
                id="chat-list"

                header="Channels"
                style={{height: '43.1vh'}}
              >
                {items.map((item, index) => (
                  <ListItem
                    key={index}
                    primaryText={item.primaryText}
                    avatar={item.image}
                  />
                ))}
              </List>
              <List
                id="chat-list"
                header="Direct Chat"
                style={{height: '40vh'}}
              >
                {items.map((item, index) => (
                  <ListItem
                    key={index}
                    primaryText={item.primaryText}
                    secondaryText={item.secondaryText}
                    avatar={item.image}
                  />
                ))}
              </List>
            </div>
            <div className="uk-width-expand">
              <ChannelHeader
                name="Channel"
                rightButton={
                  // tslint:disable-next-line:jsx-boolean-value
                  <Button iconButton>
                    <IconPeople />
                  </Button>
                }
                leftButton={
                  // tslint:disable-next-line:jsx-boolean-value
                  <Button iconButton>
                    <IconChannels />
                  </Button>
                }
              />
              <div className="uk-width-1-1 uk-flex" style={{}}>
                <Route component={ChatDetail} exact={true} path="/forum/:id" />
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}
/*
export default withRouter(compose(
  withApollo,
  graphql<Response, InputProps, Props>(GET_C, {
    name: 'login'})
)(Forum));*/