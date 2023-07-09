import { Component } from 'solid-js'
import Container from '../core/Container'
import { Logo } from '../core/Logo'

export const Footer: Component = () => (
  <footer class="py-16">
    <Container class="flex flex-col items-center justify-between text-center md:flex-row">
      <Logo class="h-12 w-auto" />
      <p class="mt-6 text-sm md:mt-0">
        Copyright &copy; {new Date().getFullYear()} CodeOver. All rights reserved.
      </p>
    </Container>
  </footer>
)
