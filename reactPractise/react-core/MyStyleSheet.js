import React from 'react'
import './MyStyles.css'

//apply multiple classes
function MyStyleSheet(props) {
  let className = props.primary ? 'primary' : ''
  return (
    <div className={`${className} font-xl`}>StyleSheet</div>
  )
}

export default MyStyleSheet