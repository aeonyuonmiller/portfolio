import PropTypes from 'prop-types'

const Header = (prop) => {
    return (
        <div>
            <h5 style={headingStyle}>
                {prop.title}
            </h5>
            <p style={paraStyle}>{prop.text}</p>
        </div>
    )
}

Header.defaultProps = {
    title: 'Default Header',
}

Header.PropTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
const headingStyle = {
    color: 'green',
    fontSize: ' 50px',
}

const paraStyle = {
    color: 'green',
    fontSize: ' 20px',
}

export default Header
