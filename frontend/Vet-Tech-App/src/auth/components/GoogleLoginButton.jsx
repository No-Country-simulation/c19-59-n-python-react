import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';


export const GoogleLoginButton = () => {

  const dispatch = useDispatch()


  const loginWithGoogle = () => {
    
    dispatch();
  }


  return (
    <GoogleLogin 
      onSuccess={loginWithGoogle}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  )
}
