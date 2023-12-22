import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import {
    Button
} from "antd";
import Login from './Login';
import Protected from './Protected';
const Home = () => {
    const { oktaAuth, authState } = useOktaAuth();
    const history = useHistory();

    if (!authState) {
        return <div>Loading ...</div>;
    }

    const handleLogin = async () => history.push('/login');
    const handleLogout = async () => oktaAuth.signOut();

    return (
        <div id="home">
            {
                authState.isAuthenticated
                    ? <Protected />
                    : <Login />
            }
        </div>
    );
};

export default Home;