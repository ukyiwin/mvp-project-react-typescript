import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose, withApollo, graphql } from 'react-apollo';
import StackGrid from 'react-stack-grid';
import * as UIkit from 'uikit';
import { ALL_INTEREST } from 'Graphql/Query';
// import { User } from 'CustomTypings/schema';
import InterestItem from 'Components/InterestItem';
import { Interest } from 'CustomTypings/schema';
import { ADD_INTERESTS } from 'Graphql/Mutation';
import './style.scss';

interface Props {
    // tslint:disable-next-line:no-any
    interests: any;
    addInterests: any;
    refreshToken?: any;
    location?: any;
    client?: any;
}

interface State {
    loading: boolean;
    // tslint:disable-next-line:no-any
    selected: string[];
    show: boolean;
}
class InterestPage extends React.Component<RouteComponentProps<any> & Props, State> {
  state = {
    show: false,
    selected: ['1'],
    loading: false,
  };

  onSelectAdd = (id) => {
    const temp = this.state.selected;
    const index = this.state.selected.indexOf(id);
    if (index === -1) {
        temp.push(id);
    } else {
        temp.splice(index, 1);
    }
    this.setState({ selected: temp });
  }

    onSelectRemove = (id) => {
        this.state.selected.indexOf(id);
    }

    // tslint:disable-next-line:no-any
    save(): any {
      let inter: string[] = [];
      inter = this.state.selected;
      this.props.client
        .mutate({
            mutation: ADD_INTERESTS,
            variables: {
                interests: inter,
            },
        })
        .then((result) => {
          this.props.history.push('/signup/complete');
        })
        .catch((err) => {
          UIkit.notification(`${err.message}`, { status: 'danger', pos: 'top-right' });
        });
    }

    render() {
        if (this.props.interests.loading) {
            return <div>Loading</div>;
        }

        return (
            <div className="uk-width-1-1" style={{ height: '100vh', backgroundColor: '#ffffff' }}>
                <h1 className="uk-postion-top-center uk-text-center" style={{ marginTop: 50 }}>
                    Lets pick your interest
                </h1>
                <p className="uk-postion-top-center uk-text-center uk-padding">Select minimum of 5 interest</p>
                <StackGrid columnWidth={200}>
                    {this.props.interests.allInterest.map((data, i) => (
                        <InterestItem
                          key={i}
                          name={data.name}
                          id={data.id}
                          url={data.avatar}
                          checked={this.state.selected.indexOf(data.id) === -1 ? false : true}
                          onClickAdd={this.onSelectAdd}
                        />
                    ))}
                </StackGrid>
                <div className="uk-padding-small" style={{ position: 'fixed', bottom: 0, right: 40 }}>
                    <button
                        className="uk-button uk-button-primary"
                        disabled={this.state.selected.length > 5 ? false : true}
                        onClick={() => this.save()}
                    >
                        SAVE INTEREST
                    </button>
                </div>
            </div>
        );
    }
}

export default withRouter(
    compose(
        withApollo,
        graphql<Interest, {}, Props>(ALL_INTEREST, { name: 'interests' }),
        graphql<Interest, {}, Props>(ADD_INTERESTS, { name: 'addInterests' }),
    )(InterestPage),
);
