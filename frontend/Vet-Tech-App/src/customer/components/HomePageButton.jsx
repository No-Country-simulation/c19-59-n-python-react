import PropTypes from 'prop-types';

export const HomePageButton = ({type = 'button', onClick, disabled, children, ...props}) => {


  return (
    <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        {...props}
    >

        {children}

    </button>
  )
}


HomePageButton.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
  };
