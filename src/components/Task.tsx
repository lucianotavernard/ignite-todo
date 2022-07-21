import { Check, Trash } from 'phosphor-react'

type TaskProps = {
  id: number
  title: string
  isComplete?: boolean
  onFinish: (id: number) => void
  onRemove: (id: number) => void
}

export function Task({ id, title, isComplete, onFinish, onRemove }: TaskProps) {
  function markTaskAsCompleted() {
    onFinish(id)
  }

  function removeTask() {
    onRemove(id)
  }

  return (
    <article className="flex justify-between items-start p-4 border border-[#333333] rounded-lg bg-[#262626]">
      <button
        type="button"
        onClick={markTaskAsCompleted}
        className={
          isComplete
            ? 'transition-all flex justify-center items-center w-5 h-5 border-0 rounded-full bg-[#5E60CE] text-[#F2F2F2] cursor-pointer hover:opacity-95'
            : 'transition-all flex justify-center items-center w-5 h-5 border-2 border-[#4ea8de] rounded-full hover:bg-[#1E6F9F] hover:opacity-20 cursor-pointer'
        }
      >
        {isComplete && <Check size={12} />}
      </button>

      <p
        className={
          isComplete
            ? 'transition-all w-[90%] ml-3 text-sm text-[#808080] line-through'
            : 'transition-all w-[90%] ml-3 text-sm text-[#F2F2F2]'
        }
      >
        {title}
      </p>

      <button
        type="button"
        onClick={removeTask}
        className="transition-all flex justify-center items-center w-8 h-8 rounded bg-transparent hover:bg-[#333333] text-white hover:opacity-95"
      >
        <Trash
          className="transition-all text-[#808080] hover:text-[#e25858] "
          size={20}
        />
      </button>
    </article>
  )
}
