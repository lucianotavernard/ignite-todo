import emptyImg from '../assets/clipboard.png'

export function Empty() {
  return (
    <section className="flex flex-col justify-center items-center gap-8 mt-6 py-16 px-6 border-t border-[#333333] rounded-lg text-[#808080]">
      <img src={emptyImg} alt="empty task list" />

      <hgroup className="text-center">
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </hgroup>
    </section>
  )
}
