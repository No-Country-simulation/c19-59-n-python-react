import { Divider } from "@nextui-org/react"
import CameraImg from "../../assets/images/Vector.png"


export const QueryListItem = (query) => {
  return (
    <div key={query.id} className="flex mb-2">
        <div className="text-[12px] font-manrope font-semibold w-12 text-center rounded-md bg-primary bg-opacity-40 mr-2">
            {query.queryTime}
        </div>
        <div className="flex justify-between w-full rounded-md bg-menuColor-3 bg-opacity-30 px-2">
            <div className="text-[11px] font-manrope flex space-x-1">
                <p>{query.petName}</p>
                <Divider orientation="vertical"/>
                <p className="font-semibold">{query.pet}</p>
            </div>
            <button className="text-[11px] font-manrope flex items-center gap-x-1">
                <p>Ingresar</p>
                <img src={CameraImg} alt="Camera"/>
            </button>
        </div>
    </div>
  )
}
