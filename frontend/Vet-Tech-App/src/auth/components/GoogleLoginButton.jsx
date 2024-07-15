import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';


export const GoogleLoginButton = () => {

  const dispatch = useDispatch()


  const loginWithGoogle = () => {
    
    dispatch();
  }


  return (
    <GoogleLogin
      type='icon'
      theme='filled_blue'
      size='medium'
      shape='circle'
      onSuccess={loginWithGoogle}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  )
}
