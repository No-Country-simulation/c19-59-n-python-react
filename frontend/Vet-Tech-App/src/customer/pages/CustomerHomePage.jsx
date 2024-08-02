import { Image } from "@nextui-org/react"
import gatito from "../../assets/images/gatitos.jpg"
import { LogoVetTech } from "../../components/LogoVetTech"
import { HomePageButton } from "../components/HomePageButton"
import MedicalImg from "../../assets/images/medical-img.svg"
import AmbulanceImg from "../../assets/images/ambulance.svg"
import DocumentImg from "../../assets/images/document-medicine.svg"
import VitalImg from "../../assets/images/Vital.svg"
import DogImg from "../../assets/images/perrito.avif"
import VetFarmImg from "../../assets/images/Farmavet.avif"
import VeterinariesImg from "../../assets/images/Veterinarios.avif"






export const CustomerHomePage = () => {
  return (
    <>
          <div className=" font-alata text-titleColor text-xl font-semibold">
            <div className="flex justify-start gap-x-2">
              <LogoVetTech width={'50px'}/>
              <h2 className="">Vet-Tech</h2>
            </div>
          </div>
      <section className="flex flex-col items-center">
        <div>
          <Image
            isBlurred
            src={gatito}
            alt="gatito"
            className="mt-6 w-[300px] h-[140px] object-cover shadow-xl"
          />
        </div>
        <div className="flex flex-wrap w-64 gap-x-2 gap-y-3 justify-center mt-6 relative">
          <HomePageButton 
            disabled={true} 
            onClick={'#'} 
            className='w-[124px] h-[87px] bg-menuColor-3 rounded-xl font-manrope text-[11px] text-left pl-3 opacity-70 relative'
            imgPath={MedicalImg}
            >
              Consultas Veterinarias
          </HomePageButton>

          <HomePageButton 
            disabled={true} 
            onClick={'#'} 
            className='w-[124px] h-[87px] bg-menuColor-4 rounded-xl font-manrope text-[11px] text-left pl-3 opacity-70 relative'
            imgPath={AmbulanceImg}
            >
              Urgencias Previas 
          </HomePageButton>
          <HomePageButton 
            disabled={true} 
            onClick={'#'} 
            className='w-[124px] h-[87px] bg-menuColor-2 rounded-xl font-manrope text-[11px] text-left pl-3 opacity-70 relative'
            imgPath={DocumentImg}
            >
              Emfermedades Comunes 
          </HomePageButton>
          <HomePageButton 
            disabled={true} 
            onClick={'#'} 
            className='w-[124px] h-[87px] bg-menuColor-1 rounded-xl font-manrope text-[11px] text-left pl-3 opacity-70 relative'
            imgPath={VitalImg}
            >
              Constantes Fisiologicas 
          </HomePageButton>
        </div>

        <div className="flex gap-x-4 text-center font-manrope text-[13px] font-semibold my-7 z-10">
          <div className="w-[80px] flex flex-col justify-between">
            <h3 className="mb-1">Farmapet</h3>
            <img src={VetFarmImg} alt="Farmacia" className="rounded-full w-[80px] h-[80px] object-cover opacity-60"/>
          </div>
          <div className="w-[80px] flex flex-col justify-center">
            <h3 className="mb-1">Veterinarios en la zona</h3>
            <img src={VeterinariesImg} alt="Veterinarios" className="rounded-full w-[80px] h-[80px] object-cover opacity-60"/>
          </div>
          <div className="w-[80px] flex flex-col justify-between">
            <h3 className="mb-1">Adoptame</h3>
            <img src={DogImg} alt="Perrito" className="rounded-full w-[80px] h-[80px] object-cover opacity-60"/>
          </div>
        </div>

      </section>
    </>
    
  )
}
