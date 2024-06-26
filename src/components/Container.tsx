// import { Outlet } from 'react-router-dom'
type T = {
  classVars?: string
  background?: string
}
export default function Container({
  children,
  background = 'bg-teal-base-150 ',
  classVars = '',
}: TChild & T) {
  return (
    <div
      className={`container-custom relative mx-4 justify-evenly px-5 py-7 lg:px-20 lg:py-24 ${classVars} ${background}`}
    >
      {children}
    </div>
  )
}
