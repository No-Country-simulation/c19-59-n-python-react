import { useForm } from "../../hooks"
import { LogoVetTech } from "../../components/LogoVetTech"
import { CustomInput } from "../components/CustomInput"
import {Select, SelectItem} from "@nextui-org/select";
import { CountriesList } from "../../constants/constants";
import { Radio, RadioGroup } from "@nextui-org/react";
import { PrimaryButton } from "../../components/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal, setSelected } from "../../store/slices/auth/authSlice";
import { TermsAndConditionsModal } from "../components/TermsAndConditionsModal";


export const RegisterVeterinaryPage = () => {

    const {name, email, password, password2, country, id_number, telephone_number, zip_code, onInputChange, onResetForm, formState} = useForm({
        name:'',
        email:'',
        id_number:'',
        password:'',
        password2:'',
        telephone_number:'',
        zip_code:'',
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
        console.log(formState);
        onResetForm()
      }


  }


  return (
    <section className="flex flex-col justify-center items-center h-screen relative">
       <LogoVetTech width="70px" className="absolute top-[30px] left-8"/> 
        <div className="mb-8">
            <h3 className="font-alata text-2xl 
             text-center antialiased font-medium text-titleColor w-[280px]">Registrate y comienza tu consultorio virtual</h3>
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
                label="Email: "
                color="primary"
                value={email}
                onChange={onInputChange} 

            />
            <CustomInput
                variant="underlined"
                size="sm"
                type="text"
                name="id_number"
                label="Número ID: "
                color="primary"
                value={id_number}
                onChange={onInputChange} 

            />
            <CustomInput
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
              label="Selecciona tu país"
              size="sm"
              variant="underlined"
              name="country" 
              color="primary"
              className="border-secondaryColor border-b-1 mt-2 mb-6"
              classNames={{
                label:"text-[14px] font-semibold",
                input: "placeholder:text-[12px]",
                listbox:"bg-baseColor font-manrope shadow-2xl",
                popoverContent:"p-0 border-1 border-gray-400"
              }} 
            >
              {
                CountriesList.map(country => (
                  <SelectItem key={country.name}>
                    <div className="flex space-x-2">
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
