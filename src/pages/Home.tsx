import { FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'

import { Empty } from '../components/Empty'
import { Header } from '../components/header'
import { Task } from '../components/Task'

type TaskItem = {
  id: number
  title: string
  isComplete?: boolean
}

export function Home() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState<Array<TaskItem>>([])

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    const createTask = {
      title: newTask
    }

    setTasks((state) => [{ id: state.length + 1, ...createTask }, ...state])

    setNewTask('')
  }

  function handleTaskStatusChange(id: number) {
    setTasks((state) =>
      state.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    )
  }

  function handleDeleteTask(id: number) {
    setTasks((state) => state.filter((task) => task.id !== id))
  }

  const totalTasks = tasks.length
  const totalTasksCompleted = tasks.filter((task) => task.isComplete).length

  return (
    <div className="w-100  min-h-screen bg-[#1A1A1A]">
      <Header />

      <main className="flex flex-col justify-center items-center px-8">
        <form
          onSubmit={handleCreateNewTask}
          className="flex flex-col sm:flex-row items-center gap-2 w-full md:max-w-2xl -mt-7"
        >
          <input
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            className="transition-all flex-1 w-full sm:w-auto py-3 px-4 border border-transparent rounded-lg bg-[#262626] text-[#D9D9D9] focus:border-[#8284FA] placeholder:text-[#808080] outline-0 duration-100"
            placeholder="Adicione uma nova tarefa"
          />

          <button
            type="submit"
            className="transition-colors flex justify-center items-center w-full sm:w-auto py-3 px-4 rounded-lg bg-[#1E6F9F] hover:bg-[#4EA8DE] text-white"
          >
            Criar <PlusCircle className="ml-2" size={20} />
          </button>
        </form>

        <section className="w-full md:max-w-2xl mt-16">
          <header className="flex flex-col sm:flex-row flex-1 justify-between gap-2 sm:gap-0">
            <strong className="flex text-[#4EA8DE]">
              Tarefas criadas{' '}
              <span className="flex justify-center items-center w-6 h-6 ml-2 rounded-full bg-[#333333] text-[#D9D9D9]">
                {totalTasks}
              </span>
            </strong>

            <strong className="flex text-[#8284FA]">
              Concluídas{' '}
              <span className="flex justify-center items-center px-2 ml-2 rounded-full bg-[#333333] text-[#D9D9D9]">
                {totalTasksCompleted} de {totalTasks}
              </span>
            </strong>
          </header>

          <section className="flex flex-col gap-3 mt-6">
            {tasks.map((task) => (
              <Task
                id={task.id}
                key={task.id}
                title={task.title}
                isComplete={task.isComplete}
                onFinish={handleTaskStatusChange}
                onRemove={handleDeleteTask}
              />
            ))}
          </section>

          {tasks.length === 0 && <Empty />}
        </section>
      </main>
    </div>
  )
}
