import { LogoVetTech } from "../../components"
import { PrimaryButton } from "../../components"
import { CustomInput } from "../../auth/components/CustomInput"

export const PreConsultation = () => {
    
    return (
        <div className="max-w-72 m-auto pt-3 pb-5">
            <div className="flex items-center">
                <LogoVetTech className="w-[60px] h-[60px]" />
                <h2 className="font-alata text-[22px] pl-2 antialiased font-bold text-titleColor">Sintomas consulta</h2>
            </div>
            <div className="my-2">
                <CustomInput
                    variant="underlined"
                    size="sm"
                    type="text"
                    name="text"
                    placeholder=""
                    color="primary"
                    label="Motivo de la Consulta"
                />
            </div>
            <div className="flex flex-row items-center justify-between my-2">
                <h3 className="pr-2 font-alata text-[14px]  text-blackText">¿Presenta algún sintoma?</h3>
                <div className="flex ">
                    <div className="flex items-center mr-2">
                        <label htmlFor="" className="mr-1">Si</label>
                        <button className="border-3 border-primary bg-fuchsia-300 p-[6px] rounded-3xl"></button>
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="" className="mr-1">No</label>
                        <button className="border-3 border-primary bg-fuchsia-300 p-[6px] rounded-3xl"></button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between my-3 ">
                <div className="flex flex-col ">
                    <div className="flex flex-row my-2 justify-between">
                        <label htmlFor="" className="text-[11px]">Vomito</label>
                        <button className="border-3 border-primary bg-fuchsia-300 p-[6px] rounded-3xl"></button>
                    </div>
                    <div className="flex flex-row my-2 justify-between">
                        <label htmlFor="" className="text-[11px]">Letargo</label>
                        <button className="border-3 border-primary bg-fuchsia-300 p-[6px] rounded-3xl"></button>
                    </div>
                    <div className="flex flex-row my-2 justify-between">
                        <label htmlFor="" className="text-[11px]">Fiebre</label>
                        <button className="border-3 border-primary bg-fuchsia-300 p-[6px] rounded-3xl"></button>
                    </div>
                    <div className="flex flex-row my-2 justify-between">
                        <label htmlFor="" className="text-[11px]">Diarrea</label>
                        <button className="border-3 border-primary bg-fuchsia-300 p-[6px] rounded-3xl"></button>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row my-2 justify-between">
                        <label htmlFor="" className="text-[11px]">Dificultad para caminar</label>
                        <button className="border-3 border-primary bg-fuchsia-300 p-[6px] rounded-3xl"></button>
                    </div>
                    <div className="flex flex-row my-2 justify-between">
                        <label htmlFor="" className="text-[11px]">Dificultad para defecar</label>
                        <button className="border-3 border-primary bg-fuchsia-300 p-[6px] rounded-3xl"></button>
                    </div>
                    <div className="flex flex-row my-2 justify-between">
                        <label htmlFor="" className="text-[11px]">Dificultad para respirar</label>
                        <button className="border-3 border-primary bg-fuchsia-300 p-[6px] rounded-3xl"></button>
                    </div>
                    <div className="flex flex-row my-2 justify-between">
                        <label htmlFor="" className="text-[11px]">Dificultad para orinar</label>
                        <button className="border-3 border-primary bg-fuchsia-300 p-[6px] rounded-3xl"></button>
                    </div>
                </div>
                <div className="flex flex-col ">
                    <div className="flex flex-row my-2 justify-between">
                        <label htmlFor="" className="text-[11px]">Convulsiones</label>
                        <button className="border-3 border-primary bg-fuchsia-300 p-[6px] rounded-3xl"></button>
                    </div>
                    <div className="flex flex-row my-2 justify-between">
                        <label htmlFor="" className="text-[11px]">Jadeo excesivo</label>
                        <button className="border-3 border-primary bg-fuchsia-300 p-[6px] rounded-3xl"></button>
                    </div>
                    <div className="flex flex-row my-2 justify-between">
                        <label htmlFor="" className="text-[11px]">Falta de apetito</label>
                        <button className="border-3 border-primary bg-fuchsia-300 p-[6px] rounded-3xl"></button>
                    </div>
                    <div className="flex flex-row my-2 justify-between">
                        <label htmlFor="" className="text-[11px]">Sangrado</label>
                        <button className="border-3 border-primary bg-fuchsia-300 p-[6px] rounded-3xl"></button>
                    </div>
                </div>
                {/* 
                <div className="flex flex-col items-center">
                    <label htmlFor="" className="text-[11px]">Convulsiones</label>
                    <button className="border-3 border-primary bg-fuchsia-300 p-[6px] rounded-3xl"></button>
                    <label htmlFor="" className="text-[11px]">Jadeo excesivo</label>
                    <button className="border-3 border-primary bg-fuchsia-300 p-[6px] rounded-3xl"></button>
                    <label htmlFor="" className="text-[11px]">Falta de apetito</label>
                    <button className="border-3 border-primary bg-fuchsia-300 p-[6px] rounded-3xl"></button>
                    <label htmlFor="" className="text-[11px]">Sangrado</label>
                    <button className="border-3 border-primary bg-fuchsia-300 p-[6px] rounded-3xl"></button>
                </div> */}
            </div>
            <div className="my-8">
                <CustomInput
                    variant="underlined"
                    size="sm"
                    type="text"
                    name="text"
                    placeholder=""
                    color="primary"
                    label="¿Otro?"
                /* value={password}
                onChange={onInputChange} */
                />
            </div>
            <div className="mb-5">
                <CustomInput
                    variant="underlined"
                    size="sm"
                    type="text"
                    name="text"
                    placeholder=""
                    color="primary"
                    label="Frecuencia:"
                />
            </div>
            <div className="flex flex-row items-center mb-3 justify-between">
                <h3 className="pr-2 font-alata text-[14px]  text-blackText">Enfermedades preexistentes</h3>
                <div className="flex ">
                    <div className="flex items-center mr-2">
                        <label htmlFor="" className="mr-1">Si</label>
                        <button className="border-3 border-primary bg-fuchsia-300 p-[6px] rounded-3xl"></button>
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="" className="mr-1">No</label>
                        <button className="border-3 border-primary bg-fuchsia-300 p-[6px] rounded-3xl"></button>
                    </div>
                </div>
            </div>
            <div>
                <CustomInput
                    variant="underlined"
                    size="sm"
                    type="text"
                    name="text"
                    placeholder=""
                    color="primary"
                    label="¿Cual?"
                /* value={password}
                onChange={onInputChange} */
                />
            </div>
            <div className="flex my-4 flex-row items-center justify-between">
                <h3 className="pr-2 font-alata text-[14px]  text-blackText">¿Actualmente en tratamiento?</h3>
                <div className="flex ">
                    <div className="flex items-center mr-2">
                        <label htmlFor="" className="mr-1">Si</label>
                        <button className="border-3 border-primary bg-fuchsia-300 p-[6px] rounded-3xl"></button>
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="" className="mr-1">No</label>
                        <button className="border-3 border-primary bg-fuchsia-300 p-[6px] rounded-3xl"></button>
                    </div>
                </div>
            </div>
            <div className="flex mb-4 flex-row items-center justify-between">
                <h3 className="pr-2 font-alata text-[14px]  text-blackText">¿Toma medicamentos?</h3>
                <div className="flex ">
                    <div className="flex items-center mr-2">
                        <label htmlFor="" className="mr-1">Si</label>
                        <button className="border-3 border-primary bg-fuchsia-300 p-[6px] rounded-3xl"></button>
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="" className="mr-1">No</label>
                        <button className="border-3 border-primary bg-fuchsia-300 p-[6px] rounded-3xl"></button>
                    </div>
                </div>
            </div>
            <div className="mb-20">
                <CustomInput
                    variant="underlined"
                    size="sm"
                    type="text"
                    name="text"
                    placeholder=""
                    color="primary"
                    label="¿Cual?"
                />
            </div>
            <div className="flex pb-10 justify-center">
                <PrimaryButton type="submit">Agendar</PrimaryButton>
            </div>
        </div>
    )
}
