import { HeaderTitle } from "../components/HeaderTitle"

import HelpImg from "../../assets/images/configVeterinary/ConfigHelp.svg";
import MoneyImg from "../../assets/images/configVeterinary/ConfigMoney.svg";
import PasswordImg from "../../assets/images/configVeterinary/ConfigPassword.svg";
import ShieldImg from "../../assets/images/configVeterinary/ConfigShield.svg";
import TelemedicineImg from "../../assets/images/configVeterinary/ConfigTelemedicine.svg";
import LanguageImg from "../../assets/images/configVeterinary/CongifLanguage.svg";
import LogoutImg from "../../assets/images/LogoutImg.svg"

import { ConfigOption } from "../components/ConfigOption";
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/slices/auth/thunks";
import { useNavigate } from "react-router-dom";


export const ConfigVeterinaryPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const onLogout = () => {

        dispatch( startLogout() )
        navigate('/auth/login')
    }


  return (
    <section className="max-w-sm flex flex-col h-screen justify-evenly">
        <HeaderTitle title={'Configuración'}/>
        <div className="px-10">
            <ConfigOption title={'Configuración datos de atención'} img={TelemedicineImg}/>
            <ConfigOption title={'Mis pagos'} img={MoneyImg}/>
            <ConfigOption title={'Idioma'} img={LanguageImg}/>
            <ConfigOption title={'Cambiar Contraseña'} img={PasswordImg}/>
            <ConfigOption title={'Politicas de privacidad'} img={ShieldImg}/>
            <ConfigOption title={'Ayuda y soporte'} img={HelpImg}/>
        </div>
        <button onClick={onLogout}>
            <div className=" flex gap-x-6 items-center px-10">
                <img src={LogoutImg} alt="logout" className="hover:scale-150"/>
                <p className="font-manrope text-[12px] font-semibold">Cerrar Sesión</p>
            </div>
        </button>
    </section>
  )
}
