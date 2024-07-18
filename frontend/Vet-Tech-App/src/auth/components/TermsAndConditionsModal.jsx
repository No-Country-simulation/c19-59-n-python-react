import  PropTypes  from "prop-types";
import { Modal,  ModalContent,  ModalHeader, ModalBody, ModalFooter} from "@nextui-org/modal";
import { termsCond } from "../../constants/constants";
import { PrimaryButton } from "../../components/PrimaryButton";
import { LogoVetTech } from "../../components/LogoVetTech";

export const TermsAndConditionsModal = ({ isOpen, onClose}) => {

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      size='md'
      scrollBehavior='outside'
      >
      <ModalContent>
        <ModalHeader className="font-alata text-2xl">Términos y condiciones</ModalHeader>
        <ModalBody>
          {
            termsCond.map(({title, text}) => (
              <div key={title}>
                <h3 className="font-manrope font-bold text-md mb-1">{title}</h3>
                <p className="font-manrope font-normal text-sm">{text}</p>
              </div>
            ))
          }
        </ModalBody>
        <ModalFooter className="flex justify-between">
          <LogoVetTech width='50px' height='50px'/>
          <PrimaryButton type="button" onClick={onClose}>Cerrar</PrimaryButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}




TermsAndConditionsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}