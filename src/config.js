const oktaConfig = {
    oidc: {
        issuer: 'https://trial-1069723.okta.com',
        clientId: '0oa9v5ns4pUt1hWoX697',
        scopes: ['openid', 'profile', 'email'],
        // redirectUri: `${window.location.origin}/login/callback`,
        redirectUri: `https://65856b84cf62150008bda85f--chic-maamoul-6c3fcf.netlify.app/login/callback`
    },
    widget: {
        issuer: 'https://trial-1069723.okta.com',
        clientId: '0oa9v5ns4pUt1hWoX697',
        // redirectUri: `${window.location.origin}/login/callback`,
        redirectUri: `https://65856b84cf62150008bda85f--chic-maamoul-6c3fcf.netlify.app/login/callback`,

        scopes: ['openid', 'profile', 'email'],
    }
};

export default oktaConfig;