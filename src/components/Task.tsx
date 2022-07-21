import { Check, Trash } from 'phosphor-react'

type TaskProps = {
  title: string
  isComplete?: boolean
}

export function Task({ title, isComplete }: TaskProps) {
  return (
    <article className="flex justify-between items-start p-4 border border-[#333333] rounded-lg bg-[#262626]">
      <button
        type="button"
        className={
          isComplete
            ? 'flex justify-center items-center w-5 h-5 border-0 rounded-full bg-[#5E60CE] text-[#F2F2F2] cursor-pointer hover:opacity-95'
            : 'flex justify-center items-center w-5 h-5 border-2 border-[#4ea8de] rounded-full cursor-pointer hover:opacity-95'
        }
      >
        {isComplete && <Check size={12} />}
      </button>

      <p
        className={
          isComplete
            ? 'w-[90%] ml-3 text-sm text-[#F2F2F2] line-through'
            : 'w-[90%] ml-3 text-sm text-[#F2F2F2]'
        }
      >
        {title}
      </p>

      <button type="button" className="hover:opacity-95 text-white">
        <Trash
          className="text-[#808080] hover:text-[#e25858] duration-75"
          size={20}
        />
      </button>
    </article>
  )
}
