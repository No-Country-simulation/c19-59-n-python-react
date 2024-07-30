import { LogoVetTech } from "../../components/LogoVetTech"
import { PrimaryButton } from "../../components/PrimaryButton"
import { useForm } from "../../hooks"
import { CustomInput } from "../components/CustomInput"
import { Link } from "react-router-dom"


export const PasswordReset = () => {

  const { prevPassword, newPassword, onResetForm, onInputChange} = useForm({
    prevPassword:'',
    newPassword:''
  })

  return (
    <section className="flex flex-col justify-center items-center h-screen relative">
        <Link
          to="/auth/login"
          className="text-primaryColor transition-all hover-register my-4"
        >
          <LogoVetTech width="70px" className="absolute top-[30px] left-8" />
        </Link>
        <div className="mb-12">
            <h3 className="font-alata text-2xl 
             text-center antialiased font-medium text-titleColor w-[280px]">Resetea tu constraseña</h3>
        </div>
        <form className="flex flex-col items-center text-[12px] font-manrope text-blackText w-[260px]">
            
            <CustomInput
                variant="underlined"
                size="sm"
                type="password"
                name="password"
                placeholder="Escribe tu contraseña actual..."
                color="primary"
                label="Contraseña anterior: "
                value={prevPassword}
                onChange={onInputChange} 

            />
            <CustomInput
                variant="underlined"
                size="sm"
                type="password"
                name="password"
                placeholder="Nueva contraseña..."
                color="primary"
                label="Contraseña nueva: "
                value={newPassword}
                onChange={onInputChange} 

            />

            <PrimaryButton type="submit">
              Resetea
            </PrimaryButton>

            </form >
    </section>
  )
}
