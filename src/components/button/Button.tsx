import  { ReactNode } from 'react'
import "./button.css"
type Props = {
  children:ReactNode
}

const Button = ({children}: Props) => {
  return (
    <button className=' p-10 border-none outline-none bg-blue-400 rounded-lg btn'>{children}</button>
  )
}

export default Button