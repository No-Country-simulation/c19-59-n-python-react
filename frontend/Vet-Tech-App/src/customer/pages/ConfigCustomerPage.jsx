
import HelpImg from "../../assets/images/configVeterinary/ConfigHelp.svg";
import MoneyImg from "../../assets/images/configVeterinary/ConfigMoney.svg";
import PasswordImg from "../../assets/images/configVeterinary/ConfigPassword.svg";
import ShieldImg from "../../assets/images/configVeterinary/ConfigShield.svg";
import HistorialImg from "../../assets/images/configVeterinary/historial.svg";
import LanguageImg from "../../assets/images/configVeterinary/CongifLanguage.svg";
import LogoutImg from "../../assets/images/LogoutImg.svg"

import { useDispatch } from "react-redux";
import { startLogout } from "../../store/slices/auth/thunks";
import { useNavigate } from "react-router-dom";
import { HeaderTitle } from "../../Veterinarian/components/HeaderTitle";
import { ConfigOption } from "../../Veterinarian/components/ConfigOption";

export const ConfigCustomerPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const onLogout = () => {

        dispatch( startLogout() )
        navigate('/auth/login')
    }


  return (
    <section className="max-w-sm flex flex-col h-screen justify-evenly">
        <HeaderTitle title={'Configuración'}/>
        <div className="px-10 flex flex-col justify-start">
            <ConfigOption title={'Historial de consultas'} img={HistorialImg}/>
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
