import { PlusCircle, Trash, Check } from 'phosphor-react'

import logoImg from '../assets/favicon.png'
import emptyImg from '../assets/clipboard.png'

export function Home() {
  return (
    <div className="w-100  min-h-screen bg-[#1A1A1A]">
      <header className="flex justify-center items-center h-48 bg-[#0D0D0D]">
        <img src={logoImg} className="h-12" alt="Ignite todo" />
      </header>

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
                0
              </span>
            </strong>

            <strong className="flex text-[#8284FA]">
              Concluídas{' '}
              <span className="flex justify-center items-center px-2 ml-2 rounded-full bg-[#333333] text-[#D9D9D9]">
                0 de 0
              </span>
            </strong>
          </header>

          <section className="flex flex-col gap-3 mt-6">
            <article className="flex justify-between items-start p-4 border border-[#333333] rounded-lg bg-[#262626]">
              <button
                type="button"
                className="w-5 h-5 border-2 border-[#4ea8de] rounded-full cursor-pointer hover:opacity-95"
              ></button>

              <p className="w-[90%] ml-3 text-sm text-[#F2F2F2]">
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer.
              </p>

              <button type="button" className="hover:opacity-95 text-white">
                <Trash
                  className="text-[#808080] hover:text-[#e25858] duration-75"
                  size={20}
                />
              </button>
            </article>

            <article className="flex justify-between items-start p-4 border border-[#333333] rounded-lg bg-[#262626]">
              <button
                type="button"
                className="flex justify-center items-center w-5 h-5 border-0 rounded-full bg-[#5E60CE] text-[#F2F2F2] cursor-pointer hover:opacity-95"
              >
                <Check size={12} />
              </button>

              <p className="w-[90%] ml-3 text-sm text-[#808080] line-through">
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer.
              </p>

              <button type="button" className="hover:opacity-95 text-white">
                <Trash
                  className="text-[#808080] hover:text-[#e25858] duration-75"
                  size={20}
                />
              </button>
            </article>
          </section>

          <section className="flex flex-col justify-center items-center gap-8 mt-6 py-16 px-6 border-t border-[#333333] rounded-lg text-[#808080]">
            <img src={emptyImg} alt="empty task list" />

            <hgroup className="text-center">
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </hgroup>
          </section>
        </section>
      </main>
    </div>
  )
}
