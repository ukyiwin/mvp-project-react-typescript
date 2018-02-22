import * as React from 'react';
import { compose, graphql, ChildProps  } from 'react-apollo';
import { USER_EXIST } from 'Graphql/Query';

// import { Link } from 'react-router-dom';

type Props = {
  // tslint:disable-next-line:no-any
  userExist: any
};

type Response = {
  data: boolean;
};

type InputProps = {
  email: string
};

// tslint:disable-next-line:no-any
class InputBoxLogin extends React.Component<Props & ChildProps<Response, InputProps>> {
  state = {
    text: ''
  };

  onClick() {
    this.props.userExist({
      // Feer infograte
      // userExist.
    }).then(({ data }) => {
        // console.log('got data', data);
    }).catch((error) => {
        // console.log('there was an error sending the query', error);
    });
  }

  render() {
    const { data } = this.props;
    return (
      <div className="">
        <h1 className="uk-heading-primary uk-text-bold uk-text-uppercase">Welcome <br/>to unizonn</h1>
        <p style={{marginTop: 20}}>Friendly and inclusive community for students and academia</p>
        <div style={{ display: 'table' }}>
          <input
            type="email" 
            className="uk-input uk-box-shadow-hover-small uk-responsive-width uk-form-large uk-float-left"
            placeholder="Enter email to signin or signup"
          />
          { data ? <div uk-spinner={true}/> :
            <button className="uk-button uk-button-primary uk-button-large  uk-width-1-1 ">
              GET STARTED
            </button>}
        </div>
      </div>
    );
  }
  
}

export default compose(
  graphql<boolean>(USER_EXIST)
)(InputBoxLogin);
