import React from 'react'
import PropTypes from 'prop-types'

function Input(props) {
    let { onChange, ...rest } = props
    return (
        <input type="text" onChange={e => onChange(e.target.value)} {...rest} />
    )
}

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
}

export default Input
