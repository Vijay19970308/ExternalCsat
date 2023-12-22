const oktaConfig = {
    oidc: {
        issuer: 'https://trial-1069723.okta.com',
        clientId: '0oa9v5ns4pUt1hWoX697',
        scopes: ['openid', 'profile', 'email'],
        // redirectUri: `${window.location.origin}/login/callback`,
        redirectUri: `https://dev-camp.indegene.com/ExternalCsat/login/callback`
    },
    widget: {
        issuer: 'https://trial-1069723.okta.com',
        clientId: '0oa9v5ns4pUt1hWoX697',
        // redirectUri: `${window.location.origin}/login/callback`,
        redirectUri: `https://dev-camp.indegene.com/ExternalCsat/login/callback`,

        scopes: ['openid', 'profile', 'email'],
    }
};

export default oktaConfig;