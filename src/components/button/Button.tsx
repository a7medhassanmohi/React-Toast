import  { ReactNode } from 'react'
import "./button.css"
type Props = {
  children:ReactNode
}

const Button = ({children}: Props) => {
  return (
    <button className='bg-red-500 p-15 text-green-400'>{children}</button>
  )
}

export default Button