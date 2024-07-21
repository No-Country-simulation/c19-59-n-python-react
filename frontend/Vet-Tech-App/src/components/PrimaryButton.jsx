import PropTypes from 'prop-types';

export const PrimaryButton = ({type = 'button', onClick, disabled, children, ...props}) => {


  return (
    <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        {...props}
        className='transition-all bg-secondaryColor text-center text-whiteText text-[12px] w-40 p-3 rounded-[30px] font-manrope'
    >

        {children}

    </button>
  )
}


PrimaryButton.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
  };

