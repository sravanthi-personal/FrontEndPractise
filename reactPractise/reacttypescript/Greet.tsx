import React from 'react'

type GreetProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    const { messageCount = 0} = props
  return (
      <h2>
          {
              props.isLoggedIn ? <div>Hello {props.name}.You have {messageCount} unread messages</div>: 'Welcome Guest'
          }
      </h2>
  )
}
