import { Avatar } from "@nextui-org/avatar";
import { LogoVetTech } from "../../components"
import VeterinaryImg from "../../assets/images/veterinary.avif"
import { useUserData } from "../../hooks/useUserData";
import { useSelector } from "react-redux";


export const HeaderVeterinary = () => {

    const { token } = useSelector( state => state.auth )
    const { userData } = useUserData( token )

  return (
    <div className="flex flex-row justify-between px-8 items-center">
      <div className="flex gap-x-3">
        <Avatar isBordered color="primary" src={VeterinaryImg} className="w-[45px] h-[45px] object-cover"/>
        <div className="font-alata text-titleColor font-normal tracking-wider">
          <h3 className="-mb-1 text-[20px]">{userData?.name}</h3>
          <h4 className="text-[15px]">Veterinario</h4>
        </div>
      </div>
      <div>
        <LogoVetTech width={'50px'}/>
      </div>
  </div>
  )
}
