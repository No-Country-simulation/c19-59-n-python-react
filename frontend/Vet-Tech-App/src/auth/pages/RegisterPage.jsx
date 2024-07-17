import { useForm } from "../../hooks"
import { LogoVetTech } from "../../components/LogoVetTech"
import { CustomInput } from "../components/CustomInput"
import {Select, SelectItem} from "@nextui-org/select";
import { PetsList } from "../../constants/constants";
import { Radio } from "@nextui-org/react";
import { PrimaryButton } from "../../components/PrimaryButton";


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
    <section className="flex flex-col justify-center items-center h-screen relative">
       <LogoVetTech width="70px" className="absolute top-[45px] left-8"/> 
        <div className="mb-12">
            <h3 className="font-alata text-2xl 
             text-center antialiased font-medium text-titleColor w-[280px]">Registrate y dale la mejor atención a tu mascota</h3>
        </div>
        <form className="flex flex-col items-center text-[12px] font-manrope text-blackText w-[260px]">
            <CustomInput
                variant="underlined"
                size="sm"
                type="name"
                name="name"
                placeholder="Tu nombre..."
                label="Nombre completo: "
                color="primary"
                value={name}
                onChange={onInputChange} 

            />
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
            <CustomInput
                variant="underlined"
                size="sm"
                type="password"
                name="password"
                placeholder="Repite tu contraseña..."
                color="primary"
                label="Repetir Contraseña: "
                value={password}
                onChange={onInputChange} 

            />

            <Select
              label="¿Que mascota tienes?"
              size="sm"
              placeholder="Selecciona tu mascota"
              variant="underlined" 
              color="primary"
              className="border-secondaryColor border-b-1 mb-6"
              classNames={{
                label:"text-[14px] font-semibold",
                input: "placeholder:text-[12px]",
                listbox:"bg-baseColor font-manrope shadow-2xl",
                popoverContent:"p-0 border-1 border-gray-400"
              }} 
            >
              {
                PetsList.map(pet => (
                  <SelectItem key={pet}>
                    {pet}
                  </SelectItem>
                ))
              }
            </Select>
            <div>
              {/* <Radio /> */}
              {/* Agregar Componente modal, practicar manejar el estado por el redux */}
            </div>
              <PrimaryButton type="submit">
                Registrate
              </PrimaryButton>
            </form >
    </section>
  )
}
