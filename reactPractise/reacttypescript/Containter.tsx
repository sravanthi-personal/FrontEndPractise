import React from 'react'

type ContainterProps = {
    styles : React.CSSProperties
}

export const Containter = (props: ContainterProps) => {
  return (
    <div style={props.styles}>Containter</div>
  )
}
