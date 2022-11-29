import React from 'react'
import PropTypes from 'prop-types'
// TODO: Add hint default markup and styles
// import Hint from './hint'

Label.propTypes = {
  label: PropTypes.string,
  hint: PropTypes.string,
  children: PropTypes.node
}

export default function Label({ hint, label, children, className }) {

  return (
    <label className={`${className}`}>
      <span>{label}</span>
      {children}
    </label>
  )
}
