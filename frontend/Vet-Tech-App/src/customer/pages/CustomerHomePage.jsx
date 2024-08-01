import { Image } from "@nextui-org/react"
import gatito from "../../assets/images/gatitos.jpg"
import { LogoVetTech } from "../../components/LogoVetTech"
import { HomePageButton } from "../components/HomePageButton"


export const CustomerHomePage = () => {
  return (
    <section className="flex flex-col items-center">
        <div className=" flex gap-x-6 font-alata text-titleColor text-xl font-semibold">
          <LogoVetTech width={'50px'}/>
          <h2 className="">Vet-Tech</h2>
        </div>
      <div>
        <Image
          isBlurred
          src={gatito}
          alt="gatito"
          className="mt-8 w-[300px] h-[140px] object-cover shadow-xl"
        />
      </div>
      <div className="flex flex-wrap w-64 gap-x-2 gap-y-3 justify-center mt-10">
        <HomePageButton disabled={true} className='w-[124px] h-[87px] bg-red-300 rounded-xl font-manrope text-[12px] text-left pl-3 pb-6 opacity-85'>Consultas Veterinarias</HomePageButton>
        <HomePageButton disabled={true} className='w-[124px] h-[87px] bg-red-300 rounded-xl font-manrope text-[12px] text-left pl-3 pb-6 opacity-85'>Urgencias Previas </HomePageButton>
        <HomePageButton disabled={true} className='w-[124px] h-[87px] bg-red-300 rounded-xl font-manrope text-[12px] text-left pl-3 pb-6 opacity-85'>Emfermedades Comunes </HomePageButton>
        <HomePageButton disabled={true} className='w-[124px] h-[87px] bg-red-300 rounded-xl font-manrope text-[12px] text-left pl-3 pb-6 opacity-85'>Constantes Fisiologicas </HomePageButton>
      </div>
    </section>
  )
}
