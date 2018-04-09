import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose, withApollo, Mutation, MutateProps } from 'react-apollo';
import StackGrid from 'react-stack-grid';
import * as UIkit from 'uikit';
import Lottie from 'react-lottie';
import { ALL_INTEREST } from 'Graphql/Query';
// import { User } from 'CustomTypings/schema';
import InterestItem from 'Components/InterestItem';
import { Interest } from 'CustomTypings/schema';
import { COMPLETE_SIGNUP } from 'Graphql/Mutation';
import { Button } from 'Components/Buttons';
import * as animationData from '../../../Animation/bms-rocket.json';
import * as bmsRocketAnim from '../../../Animation/sync_icon.json';
import * as success from '../../../Animation/success.json';
import './style.scss';
interface Props {
    location?: any;
    client?: any;
}

interface State {
    loading: boolean;
}
class FinishSignup extends React.Component<RouteComponentProps<any> & Props, State> {
    state = {
        loading: false,
        isStopped: false,
        isPaused: false,
        current: 1
    };

    renderLoties() {
      const { current} = this.state;
      const defaultOptions = {
        loop: false,
        autoplay: true, 
        animationData
      };
      const defaultOptions2 = {
        loop: true,
        autoplay: true, 
        animationData: bmsRocketAnim
      };
      const defaultOptions3 = {
        loop: false,
        autoplay: true, 
        animationData: success
      };
      if (current === 1) {
        return (
          <Lottie options={defaultOptions}
                  height={400}
                  width={400}
                  isStopped={this.state.isStopped}
                  isPaused={this.state.isPaused}
                />
        );
      }

      if (current === 2) {
        return (
          <Lottie options={defaultOptions2}
                  height={400}
                  width={400}
                  isStopped={this.state.isStopped}
                  isPaused={this.state.isPaused}
                />
        );
      }

      if (current === 3) {
        return (
          <Lottie options={defaultOptions3}
                  height={400}
                  width={400}
                  loop={false}
                  isStopped={this.state.isStopped}
                  isPaused={this.state.isPaused}
                  eventListeners={
                    [
                      {
                        eventName: 'complete',
                        callback: () =>  this.props.history.push('/'),
                      },
                    ]
                  }
                />
        );
      }
    }
    render() {

      return (
          <Mutation mutation={COMPLETE_SIGNUP}>
          {(finishSignup, { data }) => (
            <div className="uk-width-1-1 uk-height-1-1" style={{ height: '100vh', backgroundColor: '#ffffff' }}>
                
                {this.renderLoties()}
                <h2 className="uk-text-center">Yipee!!!</h2>
                <h5 className="uk-text-center">You have completed your profile. <br/>
                  You are a now a Unizonner
                </h5>
                <div className="uk-padding-small middle uk-flex uk-flex-center">
                    <Button
                      className="uk-button uk-button-primary"
                      disabled={this.state.loading}
                      onClick={() => {
                        this.setState({current: 2, loading: true});
                        finishSignup().then((res) => {
                          this.setState({current: 3, loading: true });
                        }).catch((err) => {
                          this.setState({current: 1, loading: false});
                          console.log(err);
                        });
                      }}
                    >
                        Click to Finish
                    </Button>
                </div>
            </div>
          )}
          </Mutation>
      );
    }
}

export default withRouter(
    compose(
        withApollo
    )(FinishSignup),
);
