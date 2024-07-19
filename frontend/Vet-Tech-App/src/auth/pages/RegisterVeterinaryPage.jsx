import { useForm } from "../../hooks"
import { LogoVetTech } from "../../components/LogoVetTech"
import { CustomInput } from "../components/CustomInput"
import {Select, SelectItem} from "@nextui-org/select";
import { PetsList } from "../../constants/constants";
import { Radio, RadioGroup } from "@nextui-org/react";
import { PrimaryButton } from "../../components/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal, setSelected } from "../../store/slices/auth/authSlice";
import { TermsAndConditionsModal } from "../components/TermsAndConditionsModal";


export const RegisterVeterinaryPage = () => {

    const {name, email, password, password2, role, petQuantity, country, onInputChange, onResetForm} = useForm({
        name:'',
        email:'',
        password:'',
        password2:'',
        role:'',
        petQuantity:'',
        country:'',
    })

    const dispatch = useDispatch();
    const { isOpen, isSelected } = useSelector(state => state.auth);

    const handleModal = () => {
      if( !isOpen ) {
        dispatch(openModal())
      }else{
        dispatch(closeModal())

      }
    }

    const handleCheckTermsAndConditions = () => {
      dispatch(setSelected())
    }

    const onSubmitForm = (e) => {  
      e.preventDefault();

      if( isSelected ){
        //Aca va el Dispatch de la accion del register
        dispatch()
        console.log('se hace el submit');
        onResetForm()
      }


  }


  return (
    <section className="flex flex-col justify-center items-center h-screen relative">
       <LogoVetTech width="70px" className="absolute top-[30px] left-8"/> 
        <div className="mb-12">
            <h3 className="font-alata text-2xl 
             text-center antialiased font-medium text-titleColor w-[280px]">Registrate y dale la mejor atención a tu mascota</h3>
        </div>
        <form 
          className="flex flex-col items-center text-[12px] font-manrope text-blackText w-[260px]"
          onSubmit={onSubmitForm}
        >
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
            <div className="my-4">
              <RadioGroup 
                orientation="horizontal"
                onChange={handleCheckTermsAndConditions}
                isSelected={isSelected}
              >
                <Radio/>
                <span>Acepto <a href="#" onClick={handleModal}>términos y condiciones</a></span>
              </RadioGroup>
              <TermsAndConditionsModal isOpen={isOpen} onClose={handleModal}/>
            </div>
              <PrimaryButton type="submit" disabled={!isSelected}>
                Registrate
              </PrimaryButton>
            </form >
    </section>
  )
}
