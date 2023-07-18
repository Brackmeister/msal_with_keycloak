import * as msal from "@azure/msal-browser";

export const MsalInstance = new msal.PublicClientApplication({
    auth: {
        protocolMode: msal.ProtocolMode.OIDC,
        authorityMetadata: JSON.stringify({
            authorization_endpoint:
                "https://localhost:8443/realms/futurama/protocol/openid-connect/auth",
            token_endpoint:
                "https://localhost:8443/realms/futurama/protocol/openid-connect/token",
            issuer: "https://localhost:8443/realms/futurama",
            userinfo_endpoint:
                "https://localhost:8443/realms/futurama/protocol/openid-connect/userinfo",
        }),
        authority: "https://localhost:8443/realms/futurama",
        clientId: "frontend-client",
        knownAuthorities: ["https://localhost:8443/realms/futurama"],
    },
});
