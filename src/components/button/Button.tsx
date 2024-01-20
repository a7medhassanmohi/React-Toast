import  { ReactNode } from 'react'
import "./button.css"
type Props = {
  children:ReactNode
}

const Button = ({children}: Props) => {
  return (
    <button className='btn p-10 border-none outline-none bg-blue-400 rounded-lg'>{children}</button>
  )
}

export default Button