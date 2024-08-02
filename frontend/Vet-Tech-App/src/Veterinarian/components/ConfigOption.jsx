import ArrowImg from "../../assets/images/configVeterinary/ConfigArrow.svg";



export const ConfigOption = ({title,img}) => {
  return (
    <div className="flex font-manrope text-[12px] items-center justify-between mb-4">
        <div className="flex items-center gap-x-3">
            <img src={img} alt={title} className="w-[35px]" />
            <p>{title}</p>
        </div>
        <button>
            <img src={ArrowImg} alt="arrow" className="w-[17px]"/>
        </button>
    </div>
  )
}
