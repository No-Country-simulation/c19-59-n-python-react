import { ConfigOption } from "../components/ConfigOption"
import { HeaderTitle } from "../components/HeaderTitle"
import { Avatar } from "@nextui-org/react"

import BellImg from "../../assets/images/profileVeterinary/bell.svg"
import CalendarImg from "../../assets/images/profileVeterinary/calendar.svg"
import DeleteImg from "../../assets/images/profileVeterinary/delete.svg"
import FeatureImg from "../../assets/images/profileVeterinary/feature.svg"
import WalletImg from "../../assets/images/profileVeterinary/wallet.svg"
import CameraImg from "../../assets/images/profileVeterinary/camera.svg"

import VeterinaryImg from "../../assets/images/veterinary.avif"
import { useSelector } from "react-redux"
import { useUserData } from "../../hooks/useUserData"


export const ProfileVeterinaryPage = () => {

    const { token } = useSelector( state => state.auth )
    const { userData } = useUserData( token )


  return (
    <section className="max-w-sm flex flex-col h-screen gap-y-12">
        <div className="mt-12">   
            <HeaderTitle title={'Editar Perfil'}/>
        </div>
        <div className="flex flex-col items-center justify-center relative">
            <Avatar src={VeterinaryImg} className="w-[105px] h-[105px] object-cover"/>
            <p className="text-[12px] mt-3 font-manrope font-semibold">{userData?.name}</p>  
            <img src={CameraImg} alt="camera" className="absolute translate-x-10 translate-y-8 border-2 border-primary rounded-full p-1"/>
        </div>
        <div className="px-10">
            <ConfigOption title={'Modificar Datos'} img={WalletImg}/>
            <ConfigOption title={'Mi agenda'} img={CalendarImg}/>
            <ConfigOption title={'Notificaciones y seguimiento'} img={BellImg}/>
            <ConfigOption title={'Tipos de citas'} img={FeatureImg}/>
            <ConfigOption title={'Eliminar cuenta'} img={DeleteImg}/>
        </div>
</section>
  )
}
