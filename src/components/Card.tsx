import { useState } from 'react'
import Button from './Button'

type CardProps = {
  image: string
  title: string
  description: string
}

function Card({ image, title, description }: CardProps) {
  const [isAdded, setIsAdded] = useState(false)

  return (
    <article className="w-full max-w-xs overflow-hidden rounded-lg border border-stone-200 bg-white shadow-md">
      <img
        src={image}
        alt={`${title} coffee`}
        width={2574}
        height={3584}
        className="h-36 w-full object-cover object-center"
      />
      <div className="p-4">
        <p className="mb-1 text-xs font-semibold uppercase text-emerald-800">
          Small-batch roast
        </p>
        <h2 className="text-lg font-semibold text-stone-900">{title}</h2>
        <p className="mt-1 text-sm text-stone-600">{description}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="font-semibold text-stone-900">
            $18 <span className="text-xs font-normal text-stone-500">/ 250 g</span>
          </p>
          <Button
            onClick={() => setIsAdded(true)}
          >
            {isAdded ? 'Added to bag' : 'Add to bag'}
          </Button>
        </div>
      </div>
    </article>
  )
}

export default Card