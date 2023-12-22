import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import Csat from './csat';
import { Button } from 'antd';
import 'antd/dist/antd.css';
const Protected = () => {
    const { authState, oktaAuth } = useOktaAuth();
    const [userInfo, setUserInfo] = useState(null);
    const handleLogout = async () => oktaAuth.signOut();
    useEffect(() => {
        if (!authState || !authState.isAuthenticated) {
            // When user isn't authenticated, forget any user info
            setUserInfo(null);
        } else {
            oktaAuth.getUser().then((info) => {
                setUserInfo(info);
            }).catch((err) => {
                console.error(err);
            });
        }
    }, [authState, oktaAuth]); // Update if authState changes

    if (!userInfo) {
        return (
            <div>
                <p>Fetching user info ...</p>
            </div>
        );
    }

    return (
        <div>
            <div>
                <div id="header">
                    <h3>Welcome, &nbsp;{userInfo.name}!</h3>
                    <Button onClick={handleLogout}>{"Logout"}</Button>
                </div>
                <Csat userInfo={userInfo} />
                <h5>You have successfully authenticated against your Okta org, and have been redirected back to this application.</h5>
            </div>
        </div>
    );
};

export default Protected;