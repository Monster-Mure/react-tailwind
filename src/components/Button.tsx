
import type { ReactNode } from 'react'

type ButtonProps = {
  onClick: () => void
  children: ReactNode
}

function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-md bg-emerald-800 px-3 py-2 text-sm font-medium text-white"
    >
      {children}
    </button>
  )
}

export default Button