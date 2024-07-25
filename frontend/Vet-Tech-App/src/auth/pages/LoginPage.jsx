import { Link } from "react-router-dom"
import { useForm } from "../../hooks"
import { useDispatch, useSelector } from "react-redux"
import { startLoginWithEmailAndPassword } from "../../store/slices/auth/thunks"
import { GoogleLoginButton } from "../components/GoogleLoginButton"
import { PrimaryButton } from "../../components/PrimaryButton"
import { CustomInput } from "../components/CustomInput"
import { LogoVetTech } from "../../components/LogoVetTech"
import { ChooseRoleModal } from "../components/ChooseRoleModal"
import { closeChooseRoleModal, openChooseRoleModal,} from "../../store/slices/auth/authSlice"





export const LoginPage = () => {

    const { status, errorMessage, isOpen } = useSelector( state => state.auth )

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

    //abrir el modal para seleccionar las rutas a los diferentes tipos de register

    const handleRegisterModal = () => {

        if( !isOpen ) {
            dispatch(openChooseRoleModal())
          }else{
            dispatch(closeChooseRoleModal())
    
          }       
    }

  return (
    
    <section className="flex flex-col justify-center items-center h-screen">
        <div className="mb-10">
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
            
                <Link to="/auth/reset" className="text-[10px] my-4 hover-forgotPassword">¿Olvidaste tu contraseña?</Link>

            <div className=" my-4">
                <GoogleLoginButton />
            </div>

            {/* //todo: ver como agregar CAPTCHA */}
            <div>ACA VA EL CAPTCHA</div> 

            {/* //todo: insertar <a></a> para manejar modal (a crear) para definir las rutas, dentro del modal hay 2 links */}

            <a href="#" onClick={handleRegisterModal} className="text-primaryColor transition-all hover-register my-4">Registrate</a>

            <ChooseRoleModal isOpen={isOpen} onClose={handleRegisterModal}/>
            
            <PrimaryButton type="submit" onClick={onSubmitForm} disabled={ status==='cheking' }>Acceso</PrimaryButton>
        </form>
    </section>  
)
}
