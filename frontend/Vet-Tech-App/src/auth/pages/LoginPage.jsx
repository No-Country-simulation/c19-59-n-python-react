import { Link } from "react-router-dom"
import { useForm } from "../../hooks"
import { useDispatch, useSelector } from "react-redux"
import { startLoginWithEmailAndPassword } from "../../store/slices/auth/thunks"
import { GoogleLoginButton } from "../components/GoogleLoginButton"






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
        <div>
            <img src="#" alt="Logo" />
            <h1>Vet-Tech</h1>
        </div>
        <form className="" >
            <div>
                <label htmlFor="">Correo Eléctronico: </label>
                <input 
                    className="outline outline-2 outline-indigo-500" 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Escriba su correo eléctronico"
                    value={email}
                    onChange={onInputChange}
                    />
            </div>
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
                <Link to="/auth/reset">¿Olvidaste tu contraseña?</Link>

            {/* //todo: ingreso con google */}
            <div>
                <GoogleLoginButton />
            </div>

            {/* //todo: ver como agregar CAPTCHA */}
            <div>ACA VA EL CAPTCHA</div> 

            <div>
                <Link to="/auth/register">Registrate</Link>
            </div>
            <button type="submit" onClick={onSubmitForm}> LOG IN </button>
        </form>
    </section>  
)
}
