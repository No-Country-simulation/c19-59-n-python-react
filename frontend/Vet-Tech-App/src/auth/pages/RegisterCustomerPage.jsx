import { useForm } from "../../hooks"
import { LogoVetTech } from "../../components/LogoVetTech"
import { CustomInput } from "../components/CustomInput"
import {Select, SelectItem} from "@nextui-org/select";
import { CountriesList, PetsList } from "../../constants/constants";
import { Radio, RadioGroup } from "@nextui-org/react";
import { PrimaryButton } from "../../components/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal, setSelected } from "../../store/slices/auth/authSlice";
import { TermsAndConditionsModal } from "../components/TermsAndConditionsModal";
import { startRegisterCustomer } from "../../store/slices/auth/thunks";


export const RegisterCustomerPage = () => {

    const {name, email, password, password2, pet, pet_name, country_residence, onInputChange, onResetForm, formState} = useForm({
        name:'',
        email:'',
        password:'',
        password2:'',
        pet:'',
        pet_name:'',
        country_residence:'',
    })

    const dispatch = useDispatch();
    const { isOpen, isSelected } = useSelector(state => state.auth);

    //* abrir modal terminos y condiciones
    const handleModal = () => {
      if( !isOpen ) {
        dispatch(openModal())
      }else{
        dispatch(closeModal())

      }
    }

    //* Manejo del estado del select
    const handleCheckTermsAndConditions = () => {
      dispatch(setSelected())
    }


    //*submit del formulario
    const onSubmitForm = (e) => {  
      e.preventDefault();

 

      if( isSelected ){
        //Aca va el Dispatch de la accion del register
        dispatch(startRegisterCustomer(formState))

        onResetForm()
      } else {

        //manejo de error
        console.log("error en customer register page");
      }


  }


  return (
    <section className="flex flex-col justify-center items-center h-screen relative">
       <LogoVetTech width="70px" className="absolute top-[30px] left-8"/> 
        <div className="mb-8 mt-4">
            <h3 className="font-alata text-2xl 
             text-center antialiased font-medium text-titleColor w-[280px]">Registrate y dale la mejor atención a tu mascota</h3>
        </div>
        <form 
          className="flex flex-col items-center text-[12px] font-manrope text-blackText w-[260px]"
          onSubmit={onSubmitForm}
        >
            <CustomInput
                isRequired
                variant="underlined"
                size="sm"
                type="name"
                name="name"
                label="Nombre completo: "
                color="primary"
                value={name}
                onChange={onInputChange} 

            />
            <CustomInput
                isRequired
                variant="underlined"
                size="sm"
                type="email"
                name="email"
                label="Email: "
                color="primary"
                value={email}
                onChange={onInputChange} 

            />
            <CustomInput  
                isRequired
                variant="underlined"
                size="sm"
                type="password"
                name="password"
                color="primary"
                label="Contraseña: "
                value={password}
                onChange={onInputChange} 

            />
            <CustomInput
                isRequired
                variant="underlined"
                size="sm"
                type="password"
                name="password2"
                color="primary"
                label="Repetir Contraseña: "
                value={password2}
                onChange={onInputChange} 

            />

            <Select
              isRequired
              label="¿Que mascota tienes?"
              size="sm"
              variant="underlined" 
              color="primary"
              name="pet"
              value={pet}
              onChange={onInputChange}
              className="border-secondaryColor border-b-1 mb-3"
              classNames={{
                label:"text-[14px] font-semibold text-blackText",
                input: "placeholder:text-[12px]",
                listbox:"bg-baseColor font-manrope shadow-2xl",
                popoverContent:"p-0 border-1 border-gray-400"
              }} 
            >
              {
                PetsList.map(pets => (
                  <SelectItem key={pets.name}>
                    {pets.name}
                  </SelectItem>
                ))
              }
            </Select>
            <CustomInput
                isRequired
                variant="underlined"
                size="sm"
                type="text"
                name="pet_name"
                label="Nombre de Mascota: "
                color="primary"
                value={pet_name}
                onChange={onInputChange} 

            />
            <Select
              isRequired
              label="Selecciona tu país"
              size="sm"
              variant="underlined"
              name="country_residence" 
              color="primary"
              value={country_residence}
              onChange={onInputChange}
              className="border-secondaryColor border-b-1 mb-6"
              classNames={{
                label:"text-[14px] font-semibold text-blackText",
                input: "placeholder:text-[12px]",
                listbox:"bg-baseColor font-manrope shadow-2xl",
                popoverContent:"p-0 border-1 border-gray-400"
              }} 
            >
              {
                CountriesList.map(country => (
                  <SelectItem key={country.name}>
                    <div className="flex space-x-4">
                      <img src={country.flag} className="w-6 h-4 " alt={country.name}/>
                      <h3 className="">{country.name}</h3>
                    </div>
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
