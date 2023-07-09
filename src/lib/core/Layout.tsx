import { Header } from './Header'
import { Component, JSX } from 'solid-js'

const Layout: Component<JSX.HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return (
    <div class="flex h-screen flex-col">
      <Header />
      <main class="flex-grow">{children}</main>
    </div>
  )
}

export default Layout
