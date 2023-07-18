import {AuthenticatedTemplate, UnauthenticatedTemplate, useMsal,} from "@azure/msal-react";
import {useState} from 'react'
import './App.css'

function App() {
    const {instance, accounts} = useMsal();
    const [accessToken, setAccessToken] = useState<string>();
    const name = accounts[0] && accounts[0].name;

    function RequestAccessToken() {
        const request = {
            scopes: ["openid email profile"],
            account: accounts[0],
        };

        instance
            .acquireTokenSilent(request)
            .then((response) => {
                setAccessToken(response.accessToken);
            })
            .catch((e) => {
                instance.acquireTokenPopup(request).then((response) => {
                    setAccessToken(response.accessToken);
                });
            });
    }

    return (
        <>
            <h1>Welcome to our super secure app!</h1>

            <div>
                <UnauthenticatedTemplate>
                    <button
                        onClick={() => instance.loginPopup()}
                    >
                        Sign in
                    </button>
                </UnauthenticatedTemplate>
                <AuthenticatedTemplate>
                    <div>
                        <p>Good to see you, {name}</p>
                        <div>
                            {accessToken ? (
                                <div>
                                    <p>Access token acquired!</p>
                                    <code
                                        style={{
                                            width: "500px",
                                            display: "inline-block",
                                            wordBreak: "break-all",
                                        }}
                                    >
                                        {accessToken}
                                    </code>
                                </div>
                            ) : (
                                <div>
                                    <button onClick={RequestAccessToken}>
                                        Request access token
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </AuthenticatedTemplate>
            </div>
        </>
    )
}

export default App
