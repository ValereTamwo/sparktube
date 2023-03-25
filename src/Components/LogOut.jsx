import { GoogleLogout } from 'react-google-login'
const client_id="957952090664-3sne87r97562p9kvsm8ririvcq7cu2qj.apps.googleusercontent.com"

function LogOut() {
  return (
      <div id='SignButton'>
          <GoogleLogout
              clientId={client_id}
              buttonText='Deconnection'
              onSuccess={(res) => { console.log('Sucessful Log Out : ' + res.profileObj) }}
              onFailure={(res) => { console.log('fail to logout :' + res) }}
    
          />
    </div>
  )
}

export default LogOut