import { Input } from "@nextui-org/input"
import  PropTypes  from "prop-types";


export const CustomInput = ({ 
    variant, 
    type,
    name,
    placeholder,
    label,
    value,
    onChange,
    ...props
}) => {
  return (
    
    <Input

        autoComplete="off" 
        variant={variant}
        type={type}
        name={name}
        placeholder={placeholder}
        label={label}
        labelPlacement="outside"
        value={value}
        onChange={onChange}
        radius="sm"
        classNames={{
          label:"text-[12px] font-semibold text-blackText",
          input:"placeholder:text-[10px] text-blackText "
        }}
        className="mb-3"
        {...props}
        

    />
  ) 
}




CustomInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string.isRequired,

    
  };