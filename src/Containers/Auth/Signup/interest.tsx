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
import './style.css';

interface Props {
    // tslint:disable-next-line:no-any
    interests: any[];
    // tslint:disable-next-line:no-any
    addInterests: any;
    // tslint:disable-next-line:no-any
    refreshToken?: any;
    // tslint:disable-next-line:no-any
    client?: any;
}

interface State {
    loading: boolean;
    // tslint:disable-next-line:no-any
    selected: string[];
    show: boolean;
}
class InterestPage extends React.Component<RouteComponentProps & Props, State> {
    state = {
        show: false,
        selected: ['1'],
        loading: false,
    };

    onSelectAdd = id => {
        const temp = this.state.selected;
        const index = this.state.selected.indexOf(id);

        if (index === -1) {
            temp.push(id);
        } else {
            temp.splice(index, 1);
        }
        this.setState({ selected: temp });
    };

    onSelectRemove = id => {
        this.state.selected.indexOf(id);
    };

    // tslint:disable-next-line:no-any
    save(): any {
        // tslint:disable-next-line:no-console
        console.log(this.state.selected);
        let inter: string[] = [];
        inter = this.state.selected;
        this.props.client
            .mutate({
                mutation: ADD_INTERESTS,
                variables: {
                    interests: inter,
                },
            })
            .then(result => {
                console.log(result);
                this.props.history.push('/signup/complete');
            })
            .catch(err => {
                UIkit.notification(`${err.message}`, { status: 'danger', pos: 'top-right' });
            });
    }

    render() {
        // tslint:disable-next-line:no-console
        console.log(this.props.interests.allInterest);
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
                        disabled={this.state.selected.length > 1 ? false : true}
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
