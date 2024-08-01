import { HeaderVeterinary } from "../components/HeaderVeterinary"
import { Clock } from "../../components/Clock";
import { QueryList } from "../components/QueryList";
import { PrimaryButton } from "../../components";
import DogImg from "../../assets/images/perrito.avif"
import VetFarmImg from "../../assets/images/Farmavet.avif"



export const VeterinaryHomePage = () => {


  return (
    <section className="flex flex-col h-screen  pt-8">
      <div className="">
        <HeaderVeterinary />
        <div className="flex flex-col my-6 font-manrope font-semibold">
          <Clock />
        </div>
      </div>
      <QueryList />
      <div className="flex flex-col items-center w-48 text-center my-6 mx-auto">
        <h5 className="text-[12px] font-manrope mb-4 font-semibold text-center">No hay más consultas programadas para el día de hoy</h5>
        <PrimaryButton>
          Consultar Agenda
        </PrimaryButton>
      </div>
      <div className="flex justify-center gap-x-20 text-center font-manrope text-[13px] font-semibold my-7 z-10">
          <div className="w-[80px] flex flex-col justify-between">
            <h3 className="mb-1">Registrar Adopción</h3>
            <img src={DogImg} alt="Perrito" className="rounded-full w-[80px] h-[80px] object-cover opacity-60"/>
          </div>
          <div className="w-[80px] flex flex-col justify-between">
            <h3 className="mb-1">Registros Farmapet</h3>
            <img src={VetFarmImg} alt="Farmacia" className="rounded-full w-[80px] h-[80px] object-cover opacity-60"/>
          </div>
        </div>



    </section>
  )
}
