import { LogoVetTech } from "../../components"
import { PrimaryButton } from "../../components"
import { Select, SelectItem } from "@nextui-org/select";
import ColombiaFlag from '../../assets/images/Flag_of_Colombia.svg.png'
import ArgentinaFlag from '../../assets/images/Flag_of_Argentina.svg.webp'
import PetsHuellas from '../../assets/images/patitas-pet.svg'
import PetsFirst from '../../assets/images/map_pet-store.svg'
import Arrow from '../../assets/images/Vector.svg'
import ArrowLeght from '../../assets/images/arrow-leght.svg'
import PetsPerfil from '../../assets/images/perfil-pets.jpg'
import Calendar from "../../components/Calendar";

export const UserSchedules = () => {
    const listSchedules = [
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
    ]
    return (
        <div className="max-w-72 m-auto pt-3 pb-5 " >
            <div className="flex items-center">
                <LogoVetTech className="w-[60px] h-[60px]" />
                <h2 className="font-alata text-[25px] pl-2 antialiased font-bold text-titleColor">Vet-Tech</h2>
            </div>
            <div className="flex items-center justify-between">
                <img src={PetsFirst} className="w-[25px]" alt="huella" />
                <h3 className="text-blackText text-[13px] font-semibold">Mascota para consulta:</h3>
                <div className="flex ">
                    <img
                        src={ArrowLeght}
                        className="w-[8px] m-1"
                        alt="arrow-leght" />
                    <div className="flex flex-col items-center">
                        <img
                            src={PetsPerfil}
                            alt="perfil-pets"
                            className="w-[40px] h-[40px] object-cover rounded-[50%]"
                        />
                        <h3 className="text-blackText font-semibold">Firu</h3>
                    </div>
                    <img
                        src={Arrow}
                        className="w-[8px] m-1"
                        alt="arrow-leght" />
                </div>
            </div>
            <h3 className="font-semibold text-blackText text-[14px] pb-4">Profesionales disponibles:</h3>
            <div className=" my-1 relative  flex items-center py-1">
                <img
                    src="https://www.shutterstock.com/image-photo/headshot-portrait-smiling-young-caucasian-600nw-1930974266.jpg"
                    className="w-[50px] h-[50px]  object-cover rounded-[50%]"
                    alt="perfil-user" />
                <div className=" flex flex-col h-[60px] justify-between ml-3">
                    <h3 className="font-alata text-[13px] font-semibold  text-blackText">Dra Camila Doe</h3>
                    <div className="flex items-center">
                        <img src={ColombiaFlag} className="w-[20px]" alt="" />
                        <h3 className="ml-2 font-alata text-[13px]  text-blackText">Colombia</h3>
                    </div>
                    <img src={PetsHuellas} alt="patitas" />
                </div>
                <button className="absolute right-0 border-3 border-primary bg-fuchsia-300 p-[8px] rounded-3xl"></button>
            </div>
            <div className=" my-1 relative  flex items-center py-1">
                <img
                    src="https://oscarorjedaloayzaoftalmologopediatra.com/wp-content/uploads/2017/02/doctor-victor.jpg"
                    className="w-[50px] h-[50px]  object-cover rounded-[50%]"
                    alt="perfil-user" />
                <div className=" flex flex-col h-[60px] justify-between ml-3">
                    <h3 className="font-alata text-[13px] font-semibold  text-blackText">Dr Juan Doe</h3>
                    <div className="flex items-center">
                        <img src={ArgentinaFlag} className="w-[20px]" alt="" />
                        <h3 className="ml-2 font-alata text-[13px]  text-blackText">Argentina</h3>
                    </div>
                    <img src={PetsHuellas} alt="patitas" />
                </div>
                <button className="absolute right-0 border-3 border-primary bg-fuchsia-300 p-[8px] rounded-3xl"></button>
            </div>
            <h4 className="pt-5 pb-2 text-blackText font-semibold text-[14px]">Fechas Disponibles</h4>
            <div className="my-3">
                <Calendar/>
            </div>
            <div className="py-2">
                <Select
                    isRequired
                    label="Horarios disponibles"
                    size="sm"
                    variant="underlined"
                    color="primary"
                    /*  value={pets}
                     onChange={onInputChange} */
                    className="border-secondaryColor border-b-1 mb-3"
                    classNames={{
                        label: "text-[14px] font-semibold text-blackText",
                        input: "placeholder:text-[12px]",
                        listbox: "bg-baseColor font-manrope shadow-2xl",
                        popoverContent: "p-0 border-1 border-gray-400"
                    }}
                >
                    {
                        listSchedules.map(time => (
                            <SelectItem key={time}>
                                {time}
                            </SelectItem>
                        ))
                    }
                </Select>
            </div>
            <div className="flex flex-row items-center">
                <h3 className="pr-2 font-alata text-[14px]  text-blackText">Crear recordatorio</h3>
                <button className="border-3 border-menuColor-3 bg-amber-100 p-[8px] rounded-3xl"></button>
            </div>
            <div className="py-2">
                <Select
                    isRequired
                    label="Establece recordatorio"
                    size="sm"
                    variant="underlined"
                    color="primary"
                    /*  value={pets}
                     onChange={onInputChange} */
                    className="border-secondaryColor border-b-1 mb-3"
                    classNames={{
                        label: "text-[14px] font-semibold text-blackText",
                        input: "placeholder:text-[12px]",
                        listbox: "bg-baseColor font-manrope shadow-2xl",
                        popoverContent: "p-0 border-1 border-gray-400"
                    }}
                >
                    {
                        listSchedules.map(time => (
                            <SelectItem key={time}>
                                {time}
                            </SelectItem>
                        ))
                    }
                </Select>
            </div>
            <div className="flex justify-center">
                <PrimaryButton type="submit">Continuar</PrimaryButton>
            </div>
        </div>
    )
}

