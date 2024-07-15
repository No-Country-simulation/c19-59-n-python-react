import { Link } from "react-router-dom"
import { useForm } from "../../hooks"
import { useDispatch, useSelector } from "react-redux"
import { startLoginWithEmailAndPassword } from "../../store/slices/auth/thunks"
import { GoogleLoginButton } from "../components/GoogleLoginButton"
import { PrimaryButton } from "../../components/PrimaryButton"
import { Input } from "@nextui-org/input"







export const LoginPage = () => {

    const { status, errorMessage } = useSelector( state => state.auth )

    const dispatch = useDispatch()

    // manejo del formulario
    const {onInputChange, onResetForm, email, password} = useForm({
        email:'',
        password:'',
    })

    // submit del formulario
    const onSubmitForm = (e) => {  
        e.preventDefault();

        //Aca va el Dispatch de la accion del login
        dispatch(startLoginWithEmailAndPassword( {email, password} ))
        

        onResetForm()
    }

  return (
    <section className="flex flex-col justify-center items-center h-screen">
        <div className="mb-6">
            <img src="#" alt="Logo" />
            <h1 className="font-alata text-3xl antialiased font-bold text-titleColor">Vet-Tech</h1>
        </div>
        <form className="flex flex-col items-center text-[12px] font-manrope text-blackText">
            
            <Input />
            <div>
                <label htmlFor="">Constraseña: </label>
                <input 
                    className="outline outline-2 outline-indigo-500" 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Escriba su contraseña"
                    value={password}
                    onChange={onInputChange}
                    />
            </div>
                <Link to="/auth/reset" className="text-[10px] my-3 hover-forgotPassword">¿Olvidaste tu contraseña?</Link>

            {/* //todo: ingreso con google */}
            <div className=" my-3">
                <GoogleLoginButton />
            </div>

            {/* //todo: ver como agregar CAPTCHA */}
            <div>ACA VA EL CAPTCHA</div> 

            
            <Link 
                to="/auth/register" 
                className="text-primaryColor transition-all hover-register mt-4 mb-4"
                >
                    Registrate
            </Link>
            
            <PrimaryButton type="submit" onClick={onSubmitForm}>Log In</PrimaryButton>
        </form>
    </section>  
)
}
