import React from 'react'
import PropTypes from 'prop-types'

function SuggestionList(props) {
    let{title,image}=props
  return (
    <div>
        <img src={image}/>{title}
    </div>
  )
}

SuggestionList.propTypes = {}

export default SuggestionList
