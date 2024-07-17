import { Link } from "react-router-dom"
import { useForm } from "../../hooks"
import { useDispatch, useSelector } from "react-redux"
import { startLoginWithEmailAndPassword } from "../../store/slices/auth/thunks"
import { GoogleLoginButton } from "../components/GoogleLoginButton"
import { PrimaryButton } from "../../components/PrimaryButton"
import { CustomInput } from "../components/CustomInput"
import { LogoVetTech } from "../../components/LogoVetTech"







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
        <div className="mb-12">
            <div className="mb-6">
                <LogoVetTech width="160px"/>
            </div>
            <h1 className="font-alata text-5xl antialiased font-bold text-titleColor">Vet-Tech</h1>
        </div>
        <form className="flex flex-col items-center text-[12px] font-manrope text-blackText w-[260px]">
            <CustomInput
                variant="underlined"
                size="sm"
                type="email"
                name="email"
                placeholder="example@domain.com"
                label="Email: "
                color="primary"
                value={email}
                onChange={onInputChange} 

            />
            <CustomInput
                variant="underlined"
                size="sm"
                type="password"
                name="password"
                placeholder="Escribe tu contraseña..."
                color="primary"
                label="Contraseña: "
                value={password}
                onChange={onInputChange} 

            />
            
                <Link to="/auth/reset" className="text-[10px] my-6 hover-forgotPassword">¿Olvidaste tu contraseña?</Link>

            {/* //todo: ingreso con google */}
            <div className=" my-6">
                <GoogleLoginButton />
            </div>

            {/* //todo: ver como agregar CAPTCHA */}
            <div>ACA VA EL CAPTCHA</div> 

            
            <Link 
                to="/auth/register" 
                className="text-primaryColor transition-all hover-register my-6"
                >
                    Registrate
            </Link>
            
            <PrimaryButton type="submit" onClick={onSubmitForm}>Acceso</PrimaryButton>
        </form>
    </section>  
)
}
