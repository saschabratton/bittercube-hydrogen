import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function LocalPickup(){
  let [isOpen, setIsOpen] = useState(false)

 function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return(
    <>
    <button
          type="button"
          onClick={openModal}
          className="btn btn-action"
        >
          Shop for local Pick-up
      </button>
       {/* <Transition
          show={isOpen}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          as={Fragment}
        > */}
        <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="w-11/12 py-8 mx-auto text-center md:w-3/4 bg-gold">
          <div className="flex flex-col w-full gap-2 p-8 border-white border-y-2">
            <span className="block text-2xl text-white font-decorative">Shop Local</span>
            <span className="font-medium tracking-tight h6 text-dark">The bittercube bazaar is a pick-up only shopping experience</span>
            <Dialog.Title className='text-white'>Pick-up in Milwaukee</Dialog.Title>
            <p className="max-w-md mx-auto text-sm text-ornament text-ornament-dark">
              An additional note about pick-up only shopping will go right here. Message will be clear so there is no confusion to users. The Bazaar shop will open in a new window, and will not replace the existing Bittercube site.
            </p>
            <a href="https://www.bittercubebazaar.com/" target='_blank' rel='nooppener' className="text-white border-white btn btn-action hover:text-dark">Shop Pick-up</a>
            <button className="tracking-widest text-white uppercase">Back to online shop</button>
          </div>
        </Dialog.Panel>
      </div>
        </Dialog>
      {/* </Transition> */}
    </>


  )
}