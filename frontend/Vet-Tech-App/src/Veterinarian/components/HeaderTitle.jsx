import { LogoVetTech } from "../../components"


export const HeaderTitle = ({title}) => {
  return (
    <div className="px-4 flex justify-between">
        <h3 className="text-[20px] font-alata text-titleColor">{title}</h3>
        <LogoVetTech width={'47px'}/>
    </div>
  )
}
