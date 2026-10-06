type HeaderProps = {
  title: string
}

function Header({ title }: HeaderProps) {
  return (
    <header className="text-center">
      <p className="text-sm font-semibold uppercase text-emerald-800 dark:text-emerald-300">
        Small-batch coffee
      </p>
      <h1 className="mt-1 text-2xl font-semibold text-foreground">{title}</h1>
    </header>
  )
}

export default Header