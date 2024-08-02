// import { Dropdown } from "@nextui-org/react"
import { LogoVetTech } from "../../components/LogoVetTech"
import { Dropdown } from "../Components/Dropdown"
import { ModalTriage } from "../Components/ModalTriage"




export const TriagePage = () => {
    return (
      <section className="flex flex-col items-center">
        <div className=" flex gap-x-6 font-alata text-titleColor text-xl font-semibold">
           <LogoVetTech width={'90px'}/>
           <h2 className="">Vet-Tech</h2>
        </div>
        <div>

        </div>
        <Dropdown/>



        <ModalTriage/>
      </section>
    )
  }


