import PropTypes from 'prop-types'
import { Disclosure, Transition } from '@headlessui/react'
import { useUrl, Link, useCart, Image } from "@shopify/hydrogen"
import { RiCloseFill, RiMenu4Fill } from "react-icons/ri"
import { BsFillCartFill } from "react-icons/bs"

import { HorizontalSeperator, Drawer, useDrawer, CartDetails } from "@client"
import { makeKey } from '@utils'
// ----------------------------------------------------------------------
PrimaryMenu.propTypes = {
  dark: PropTypes.bool
}
const navItem = [
  {
    'label': 'Shop',
    'path': '/shop',
  },
  {
    'label': 'Places',
    'path': '/places',
  },
  {
    'label': 'Recipes',
    'path': '/recipes',
  },
  {
    'label': 'About',
    'path': '/about',
  },
  {
    'label': 'Contact',
    'path': '/contact',
  },
]

export default function PrimaryMenu({ dark }) {
  const { pathname } = useUrl()
  const { isOpen, openDrawer, closeDrawer } = useDrawer()
  return (
    <>
      <Drawer open={isOpen} onClose={closeDrawer} className="">
        <div  >
          <Drawer.Title>
            <span className="sr-only">Cart Drawer</span>
          </Drawer.Title>
          <CartDetails onClose={closeDrawer} />
        </div>
      </Drawer>
      <Disclosure as="nav" className="absolute top-0 left-0 z-50 w-full bg-gray-800">
        {({ open }) => (
          <>
            <header
              role="banner"
              className={`flex items-center justify-between w-full h-16 gap-4 p-6 antialiased leading-none transition md:p-8 lg:p-12 `}
            >
              <Link className="pl-8 mx-auto font-bold md:contents md:pl-0 md:mx-0" to="/">
                <span className="sr-only">Bittercube</span>
                {dark ?
                  (<Image src='/logos/wordmark-reversed.svg' width={170} height={36} alt="Bittercube" id="navLogo" />)
                  :
                  (<Image src='/logos/wordmark.svg' width={170} height={36} alt="Bittercube" id="navLogo" />)
                }
              </Link>
              <div className="hidden md:gap-4 lg:gap-12 md:flex">
                <a href="#mainContent" className="border-2 rounded focus:h-10 focus:w-40 border-gold/0 focus:border-gold/100">
                  <span className="sr-only">
                    Skip to content
                  </span>
                </a>
                {navItem && navItem.map((link) => (
                  <Link className={`nav-link ${pathname.includes(link.path) ? 'active' : ''}`} to={link.path} key={makeKey(link.label)}>
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={openDrawer}
                  className="relative flex items-center justify-center w-8 h-8"
                >
                  <BsFillCartFill className={dark ? ("text-white") : ("text-dark")} />
                  <CartBadge dark={dark} />
                </button>
              </div>

              <div className="flex justify-end w-8 h-8 -mr-2 md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 transition duration-500 rounded-md hover:bg-gray-700 hover:text-gold focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <RiCloseFill className={dark ? ("text-white") : ("text-dark")} />
                  ) : (
                    <RiMenu4Fill className={dark ? ("text-white") : ("text-dark")} />
                  )}
                </Disclosure.Button>
              </div>
            </header>
            <Transition
              enter="transition duration-500 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-300 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="relative z-50 flex flex-col items-center justify-center w-11/12 gap-8 py-8 mx-auto rounded-sm shadow-lg md:hidden bg-paper-action">


                {navItem && navItem.map((link) => (
                  <Disclosure.Button as={Link} key={makeKey(link.label)} className="tracking-widest uppercase transition duration-300 nav-link text-dark hover:text-gold" to={link.path}>
                    {link.label}
                  </Disclosure.Button>
                ))}
                <div className="w-8/12">
                  <HorizontalSeperator />
                </div>
                <button
                  onClick={openDrawer}
                  className="relative flex items-center justify-center gap-2"
                >
                  <span className="uppercase transition duration-300 racking-widest nav-link text-dark hover:text-gold">Cart</span>
                  <BsFillCartFill className='text-dark' />
                  <CartBadge dark={dark} />
                </button>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </>
  )
}

function CartBadge({ dark }) {
  const { totalQuantity } = useCart();

  if (totalQuantity < 1) {
    return null;
  }
  return (
    <div
      className={`${dark ? ("text-white bg-gold") : ("text-white bg-gold")
        } absolute bottom-1 right-1 text-[0.625rem] font-medium subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px`}
    >
      <span>{totalQuantity}</span>
    </div>
  )
}
