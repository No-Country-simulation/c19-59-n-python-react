import { Image } from "@nextui-org/react"
import gatito from "../../assets/images/gatitos.jpg"
import { LogoVetTech } from "../../components/LogoVetTech"


export const CustomerHomePage = () => {
  return (
    <section>
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
      <div>
        
      </div>
    </section>
  )
}
