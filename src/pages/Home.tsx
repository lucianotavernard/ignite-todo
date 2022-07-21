import { PlusCircle } from 'phosphor-react'

import { Empty } from '../components/Empty'
import { Header } from '../components/header'
import { Task } from '../components/Task'

export function Home() {
  return (
    <div className="w-100  min-h-screen bg-[#1A1A1A]">
      <Header />

      <main className="flex flex-col justify-center items-center px-8">
        <form className="flex flex-col sm:flex-row items-center gap-2 w-full md:max-w-2xl -mt-7">
          <input
            name="task"
            className="ransition-all flex-1 w-full sm:w-auto py-3 px-4 border border-[#0D0D0D] rounded-lg bg-[#262626] focus:shadow-[0_0_0_2px_#8284FA] outline-0 duration-100"
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
                5
              </span>
            </strong>

            <strong className="flex text-[#8284FA]">
              Concluídas{' '}
              <span className="flex justify-center items-center px-2 ml-2 rounded-full bg-[#333333] text-[#D9D9D9]">
                2 de 5
              </span>
            </strong>
          </header>

          <section className="flex flex-col gap-3 mt-6">
            <Task
              title="Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer."
            />

            <Task
              title="Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer."
            />

            <Task
              title="Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer."
            />

            <Task
              title="Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer."
              isComplete
            />

            <Task
              title="Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer."
              isComplete
            />
          </section>

          <Empty />
        </section>
      </main>
    </div>
  )
}
