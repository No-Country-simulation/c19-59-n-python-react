import PropTypes from 'prop-types';

export const PrimaryButton = ({type = 'button', onClick, children, ...props}) => {


  return (
    <button
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
    children: PropTypes.node.isRequired,
  };

