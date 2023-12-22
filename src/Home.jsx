import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import Login from './Login';
import Protected from './Protected';
const Home = () => {
    const { authState } = useOktaAuth();

    if (!authState) {
        return <div>Loading ...</div>;
    }

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