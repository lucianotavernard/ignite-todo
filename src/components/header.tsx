import logoImg from '../assets/favicon.png'

export function Header() {
  return (
    <header className="flex justify-center items-center h-48 bg-[#0D0D0D]">
      <img src={logoImg} className="h-12" alt="Ignite todo" />
    </header>
  )
}
