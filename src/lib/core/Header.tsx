import { ChevronUp, Menu, X } from 'lucide-solid'
import Image from 'next/image'
import { LinkButton } from './Button'
import { Logo } from './Logo'
import { A } from 'solid-start'

const links: [name: string, href: string][] = [
  ['Features', '/#features'],
  ['Pricing', '/#pricing'],
  ['FAQs', '/#faqs'],
]

function useSession() {
  return {
    status: 'unauthenticated',
    data: {
      user: {
        name: '',
        image: ''
      }
    }
  }
}

export function Header() {
  const session = useSession()

  return (
    <header>
      <nav class="z-50·mx-auto·flex py-8 px-4 lg:px-8">
        <div class="items flex w-full items-center justify-between">
          <A href="/" aria-label="Home">
            <Logo class="h-10 w-auto hover:cursor-pointer" />
          </A>
          <div class="hidden gap-10 lg:flex">
            <NavLinks />
          </div>
          <div class="flex">
            {session.status === 'authenticated' && session.data.user ? (
              <>
                <LinkButton
                  href="/builder"
                  variant="none"
                  class="underline-effect text-secondary before:bg-primary"
                >
                  Builder
                </LinkButton>
                <span class="inline-flex flex-col items-center justify-center pr-4">
                  <span class="text-xs text-color-light">Logged in as:</span>
                  <span class="text-md text-color"> {session.data.user.name}</span>
                </span>
                <Image
                  class="inline-block w-10 rounded-full"
                  src={session.data.user.image ?? ''}
                  alt="User avatar"
                  height={40}
                  width={40}
                />
              </>
            ) : (
              <>
                <LinkButton
                  href="/login"
                  variant="none"
                  class="underline-effect text-secondary before:bg-primary"
                >
                  Login
                </LinkButton>
                {/* <MobileNav /> */}
                <LinkButton href="/login" class="hidden lg:block">
                  Sign up
                </LinkButton>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export function NavLinks() {
  return (
    <>
      {links.map(([label, href]) => (
        <A
          href={href}
          class="relative  -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:delay-[0ms]"
        >
          <span class="relative z-10">{label}</span>
        </A>
      ))}
    </>
  )
}

// const MobileNav: Component = () => (
//   <Popover class="lg:hidden">
//     {({ open, close }) => (
//       <>
//         <div class="flex justify-center gap-8">
//           <Popover.Button class="rounded-lg p-2" aria-label="Toggle site navigation">
//             {({ open }) =>
//               open ? <ChevronUp class="h-6 w-6" /> : <Menu class="h-6 w-6" />
//             }
//           </Popover.Button>
//         </div>
//         {open && (
//           <>
//             <Popover.Overlay class="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur" />
//             <Popover.Panel class="absolute inset-x-0 top-0 z-0 origin-top rounded-b-4xl px-6 pb-6 pt-16 shadow-2xl">
//               <Link href="/" aria-label="Home">
//                 <FullLogo class="mx-auto mb-12 h-10 w-auto hover:cursor-pointer" />
//               </Link>
//               <X
//                 size={30}
//                 onClick={() => close()}
//                 class="absolute right-6 top-6 stroke-color-light"
//               />
//               <div class="flex flex-col space-y-4">
//                 {links.map(([label, href]) => (
//                   <MobileNavLink key={label} href={href}>
//                     {label}
//                   </MobileNavLink>
//                 ))}
//               </div>
//               <div class="mt-4 flex flex-col md:gap-4">
//                 <LinkButton href="/login" variant="outline" class="mb-2 px-5 text-center md:px-10">
//                   Log in
//                 </LinkButton>
//                 <LinkButton href="/login" class="text-center">
//                   Sign up
//                 </LinkButton>
//               </div>
//             </Popover.Panel>
//           </>
//         )}
//       </>
//     )}
//   </Popover>
// )

// const MobileNavLink: Component<LinkProps & HtmlHTMLAttributes<HTMLButtonElement>> = ({
//   children,
//   href,
// }) => {
//   return (
//     <Popover.Button as={Link} href={href}>
//       <a class="underline-effect flex justify-center text-sm leading-7 tracking-tight text-primary-text before:bg-highlighter-hover">
//         {children}
//       </a>
//     </Popover.Button>
//   )
// }
