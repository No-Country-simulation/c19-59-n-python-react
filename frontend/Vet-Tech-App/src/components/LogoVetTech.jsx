import  PropTypes  from "prop-types";

export const LogoVetTech = ({width, height, ...props}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 134 84" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M55.9338 72.6225L48.2848 65.3212H62.8874L55.9338 72.6225Z" fill="#FF9EAA" stroke="#FF9EAA"/>
      <path d="M48.2121 54L39 65H71L62.7576 54H48.2121Z" fill="#C12BF5" stroke="#C12BF5" strokeLinejoin="round"/>
      <path d="M22.904 64.6258L40.2881 1L1 32.2914L22.904 64.6258Z" fill="#C12BF5" stroke="#C12BF5" strokeLinejoin="round"/>
      <path d="M83.2566 65L66 1L105 32.4754L83.2566 65Z" fill="#C12BF5" stroke="#C12BF5" strokeLinejoin="round"/>
      <path d="M66.0162 1H40.6354L26 54L38.5493 64.9735L47.5891 53.5H62.8871L71.5791 64.9735L81.3142 55.2384L66.0162 1Z" fill="#EDB9FF" stroke="#EDB9FF"/>
      <path d="M63 54L55.9191 62L48 54H63Z" fill="#1B1A1A" stroke="#131313" strokeMiterlimit="16" strokeLinejoin="round"/>
      <path d="M87.8989 40.5772L72.3202 34L76.6292 46.1678L70 69.5168L101 83L129 69.5168L124.028 46.1678L129 34L112.758 40.5772H87.8989Z" fill="#FFDA7A" stroke="#FFDA7A"/>
      <path d="M66 69L101.471 74L133 69" stroke="#C99737" strokeLinecap="round"/>
      <path d="M105.063 76.1775L101 83.0004L97.0663 75.9636L100.934 74.4758L105.063 76.1775Z" fill="#FF9EAA" stroke="#FF9EAA" strokeLinejoin="round"/>
      <path d="M101 73.5L88 40H99.7447H112L101 73.5Z" fill="white" stroke="#C99737" strokeLinejoin="round"/>
  </svg>
  )
}



LogoVetTech.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
}
