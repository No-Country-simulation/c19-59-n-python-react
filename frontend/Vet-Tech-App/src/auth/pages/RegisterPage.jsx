import { useForm } from "../../hooks"


export const RegisterPage = () => {

    const {name, email, password, password2, role, petQuantity, country, onInputChange, onResetForm} = useForm({
        name:'',
        email:'',
        password:'',
        password2:'',
        role:'',
        petQuantity:'',
        country:'',
    })


  return (
    <section className="flex flex-col justify-center items-center h-screen">
        <div>
            <img src="#" alt="LogoSmall" />
        </div>
        <div>
            <h3>Registrate, ¿Tenes mascotas o sos veterinario?</h3>
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
                <button>Ingresa con google</button>
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
