import React from 'react'
import { GoogleLogin } from 'react-google-login'
const client_id="957952090664-3sne87r97562p9kvsm8ririvcq7cu2qj.apps.googleusercontent.com"

function SignIn({setAuth,setUser}) {
  return (
      <div id='SignButton'>
          <GoogleLogin
              clientId={client_id}
              buttonText='Se Connecter'
              onSuccess={(res) => { setAuth(true); setUser(res.profileObj); console.log('Sucessful Login you Credentials are : ' , res.profileObj) }}
              onFailure={(res) => { console.log('fail to login :' , res) }}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
          />
    </div>
  )
}

export default SignIn