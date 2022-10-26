import { Fragment } from 'react'
import { Disclosure, Menu, Transition, Popover } from '@headlessui/react'
import { useUrl, Link, useCart, Image } from "@shopify/hydrogen";
import { Drawer, useDrawer } from "../Drawer.client";
import { CartDetails } from "../CartDetails.client";
import { RiCloseFill, RiMenu4Fill } from "react-icons/ri";
import { BsFillCartFill } from "react-icons/bs";
import HorizontalSeperator from "./HorizontalSeperator.client";
// import { Link } from 'react-router-dom';
import { makeKey } from '../../utilities/helpers'


const navItem = [
  {
    'label':'Shop',
    'path':'/shop',
  },
  {
    'label':'Places',
    'path':'/places',
  },
  {
    'label':'Recipes',
    'path':'/Recipes',
  },
  {
    'label':'About',
    'path':'/About',
  },
  {
    'label':'Contact',
    'path':'/Contact',
  },
]

export default function Nav({ shop }) {
  const { pathname } = useUrl();
  const { isOpen, openDrawer, closeDrawer } = useDrawer();

  const isHome = pathname === "/"

  return (
    <>
      <Drawer open={isOpen} onClose={closeDrawer}>
        <div className="grid">
          <Drawer.Title>
            <h2 className="sr-only">Cart Drawer</h2>
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
            // className={`flex items-center justify-between w-full gap-4 h-16 p-6 antialiased leading-none transition md:p-8 lg:p-12 ${
            //   isHome ? "bg-dark text-white" : "bg-paper text-dark"
            // }`}
          >

              <Link className="pl-8 mx-auto font-bold md:contents md:pl-0 md:mx-0" to="/">
                <span className="sr-only">{shop.name}</span>
                {/* TODO: change fill of svg with the id below in headers.css to update on pages that don't have a header */}
                <Image src='/logos/wordmark-reversed.svg' width={170} height={36} alt="Bittercube" id="navLogo"/>
              </Link>



            <div className="hidden md:gap-4 lg:gap-12 md:flex">
              <a href="#mainContent" className="border-2 rounded focus:h-10 focus:w-40 border-gold/0 focus:border-gold/100">
                <span className="sr-only">
                  Skip to content
                </span>
              </a>
              {navItem && navItem.map((link) => (
              <Link className="nav-link" to={link.path} key={makeKey(link.label)}>
                {link.label}
              </Link>
              ))}
              <button
              onClick={openDrawer}
              className="relative flex items-center justify-center w-8 h-8"
              >
                {/* <IconBag /> */}
                <BsFillCartFill className="text-white" />
                <CartBadge dark={isHome} />
              </button>
            </div>

            <div className="flex justify-end w-8 h-8 -mr-2 md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 transition duration-500 rounded-md text-white/50 hover:bg-gray-700 hover:text-gold focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <RiCloseFill/>
                  ) : (
                    <RiMenu4Fill />
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
            <Disclosure.Panel className="relative z-50 flex flex-col items-center justify-center w-11/12 gap-12 py-16 mx-auto rounded-sm shadow-lg md:hidden bg-paper-action">


                {navItem && navItem.map((link) => (
                <Disclosure.Button as="div" key={makeKey(link.label)}>
                  <Link className="tracking-widest uppercase transition duration-300 nav-link text-dark hover:text-gold" to={link.path}>
                    {link.label}
                  </Link>
                </Disclosure.Button>



                ))}
                <div className="w-8/12">
                  <HorizontalSeperator />
                </div>
                <button
                onClick={openDrawer}
                className="relative flex items-center justify-center gap-2"
                >
                  {/* <IconBag /> */}
                  <span className="uppercase transition duration-300 racking-widest nav-link text-dark hover:text-gold">Cart</span>
                  <BsFillCartFill className="text-white" />
                  <CartBadge dark={isHome} />
                </button>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>

    </>
  );
}

function IconBag() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="#fff"
      // TODO: change fill color  be dependant on header
      // fill="currentColor"
      className="w-5 h-5"
    >
      <title>Bag</title>
      <path
        fillRule="evenodd"
        d="M8.125 5a1.875 1.875 0 0 1 3.75 0v.375h-3.75V5Zm-1.25.375V5a3.125 3.125 0 1 1 6.25 0v.375h3.5V15A2.625 2.625 0 0 1 14 17.625H6A2.625 2.625 0 0 1 3.375 15V5.375h3.5ZM4.625 15V6.625h10.75V15c0 .76-.616 1.375-1.375 1.375H6c-.76 0-1.375-.616-1.375-1.375Z"
      />
    </svg>
  );
}

function CartBadge({ dark }) {
  const { totalQuantity } = useCart();

  if (totalQuantity < 1) {
    return null;
  }
  return (
    <div
      className={`${
        dark ? "text-black bg-white" : "text-white bg-black"
      } absolute bottom-1 right-1 text-[0.625rem] font-medium subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px`}
    >
      <span>{totalQuantity}</span>
    </div>
  );
}
