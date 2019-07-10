import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut} from '../actions'


class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {//loading the auth2 library into the google api because the file is large we only want a specific part of it.
            window.gapi.client.init({
                clientId: process.env.CLIENT_ID,
                scope: 'email' //initializing the api with our client id and the info we need access to from google oauth
            }).then(() => { //load returns a promise so now we are seeing what is in auth
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get()); //Checking the auth status upon first rendering the site and sending that info to the state through the action creators and reducers
                this.auth.isSignedIn.listen(this.onAuthChange); //Listening for a change on our auth status, if status changes, we call onAuthChange. Listen has a callback parameter that has an arg on it called isSignedIn which we can pass to our callback
            });
        }); 

    }

    onAuthChange = (isSignedIn) => { //Using arrow function because it is a call back function so its this property is bound to the class
        if(isSignedIn) { //based on signin status call appropriate action creators
            this.props.signIn(this.auth.currentUser.get().getId()); //when sending in signing in action creator, also passing the user id from gapi to the action creator
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => { //sign in and out helper methods using gapi
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton () {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="btn btn-danger">
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="btn btn-success">
                    Sign In
                </button>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);