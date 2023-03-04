import { useState } from 'react';

function LoginPage() {
  const [authUrl, setAuthUrl] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await fetch('/api/auth/google');
      const { url } = await response.json();
      setAuthUrl(url);
    } catch (error) {
      console.error('Error signing in with Google', error);
    }
  };

  return (
    <div>
      {authUrl ? (
        <a href={authUrl}>Sign in with Google</a>
      ) : (
        <button onClick={handleSignIn}>Sign in with Google</button>
      )}
    </div>
  );
}

export default LoginPage;
