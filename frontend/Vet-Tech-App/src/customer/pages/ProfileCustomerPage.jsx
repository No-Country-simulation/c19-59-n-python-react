
import { ConfigOption } from "../../Veterinarian/components/ConfigOption"
import { HeaderTitle } from "../../Veterinarian/components/HeaderTitle"
import { Avatar } from "@nextui-org/react"

import BellImg from "../../assets/images/profileVeterinary/bell.svg"
import MedicalMaletinImg from "../../assets/images/profileVeterinary/maletin-medical.svg"
import DeleteImg from "../../assets/images/profileVeterinary/delete.svg"
import HeartImg from "../../assets/images/profileVeterinary/heart.svg"
import WalletImg from "../../assets/images/profileVeterinary/wallet.svg"
import CameraImg from "../../assets/images/profileVeterinary/camera.svg"
import FiruDog from "../../assets/images/profileVeterinary/Firudog.png"

import VeterinaryImg from "../../assets/images/veterinary.avif"
import { useSelector } from "react-redux"
import { useUserData } from "../../hooks/useUserData"

export const ProfileCustomerPage = () => {

    const { token } = useSelector( state => state.auth )
    const { userData } = useUserData( token )


  return (
    <section className="max-w-sm flex flex-col h-screen gap-y-6">
        <div className="mt-12">   
            <HeaderTitle title={'Editar Perfil'}/>
        </div>
        <div className="flex flex-col items-center justify-center relative">
            <Avatar src={VeterinaryImg} className="w-[105px] h-[105px] object-cover"/>
            <p className="text-[12px] mt-3 font-manrope font-semibold">{userData?.name}</p>  
            <img src={CameraImg} alt="camera" className="absolute translate-x-10 translate-y-8 border-2 border-primary rounded-full p-1"/>
        </div>
        <div className="flex flex-col px-4">
            <h3 className="text-[12px] font-manrope font-semibold mb-1">Mascotas:</h3>
            <div className="flex gap-x-4 items-center justify-center">
                <div className="flex flex-col items-center">
                    <Avatar src={FiruDog} className="w-[44px]">Firu</Avatar>
                    <p className="text-[12px] mt-1 font-manrope">Firu</p>
                </div>
                <div className="w-[44px] h-[44px] aling- rounded-full bg-opacity-20 bg-menuColor-2 flex justify-center items-center font-manrope font-semibold text-menuColor-2">+</div>
                <div className="w-[44px] h-[44px] aling- rounded-full bg-opacity-20 bg-menuColor-2 flex justify-center items-center font-manrope font-semibold text-menuColor-2">+</div>
                <div className="w-[44px] h-[44px] aling- rounded-full bg-opacity-20 bg-menuColor-2 flex justify-center items-center font-manrope font-semibold text-menuColor-2">+</div>
                <div className="w-[44px] h-[44px] aling- rounded-full bg-opacity-20 bg-menuColor-2 flex justify-center items-center font-manrope font-semibold text-menuColor-2">+</div>
            </div>
        </div>
        <div className="px-10">
            <ConfigOption title={'Modificar Datos'} img={WalletImg}/>
            <ConfigOption title={'Consultas programadas'} img={MedicalMaletinImg}/>
            <ConfigOption title={'Notificaciones y seguimiento'} img={BellImg}/>
            <ConfigOption title={'Favoritos'} img={HeartImg}/>
            <ConfigOption title={'Eliminar cuenta'} img={DeleteImg}/>
        </div>
</section>
  )
    
}
