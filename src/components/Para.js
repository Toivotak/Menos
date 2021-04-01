import PropTypes from 'prop-types'

const Para = ({text}) => {
    return <p>
        {text}
    </p>
}

Para.defaultProps = {
    text: "Missing"
}

Para.propTypes = {
    text: PropTypes.string.isRequired
}

export default Para;