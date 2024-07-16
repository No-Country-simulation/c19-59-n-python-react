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
        
        <h1>REGISTER PAGE</h1>
    </section>
  )
}
