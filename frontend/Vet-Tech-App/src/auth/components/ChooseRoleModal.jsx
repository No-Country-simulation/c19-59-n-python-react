import  PropTypes  from "prop-types";
import { Modal,  ModalContent,  ModalHeader, ModalBody, ModalFooter} from "@nextui-org/modal";
import { Link } from "react-router-dom";
import { LogoVetTech, UserImage, VeterinaryUserImage } from "../../components";


export const ChooseRoleModal = ({ isOpen, onClose}) => {


  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      size='md'
      scrollBehavior='outside'
      className="bg-baseColor border-2 "
      >
      <ModalContent className="px-3 py-2">
        <div>
            <ModalHeader className="font-alata text-2xl flex justify-center">Usuario / Veterinario</ModalHeader>
        </div>
        <ModalBody className="flex flex-col items-center">

            <div className=" flex items-center gap-2">
                <UserImage width="25px" height="25px"/>   
                <Link 
                    to="/auth/register/customer" 
                    className="text-primaryColor transition-all hover-register my-4"
                    onClick={onClose}
                    >
                        ¿Sos Usuario de Mascotas? Registrate aqui...
                </Link>
            </div>

            <div className=" flex items-center gap-2">
                <VeterinaryUserImage width='25px' height='25px'/>
                <Link 
                    to="/auth/register/veterinary" 
                    className="text-primaryColor transition-all hover-register my-4"
                    onClick={onClose}
                    >
                        ¿Sos Veterinario? Registrate aqui...
                </Link>

            </div>
          
        </ModalBody>
        <ModalFooter className="flex justify-center items-center">
            <LogoVetTech width='50px' height='50px'/>
            <h4 className="font-alata text-titleColor text-xl">Vet-Tech</h4>  
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}




ChooseRoleModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}



