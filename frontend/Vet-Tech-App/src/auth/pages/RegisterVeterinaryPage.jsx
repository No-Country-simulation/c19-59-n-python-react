
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
import { startRegisterVeterinary } from "../../store/slices/auth/thunks";
import { validateEmail, validateName, validatePassword } from "../../helpers/validations";
import { Link, useNavigate } from "react-router-dom";

export const RegisterVeterinaryPage = () => {

    const {name, email, password, password2, country_residence, address, country_flag, iso3,  onInputChange, onResetForm,onCountryChange, formState} = useForm({
        name:'',
        email:'',
        address:'',
        password:'',
        password2:'',
        country_residence:'',
        iso3:'',
        country_flag:'',
    })

    const dispatch = useDispatch();
    const { isOpen, isSelected, errorMessage } = useSelector(state => state.auth);
    const navigate = useNavigate()



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
        dispatch(startRegisterVeterinary( formState))
        navigate('/auth/login')
        
        onResetForm()

      } else {

        console.log(errorMessage);
        // manejo de error

      }
    


  }


  return (
    <section className="flex flex-col justify-center items-center h-screen relative">
      <Link
        to="/auth/login"
        className="text-primaryColor transition-all hover-register my-4"
      >
        <LogoVetTech width="70px" className="absolute top-[30px] left-8" />
      </Link>
        <div className="mb-2 mt-16">
            <h3 className="font-alata text-2xl 
            text-center antialiased font-medium text-titleColor w-[280px]">Registrate y comienza tu consultorio virtual</h3>
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
                value={name}
                onChange={onInputChange} 
                isInvalid={validateName(name)}
                color={validateName(name) ? "danger" : "primary"}
                errorMessage='El nombre debe tener mas de 4 letras'

            />
            <CustomInput
                isRequired
                variant="underlined"
                size="sm"
                type="email"
                name="email"
                label="Email: "
                value={email}
                onChange={onInputChange}
                isInvalid={validateEmail(email)} 
                color={validateEmail(email) ? "danger" : "primary"}
                errorMessage='Debe ser un email valido'

            />
            <CustomInput
                isRequired
                variant="underlined"
                size="sm"
                type="text"
                name="address"
                label="Dirección: "
                color="primary"
                value={address}
                onChange={onInputChange} 

            />
            {/* <div className="flex space-x-4">

              <CustomInput
                isRequired
                variant="underlined"
                size="sm"
                type="tel"
                name="telephone_number"
                label="Teléfono: "
                value={telephone_number}
                onChange={onInputChange}
                isInvalid={validatePhone(telephone_number)} 
                color={validatePhone(telephone_number) ? "danger" : "primary"}
                errorMessage='El telefono debe tener mas de 8 numeros' 

              />
              <CustomInput
                variant="underlined"
                size="sm"
                type="text"
                name="zip_code"
                color="primary"
                label="Código postal: "
                value={zip_code}
                onChange={onInputChange} 

              />
            </div> */}

            <CustomInput
                isRequired
                variant="underlined"
                size="sm"
                type="password"
                name="password"
                label="Contraseña: "
                value={password}
                onChange={onInputChange}
                errorMessage='La contraseña debe tener al menos 8 caracteres, al menos un caracter especial, una mayuscula y un numero' 
                color={validatePassword(password) ? "danger" : "primary"}
                isInvalid={validatePassword(password)}

            />
            <CustomInput
                isRequired
                variant="underlined"
                size="sm"
                type="password"
                name="password2"
                label="Repetir Contraseña: "
                value={password2}
                onChange={onInputChange}
                color="primary"

            />

            <Select
            isRequired
            label="Selecciona tu país"
            size="sm"
            variant="underlined"
            name="country_residence"
            color="primary"
            value={iso3}
            startContent={<img src={country_flag} className="w-6 h-4" alt={country_residence} />}
            onChange={onCountryChange}
            className="max-w-xs border-secondaryColor border-b-1 mb-6"
            classNames={{
              label: "text-[14px] font-semibold text-blackText",
              input: "placeholder:text-[12px] w-6 h-4",
              listbox: "bg-baseColor font-manrope shadow-2xl",
              popoverContent: "p-0 border-1 border-gray-400"
            }}
            >
            {CountriesList.map(country => (
              <SelectItem key={country.iso3} startContent={<img src={country.flag} className="w-6 h-4" alt={country.iso3} />}>
                {country.name}
              </SelectItem>
            ))}
            </Select>
            <div className="my-2">
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
