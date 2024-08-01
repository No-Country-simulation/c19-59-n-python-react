import PropTypes from 'prop-types';

export const HomePageButton = ({type = 'button', onClick, disabled, children, imgPath, ...props}) => {


  return (
    <div className='relative'>
        <button
            disabled={disabled}
            type={type}
            onClick={onClick}
            {...props}
        >

            {children}

        </button>
        <img src={imgPath} alt={imgPath} className='absolute w-7 translate-x-[88px] -translate-y-8'/>
    </div>
  )
}


HomePageButton.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
  };
