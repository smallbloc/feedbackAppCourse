import PropTypes from 'prop-types'

function Button({ children, version, type, isDisabled, click }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`} click={click}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false,
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
    click: PropTypes.func,
}

export default Button
